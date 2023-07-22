//import React from 'react';

interface PostProps {
  posts: { id: number; title: string }[];
  loading: boolean;
}

export default function Posts({ posts, loading }: PostProps) {
  return (
    <>
      {loading && <div>loading...</div>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
