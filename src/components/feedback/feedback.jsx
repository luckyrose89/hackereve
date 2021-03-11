import React from "react";

import "./feedback.styles.scss";

// import images
import heart from "../../assets/images/heart.png";
import light from "../../assets/images/light.png";
import boat from "../../assets/images/boat.png";
import money from "../../assets/images/money.png";

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOne: false,
      activeTwo: false,
      activeThree: false,
      activeFour: false,
    };
  }
  render() {
    let feedback = this.props.feedback;
    return (
      <div className="story-feedback">
        <div className="feedback-column">
          <label>{feedback}</label>
          <div className="emoticons">
            <div
              className={`emo-img ${this.state.activeOne ? "is-active" : ""}`}
              onClick={() => {
                if (this.state.activeOne) {
                  this.setState({
                    activeOne: false,
                    feedback: this.props.setFeedback(this.props.feedback - 1),
                  });
                } else {
                  this.setState({
                    activeOne: true,
                    feedback: this.props.setFeedback(this.props.feedback + 1),
                  });
                }
              }}
            >
              <img src={heart} alt="heart emoji" />
            </div>
            <div
              className={`emo-img ${this.state.activeTwo ? "is-active" : ""}`}
              onClick={() => {
                if (this.state.activeTwo) {
                  this.setState({
                    activeTwo: false,
                    feedback: this.props.setFeedback(this.props.feedback - 1),
                  });
                } else {
                  this.setState({
                    activeTwo: true,
                    feedback: this.props.setFeedback(this.props.feedback + 1),
                  });
                }
              }}
            >
              <img src={light} alt="light bulb emoji" />
            </div>
            <div
              className={`emo-img ${this.state.activeThree ? "is-active" : ""}`}
              onClick={() => {
                if (this.state.activeThree) {
                  this.setState({
                    activeThree: false,
                    feedback: this.props.setFeedback(this.props.feedback - 1),
                  });
                } else {
                  this.setState({
                    activeThree: true,
                    feedback: this.props.setFeedback(this.props.feedback + 1),
                  });
                }
              }}
            >
              <img src={boat} alt="boat emoji" />
            </div>
            <div
              className={`emo-img ${this.state.activeFour ? "is-active" : ""}`}
              onClick={() => {
                if (this.state.activeFour) {
                  this.setState({
                    activeFour: false,
                    feedback: this.props.setFeedback(this.props.feedback - 1),
                  });
                } else {
                  this.setState({
                    activeFour: true,
                    feedback: this.props.setFeedback(this.props.feedback + 1),
                  });
                }
              }}
            >
              <img src={money} alt="money emoji" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
