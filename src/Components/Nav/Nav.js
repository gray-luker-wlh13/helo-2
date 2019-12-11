import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends Component {
    render(){
        console.log(this.props)
        return (
            <div className='nav'>
                <Link to='/dashboard'>Home</Link>
                <Link to='/post/:postid'>New Post</Link>
                <Link to='/'>Logout</Link>
                {this.props.profile}
                {this.props.username}
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

export default connect(mapStateToProps)(Nav);