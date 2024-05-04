import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
        <h1>Loading.....</h1>
    )
}
return (
    <>
        {posts.map((post, index) => (
            <div className='list' key={post.id}>
                <p >{post.title}</p>
            </div>
        ))}
    </>
)
}

export default Posts;
