import React, { useState } from 'react';

const blogs = [
  {
    id: 1,
    title: "DBMS Fundamentals for Startup Success",
    slug: "dbms-for-startups",
    excerpt: "Learn how proper database design can make or break your startup. From normalization to scaling strategies.",
    content: `
      <h2>Why DBMS Matters for Startups</h2>
      <p>In the fast-paced world of startups, data is your most valuable asset. Understanding database management systems (DBMS) is crucial for building scalable applications.</p>
      
      <h3>Key Concepts</h3>
      <ul>
        <li><strong>Normalization:</strong> Organize data to reduce redundancy</li>
        <li><strong>Indexing:</strong> Speed up query performance</li>
        <li><strong>ACID Properties:</strong> Ensure data integrity</li>
        <li><strong>Scaling:</strong> Handle growth efficiently</li>
      </ul>
      
      <h3>Choosing the Right Database</h3>
      <p>SQL databases like PostgreSQL are great for structured data and complex queries. NoSQL options like MongoDB offer flexibility for rapidly changing schemas.</p>
      
      <h3>Pro Tips</h3>
      <ol>
        <li>Start with proper schema design</li>
        <li>Use migrations for version control</li>
        <li>Implement proper backup strategies</li>
        <li>Monitor query performance regularly</li>
      </ol>
    `,
    author: "Arjun Menon",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "2025-12-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    category: "Technology",
    tags: ["DBMS", "SQL", "Startups", "Database"],
  },
  {
    id: 2,
    title: "Assembly Language: The Secret Weapon for Algorithm Optimization",
    slug: "assembly-algo-wins",
    excerpt: "Discover how understanding assembly language can give you an edge in competitive programming and system design.",
    content: `
      <h2>Why Learn Assembly in 2026?</h2>
      <p>While high-level languages dominate modern development, understanding assembly gives you unparalleled insight into how computers actually work.</p>
      
      <h3>Benefits for Algorithm Design</h3>
      <ul>
        <li>Understand true time complexity</li>
        <li>Optimize critical code paths</li>
        <li>Debug complex performance issues</li>
        <li>Write better compiler-friendly code</li>
      </ul>
      
      <h3>Real-World Applications</h3>
      <p>Companies like Google and Meta still use assembly for performance-critical systems. Game engines, embedded systems, and security software all benefit from assembly knowledge.</p>
      
      <h3>Getting Started</h3>
      <p>Start with x86-64 assembly on Linux. Use tools like GDB and objdump to analyze compiled code. Practice by implementing basic data structures in assembly.</p>
    `,
    author: "Lakshmi Nair",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    date: "2025-12-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
    category: "Programming",
    tags: ["Assembly", "Algorithms", "Optimization", "Low-level"],
  },
  {
    id: 3,
    title: "Building Your First Startup: Lessons from PRN Hackathon Winners",
    slug: "startup-lessons-hackathon",
    excerpt: "Exclusive insights from teams who went from hackathon projects to funded startups.",
    content: `
      <h2>From Hackathon to Startup</h2>
      <p>Every year, IEDC PRN hosts hackathons that spark innovative ideas. Here are stories from teams who turned their 36-hour projects into successful ventures.</p>
      
      <h3>Team EcoTrack: Sustainability App</h3>
      <p>What started as a carbon footprint calculator at PRN Hackathon 2024 is now a funded startup with 50,000 users.</p>
      
      <h3>Key Takeaways</h3>
      <ul>
        <li>Validate your idea with real users immediately</li>
        <li>Build an MVP, not a perfect product</li>
        <li>Network with mentors and investors at events</li>
        <li>Apply to Kerala Startup Mission programs</li>
      </ul>
      
      <h3>Resources for Student Founders</h3>
      <ol>
        <li>IEDC Mentorship Program</li>
        <li>KTU Innovation Grant</li>
        <li>Kerala Startup Mission IDEA Fest</li>
        <li>National Startup Awards</li>
      </ol>
    `,
    author: "Priya Krishnan",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "2025-12-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    category: "Entrepreneurship",
    tags: ["Startup", "Hackathon", "Funding", "Kerala"],
  },
];

const categories = ["All", "Technology", "Programming", "Entrepreneurship"];

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-IN', options);
};

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBlog, setSelectedBlog] = useState(null);

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  // Blog Detail View
  if (selectedBlog) {
    return (
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => setSelectedBlog(null)} 
            className="flex items-center gap-2 text-green-500 hover:text-green-400 font-medium mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </button>

          {/* Featured Image */}
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
          />
          
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-green-500/10 text-green-500 text-sm font-medium rounded-full">
              {selectedBlog.category}
            </span>
            <span className="text-gray-400 text-sm">
              {formatDate(selectedBlog.date)}
            </span>
            <span className="text-gray-400 text-sm">
              {selectedBlog.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-black mb-6">
            {selectedBlog.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-800">
            <img
              src={selectedBlog.authorImage}
              alt={selectedBlog.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{selectedBlog.author}</p>
              <p className="text-sm text-gray-400">IEDC PRN Team</p>
            </div>
          </div>

          {/* Content */}
          <div 
            className="prose prose-invert prose-green max-w-none 
                       prose-headings:font-bold prose-headings:text-white
                       prose-p:text-gray-300 prose-p:leading-relaxed
                       prose-li:text-gray-300
                       prose-strong:text-white
                       prose-a:text-green-500"
            dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-wrap gap-2">
              {selectedBlog.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-gray-800 text-gray-400 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="font-semibold mb-4">Share this article</p>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Blog List View
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-500 font-medium text-sm mb-6">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Insights & <span className="gradient-text">Stories</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tech tutorials, startup tips, and stories from IEDC PRN
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 cursor-pointer hover:border-green-500/50 transition-all hover:-translate-y-2"
              onClick={() => setSelectedBlog(blog)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                  <span>{formatDate(blog.date)}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-green-500 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={blog.authorImage}
                    alt={blog.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">
                    {blog.author}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2">No posts found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;