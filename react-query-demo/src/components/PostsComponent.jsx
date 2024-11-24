import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Use React Query's useQuery hook with additional configurations
  const { data, isLoading, isError, error } = useQuery(
    ['posts'], 
    fetchPosts,
    {
      cacheTime: 5 * 60 * 1000, // 5 minutes (default is 5 minutes)
      staleTime: 1 * 60 * 1000, // 1 minute before data is considered stale
      refetchOnWindowFocus: true, // Refetch data when the window regains focus
      keepPreviousData: true, // Keep previous data while fetching new data
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
