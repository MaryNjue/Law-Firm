import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>BEST LAW FIRM IN KENYA</h1>
          <p>Our clients win when our representation is at its voluminous best. Consult us today.</p>
          <button className="btn-primary">Get Free Consultation</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
