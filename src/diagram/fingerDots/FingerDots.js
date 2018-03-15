import React, {Component} from 'react';
import './FingerDots.css';
import FingerDot from './FingerDot';


class FingerDots extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			dataA:this.props.data,
			fingerMarkersA:[],
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
			
			var jsx = this.createItem(i,dataA[i],i);
			
			arr.push(jsx);
		}
		
		this.setState(
		{
			dataA:dataA,
			fingerMarkersA:arr
		});
	}
	
	createItem(left,top,key)
	{
		var jsx = null;
		var X = 22 + (this.stringDist * left) - (left*.9) - ((left+1)*.9);
		var Y = top;
		if (Y !== Number(0) && Y !== '0' && Y !== 'X')
		{
			Y = (Number(top) * 41) - 29;
			jsx = <FingerDot left={X+'px'} top={Y+'px'} key={key}/>
		}
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
		var items = [...this.state.fingerMarkersA];
		var cName = this.state.className;
		
		return(
			<div id={'fingerDotsContainer'} className={cName}>
				{items}
			</div>
		);
	}
}

export default FingerDots;