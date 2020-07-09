import React, { useEffect } from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { compose } from "ramda";
import { Form, Field, FormSpy } from 'react-final-form';
import { Button, Input, CircularProgress } from '@material-ui/core';

import { actions } from '../services/actionsCreators.js';
import { getAuthorizationState } from '../services/selectors.js';
import styles from './styles.js';

const Authorization = props => {
  const { authorizationRequested, setCredentials, pending, reset, classes } = props;

  const required = value => (value ? undefined : 'Required');

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className={classes.wrapper}>
      {pending && (
        <div className={classes.loadingOverlay}>
          <CircularProgress />
        </div>
      )}
      <div className={classes.greetingsWrapper}>
        <h1>Welcome</h1>
      </div>
      <Form
        onSubmit={(values) => authorizationRequested(values)}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <FormSpy
              onChange={form => {
                setCredentials(form.values);
              }}
            />
            <div className={classes.credentialsWrapper}>
              <Field
                name="userName"
                validate={required}
              >
                {({ input }) => (
                  <div>
                    <Input {...input} type="text" placeholder="User name" required={true} autoFocus={true} />
                  </div>
                )}
              </Field>
              <Field
                name="password"
                validate={required}
              >
                {({ input }) => (
                  <div>
                    <Input {...input} type="password" placeholder="Password" label="Password" required={true} />
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Button type="submit" disabled={submitting} variant="contained">
                Log in
              </Button>
              <Button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default compose(
  connect(
    state => {
      const { pending } = getAuthorizationState(state);

      return {
        pending
      };
    },
    actions
  ),
  injectSheet(styles)
)(Authorization);
