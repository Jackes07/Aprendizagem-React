import React from 'react'

function Blog(props){
    const sidebar = (
        <ul>
            {props.post.map((post) => 
            <li key={post.id}>
                {post.title}
            </li>
            )}
        </ul>
    )

    const content = props.post.map((post) => 
       <div key={post.id}>
           <h3>{post.title}</h3>
            <p>{post.content}</p>
       </div>     
    )
    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    )
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}];

  function ForExportElemKeys(){
     return <Blog post={posts}/>
  }

  export default ForExportElemKeys