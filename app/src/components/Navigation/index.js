import React from 'react';
import {Route, Switch} from 'react-router';

import Users from '../../containers/Users';
import UserInfo from '../../containers/UserInfo';

const Navigation = () => {
  return (
      <Switch>
        <Route path="/" component={Users} exact/>
        <Route path="/:id" render={({match}) => {
          const {id} = match.params;
          return (<UserInfo
              itemId={id}
          />)
        }}/>
      </Switch>
  )
};
export default Navigation