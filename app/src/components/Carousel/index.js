import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

class Carousel extends Component {
  state = {
    count: 0
  };

  addState = (increment, lastSlide) => {
    const {count} = this.state;
    let currentSlide = count;
    if (currentSlide === lastSlide && increment === 1) {
      this.setState({
        count: 0
      });
    } else if (currentSlide === lastSlide && increment === -1) {
      this.setState({
        count: count + increment
      });
    } else if (currentSlide === 0 && increment === -1)
      this.setState({count: lastSlide});
    else if (currentSlide < lastSlide)
      this.setState({count: count + increment});
  };

  render() {
    const {users} = this.props;
    const {count} = this.state;
    return (
        <div className="Slider-wrapper">
          {users !== undefined ? <>
            <button
                className="Slider-prev"
                onClick={() => this.addState(-1, users.length - 1)}>
              &#10094;
            </button>
            <div className="Slide-wrapper">
              <h2 className="Slide-title">
                {users[count] !== undefined ? <Link to={`/${users[count].id}`}>{users[count].name}</Link> : null}
              </h2>
            </div>
            <button
                className="Slider-next"
                onClick={() => this.addState(1, users.length - 1)}>
              &#10095;
            </button>
          </> : null}
        </div>
    );
  }
}

export default Carousel