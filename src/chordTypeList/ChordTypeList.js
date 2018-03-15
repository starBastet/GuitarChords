import React, {Component} from 'react';
import './ChordTypeList.css';
import ChordType from './ChordType';


class ChordTypeList extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			chordTypeDataA:this.props.data,
			currTypeNum:this.props.currTypeNum,
			chordTypesA:null
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
		var currN = this.state.currTypeNum;
		var newN = newProps.currTypeNum;
		this.updateItems(currN,newN);
	}
	
	createItems()
	{
		var dataA = [...this.state.chordTypeDataA];
		var arr = [];
		for (var i=0;i<dataA.length;i++)
		{
			var isActive = false;
			if (i === Number(this.state.currTypeNum))
			{
				isActive = true;
			}
			var jsx = this.createItem(dataA[i],i*55,this.props.clicker,isActive,i);
			arr.push(jsx);
		}
		
		this.setState(
		{
			chordTypesA:arr
		});
	}
	
	updateItems(currN,newN)
	{
		var dataA = [...this.state.chordTypesA];
		
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
			chordTypesA:dataA,
			currTypeNum:newN
		});
	}
	
	createItem(text,X,clicker,isActive,key)
	{
		var jsx = <ChordType text={text.toLowerCase()} X={X} clicker={clicker} isActive={isActive} key={key}/>
		return jsx;
	}
	
	render()
	{
		var items = this.state.chordTypesA;
		
		return(
			<div>
				<ul id={'chordTypeListContainer'}>
					{items}
				</ul>
			</div>
		);
	}
}

export default ChordTypeList;