import React, {Component} from 'react';
import InputMask from 'react-input-mask';

import CommentList from '../CommentList'
import './styles.css';

class UserInfo extends Component {
  state = {
    title: '',
    body: '',
    phone: ''
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
    const { title, body, phone} = this.state;
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
    } else return null;
  };

  render() {
    const {user} = this.props;
    const {name, surname, address, vacancy} = user;
    const {title, body, phone} = this.state;
    return (
        <div className="user-info">
          <span>{`Имя: ${name}`}</span>
          <span>{`Фамилия: ${surname}`}</span>
          <span>{`Вакансия: ${vacancy}`}</span>
          <span>{`Адрес: ${address}`}</span>
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
            <button className="btn-add_post" type="submit">Отправить</button>
          </form>
          {this.renderComments()}
        </div>
    )
  }
}

export default UserInfo