import React, {Component} from 'react';
import './FingerNumber.css';


class FingerNumber extends Component
{
	render()
	{ 
		return(
			<div>
				<div className={'fingerNumber'} style={{left:this.props.left}}>{this.props.text}</div>
			</div>
		);
	}
}

export default FingerNumber;