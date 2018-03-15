import React, {Component} from 'react';
import './StringGrid.css';
import Fret from './Fret';
import String from './String';


class StringGrid extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			fretsA:[],
			stringsA:[],
			highFretNum:this.props.highFret,
			className:'fretboard'
		};
		
		this.createFrets = this.createFrets.bind(this);
		this.createStrings = this.createStrings.bind(this);
	}
	
	componentWillMount()
	{
		this.createFrets();
		this.createStrings();
	}
	
	componentWillReceiveProps(newProp)
	{
		var cName = 'fretboard';
		var cNameAppend = '';
		if (newProp.highFret === 4)
		{
			cNameAppend = ' fourthFret';
		}
		else if (newProp.highFret === 5)
		{
			cNameAppend = ' fifthFret';
		}
		
		this.setState({
			className:cName+cNameAppend
		});
	}
	
	createFrets()
	{
		var arr = [];
		for (var i=0;i<6;i++)
		{
			var jsx = <Fret top={40*i} key={i}/>
			arr.push(jsx);
		}
		
		this.setState(
		{
			fretsA:arr
		});
	}
	
	createStrings()
	{
		var arr = [];
		for (var i=6;i>0;i--)
		{
			var size = i;
			var jsx = <String size={size} key={i}/>
			arr.push(jsx);
		}
		
		this.setState(
		{
			stringsA:arr
		});
	}
	
	render()
	{
		var frets = [...this.state.fretsA];
		var strings = [...this.state.stringsA];
		var cName = this.state.className;
		
		return(
			<div className={cName}>
				{frets}
				{strings}
			</div>
		);
	}
}

export default StringGrid;