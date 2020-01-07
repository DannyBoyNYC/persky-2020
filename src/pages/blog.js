import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import Hero from '../components/hero';
import PostPreview from '../components/blog/post-preview';

export default () => {
  const posts = usePosts();
  return (
    <Layout page="blog">
      <Hero page="blog" />
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
