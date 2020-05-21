import React from "react";
import injectSheet from "react-jss";
import { Link } from '@material-ui/core';

const styles = {
  newsBlockWrapper: {
    margin: '0 auto',
    marginBottom: '20px',
    backgroundColor: 'white'
  },
  textWrapper: {
    padding: '5px 15px'
  },
  title: {
    fontSize: '25px'
  }
};

const NewsBlock = props => {
  const { title, image, content, url, classes } = props;

  return (
    <div className={classes.newsBlockWrapper}>
      <div className={classes.textWrapper}>
        <h1 className={classes.title}>
          <Link href={url}>
            {title}
          </Link>
        </h1>
        {content && (
          <p className={classes.content}>{content}</p>
        )}
      </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default injectSheet(styles)(NewsBlock);
