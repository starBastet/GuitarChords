import React, {Component} from 'react';
import './FingerNumbers.css';
import FingerNumber from './FingerNumber';


class FingerNumbers extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			dataA:this.props.data,
			fingerNumbersA:[],
			className:'',
			timeout:null
		};
		
		this.stringDist = 30;
		this.newPropData = [];
		
		this.createItems = this.createItems.bind(this);
		this.createItem = this.createItem.bind(this);
		this.itemsFaded = this.itemsFaded.bind(this);
	}
	
	componentWillMount()
	{
		this.createItems(this.state.dataA);
	}
	
	componentWillReceiveProps(newProp)
	{
		this.newPropData = newProp.data;
		this.setState(
		{
			className:'fadeOut',
			timeout:setTimeout(this.itemsFaded,200)
		});
	}
	
	createItems(dataA)
	{
		var arr = [];
		for (var i=dataA.length-1;i>-1;i--)
		{
			var X = 22 + (this.stringDist * i) - (i*.9) - ((i+1)*.9);
			var jsx = this.createItem(dataA[i],X+'px',i);
			
			arr.push(jsx);
		}
		
		this.setState(
		{
			dataA:dataA,
			fingerNumbersA:arr
		});
	}
	
	createItem(text,left,key)
	{
		var jsx = <FingerNumber text={text} left={left} key={key}/>
		return jsx;
	}
	
	itemsFaded()
	{
		this.createItems(this.newPropData);
		
		this.setState(
		{
			className:'',
			timeout:null
		});
	}
	
	render()
	{
		var items = [...this.state.fingerNumbersA];
		var cName = this.state.className;
		
		return(
			<div id={'fingerNumbersContainer'} className={cName}>
				{items}
			</div>
		);
	}
}

export default FingerNumbers;