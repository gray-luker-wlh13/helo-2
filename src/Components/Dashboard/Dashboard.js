import React, {Component} from 'react';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    render(){
        const mappedPosts = this.state.posts.map((posts, i) => {
            return <div key={i}>
                    {posts.title}
                    {posts.username}
                    {posts.profile_pic}
                   </div>
        })
        return (
            <div className='dashboard'>
                <div className='search'>
                    <input 
                        value={this.state.search}
                        name='search'

                    />
                    <button>Search</button>
                    <button>Reset</button>
                    <div>
                        <p>My Posts</p>
                        <input 
                            value={this.state.userposts}
                            type='checkbox'
                            
                        />
                    </div>
                    {mappedPosts}
                </div>
            </div>
        )
    }
}

export default Dashboard;