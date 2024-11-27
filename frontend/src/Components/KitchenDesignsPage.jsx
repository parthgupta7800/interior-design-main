import { useState, useEffect } from 'react';
import './kitchenDesigns.css';

const KitchenDesignsPage = () => {
  const [kitchenDesigns, setKitchenDesigns] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Use mock data for testing the UI
  useEffect(() => {
    const mockKitchenDesigns = [
      {
        _id: '1',
        title: 'Modern Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.NqLE_GkCCNU8eiA6Nz8lugHaFF?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A sleek and modern kitchen with state-of-the-art appliances.Design no.-37',
      },
      {
        _id: '2',
        title: 'Farmhouse Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.9atXrd5OD0CKTNiv7OprKAHaLM?w=202&h=305&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A cozy farmhouse kitchen with wooden accents and vintage charm.Design no.-38',
      },
      {
        _id: '3',
        title: 'Industrial Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.Il3ym45DguVD75opoPUF4AHaFQ?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'An industrial kitchen with exposed pipes and metal finishes.Design no.-39',
      },
      {
        _id: '4',
        title: 'Scandinavian Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.B9M2J2rZCfSBdOEClazUJwHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A minimalist Scandinavian kitchen with a focus on functionality.Design no.-40',
      },
      {
        _id: '5',
        title: 'Luxury Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.XEMgNkht3YLAhTanf8AsqwHaH1?w=186&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A luxurious kitchen with premium materials and finishes.Design no.-41',
      },
      {
        _id: '6',
        title: 'Rustic Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.0DiUpQklh9MDqqB21M4zogHaE8?w=202&h=135&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A rustic kitchen with earthy tones and a cozy atmosphere.Design no.-42',
      },
      {
        _id: '7',
        title: 'Contemporary Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.VvmxgBX8pTBnN6zZKDUpxwHaE8?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A contemporary kitchen with clean lines and innovative design.Design no.-43',
      },
      {
        _id: '8',
        title: 'Coastal Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.nUYsDsu-Sy7YPXr4CELFVAHaE8?w=202&h=135&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A coastal kitchen with light colors and ocean-inspired decor.Design no.-44',
      },
    ];
    setKitchenDesigns(mockKitchenDesigns);
  }, []);

  // Filter designs based on search query
  const filteredDesigns = kitchenDesigns.filter((design) =>
    design.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="kitchen-page">
      <header className="navbar">
        <h1>Kitchen Designs</h1>
        <input
          type="text"
          placeholder="Search kitchens..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
          <p className="no-results">No results found</p>
        )}
      </div>
    </div>
  );
};

export default KitchenDesignsPage;
