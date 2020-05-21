import React from "react";
import injectSheet from "react-jss";
import { Switch, Route, Router } from 'react-router-dom';
import history from 'features/_main/app/history.js';

import Autorization from 'features/authorization/components/index.jsx';
import News from 'features/news/components/index.jsx';
import UserMenu from 'features/userMenu/components/index.jsx';
import NotFound from 'features/notFound/components/index.jsx';
import styles from './styles.js';

const Page = props => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <header className={classes.headerWrapper}>
        <h1 className={classes.logo}>TECH NEWS</h1>
        <UserMenu />
      </header>
      <div className={classes.pageWrapper}>
        <main>
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={Autorization} />
              <Route path='/news/:page' component={News} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </main>
      </div>
      <footer className={classes.footer}>
        <h1 className={classes.logo}>TECH NEWS</h1>
        <p>Some info</p>
      </footer>
    </div>
  );
};

export default injectSheet(styles)(Page);
