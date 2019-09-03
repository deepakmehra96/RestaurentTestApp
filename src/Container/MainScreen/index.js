import React from 'react';
import './index.css'
import { connect } from 'react-redux'
import StepFirst from '../StepsScreens/StepFirst';
import StepSecond from '../StepsScreens/StepSecond';
import StepThird from '../StepsScreens/StepThrid';
class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 1
    }
  }

  handleScreens() {
    let { stepIndex } = this.props.reducer
    switch (stepIndex) {
      case 1:
        return <StepFirst />
      case 2:
        return <StepSecond />
      case 3:
        return <StepThird />
      case 4:
        return <StepThird />

    }
  }
  stepsButtons() {
    let { stepIndex } = this.props.reducer
    return (
      <div className="stepContainer">
        <div className={stepIndex == 1 ? 'stepButtonColord' :"stepButtons"}>Step 1</div>
        <div className={stepIndex == 2 ? 'stepButtonColord' :"stepButtons"}>Step 2</div>
        <div className={stepIndex == 3 ? 'stepButtonColord' :"stepButtons"}>Step 3</div>
        <div className={stepIndex == 4 ? 'stepButtonColord' :"stepButtons"}>Review</div>
      </div>
    )
  }
  render() {
    return (
      <div className="mainContainer">
        <div className="contentOut">
          <div className="contents">
              {this.stepsButtons()}
            <div className="stepContentsOut">
              {this.handleScreens()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Main)

