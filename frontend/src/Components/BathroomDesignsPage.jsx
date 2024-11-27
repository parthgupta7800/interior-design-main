import { useState, useEffect } from 'react';
import './bathroomDesigns.css';

const BathroomDesignsPage = () => {
  const [bathroomDesigns, setBathroomDesigns] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State to track the search input

  // Mock data for testing the UI
  useEffect(() => {
    const mockBathroomDesigns = [
      {
        _id: '1',
        title: 'Luxury Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.qNWRKhi8eJhZz23T-gnO_QAAAA?w=302&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A luxurious bathroom with marble finishes and premium fixtures. Design no.-21',
      },
      {
        _id: '2',
        title: 'Modern Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.vyMs3SS0xNjTRIMWXMrgUgAAAA?w=148&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A sleek and modern bathroom with a minimalist aesthetic. Design no.-22',
      },
      {
        _id: '3',
        title: 'Rustic Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.MbzJH5zrnlgczADWoAmdagHaKW?w=202&h=282&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A cozy rustic bathroom with wooden accents and earthy tones. Design no.-23',
      },
      {
        _id: '4',
        title: 'Scandinavian Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.oz4SJL3D0nYrleqGczYTbQHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A clean Scandinavian-style bathroom with bright and airy decor. Design no.-24',
      },
      {
        _id: '5',
        title: 'Small Space Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.nTgG5mobdNjaa1zLdmxfMwHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A compact bathroom optimized for small spaces. Design no.-25',
      },
      {
        _id: '6',
        title: 'Vintage Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.Lur_OhiSnwUO2UOxp8YUMgHaJW?w=202&h=255&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A classic vintage bathroom with elegant fixtures and decor. Design no.-26',
      },
      {
        _id: '7',
        title: 'Spa-Inspired Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.lfUL-NeP1MYDjJgFxh5bbAHaFj?w=299&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A spa-like bathroom with calming tones and luxury features. Design no.-27',
      },
      {
        _id: '8',
        title: 'Industrial Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.qK4zfwB5vQUGhaq0jLr5-AHaJf?w=202&h=260&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'An industrial-style bathroom with metal and exposed pipes. Design no.-28',
      },
    ];
    setBathroomDesigns(mockBathroomDesigns);
  }, []);

  // Filter designs based on the search query
  const filteredDesigns = bathroomDesigns.filter((design) =>
    design.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bathroom-page">
      <header className="navbar">
        <h1>Bathroom Designs</h1>
        <input
          type="text"
          placeholder="Search bathrooms..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
        />
      </header>
      <div className="design-grid">
        {filteredDesigns.map((design) => (
          <div key={design._id} className="design-card">
            <img src={design.imageUrl} alt={design.title} className="design-image" />
            <div className="design-content">
              <h2>{design.title}</h2>
              <p>{design.description}</p>
            </div>
          </div>
        ))}
        {filteredDesigns.length === 0 && (
          <p className="no-results">No bathroom designs found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default BathroomDesignsPage;
