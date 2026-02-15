export const blogs = [
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

export const blogCategories = [
  "All",
  "Technology",
  "Programming",
  "Entrepreneurship",
  "Events",
  "Tutorials",
];