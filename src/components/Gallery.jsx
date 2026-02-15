import React, { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    title: 'PRN Hackathon 2025',
    category: 'Hackathon'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    title: 'Tech Talk Session',
    category: 'Workshop'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    title: 'Team Collaboration',
    category: 'Event'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    title: 'Startup Pitch Day',
    category: 'Competition'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    title: 'Innovation Workshop',
    category: 'Workshop'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
    title: 'Team Meeting',
    category: 'Event'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
    title: 'Sustainable Tech Expo',
    category: 'Expo'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    title: 'Women in Tech Summit',
    category: 'Summit'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80',
    title: 'IoT Workshop',
    category: 'Workshop'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    title: 'Coding Marathon',
    category: 'Hackathon'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80',
    title: 'Web Dev Bootcamp',
    category: 'Workshop'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    title: 'AI Summit',
    category: 'Summit'
  },
];

const categories = ['All', 'Hackathon', 'Workshop', 'Event', 'Expo', 'Competition', 'Summit'];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-500 font-medium text-sm mb-6">
            Gallery
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Moments of <span className="gradient-text">Innovation</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Relive the exciting moments from our hackathons, workshops, and events
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
              </div>
              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-500 rounded-2xl transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📷</div>
            <h3 className="text-xl font-bold mb-2">No images found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 text-white hover:text-green-500 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[85vh] object-contain rounded-lg"
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-white font-bold text-xl">{selectedImage.title}</h3>
              </div>
            </div>

            {/* Navigation Hint */}
            <p className="absolute bottom-4 text-gray-400 text-sm">
              Click outside to close
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;