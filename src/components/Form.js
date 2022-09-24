import React from 'react';
class Form extends React.Component{

    

    render(){
        console.log(this.props.post);
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.props.updatePost}>
                    <div className="field">
                        <label>Post Title </label>
                    <input type="text" defaultValue= {this.props.post.title}></input>
                    </div>

                    <div className="field">
                        <label>Post Body</label>
                    <input type="text" defaultValue= {this.props.post.body} ></input>
                    </div>

                    <button className="ui blue button"> Submit</button>
                </form>
        </div>
            
        )
        }  
}
export default Form;