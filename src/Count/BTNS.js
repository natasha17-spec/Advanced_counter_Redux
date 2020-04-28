import React from 'react';
import '../App.css';


class BTNS extends React.Component {
    render = () => {
        let btnColors= this.props.set  ?'disabled':'btn_color';
        let btnColor = this.props.min < 0 || this.props.min === "" || this.props.min >= this.props.max || this.props.count_start === this.props.max || typeof(this.props.count_start) === 'string' ? 'disabled' : '';
        return (
            <div className='btns'>
                <div className='btn_border'>
                    <button className={`${btnColor} ${btnColors}`}
                            onClick={this.props.count_value}
                            disabled={this.props.errorForInc}>
                        Inc
                    </button>
                </div>
                <div className='btn_border'>
                    <button
                        onClick={this.props.setToZero}
                        disabled={this.props.errorForReset}
                        className={this.props.errorForReset ? 'disabled' : 'btn_color'}>
                        Reset
                    </button>
                </div>
            </div>
        )
    }
}
export default BTNS;

