import React from 'react';
import { Route, Switch } from 'react-router';

import UserInfo from '../../containers/UserInfo';
import Users from '../../containers/Users';

const Navigation = () => (
  <Switch>
    <Route path="/" component={Users} exact />
    <Route
      path="/:id"
      render={({ match }) => {
        const { id } = match.params;
        return (
          <UserInfo
            itemId={id}
          />
        );
      }}
    />
  </Switch>
);
export default Navigation;
