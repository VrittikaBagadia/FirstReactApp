import React from 'react';
import axios from 'axios';

export default class TakeInput extends React.Component{
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