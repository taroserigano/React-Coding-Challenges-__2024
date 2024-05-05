import React from 'react';

const Posts = ({posts, loading}) => {

    // if(loading) return <h1>Loading...</h1>


    return (
        <ul>
        {posts.map((p, idx)=> { 

            return (
            <li key={p.id}>
                {p.title}
            </li>
            )
        })}
       </ul>

    )


}

export default Posts;
