import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../ducks/reducer';
import axios from 'axios';

class Nav extends Component {
    handleLogout = () => {
        axios.post('/api/auth/logout').then(res => {
            this.props.logout(res.data)
        })
    }

    render(){
        console.log(this.props)
        return (
            <div className='nav'>
                <Link to='/dashboard'>Home</Link>
                <Link to='/post/:postid'>New Post</Link>
                <div>
                {this.props.profile}
                {this.props.username}
                </div>
                <Link to='/'>
                    <button onClick={this.handleLogout}>Log out</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        username: reduxState.username,
        profile: reduxState.profile
    }
}

export default connect(mapStateToProps, {logout})(Nav);