import React, {Component} from 'react';
import './ChordNameList.css';
import ChordName from './ChordName';


class ChordNameList extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			chordNameDataA:this.props.data,
			currChordNum:this.props.currChordNum,
			chordNamesA:null
		};
		
		this.createItems = this.createItems.bind(this);
		this.createItem = this.createItem.bind(this);
		this.updateItems = this.updateItems.bind(this);
	}
	
	componentWillMount()
	{
		this.createItems();
		
	}
	
	componentWillReceiveProps(newProps)
	{
		var currN = this.state.currChordNum;
		var newN = newProps.currChordNum;
		this.updateItems(currN,newN);
	}
	
	createItems()
	{
		var dataA = [...this.state.chordNameDataA];
		var arr = [];
		for (var i=0;i<dataA.length;i++)
		{
			var isActive = false;
			if (i === Number(this.state.currChordNum))
			{
				isActive = true;
			}
			var jsx = this.createItem(dataA[i],i*33,this.props.clicker,isActive,i);
			arr.push(jsx);
		}
		
		this.setState(
		{
			chordNamesA:arr
		});
	}
	
	updateItems(currN,newN)
	{
		var dataA = [...this.state.chordNamesA];
		
		var itemsToUpdate = [currN,newN];
		for (var i=0;i<2;i++)
		{
			var n = itemsToUpdate[i];
			var text = dataA[n].props.text;
			var X = dataA[n].props.X;
			var clicker = dataA[n].props.clicker;
			var isActive = !(dataA[n].props.isActive);
			var key = n;
			
			var jsx = this.createItem(text,X,clicker,isActive,key);
			
			dataA[n] = jsx;
		}
		
		this.setState({
			chordNamesA:dataA,
			currChordNum:newN
		});
	}
	
	createItem(text,X,clicker,isActive,key)
	{
		var jsx = <ChordName text={text} X={X} clicker={clicker} isActive={isActive} key={key}/>
		return jsx;
	}
	
	render()
	{
		var items = this.state.chordNamesA;
		
		return(
			<div>
				<ul id={'chordNameListContainer'}>
					{items}
				</ul>
			</div>
		);
	}
}

export default ChordNameList;