import React from 'react';
import axios from 'axios';
import { isTSImportEqualsDeclaration } from '@babel/types';
class TakeInput extends React.Component{
	state = {userName:''};
	handleSubmit = async (event) => {
		event.preventDefault();
		try{

			let response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
			this.props.onSubmit(response.data);
		} catch(err){
			alert('The entered username does not exist')
		}
		this.setState({userName: ''});
	};
	render(){
		return(
			<form onSubmit={this.handleSubmit} style={{marginLeft:10, marginBottom:50}}>
				<input 
					type="text" 
					placeholder="User Name"
					value={this.state.userName}
					onChange={ (event)=>this.setState({userName:event.target.value})}
					required
				/>
				<button>Add User</button>
			</form>
			);
	}

}

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
function containsObject(obj, list) {
	var i;
	console.log(obj)
    for (i = 0; i < list.length; i++) {
		console.log(list[i])
        if (list[i].id == obj.id) {
            return true;
        }
    }
    return false;
}
export default class App2 extends React.Component{
	state = {profiles: []}
	addNewUser = 
		(userProfile) => {
			// alert(userProfile.login)
			if (!containsObject(userProfile, this.state.profiles))
				this.setState(prevState => ({profiles: [...prevState.profiles, userProfile]}))
			else
				alert('User already added')
		}
	
	render(){
		return(
			<div>
				<div style={{fontSize:50, color: 'green', textAlign:'center', marginBottom:10}}>FIRST REACT APP</div>
				<TakeInput onSubmit = {this.addNewUser}/>
				<CardList profiles={this.state.profiles}/>

			</div>
			);
	}

}