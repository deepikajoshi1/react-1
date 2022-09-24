import React from 'react';
import View from './View';
import './post.css';
import api from '../api/api';


class Post extends React.Component {
    state = { post: {}, comments: [] };

    fetchPostComments = async (id) => {
        const response = await api.get("posts/" + id + "/comments");
        console.log(response);
        this.setState({ comments: response.data })

        return response.data;

    }


    componentDidMount() {
        this.props.fetchPosts("posts");
    }

    showPost = (id) => {

        let post = this.props.posts.filter((post) => post.id === id);
        
        this.setState({ post: post[0] });
        this.setState({ comments: [] });

    }




    render() {
        
        let display;
        if ((Object.keys(this.state.post).length === 0 && this.state.post.constructor === Object) && this.props.posts.length > 0) {
            display = (
                <div className="left floated left aligned ten wide column">
                    <View post={this.props.posts[0]} comments={this.state.comments} 
                    fetchPostComments={this.fetchPostComments} updatePost={this.updatePost}/>

                </div>

            );
        }
        else {
            display = (
                <div className="left floated left aligned ten wide column">
                    <View post={this.state.post} comments={this.state.comments} fetchPostComments={this.fetchPostComments} />
                </div>
            );
        }





        return (
            <div className="ui right aligned grid">
                {display}
                <div className="right floated left aligned six wide column">
                <div className = "ui segment">
            <button className="ui blue button">  Add Post</button>
             
             <div className="ui massive middle aligned celled animated list">

                            {this.props.posts.map(post => {
                                return (
                                    
                                    <div className="item" key={post.id}><span className="link" onClick={() => this.showPost(post.id)}> {post.title}</span> </div>
                                
                                )
                            }

                            )}

                        </div>
                    </div>
                </div>
                </div>





           
        )
    }

}

export default Post;