import React from 'react';
import '../App.css';

class Value extends React.Component {

    render = () => {
        let changeColor = this.props.count_start===this.props.max ? 'error': '';
        return (
            <div className='values'>
                <span className={changeColor}>{this.props.count_start}</span>
            </div>
        )
    }
}
export default Value;

