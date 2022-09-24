import React from 'react';
import Form from './Form';
import ApprovalCard from './AppprovalCard';
import CommentDetail from './CommentDetail';
import api from '../api/api';


class View extends React.Component {
    state={post:{}};

    showFormPost = (post) => {
        console.log(post);
        this.setState({post:post})
        
    }
    updatePost = async (event) => {
        event.preventDefault(); 
        const response= await api.put("posts/"+this.state.post.id, this.state.post);
        console.log(response);
        this.setState({ post: response.data})
    }
    render() {
        let view;
        let display;
        if (Object.keys(this.state.post).length !== 0 && this.state.post.constructor === Object ) {
            display = <Form updatePost= {this.updatePost} post={this.state.post}></Form>;
        }
        else {
            display = <div></div>;
        }

        if (this.props.post.body) {
            view = (
                <div className="ui raised very padded text container segment">
                    <div className="ui left aligned grid">
                        <div className="left aligned">

                         <h1>{this.props.post.id} : {this.props.post.title}</h1>   
                            <h4>{this.props.post.body}</h4>
                            <button className="ui blue button" onClick={() => this.props.fetchPostComments(this.props.post.id) }> Comments </button>
                            {/* <button class="ui right floated primary button" onClick={() => this.props.updatePost(this.props.post)}> Update Post</button> */}
                            <button className="ui right floated primary button" onClick={() => this.showFormPost(this.props.post)} > Update Post </button>
                            
                            {display}    
                             {/* <Form post={this.state.post}></Form> */}
            
                {this.props.comments.map(comment => {
                                return (
                                    <ApprovalCard key={comment.id}>
                                        <CommentDetail comment={comment}>

                                        </CommentDetail>

                                    </ApprovalCard>

                                )

                            })}





                        </div>
                    </div>
                </div>
            );


        }
        else {
            view = (
                <div> </div>
            )
        }
        return (<div>
            {view}
        </div>)


    }

}

export default View;