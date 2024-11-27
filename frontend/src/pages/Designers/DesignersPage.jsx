import { useState, useEffect } from 'react';
import './designers.css';

const DesignersPage = () => {
  const [designers, setDesigners] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Use mock data for testing the UI
  useEffect(() => {
    const mockDesigners = [
      {
        _id: '1',
        name: 'Sophia Carter',
        profilePicture: 'https://randomuser.me/api/portraits/women/44.jpg',
        specialties: ['Modern', 'Minimalist'],
        bio: 'Sophia specializes in creating modern and minimalist interiors that are both functional and stylish.',
      },
      {
        _id: '2',
        name: 'Liam Johnson',
        profilePicture: 'https://randomuser.me/api/portraits/men/55.jpg',
        specialties: ['Industrial', 'Rustic'],
        bio: 'Liam blends industrial and rustic styles to deliver cozy yet contemporary designs.',
      },
      {
        _id: '3',
        name: 'Emma Williams',
        profilePicture: 'https://randomuser.me/api/portraits/women/68.jpg',
        specialties: ['Bohemian', 'Eclectic'],
        bio: 'Emma is known for her vibrant bohemian and eclectic designs, bringing life to any space.',
      },
      {
        _id: '4',
        name: 'Oliver Brown',
        profilePicture: 'https://randomuser.me/api/portraits/men/34.jpg',
        specialties: ['Scandinavian', 'Zen'],
        bio: 'Oliver creates calming Scandinavian and Zen-inspired interiors for peaceful living.',
      },
      {
        _id: '5',
        name: 'Isabella Davis',
        profilePicture: 'https://randomuser.me/api/portraits/women/12.jpg',
        specialties: ['Luxury', 'Classic'],
        bio: 'Isabella’s luxurious and classic designs are perfect for creating timeless elegance.',
      },
      {
        _id: '6',
        name: 'Ethan Wilson',
        profilePicture: 'https://randomuser.me/api/portraits/men/76.jpg',
        specialties: ['Urban', 'Modern'],
        bio: 'Ethan’s urban and modern designs reflect contemporary city life with a stylish edge.',
      },
      {
        _id: '7',
        name: 'Ava Miller',
        profilePicture: 'https://randomuser.me/api/portraits/women/25.jpg',
        specialties: ['Farmhouse', 'Vintage'],
        bio: 'Ava’s farmhouse and vintage designs create warm and nostalgic spaces.',
      },
      {
        _id: '8',
        name: 'Noah Anderson',
        profilePicture: 'https://randomuser.me/api/portraits/men/22.jpg',
        specialties: ['Mediterranean', 'Coastal'],
        bio: 'Noah specializes in Mediterranean and coastal interiors, perfect for beachside homes.',
      },
    ];
    setDesigners(mockDesigners);
  }, []);

  // Filter designers based on the search query
  const filteredDesigners = designers.filter((designer) =>
    designer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="designers-page mb-12">
      <header className="navbar">
        <h1>Meet the Designers</h1>
        <input
          type="text"
          placeholder="Search designers..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>
      <div className="designers-grid">
        {filteredDesigners.length > 0 ? (
          filteredDesigners.map((designer) => (
            <div key={designer._id} className="designer-card">
              <img
                src={designer.profilePicture}
                alt={designer.name}
                className="designer-profile-picture"
              />
              <div className="designer-content">
                <h2>{designer.name}</h2>
                <p>
                  <strong>Specialties:</strong> {designer.specialties.join(', ')}
                </p>
                <p>{designer.bio}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No designers found for "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
};

export default DesignersPage;
