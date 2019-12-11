import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: ''
        }
    }

    getPost = () => {
        axios.get(`/api/post/${this.props.match.params.postid}`).then(res => {
            console.log(res.data)
        })
    }

    render(){
        console.log(this.props);
        return (
            <div className='post'>
                {this.state.title}
                {this.state.img}
                {this.state.content}
                {this.state.author}
                {this.state.authorPicture}
            </div>
        )
    }
}

export default Post;