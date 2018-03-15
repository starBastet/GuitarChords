import React, {Component} from 'react';
import './ChordName.css';


class ChordName extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			className:'',
			isActive:this.props.isActive,
			overed:false
		};
		
		this.decideClassName = this.decideClassName.bind(this);
		this.mOver = this.mOver.bind(this);
		this.mOut = this.mOut.bind(this);
		this.mDown = this.mDown.bind(this);
	}
	
	componentWillMount()
	{
		var cName = this.decideClassName(this.state.isActive);
		
		this.setState({
			className:cName
		});
	}
	
	componentWillReceiveProps(newProps)
	{
		var cName = this.decideClassName(newProps.isActive);
		this.setState(
		{
			className:cName,
			isActive:newProps.isActive
		});
	}
	
	decideClassName(isActive)
	{
		var cName = '';
		if (isActive === true)
		{
			cName = 'over';
		}
		
		return cName;
	}
	
	mOver()
	{
		var over = 'over';
		this.setState(
		{
			className:over,
			overed:true
		});
	}
	
	mOut()
	{
		var over = '';
		this.setState(
		{
			className:over,
			overed:false
		});
	}
	
	mDown()
	{
		this.props.clicker(this.props.text);
	}
	
	render()
	{
		var cName = this.state.className;
		
		//onMouseOver={this.mOver} onMouseOut={this.mOut} 
		return(
			<li className={cName} onMouseDown={this.mDown} style={{left:this.props.X}}><p>{this.props.text}</p></li>
		);
	}
}

export default ChordName;