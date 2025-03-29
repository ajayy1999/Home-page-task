import './ServiceCard.css';

const ServiceCard = ({ title, description, icon }) => {

    return (
    <div className="service-card">
      <div className="icon-container">
        <img src={icon} alt={title} className="service-icon" />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default ServiceCard;