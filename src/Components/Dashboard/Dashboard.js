import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    componentDidMount(){
        this.getPosts();
    }

    handleSearch = (e) => {
        [e.target.name] = e.target.value;
    }

    getPosts = () => {
        axios.get(`/api/posts/${this.props.userid}`).then(res => {
            this.setState({
                posts: res.data
            })
        })
    }

    handleToggle = () => {
        this.setState({
            userposts: !this.state.userposts
        })
        this.getPosts()
    }

    handleReset = () => {
        axios.get(`/api/posts/${this.props.userid}`).then(res => {
            this.setState({
                posts: res.data,
                search: ''
            })
        })
    }

    render(){
        console.log(this.props)
        const mappedPosts = this.state.posts.map((posts, i) => {
            return <Link to={`/post/${this.props.userid}`}>
                    <div key={i}>
                        {posts.title}
                        {posts.username}
                        {posts.profile_pic}
                        {posts.img}
                        {posts.content}
                    </div>
                </Link>
        })
        return (
            <div className='dashboard'>
                <div className='search'>
                    <input 
                        value={this.state.search}
                        name='search'
                        onChange={e => this.handleSearch(e)}
                    />
                    <button onClick={this.getPosts}>Search</button>
                    <button onClick={this.handleReset}>Reset</button>
                    <div>
                        <p>My Posts</p>
                        <input 
                            value={this.state.userposts}
                            type='checkbox'
                            onChange={this.handleToggle}
                        />
                    </div>
                    {mappedPosts}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        userid: reduxState.userId
    }
}

export default connect(mapStateToProps)(Dashboard);