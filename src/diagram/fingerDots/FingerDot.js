import React, {Component} from 'react';
import './FingerDot.css';


class FingerMarker extends Component
{
	render()
	{
		return(
			<div>
				<div className={'fingerDot'} style={{top:this.props.top, left:this.props.left}}></div>
			</div>
		);
	}
}

export default FingerMarker;