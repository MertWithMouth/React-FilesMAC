import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import post from '../../components/Post/Post';

class Blog extends Component {

    state={
        posts:[],
        selectedPostID:null
    }


    clickHandler=(id)=>{

        this.setState({selectedPostID:id});


    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts=response.data.slice(0,4);
            const updatedPost=posts.map(post=>{
                 return{
                     ...post,
                     author:'Max'
                 }
            })
            this.setState({posts: updatedPost})
            console.log(response)
        });

    }
    render () {
        const posts=this.state.posts.map(post=>{
            return <Post 
            author={post.author}
             key={post.id}
              title={post.title}
              clicked={()=>this.clickHandler(post.id)}/>
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id= {this.state.selectedPostID}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;