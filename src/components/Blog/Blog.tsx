import type { JSX } from 'react';
import { useState } from 'react';
import { blogPost } from '../../constants/data';
import { BLogContent } from './index';

export const Blog = (): JSX.Element => {
  const [post] = useState(blogPost);
  return (
    <div id="blog" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-indigo-400 text-lg mb-2">Recent Posts</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From My Blog</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <BLogContent post={post} />

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-md transition duration-300"
          >
            View All Posts
          </a>
        </div>
      </div>
    </div>
  );
};
