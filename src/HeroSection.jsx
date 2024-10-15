import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Trusted Legal Expertise</h1>
          <p>Tailored solutions for your legal needs.</p>
          <button className="btn-primary">Get Free Consultation</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
