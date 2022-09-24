import React from 'react';
import faker from 'faker';
class CommentDetail extends React.Component{
    render(){

        console.log(this.props.comment);
        let{name,email,body}=this.props.comment;
    return(
        <div className="ui container">
            <div className="ui comments">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="name">{email} </a>
                    <div className="metadata">
                        <span className="date">{name}</span>
                    </div>
                    <div className="text">
                        {body}
                    </div>

                </div>
            </div>
        </div>
        );


    }


}

    


export default CommentDetail;