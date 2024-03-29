import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { bindActionCreators } from 'redux';

import CommentList from '../../components/CommentList/index';
import Carousel from '../../components/Carousel';
import User from '../../components/User';
import { addComment, clearCommentFromStore } from '../../actions/commentAction';
import { addUser, changeActiveUser, getUser } from '../../actions/userAction';

import './styles.css';

class UserInfo extends Component {
  state = {
    title: '',
    body: '',
    phone: '',
  };

  componentDidMount() {
    const { itemId, getUserConnect } = this.props;
    getUserConnect(itemId);
  }

  handleInputChange = type => (e) => {
    switch (type) {
      case 'title':
        return this.setState({ title: e.target.value });
      case 'body':
        return this.setState({ body: e.target.value });
      case 'phone':
        return this.setState({ phone: e.target.value });
      default:
        return null;
    }
  };

  activeUserChanged = (id) => {
    const { changeActiveUserConnect } = this.props;
    changeActiveUserConnect(id);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body, phone } = this.state;
    const { addCommentConnect } = this.props;
    addCommentConnect({ title, body, phone });
    this.setState({
      title: '',
      body: '',
      phone: '',
    });
  };

  renderComments = () => {
    const { userConnect, commentConnect } = this.props;
    const { comments } = userConnect;
    if (comments !== undefined) {
      const newCommentsArray = comments.concat(commentConnect);
      const getLastFiveComments = newCommentsArray.slice(Math.max(newCommentsArray.length - 5, 1));
      return (
        <CommentList comments={getLastFiveComments} />
      );
    }
    return (<p>Комментарии отсутствуют</p>);
  };

  render() {
    const {
      userConnect, usersConnect, getUserConnect, addUserConnect, clearStoreConnect,
    } = this.props;
    const {
      name, surname, address, vacancy, avatar,
    } = userConnect;
    const { title, body, phone } = this.state;
    const enabledBtn = title.length >= 5 && title.length <= 80 && body.length <= 128;
    return (
      <>
        <Route
          path="/:id"
          render={() => (
            <Carousel
              users={usersConnect}
              activeUserChanged={this.activeUserChanged}
              getUser={getUserConnect}
              clearStore={clearStoreConnect}
              addUser={addUserConnect}
            />
          )}
        />
        <div className="user-info">
          <div className="user-block-info">
            <User
              name={name}
              surname={surname}
              vacancy={vacancy}
              avatar={avatar}
              address={address}
            />
          </div>
          <h3>Написать комментарий</h3>
          <form className="form-post" onSubmit={this.handleSubmit}>
            <div className="block-inputs">
              <input
                type="text"
                className="input-title"
                placeholder="Введите заголовок"
                value={title}
                onChange={this.handleInputChange('title')}
                required
              />
              <textarea
                cols="21"
                rows="10"
                placeholder="Введите сообщение..."
                name="body"
                className="input-body"
                onChange={this.handleInputChange('body')}
                value={body}
                required
              />
              <InputMask
                className="input-phone"
                placeholder="Введите телефон"
                mask="+7 (999) 999-99-99"
                value={phone}
                onChange={this.handleInputChange('phone')}
                required
              />
            </div>
            <button className="btn-add_post" type="submit" disabled={!enabledBtn}>Отправить</button>
          </form>
          <div className="comment-block">
            <h3 className="label-comments">Комментарии:</h3>
            {this.renderComments()}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  commentConnect: state.comment,
  usersConnect: state.users.userList,
  userConnect: state.users.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addCommentConnect: addComment,
  changeActiveUserConnect: changeActiveUser,
  clearStoreConnect: clearCommentFromStore,
  addUserConnect: addUser,
  getUserConnect: getUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

UserInfo.propTypes = {
  commentConnect: PropTypes.arrayOf(PropTypes.object).isRequired,
  usersConnect: PropTypes.arrayOf(PropTypes.object).isRequired,
  userConnect: PropTypes.objectOf(PropTypes.any).isRequired,
  addCommentConnect: PropTypes.func.isRequired,
  changeActiveUserConnect: PropTypes.func.isRequired,
  clearStoreConnect: PropTypes.func.isRequired,
  addUserConnect: PropTypes.func.isRequired,
  getUserConnect: PropTypes.func.isRequired,
  itemId: PropTypes.string.isRequired,
};
