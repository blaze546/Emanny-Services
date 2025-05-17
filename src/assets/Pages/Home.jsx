import React from 'react';
import { Carousel, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaWrench } from 'react-icons/fa';
import ServicesSectionCard from '../../components/ServicesSectionCard';
import CarouselSection from '../../components/CarouselSection';
import TextBlock from '../../components/TextBlock';
import HeroSection from '../../components/HeroSection';
import CallToAction from '../../components/CallToAction';
import DreamHomeHeader from '../../components/DreamHomeHeader';
import ProjectVideo from '../../components/ProjectVideo';
import "./Home.css";


const Home = () => {
  return (
    <div className="container-fluid">

      {/* HERO IMAGE & HEADLINE SECTION */}
      <HeroSection />

      <CallToAction />

      {/*text block */}
      <TextBlock />

      {/* Hero Section with Carousel */}
      <CarouselSection />

      {/* Build Your Dream Section */}
      <DreamHomeHeader />

      {/* Testimonials Section */}
      {/* Featured Project Video */}
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold display-5">See How We Work</h2>
        <ProjectVideo
             src="/Walk Hill Kitchen slide.mp4"
            title="Kitchen Renovation"
        />

        <div className="text-center mt-3">
            <Link to="/projects" className="btn custom-gold-btn">
            View More Projects
            </Link>
        </div>
        </div>


      {/* Services Section */}
      <ServicesSectionCard />

      {/* Floating Phone Button */}
    
    </div>
  );
};

export default Home;
