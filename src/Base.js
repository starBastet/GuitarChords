import React, {Component} from 'react';
import './Base.css';
import data from './data/json.json';
import Diagram from './diagram/Diagram';
import ChordNameList from './chordNameList/ChordNameList';
import ChordTypeList from './chordTypeList/ChordTypeList';


class Base extends Component
{
	constructor(props,context)
	{
		super(props,context);
		this.state={
			jDataA:data[0],
			diagramDataA:null,
			chordNameDataA:null,
			currChordNum:0,
			chordTypeDataA:data[0].CHORD_TYPES,
			currTypeNum:0,
			chordType:data[0].CHORD_TYPES[0],
			className:'',
			timeout:null
		};
		
		this.shower = this.shower.bind(this);
		this.chordClicked = this.chordClicked.bind(this);
		this.typeClicked = this.typeClicked.bind(this);
	}
	
	componentWillMount()
	{
		var dataA = this.state.jDataA.CHORDS;
		var diagramA = [];
		var chordNameA = [];
		for (var i=0;i<dataA.length;i++)
		{
			var diagramBit = dataA[i].MARKERS;
			var chordNameBit = dataA[i].NAME;
			diagramA.push(diagramBit);
			chordNameA.push(chordNameBit);
		}
		
		this.setState({
			diagramDataA:diagramA,
			chordNameDataA:chordNameA,
			timeout:setTimeout(this.shower,100)
		});
	}
	
	shower()
	{
		this.setState({
			className:'show',
			timeout:null
		});
	}
	
	chordClicked(name)
	{
		var arr = [...this.state.chordNameDataA];
		var n = this.state.currChordNum;
		for (var i=0;i<arr.length;i++)
		{
			if (arr[i] === name)
			{
				n = i;
				break;
			}
		}
		
		this.setState({
			currChordNum:n
		});
	}
	
	typeClicked(type)
	{
		var arr = [...this.state.chordTypeDataA];
		var n = this.state.currTypeNum;
		for (var i=0;i<arr.length;i++)
		{
			if (arr[i] === type)
			{
				n = i;
				break;
			}
		}
		
		var currType = this.state.chordTypeDataA[n];
		this.setState({
			currTypeNum:n,
			chordType:currType
		});
	}
	
	render()
	{
		var diagramData = this.state.diagramDataA[this.state.currChordNum][this.state.chordType];
		var chordNameData = this.state.chordNameDataA;
		var chordTypeData = this.state.chordTypeDataA;
		var currTypeNum = this.state.currTypeNum;
		var currChordNum = this.state.currChordNum;
		var cName = this.state.className;
		
		return(
			<div id={'appContainer'} className={cName}>
				<ChordNameList data={chordNameData} currChordNum={currChordNum} clicker={this.chordClicked}/>
				<br/>
				<ChordTypeList data={chordTypeData} currTypeNum={currTypeNum} clicker={this.typeClicked}/>
				<br/>
				<Diagram data={diagramData}/>
			</div>
		);
	}
}

export default Base;