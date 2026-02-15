import React from 'react';

function BlogPost({ blog, onBack }) {
  if (!blog) return null;

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-green-500 mb-8"
        >
          ← Back to Blogs
        </button>
        <h1 className="text-3xl font-black mb-4">{blog.title}</h1>
        <p className="text-gray-400">{blog.excerpt}</p>
      </div>
    </div>
  );
}

export default BlogPost;