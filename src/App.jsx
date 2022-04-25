import React, { useState } from 'react';
import './App.css';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import CreatePostForm from './Components/CreatePost/CreatePostForm';


function App() {
// in this hook posts will hold all of the post data and setPost will be called when I need to update the value, this also has my default val
  const [posts, setPosts] = useState([{name: "Leonardo", post: "I wonder who realized that semolina was the way to go with pasta!"}, 
  {name: "Zachary", post: "I'm not sure @Leonardo, but forget pasta, you gotta try these smoked wings! Yeah Buddy!"}]);
const [cars, setCars] = useState([]);

  // this function will get called inside of CreatePostFrom to pull the form data to the app level
  // it will then save all of the post data to the posts hook above
  function createPostForm(post){
    // ... this a spread operator, it grabs the existing post data and fills it in below
    // then we add our new post onto the existing data
    let userPosts = [...posts, post]
    // next we take the starting data from post and the new post data and save it all in the hook above
    setPosts(userPosts)
  }

  return (
    <div className = 'container-fluid'>
      <div className = 'row'>
        <div className = 'border-box'>
          <CreatePostForm createPostForm = {createPostForm}/>
        </div>
        <div className = 'border-box'>
          {/* Display post is going to map through my post data and diplay it in a table 
          pasing in posts from my hook above and will call it parentPosts inside of this component */}
          <DisplayPost posts={posts} />
        </div>
      </div>  
    </div>
  );
}

export default App;
