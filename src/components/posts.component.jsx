import React from 'react';
import { connect } from 'react-redux';
import {deletePost} from '../actions/postActions';
class Posts extends React.Component{  
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
   render(){
       const post = this.props.post;
       const postinfo = post ? (
               <div><h4>{post.title}</h4><p>{post.body}</p>
               <div className="center">
               <button className="btn red" onClick={this.handleClick}>Delete Post</button>
               </div>
               </div>
           ):(<div><h5>Loading Post ...</h5></div>)

       return(     
       <div className='container'>
       {postinfo}
     </div>)
   }
   
}

const mapStateToProps = (state,ownProps) => {
    let id = ownProps.match.params.post_id
    return {
        post:state.posts.find(post => post.id === id)
    }
} 
const mapDispatchToProps = (dispatch) => {
    return {
      deletePost: (id) => { dispatch(deletePost(id))}
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Posts);