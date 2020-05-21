import React, { Fragment } from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { compose } from "ramda";
import { actions } from 'features/authorization/services/actionsCreators.js';
import { getAuthorizationState } from 'features/authorization/services/selectors.js';
import Button from '@material-ui/core/Button';

const styles = {
  userMenuWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  greeting: {
    marginRight: '20px',
    fontWeight: 'bold'
  }
};

const UserMenu = props => {
  const { userName, isAuthorized, logOut, classes } = props;

  return (
    <Fragment>
      {(isAuthorized && userName) && (
        <div className={classes.userMenuWrapper}>
          <div className={classes.greeting}>
            {`Hi, ${userName}!`}
          </div>
          <Button
            onClick={logOut}
            variant="contained"
          >
            Log out
          </Button>
        </div>
      )}
    </Fragment>
  );
};

export default compose(
  connect(
    state => {
      const { userName, isAuthorized } = getAuthorizationState(state);

      return {
        userName,
        isAuthorized
      };
    },
    actions
  ),
  injectSheet(styles)
)(UserMenu);
