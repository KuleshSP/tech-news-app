import React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import * as R from "ramda";
import { withRouter } from 'react-router-dom';

import history from 'features/_main/app/history.js';
import { actions } from '../services/actionsCreators.js';
import { getNewsState } from '../services/selectors.js';
import Pagination from '@material-ui/lab/Pagination';

const styles = {
  pager: {
    display: 'flex',
    justifyContent: 'center',
    margin: '30px 0'
  }
};

const News = props => {
  const { totalPages, match, classes } = props;

  const handlePageChanged = (e, page) => {
    history.push(`/news/${page}`);
  };

  const currentPage = match ? Number(match.params.page) : 1;

  return (
    <Pagination
      className={classes.pager}
      page={currentPage}
      count={totalPages}
      onChange={handlePageChanged}
      size='large'
    />
  );
};

export default R.compose(
  withRouter,
  connect(
    state => {
      const { totalPages } = getNewsState(state);

      return {
        totalPages
      };
    },
    actions
  ),
  injectSheet(styles)
)(News);
