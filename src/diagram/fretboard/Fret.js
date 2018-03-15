import React, {Component} from 'react';
import './Fret.css';


class Fret extends Component
{
	render()
	{
		return(
			<div>
				<div className={'fret'} style={{top:this.props.top}}></div>
			</div>
		);
	}
}

export default Fret;