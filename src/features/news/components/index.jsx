import React, { useEffect, Fragment } from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import * as R from "ramda";
import { CircularProgress, Button } from '@material-ui/core';

import { actions } from '../services/actionsCreators.js';
import { firstPage } from '../services/contants.js';
import { getNewsState } from '../services/selectors.js';
import NewsBlock from './newsBlock.jsx';
import Paging from './paging.jsx';

const styles = {
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 300px)'
  }
};

const News = props => {
  const { mountPageRequested, reload, unmountPage, articles, pending, error, match: { params }, history, classes } = props;

  useEffect(() => {
    if (params.page && Number(params.page)) {
      mountPageRequested(Number(params.page));
    } else {
      history.push(`/news/${firstPage}`)
      mountPageRequested(firstPage);
    }

    return () => unmountPage();
  }, [params.page]);

  return (
    <Fragment>
      {pending ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
          <Fragment>
            {!error ? (
              <Fragment>
                {
                  articles.map((element, i) => {
                    const { title, urlToImage, content, url } = element;

                    return (
                      <NewsBlock
                        key={i}
                        title={title}
                        content={content}
                        url={url}
                        image={urlToImage}
                      />
                    )
                  })
                }
                < Paging />
              </Fragment>
            ) : (
                <Button
                  onClick={() => reload(params.page)}
                  variant="contained"
                >
                  Something went wrong, try again?
                </Button>
              )}
          </Fragment>
        )}
    </Fragment>
  );
};

export default R.compose(
  connect(
    state => {
      const { articles, totalResults, pending, error } = getNewsState(state);

      return {
        articles,
        totalResults,
        pending,
        error
      };
    },
    actions
  ),
  injectSheet(styles)
)(News);
