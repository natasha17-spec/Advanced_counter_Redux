import React from 'react';
import '../Count_2.css'

class Settings extends React.Component {
    render = (props) => {
        let btnColors = this.props.min < 0 || this.props.min === "" || this.props.min >= this.props.max || this.props.count_start === this.props.max  ? 'disabled' : '' ;
        let btnColor= this.props.set  ?'disabled':'btn_color';
        return (
            <div className='counter_box2'>
                <div className='counters2'>
                    <div className='center2'>
                        <div className='count2'>
                            <span className='value_style'>maxValue</span>
                            <input className={btnColors} type='number' value={this.props.max}
                                   onChange={this.props.MaxValue}/>
                        </div>
                        <div className='count2'>
                            <span className='value_style'>minValue</span>
                            <input className={btnColors} type='number' value={this.props.min}
                                   onChange={this.props.MinValue}/>
                        </div>
                        <div className='btn'>
                            <div className='btn_border'>
                                <button
                                    disabled={this.props.set}
                                    onClick={this.props.setValue}
                                    className={`${btnColor} ${btnColors}`}>Set
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Settings;