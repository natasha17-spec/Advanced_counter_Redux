import React from 'react';
import './App.css';
import Settings from "./Settings/Settings";
import Count from "./Count/Count";
import {connect} from "react-redux";
import {
    countValueAC,
    incorrectAC, incorrectSetAC,
    maxValueAC,
    minValueAC,
    setToZeroAC,
    setValueAC
} from "./Redux/store";

class App extends React.Component {


    state = {
        error: false,
        set: false
    };

    count_value = () => {
        if (this.props.count_start < this.props.max) {
            this.props.countValue();
        }
    };

    incorrect = () => {
        if (this.props.min < 0 || this.props.min === "" || this.props.min >= this.state.max) {
            this.props.incorrect();
        }
    };

    MaxValue = (e) => {
        let value = e.target.value;
        this.props.maxValue(value);
        this.setState({
            set: true,
            error: true
        }, () => {
            this.incorrect()
        })
    };


    MinValue = (e) => {
        let value = e.target.value;
        this.props.minValue(value);
        this.props.incorrectSet();
        this.setState({
            set: true,
            error: true
        }, () => {
            this.incorrect()
        })

    };
    setValue = () => {
        if (this.props.max > this.props.min && this.props.min >= 0) {
            this.props.setValue(this.props.min)
            this.setState({
                    error: false,
                    set: false
                }
            )

        }
    };
    setToZero = () => {
        this.props.setToZero(this.props.min);
    };

    render = () => {
        console.log(this.props.count_start, this.state.error, this.props.max, this.state.set)
        return (
            <div className='middle'>
                <Count count_start={this.props.count_start}
                       setToZero={this.setToZero}
                       count_value={this.count_value}
                       error={this.state.error}
                       max={this.props.max}
                       MinValue={this.MinValue}
                       MaxValue={this.MaxValue}
                />

                <Settings
                    min={this.props.min}
                    max={this.props.max}
                    MinValue={this.MinValue}
                    MaxValue={this.MaxValue}
                    set={!this.state.set}
                    setValue={this.setValue}
                    incorrect={this.props.incorrect}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count_start: state.count_start,
        min: state.min,
        max: state.max,
        error: state.error,
        set: state.set
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        incorrect() {
            const action = incorrectAC();
            dispatch(action);
        },
        incorrectSet() {
            const action = incorrectSetAC();
            dispatch(action);
        },
        maxValue(max) {
            const action = maxValueAC(max);
            dispatch(action);
        },
        minValue: (min) => {
            const action = minValueAC(min);
            dispatch(action)
        },
        countValue: () => {

            const action = countValueAC();
            dispatch(action)
        },
        setToZero: (min) => {
            const action = setToZeroAC(min);
            dispatch(action)
        },
        setValue: (min) => {
            const action = setValueAC(min);
            dispatch(action)
        }
    }
};


const ConnectedApp = connect(mapStateToProps,
    mapDispatchToProps)(App);
export default ConnectedApp;

