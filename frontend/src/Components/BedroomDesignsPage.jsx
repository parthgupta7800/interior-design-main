import { useState, useEffect } from 'react';
import './bedroomDesigns.css';

const BedroomDesignsPage = () => {
  const [bedroomDesigns, setBedroomDesigns] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State to hold search query

  // Use mock data for testing the UI
  useEffect(() => {
    const mockBedroomDesigns = [
      {
        _id: '1',
        title: 'Modern Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.yVgwH3p_q5Tr2HaDWiAaswHaHU?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A sleek and modern bedroom with clean lines and neutral tones.Design no.-29',
      },
      {
        _id: '2',
        title: 'Rustic Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.ciOiYGIu9T52w1dAREUSQgHaE7?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A cozy rustic bedroom featuring wooden accents and warm lighting.Design no.-30',
      },
      {
        _id: '3',
        title: 'Luxury Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.UXGo3Iwr0qrrje-FdLDYugHaE8?w=352&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A luxurious bedroom with plush decor and premium finishes.Design no.-31',
      },
      {
        _id: '4',
        title: 'Scandinavian Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.RusQW5w2CdjI6FHCoh5TPwHaE8?w=286&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A minimalist Scandinavian-style bedroom with soft colors.Design no.-32',
      },
      {
        _id: '5',
        title: 'Small Space Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.BIXZtAmKBKywKMcBqmZosQHaJA?w=202&h=246&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A compact bedroom design perfect for small spaces.Design no.-33',
      },
      {
        _id: '6',
        title: 'Vintage Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.3ESh2lupSxYKUB26zzyo5AHaFy?w=224&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A classic vintage bedroom with ornate details and elegant decor.Design no.-34',
      },
      {
        _id: '7',
        title: 'Boho Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.u2T_VJFFbwUPBHiN75pB1wHaE8?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A bohemian bedroom with eclectic decor and vibrant colors.Design no.-35',
      },
      {
        _id: '8',
        title: 'Industrial Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.UGYqAFLxCRzd5SeDPlsHegHaE6?w=302&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'An industrial-style bedroom with exposed brick and metal finishes.Design no.-36',
      },
    ];
    setBedroomDesigns(mockBedroomDesigns);
  }, []);

  // Filter the designs based on the search query
  const filteredDesigns = bedroomDesigns.filter((design) =>
    design.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bedroom-page">
      <header className="navbar">
        <h1>Bedroom Designs</h1>
        <input
          type="text"
          placeholder="Search bedrooms..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
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
      </div>
    </div>
  );
};

export default BedroomDesignsPage;
