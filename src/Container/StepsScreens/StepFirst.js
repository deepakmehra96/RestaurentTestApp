import React from 'react';
import { connect } from 'react-redux'
import DropdownComp from '../../Component/DropDown';
import './index.css'
import Button from '../../Component/ButtonMain';
import { stepIncrement, stepDecrement } from '../../Redux/actions';

class StepFirst extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedMeal: '',
            numberOfPerson: '',
            errorMsg: ""
        }
    }
    handelChange(e) {
        this.setState({ numberOfPerson: e.target.value })
    }

    handleStepsNext() {
        let { numberOfPerson, selectedMeal } = this.state
        let { stepIndex } = this.props.reducer
        if (stepIndex <= 3) {

            if (selectedMeal != '' && numberOfPerson != '') {
                if (numberOfPerson > 10) {
                    this.setState({ errorMsg: 'Number of Person Can`t be greater the 10' })
                    return
                }
                let data = {
                    selectedMeal: selectedMeal.id,
                    numberOfPerson: numberOfPerson
                }
                localStorage.setItem('step1', JSON.stringify(data));
                this.props.dispatch(stepIncrement())
            } else {
                this.setState({ errorMsg: 'Please Select Number Of Person and Restaurent First' })
            }
        }
    }
    handleStepsPrev() {
        let { stepIndex } = this.props.reducer
        if (stepIndex > 1) {
            this.props.dispatch(stepDecrement())
        }
    }

    render() {
        let data = [{ title: 'BreakFast', id: 1 }, { title: 'Lunch', id: 2 }, { title: 'Dinner', id: 3 }]
        let { stepIndex } = this.props.reducer
        let { numberOfPerson, errorMsg } = this.state
        return (
            <div className="innerContainer">
                <div>
                    <div className="dropDownOut">
                        <h5>Please Select a meal</h5>
                        <DropdownComp selectedValue={(val) => this.setState({ selectedMeal: val })} items={data} />
                    </div>
                    <div>
                        <h5>Please Enter Number of people</h5>
                        <input value={numberOfPerson} type="Number" onChange={this.handelChange.bind(this)} max={10} />

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
                {
                    errorMsg != '' ? <p className="errorMsg">{errorMsg}</p> : ''
                }
            </div>
        );
    }
}

export default connect(state => state)(StepFirst)
