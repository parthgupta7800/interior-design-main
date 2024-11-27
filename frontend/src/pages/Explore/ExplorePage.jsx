import { useState, useEffect } from "react";
import "./explore.css";

const ExplorePage = () => {
  const [designIdeas, setDesignIdeas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Use mock data for testing the UI
  useEffect(() => {
    const mockData = [
      {
        _id: '1',
        title: 'Modern Living Room',
        imageUrl: 'https://th.bing.com/th/id/R.d87ec51b5a59bf9bddf6494a54e2ef79?rik=KL9xfLrH93JJsg&riu=http%3a%2f%2fwww.dwellingdecor.com%2fwp-content%2fuploads%2f2016%2f10%2fUltra-modern-living-room.jpg&ehk=eAqdOqywwsk3yLJQkUTLxWk8BEySHdVSUf%2fKQ4eiDXc%3d&risl=&pid=ImgRaw&r=0',
        description: 'A stylish and modern living room design.Design no.-01',
      },
      {
        _id: '2',
        title: 'Cozy Bedroom',
        imageUrl: 'https://www.blesserhouse.com/wp-content/uploads/2022/09/cozy-bedroom-ideas-8-scaled.jpg',
        description: 'A warm and cozy bedroom design.Design no.-02',
      },
      {
        _id: '3',
        title: 'Elegant Dining Room',
        imageUrl: 'https://th.bing.com/th/id/OIP.uDjfqw57xMnhv3sssevYJAHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'An elegant dining room with sophisticated decor.Design no.-03',
      },
      {
        _id: '4',
        title: 'Minimalist Workspace',
        imageUrl: 'https://th.bing.com/th/id/OIP.JXm2RpbZMJNNXlgln11YkAHaFj?w=250&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A clean and simple workspace for productivity.Design no.-04',
      },
      {
        _id: '5',
        title: 'Industrial Kitchen',
        imageUrl: 'https://th.bing.com/th/id/OIP.XOTl_Uo9sDjzcFBVjEgAXgHaG8?w=196&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A sleek and functional industrial kitchen design.Design no.-05',
      },
      {
        _id: '6',
        title: 'Bohemian Living Room',
        imageUrl: 'https://th.bing.com/th/id/OIP.9EVefI3mUwXUV56927hsiwHaJQ?rs=1&pid=ImgDetMain',
        description: 'A cozy living room with vibrant colors and textures.Design no.-06',
      },
      {
        _id: '7',
        title: 'Scandinavian Bedroom',
        imageUrl: 'https://th.bing.com/th/id/OIP.2O2NtHrDAzgNxjODqwPBAwHaE8?w=291&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A minimalist and functional Scandinavian bedroom.Design no.-07',
      },
      {
        _id: '8',
        title: 'Rustic Cabin Interior',
        imageUrl: 'https://th.bing.com/th/id/OIP.C0BL4Fqo7CPWcecpL7kPUQHaE8?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A rustic design with wooden accents and earthy tones.Design no.-08',
      },
      {
        _id: '9',
        title: 'Luxury Bathroom',
        imageUrl: 'https://th.bing.com/th/id/OIP.8II6Ji1x3dsfHKELbip2ywHaFX?w=263&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A bathroom featuring modern luxury amenities.Design no.-09',
      },
      {
        _id: '10',
        title: 'Vintage Reading Nook',
        imageUrl: 'https://th.bing.com/th/id/OIP.-Y0rLJ7IQ_icb-UI2tF2nQHaIQ?w=167&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A quaint corner for reading with vintage charm.Design no.-10',
      },
      {
        _id: '11',
        title: 'Modern Kids Room',
        imageUrl: 'https://th.bing.com/th/id/OIP.Qny7P_djZPQ8rMCU6af5QQHaGe?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A playful and functional modern kids room.Design no.-11',
      },
      {
        _id: '12',
        title: 'Chic Office Space',
        imageUrl: 'https://th.bing.com/th/id/OIP.G-x5VBCfTM8mLo5CN8JoaQHaJB?w=150&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'An office space with chic and modern decor.Design no.-12',
      },
      {
        _id: '13',
        title: 'Farmhouse Kitchen',
        imageUrl: 'https://th.bing.com/th/id/OIP.mWDteLfQXVAvazQGuO2H8QHaE6?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A farmhouse kitchen with rustic charm.Design no.-13',
      },
      {
        _id: '14',
        title: 'Mediterranean Dining Room',
        imageUrl: 'https://th.bing.com/th/id/OIP.9NZwHHkX_eUY5Mk_gz5EqgHaE8?w=341&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A dining room with Mediterranean-inspired design.Design no.-14',
      },
      {
        _id: '15',
        title: 'Elegant Staircase',
        imageUrl: 'https://th.bing.com/th/id/OIP.DXwib7rStkg_yK94qw5t6wHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A staircase with a blend of elegance and modernity.Design no.-15',
      },
      {
        _id: '16',
        title: 'Contemporary Patio',
        imageUrl: 'https://th.bing.com/th/id/OIP.kqewmyCmoyqt9zNILumWtQHaHa?w=222&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A contemporary outdoor patio with comfortable seating.Design no.-16',
      },
      {
        _id: '17',
        title: 'Beachside Living Room',
        imageUrl: 'https://th.bing.com/th/id/OIP.nrvZi3vxmu7WkLy1AD0X3wAAAA?w=89&h=90&c=1&rs=1&qlt=90&r=0&dpr=1.3&pid=InlineBlock',
        description: 'A living room with coastal-inspired decor.Design no.-17',
      },
      {
        _id: '18',
        title: 'Zen Garden Design',
        imageUrl: 'https://th.bing.com/th/id/OIP.gHcAD5ohqPuYMDCxX2UWmwHaJ3?w=164&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A serene and tranquil Zen garden.Design no.-18',
      },
      {
        _id: '19',
        title: 'Urban Loft',
        imageUrl: 'https://th.bing.com/th/id/OIP.alcHUUf6lmH9j0J7VNMeIwHaE8?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A trendy and modern urban loft design.Design no.-19',
      },
      {
        _id: '20',
        title: 'Artistic Studio',
        imageUrl: 'https://th.bing.com/th/id/OIP.Tp_PzfKcnEAeU_D4zbEhAQHaFY?w=253&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'An artistic studio with unique and creative elements.Design no.-20',
      },
    ];
    setDesignIdeas(mockData);
  }, []);

  // Filter the design ideas based on the search query
  const filteredIdeas = designIdeas.filter((idea) =>
    idea.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="explore-page mb-12">
      <header className="navbar">
        <h1>Interior Design Platform</h1>
        <input
          type="text"
          placeholder="Search designs..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>
      <div className="design-grid">
        {filteredIdeas.length > 0 ? (
          filteredIdeas.map((idea) => (
            <div key={idea._id} className="design-card">
              <img
                src={idea.imageUrl}
                alt={idea.title}
                className="design-image"
              />
              <div className="design-content">
                <h2>{idea.title}</h2>
                <p>{idea.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No designs found.</p>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
