import React, {Component} from 'react';
import './String.css';


class String extends Component
{
	render()
	{
		var mr = 30-(this.props.size*.5) - ((this.props.size-1)*.5);
		return(
			<div>
				<div className={'string'} style={
					{
						borderLeftWidth:(this.props.size+'px'),
						marginLeft:((this.props.size*-.5)+'px'),
						marginRight:mr
						}}></div>
			</div>
		);
	}
}

export default String;