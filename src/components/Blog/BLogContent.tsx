import type { JSX } from 'react';
import { BlogPost } from './index';
import type { BlogPostProps, BlogPostPropsContent } from '../../types';

export const BLogContent = ({ post }: BlogPostPropsContent): JSX.Element => {
  return (
    // Grid container rendering a list of blog posts
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {post.map((item: BlogPostProps) => (
        // Render each blog post with unique key and spread props
        <BlogPost key={item.id} {...item} />
      ))}
    </div>
  );
};
