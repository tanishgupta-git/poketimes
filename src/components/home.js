import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../assets/pokeball.png';
import { connect } from 'react-redux';
import './common.component.css';


class Home extends Component{
    render(){
      const { posts } = this.props;
      const  postlist = posts.length ? posts.map(post => {
        return (
          <div className="post card" key={post.id}>
          <img src={Pokeball} alt='A Pokeball'/>
            <div className="card-content">
            <Link to={'/'+ post.id}>
              <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        
        )
      })
      : (<div>You don't have any postes yet</div>)
        return (
         
          <div className="container home">
           <h2 className="center">Posts of PokeTimes</h2>
           <h5>Click the title to see full post</h5>
           {postlist}
          </div>
       
        );
      }
    }
    const mapStateToProps = (state) => {
      return {
        posts:state.posts
      }
    }
  

    export default connect(mapStateToProps)(Home);