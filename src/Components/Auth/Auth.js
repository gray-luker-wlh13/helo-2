import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer';

class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = () => {
        const {username, password} = this.state;
        axios.post('/api/auth/register', {username, password}).then(res => {
            this.props.getUser(res.data);
            this.props.history.push('/dashboard')
        })
    }

    handleLogin = () => {
        const {username, password} = this.state;
        axios.post('/api/auth/login', {username, password}).then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/dashboard')
        })
    }

    render(){
        return (
            <div className='auth'>
                Auth Component
                <input 
                    value={this.state.username}
                    maxLength='20'
                    placeholder='Enter Username'
                    name='username'
                    onChange={(e) => this.handleInput(e)}
                />
                <input 
                    value={this.state.password}
                    type='password'
                    maxLength='20'
                    placeholder='Enter Password'
                    name='password'
                    onChange={(e) => this.handleInput(e)}
                />
                <button onClick={this.handleLogin}>Log in</button>
                <button onClick={this.handleRegister}>Register</button>
            </div>
        )
    }
}

export default connect(null, {getUser})(Auth);