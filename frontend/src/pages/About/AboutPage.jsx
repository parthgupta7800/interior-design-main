// AboutPage.jsx
// import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import './about.css';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AboutPage = () => {

  const [aboutPayload , setAboutPayload] = useState({
    name : "",
    email : "",
    subject : "",
    message : ""
  })

  const handleAboutPayload = (event) => {

    const {name , value} = event.target;
    setAboutPayload((prevPayload) => ({
      ...prevPayload, 
      [name]: value
    }));
    
  }

  const submitContactForm = async (event) => {
    event.preventDefault();
    try {
      const url = `http://localhost:4444/aboutForm`;
      const response = await axios.post(url, aboutPayload);
  
      if (response.status === 200) {
        toast.success(response.data.message);
        setAboutPayload({
          name : "",
          email: "",
          subject:"",
          message:""
        });
        
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('An error occurred during registration.',error);
    }
  }

  const teamMembers = [
    {
      name: 'Parth Gupta',
      role: 'Lead Designer',
      image: 'https://th.bing.com/th/id/OIP.4beP5aBf1hQoLLj_TGKmXAHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'With over 10 years of experience in interior design, John specializes in modern and contemporary spaces.'
    },
    {
      name: 'Mahima Mishra',
      role: 'Design Consultant',
      image: 'https://th.bing.com/th/id/OIP.N8PL9mRkMjN8X2tPVF58tgHaNi?w=184&h=338&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'Sarah brings creativity and functionality together, focusing on sustainable and eco-friendly design solutions.'
    },
    {
      name: 'Rajat',
      role: 'Project Manager',
      image: 'https://th.bing.com/th/id/OIP.4beP5aBf1hQoLLj_TGKmXAHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'Mike ensures smooth execution of all projects, coordinating between clients and design teams.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About InteriorHub</h1>
          <p>Transforming spaces into beautiful, functional environments</p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container1 flex flex-col ">
          <h2 className='text-5xl pb-10'>Our Story</h2>
          <div className="story-content">
            <div className="story-text">
              <p>Founded in 2024, InteriorHub has been at the forefront of revolutionary interior design solutions. We believe in creating spaces that not only look beautiful but also enhance the quality of life for our clients.</p>
              <p>Our platform brings together the best interior designers and customers, making professional design services accessible to everyone. With our innovative approach and dedication to excellence,helped transform thousands of spaces into dream environments.</p>
            </div>
            <div className="story-image">
              <img src="https://images.designtrends.com/wp-content/uploads/2016/04/16123629/Modern-Office-Workspace-Interior.jpg" alt="Interior design workspace" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team ">
        <div className="container1  flex flex-col">
          <h2 className='text-3xl pt-16' >Meet Our Team</h2>
          <div className="grid grid-cols-3 pb-16 space-x-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact flex flex-col justify-center ">
          <h2>Get in Touch</h2>
          <div className="flex justify-evenly pb-12 pr-48 w-full">
            <div className="flex items-center ">
              <div className="contact-card h-[50%] flex flex-col justify-center">
                <h3>Contact Information</h3>
                <div className="info-item">
                  <Phone size={20} />
                  <p>+91 7800328133</p>
                </div>
                <div className="info-item">
                  <Mail size={20} />
                  <p>contact@interiorhub.com</p>
                </div>
                <div className="info-item">
                  <MapPin size={20} />
                  <p>GLA university , Mathura</p>
                </div>
                <div className="info-item">
                  <Clock size={20} />
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>

                <div className="social-links">
                  <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
                  <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
                  <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h3 className='text-3xl'>Send us a Message</h3>
              <form onSubmit={submitContactForm}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input onChange={handleAboutPayload} type="text" value={aboutPayload.name} id="name" name='name' className='w-96' required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input onChange={handleAboutPayload} type="email" id="email" value={aboutPayload.email} name='email' className='w-96' required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input onChange={handleAboutPayload} type="text" id="subject" value={aboutPayload.subject} name='subject' className='w-96' required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea onChange={handleAboutPayload} id="message" name='message' value={aboutPayload.message} rows="5" className='w-96' required></textarea>
                </div>
                <button className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
      </section>
    </div>
  );
};

export default AboutPage;