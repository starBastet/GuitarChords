import React, {Component} from 'react';
import './Diagram.css';
import StringGrid from './fretboard/StringGrid';
import FingerDots from './fingerDots/FingerDots';
import FingerNumbers from './fingerNumbers/FingerNumbers';


class Diagram extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			chordDataA:this.props.data,
			highestFretNum:0
		};
		
		this.getHighestFretNum = this.getHighestFretNum.bind(this);
	}
	
	componentWillMount()
	{
		//console.log(this.state.chordDataA);
		var n = this.getHighestFretNum(this.state.chordDataA.DOTS);
		this.setState({
			highestFretNum:n
		});
	}
	
	componentWillReceiveProps(newProp)
	{
		var n = this.getHighestFretNum(newProp.data.DOTS);
		this.setState(
		{
			chordDataA:newProp.data,
			highestFretNum:n
		});
	}
	
	getHighestFretNum(arr)
	{
		var n = 0;
		for (var i=0;i<arr.length;i++)
		{
			if (arr[i] !== 'X' && Number(arr[i]) > n)
			{
				n = Number(arr[i]);
			}
		}
		
		return n;
	}
	
	render()
	{
		var highestFretNum = this.getHighestFretNum(this.state.chordDataA.DOTS);
		var dotData = [...this.state.chordDataA.DOTS];
		var fingerData = [...this.state.chordDataA.FINGERS];
		
		return(
			<div id={'diagramContainer'}>
				<StringGrid highFret={highestFretNum}/>
				<FingerDots data={dotData}/>
				<FingerNumbers data={fingerData}/>
			</div>
		);
	}
}

export default Diagram;