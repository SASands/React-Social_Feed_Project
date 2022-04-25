
// create a table here to hold all the posts created in CreatePostForm
// use .map to pull the users input to diplay
// use cssClass e-round for your like and dislike buttons

const DisplayPost = (props) => {
    // we have passed in our post data from the app level 
    // we will call it by props.post
    return ( 
    <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Post</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {props.posts.map((post, index)=>{
                // remember that map acts like a for loop, and only works with an array
                //if we pass it something other than an array we get a typeError
                // if we pass it something with no vlaue we get a undefined error
                return (
                <tr key={index  + 1}>
                    <td>{post.name}</td>
                    <td>{post.post}</td>
                    <td>{post.date}</td>
                    <td><button>Like</button></td>
                    <td><button>Dislike</button></td>
                </tr>
                )
            })}
            </tbody>
        </table> 
    );
}
 
export default DisplayPost