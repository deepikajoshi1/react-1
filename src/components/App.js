import React from 'react';
import Post from './Post';
import api from '../api/api';
import './app.css';

class App extends React.Component{

  state = {posts: []};

  

fetchPosts=  async(x)=>{
  const response=  await api.get(x);
 console.log(response);
 this.setState({posts:response.data});
}


  render(){
    return(
    <div className="ui container"> 
      <h1 className="heading"> This is a blog site</h1>
      <Post fetchPosts={this.fetchPosts} posts={this.state.posts} />
      </div>
   
    );
  }
    
}
export default App;
