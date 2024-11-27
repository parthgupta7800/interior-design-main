import { useState, useEffect } from 'react';
import './livingRoomDesigns.css';

const LivingRoomDesignsPage = () => {
  const [livingRoomDesigns, setLivingRoomDesigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State to track search input
  const [filteredDesigns, setFilteredDesigns] = useState([]); // State to track filtered designs

  // Use mock data for testing the UI
  useEffect(() => {
    const mockLivingRoomDesigns = [
      {
        _id: '1',
        title: 'Modern Living Room',
        imageUrl:
          'https://th.bing.com/th/id/R.d87ec51b5a59bf9bddf6494a54e2ef79?rik=KL9xfLrH93JJsg&riu=http%3a%2f%2fwww.dwellingdecor.com%2fwp-content%2fuploads%2f2016%2f10%2fUltra-modern-living-room.jpg&ehk=eAqdOqywwsk3yLJQkUTLxWk8BEySHdVSUf%2fKQ4eiDXc%3d&risl=&pid=ImgRaw&r=0',
        description: 'A stylish and modern living room design.Design no.-45',
      },
      {
        _id: '2',
        title: 'Cozy Living Room',
        imageUrl:
          'https://th.bing.com/th/id/OIP.6uSDeydENDf4QjlmOVcDQwHaFE?w=271&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A cozy and inviting living room space.Design no.-46',
      },
      {
        _id: '3',
        title: 'Bohemian Living Room',
        imageUrl:
          'https://th.bing.com/th/id/OIP.bnxEZOascKjXIGcZ5ABUKwHaJM?w=202&h=251&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A living room filled with vibrant colors and eclectic decor.Design no.-47',
      },
      {
        _id: '4',
        title: 'Industrial Living Room',
        imageUrl:
          'https://th.bing.com/th/id/OIP.LC_9aU_wNHaBW2TK9r4N4gHaFO?w=269&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'An industrial-style living room with exposed brick walls.Design no.-48',
      },
      {
        _id: '5',
        title: 'Scandinavian Living Room',
        imageUrl:
          'https://th.bing.com/th/id/OIP.kku67MoODyfIvSX9ZEX60wHaE8?w=294&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A minimalist Scandinavian-style living room.Design no.-49',
      },
      {
        _id: '6',
        title: 'Vintage Living Room',
        imageUrl:
          'https://th.bing.com/th/id/OIP.NMZhFjmIolkTq-kL_JSzdwHaE8?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A vintage-inspired living room with classic furniture.Design no.-50',
      },
      {
        _id: '7',
        title: 'Luxury Living Room',
        imageUrl:
          'https://th.bing.com/th/id/OIP.P7UhxtGq--SZNzBtuJ2xFgHaEW?w=310&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A luxury living room with premium decor elements.Design no.-51',
      },
      {
        _id: '8',
        title: 'Coastal Living Room',
        imageUrl:
          'https://th.bing.com/th/id/OIP.YSVuqUhgxp1upXxifPvwPAHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A coastal-themed living room with oceanic tones.Design no.-52',
      },
    ];
    setLivingRoomDesigns(mockLivingRoomDesigns);
    setFilteredDesigns(mockLivingRoomDesigns); // Initially, show all designs
  }, []);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter designs based on title matching the search term
    const filtered = livingRoomDesigns.filter((design) =>
      design.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDesigns(filtered);
  };

  return (
    <div className="living-room-page">
      <header className="navbar">
        <h1>Living Room Designs</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search living rooms..."
          className="search-bar"
        />
      </header>
      <div className="design-grid">
        {filteredDesigns.length > 0 ? (
          filteredDesigns.map((design) => (
            <div key={design._id} className="design-card">
              <img src={design.imageUrl} alt={design.title} className="design-image" />
              <div className="design-content">
                <h2>{design.title}</h2>
                <p>{design.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p> // Message when no designs match the search
        )}
      </div>
    </div>
  );
};

export default LivingRoomDesignsPage;
