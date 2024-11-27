import { Search,  Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { RiAccountCircleLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../style.css";
const NavBar = ({setAuth}) => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("jwt"); // Get token from local storage

      try {
        const url = `http://localhost:4444/user`;
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`, // Set the Authorization header
          },
        });
        if (response.status === 200) {
          setUser(response.data);
        } else {
          // console.error("Unexpected response status:", response.status);
        }
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        // console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  const logOut = async () => {
    localStorage.removeItem("jwt"); // Remove token from local storage
    
    toast.success("LogOut SuccessFully");
    setAuth(false);
  };
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
    <div className="nav-container ">
      <div className="nav-logo">
        <h1>InteriorHub</h1>
      </div>

      <div className="nav-links desktop-nav">
        <Link to='/'>Home</Link>
        <Link to='/explore'>Explore</Link>
        <Link to='/designers'>Designers</Link>
        <Link to='/about'>About</Link>
      </div>

      <div className="nav-icons desktop-nav">
        
        {
          user ? <div className='flex items-center space-x-6'> <h1 className='size_l'>{user.username}</h1> <h1 className='size_l cursor-pointer' onClick={logOut}>Logout</h1> </div> :  <Link to="/login" className='account-icon'>
          <RiAccountCircleLine/>
        </Link>
        }
       
      </div>

      <button 
        className="mobile-menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {isMenuOpen && (
      <div className="mobile-menu">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">Designers</a>
        <a href="#">About</a>
      </div>
    )}
  </nav>
  )
}

export default NavBar