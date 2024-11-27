import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const categories = [
    {
      id: 1,
      name: "Living Room",
      link: "/living-room",
      image:
        "https://i.pinimg.com/originals/40/6f/8c/406f8ce8a24b548ac977158cc8a5db99.jpg",
    },
    {
      id: 2,
      name: "Kitchen",
      link: "/kitchen",
      image:
        "https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/06/29154116/U-Shaped-Kitchen-With-Dark-Walnut-Wooden-Cabinets-prashant-chauhan.jpg",
    },
    {
      id: 3,
      name: "Bedroom",
      link: "/bedroom",
      image:
        "https://media.designcafe.com/wp-content/uploads/2021/04/28110847/middle-class-indian-bedroom-design.jpg",
    },
    {
      id: 4,
      name: "Bathroom",
      link: "/bathroom",
      image:
        "https://i.pinimg.com/474x/10/67/93/1067933c0382630cb69db9de142fe439.jpg",
    },
  ];

  const featuredDesigns = [
    {
      id: 1,
      title: "Modern Minimalist Living Room",
      designer: "Aman Chaudhary",
      price: "25000/-",
      image:
        "https://i.pinimg.com/originals/f0/3d/bd/f03dbd1fce81dc503676a120263fb8de.jpg",
    },
    {
      id: 2,
      title: "Contemporary Kitchen Design",
      designer: "Abhay Singh",
      price: "29500/-",
      image:
        "https://4.imimg.com/data4/OX/YU/MY-24297412/indian-modern-modular-kitchen.jpg",
    },
  ];

  const handleCategories = (name) => {
    if (name == "Living Room") {
      navigate("living-room");
    } else if (name == "Kitchen") {
      navigate("kitchen");
    } else if (name == "Bedroom") {
      navigate("bedroom");
    } else if (name == "Bathroom") {
      navigate("bathroom");
    }
  };

  return (
    <div className="container2 flex flex-col  ">
      <section className="categories">
        <h3>Browse by Category</h3>
        <div className="space-x-10 grid grid-cols-4">
          {categories.map((category) => (
            <div
              onClick={() => handleCategories(category.name)}
              key={category.id}
              className="category-card"
            >
              <img src={category.image} alt={category.name} />
              <div className="category-overlay">
                <h4>{category.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Designs Section */}
      <section className="featured-designs ">
        <h3>Featured Designs</h3>
        <div className="grid grid-cols-3 space-x-8">
          {featuredDesigns.map((design) => (
            <div key={design.id} className="design-card">
              <img src={design.image} alt={design.title} />
              <div className="design-content">
                <h4>{design.title}</h4>
                <p className="designer">by {design.designer}</p>
                <div className="design-footer">
                  <span className="price">{design.price}</span>
                  <button className="view-button">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;
