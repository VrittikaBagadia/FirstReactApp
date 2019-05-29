import React from 'react';
import { isTSImportEqualsDeclaration } from '@babel/types';
import TakeInput from './Input';
import {Card, CardList} from './Cards';

function containsObject(obj, list) {
	var i;
    for (i = 0; i < list.length; i++) {
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