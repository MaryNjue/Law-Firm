import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGavel, faBuilding, faHome, faBalanceScale, faHandshake } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Personalized Legal Consultation",
      description: "Tailored legal advice to meet your specific needs.",
      icon: faHandshake, // Icon for this service
    },
    {
      title: "Civil Litigation Services",
      description: "Expert representation in civil litigation cases.",
      icon: faGavel,
    },
    {
      title: "Corporate Law Advisory",
      description: "Guidance on corporate governance and compliance.",
      icon: faBuilding,
    },
    {
      title: "Real Estate Transactions",
      description: "Support in buying, selling, and leasing property.",
      icon: faHome,
    },
    {
      title: "Family Law Services",
      description: "Compassionate support in family legal matters.",
      icon: faUsers,
    },
    {
      title: "Mediation and Conflict Resolution",
      description: "Effective solutions for disputes outside of court.",
      icon: faBalanceScale,
    },
  ];

  return (
    <div className="services-section">
      <h2>What We Provide Our Clients With</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
