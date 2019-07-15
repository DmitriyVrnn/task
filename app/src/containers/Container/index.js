import React, {Component} from 'react';

import {Route, Switch} from 'react-router';
import UserContainer from '../UserContainer';
import UserInfo from '../../components/UserInfo';

class Container extends Component {

  render() {
    return (
        <Switch>
          <Route path="/" component={UserContainer} exact/>
          <Route path="/:id" render={({match}) => {
            const {id} = match.params;
            return (<UserInfo
                itemId={id}
            />)
          }}/>
        </Switch>
    )
  }
}

export default Container;