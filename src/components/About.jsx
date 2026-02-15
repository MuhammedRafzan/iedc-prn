import React from 'react';

const team = [
  {
    id: 1,
    name: "Arjun Menon",
    role: "Chief Executive Officer",
    department: "Computer Science",
    year: "Final Year",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: 2,
    name: "Lakshmi Nair",
    role: "Chief Technical Officer",
    department: "Electronics & Communication",
    year: "Final Year",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    id: 3,
    name: "Mohammed Ashraf",
    role: "Chief Operations Officer",
    department: "Mechanical Engineering",
    year: "Third Year",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    id: 4,
    name: "Priya Krishnan",
    role: "Chief Marketing Officer",
    department: "Information Technology",
    year: "Third Year",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    id: 5,
    name: "Vishnu Prasad",
    role: "Technical Lead",
    department: "Computer Science",
    year: "Third Year",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    id: 6,
    name: "Sneha Thomas",
    role: "Design Lead",
    department: "Computer Science",
    year: "Second Year",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  },
];

const stats = [
  { value: "1000+", label: "Students Impacted" },
  { value: "50+", label: "Events Conducted" },
  { value: "15+", label: "Startups Incubated" },
  { value: "₹25L+", label: "Prizes Distributed" },
];

function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-cyan-500/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-500 font-medium text-sm mb-6">
            About IEDC PRN
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Igniting <span className="gradient-text">Innovation</span> at PRN
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            The Innovation and Entrepreneurship Development Cell (IEDC) is a student-led initiative 
            at PRN College of Engineering, Kollam. We foster innovative thinking, entrepreneurship skills, 
            and connect students with Kerala's vibrant startup ecosystem.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-green-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-colors">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become the premier innovation hub in Kerala, nurturing the next generation of 
                entrepreneurs and innovators who will drive technological advancement and economic growth 
                in the region and beyond.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-colors">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To provide a platform for students to ideate, innovate, and launch startups through 
                mentorship, workshops, hackathons, and industry connections. We bridge the gap between 
                academia and industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">What We Do</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We organize various programs and initiatives to foster innovation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🚀",
                title: "Hackathons",
                desc: "36-hour coding marathons to build innovative solutions"
              },
              {
                icon: "🎓",
                title: "Workshops",
                desc: "Hands-on technical training by industry experts"
              },
              {
                icon: "💡",
                title: "Ideation Sessions",
                desc: "Brainstorming sessions to develop startup ideas"
              },
              {
                icon: "🤝",
                title: "Mentorship",
                desc: "One-on-one guidance from successful entrepreneurs"
              },
              {
                icon: "🏆",
                title: "Competitions",
                desc: "Platform to showcase talent and win prizes"
              },
              {
                icon: "🌐",
                title: "Networking",
                desc: "Connect with investors, mentors, and peers"
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Our Affiliations</h2>
            <p className="text-gray-400">Proudly associated with Kerala's leading innovation ecosystem</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { name: "Kerala Startup Mission", abbr: "KSM", color: "green" },
              { name: "APJ Abdul Kalam KTU", abbr: "KTU", color: "cyan" },
              { name: "PRN College of Engineering", abbr: "PRN", color: "orange" },
            ].map((org, index) => (
              <div key={index} className="text-center">
                <div className={`w-24 h-24 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-700`}>
                  <span className={`text-3xl font-black text-${org.color}-500`}>{org.abbr}</span>
                </div>
                <p className="font-medium text-sm">{org.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Meet Our Team</h2>
            <p className="text-gray-400">The passionate minds driving innovation at PRN</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div 
                key={member.id}
                className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-700 hover:border-green-500/50 transition-all hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-green-500/20"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-green-500 font-medium text-sm mb-1">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.department}</p>
                <p className="text-gray-500 text-xs">{member.year}</p>
                
                {/* Social Links */}
                <div className="flex justify-center gap-3 mt-4">
                  <a href="#" className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Ready to <span className="gradient-text">Innovate</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join IEDC PRN and be part of Kerala's most vibrant innovation community. 
            Whether you're a coder, designer, or entrepreneur - there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all">
              Join IEDC PRN
            </a>
            <a href="#" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-bold transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;