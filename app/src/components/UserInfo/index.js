import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import {connect} from 'react-redux';

import CommentList from '../CommentList';
import NewComments from '../NewComments';
import {addComment} from "../../actions/userAction";
import './styles.css';

class UserInfo extends Component {
  state = {
    title: '',
    body: '',
    phone: '',
  };

  componentDidMount() {
    const {itemId, getUser} = this.props;
    getUser(itemId);
  };

  handleInputChange = type => e => {
    switch (type) {
      case 'title':
        return this.setState({title: e.target.value});
      case 'body':
        return this.setState({body: e.target.value});
      case 'phone':
        return this.setState({phone: e.target.value});
      default:
        return null;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {title, body, phone} = this.state;
    const {addCommentConnect} = this.props;
    addCommentConnect({title, body, phone});
    this.setState({
      title: '',
      body: '',
      phone: ''
    });
  };

  renderComments = () => {
    const {user} = this.props;
    const {comments} = user;
    if (comments !== undefined) {
      let getLastFiveComments = comments.slice(Math.max(comments.length - 5, 1));
      return (<CommentList comments={getLastFiveComments}/>)
    } else return (<p>Комментарии отсутствуют</p>);
  };

  render() {
    const {user} = this.props;
    const {name, surname, address, vacancy} = user;
    const {title, body, phone} = this.state;
    const {comment} = this.props;
    const enabledBtn = title.length >= 5 && title.length <= 80 && body.length <= 128;
    return (
        <div className="user-info">
          <p>{`Имя: ${name}`}</p>
          <p>{`Фамилия: ${surname}`}</p>
          <p>{`Вакансия: ${vacancy}`}</p>
          <p>{`Адрес: ${address}`}</p>
          <form className="form-post" onSubmit={this.handleSubmit}>
            <input type="text"
                   value={title}
                   onChange={this.handleInputChange('title')}
                   required/>
            <textarea
                cols="21"
                rows="10"
                placeholder="Введите сообщение..."
                name="body"
                onChange={this.handleInputChange('body')}
                value={body}
                required
            />
            <InputMask mask="+7 (999) 999-99-99"
                       value={phone}
                       onChange={this.handleInputChange('phone')}
                       required/>
            <button className="btn-add_post" type="submit" disabled={!enabledBtn}>Отправить</button>
          </form>
          <div className="comment-block">
            <span>Новые комментраии</span>
            <NewComments newComment={comment}/>
            <span>Последние комментарии</span>
            {this.renderComments()}
          </div>
        </div>
    )
  }
}

export default connect(state => ({
  comment: state.comment
}), {addCommentConnect: addComment})(UserInfo)