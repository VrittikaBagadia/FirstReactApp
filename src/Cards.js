import React from 'react';

class Card extends React.Component{
	render(){
		return(
			<div style={{marginLeft:20}}>
				<img src = {this.props.avatar_url} style={{width:"20%"}} resizeMode="cover"></img>
				<div style={{display:'inline-block', marginLeft:10}}>
					<div>{this.props.name == null? this.props.login:this.props.name}</div>
					<div>{this.props.id}</div>
				</div>
			</div>
			)
	}
}
class CardList extends React.Component{
	render(){
		return(
			<div>
				{this.props.profiles.map(profile=><Card {...profile}/>)}
			</div>
			);
	}
}

export {Card, CardList}