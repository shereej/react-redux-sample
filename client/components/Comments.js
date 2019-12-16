import React from 'react';
import comments from '../reducers/comments';

const Comments = React.createClass({
    renderComment(comment, i){
        return(
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button onClick={this.props.removeComment.bind(null, this.props.params.postid, i)} className="remove-comment">&times;</button>
                </p>
            </div>
        )
    },
    handlesubmit(e){
        e.preventDefault();
        const { postid } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        this.props.addComment(postid, author, comment);
        this.refs.commentForm.reset();
    },
    render(){
        return(
            <div className="comments">
               {this.props.postComments ? this.props.postComments.map(this.renderComment) : <em><strong>You are the first one to comment!</strong></em>}
               <form ref="commentForm" className="comment-form" onSubmit={this.handlesubmit}>
                <input type="text" ref="author" placeholder="author"/>
                <input type="text" ref="comment" placeholder="comment"/>
                <input type="submit" hidden/>

               </form>
            </div>
        )
    }
});

export default Comments;