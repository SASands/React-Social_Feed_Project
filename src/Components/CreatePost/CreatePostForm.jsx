import React, { useState } from 'react';
import './CreatePostForm.css'

//make a table here to allow user input to post



const CreatePostForm = (props) => {
    const[post, setPost] = useState(" ")
    const[date, setDate] = useState(" ")
    const[name, setName] = useState(" ")

    function handleSubmit(formEvent){
        formEvent.preventDefault()
        let newPost = {
            name: name,
            post: post,
            date: date
        }
        console.log(newPost)
        props.createPostForm(newPost)
    }
        
    return(
        <form onSubmit={handleSubmit} className = 'form-grid'>
            <div className = 'form-group row'>
                <label>Name</label>
                <input type = 'userinput' className = 'form-control' value = {name} onChange = {(event) => setName(event.target.value)} />
            </div>
            <div className = 'form-group'>
                <label>Post</label>
                <input type = 'userinput' className = 'form-control' value = {post} onChange = {(event) => setPost(event.target.value)} />                
            </div>
            <div className = 'form-group row'>
                <label>Date</label>
                <input type = 'date' className = 'form-control' value={date} onChange={(event) => setDate(event.target.value)} />
            </div>
            <button type="submit">Submit Post</button>
            
        </form>
    );
}


export default CreatePostForm