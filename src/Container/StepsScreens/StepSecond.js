import React from 'react';
import { connect } from 'react-redux'
import DropdownComp from '../../Component/DropDown';
import './index.css'
import Button from '../../Component/ButtonMain';
import { stepIncrement, stepDecrement } from '../../Redux/actions';

class StepSecond extends React.Component {

    handleStepsNext() {
        let { stepIndex } = this.props.reducer
        if (stepIndex <= 3) {
            this.props.dispatch(stepIncrement())
        }
      }
      handleStepsPrev() {
        let { stepIndex } = this.props.reducer
        if (stepIndex > 1) {
            this.props.dispatch(stepDecrement())
        }
      }

    render() {
        let { stepIndex } = this.props.reducer
        let data = [{ title: 'BreakFast', id: 1 }, { title: 'Lunch', id: 2 }, { title: 'Dinner', id: 3 }]
        return (
            <div className="innerContainer">
                <div>
                    <div className="dropDownOut">
                        <h5>Please Select a Restaurent</h5>
                        <DropdownComp items={data} />
                    </div>
                </div>
                <div className="buttonOut">
                    <div className="buttonPrev">
                        {stepIndex == 1 ? '' : <Button text={'PREVIOUS'} onClick={() => this.handleStepsPrev()} />}
                    </div>
                    <div className="buttonNext">
                        <Button text={stepIndex == 4 ? 'SUBMIT' : 'NEXT'} onClick={() => this.handleStepsNext()} />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state)(StepSecond)