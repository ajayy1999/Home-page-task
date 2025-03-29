import ServiceCard from '../common/ServiceCard';
import './ServiceSection.css';
import auditIcon from '../../../public/images/01.svg';
import budgetIcon from '../../../public/images/02.svg';
import payrollIcon from '../../../public/images/03.svg';
import softwareIcon from '../../../public/images/04.svg';
import taxIcon from '../../../public/images/05.svg';
import managementIcon from '../../../public/images/06.svg';

const ServiceSection = () => {
    const services = [
        {
            id: 1,
            title: 'Audit & Account',
            icon: auditIcon,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            id: 2,
            title: 'Budget & Projections',
            icon: budgetIcon,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            id: 3,
            title: 'Payroll & Bookkeeping',
            icon: payrollIcon,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            id: 4,
            title: 'Software Training & IT',
            icon: softwareIcon,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            id: 5,
            title: 'Tax planning & Returns',
            icon: taxIcon,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            id: 6,
            title: 'Management Information',
            icon: managementIcon,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        }
    ];

    return (
        <section className="services-section">
            <div className="service-container">
                <h2 className="section-title">Services</h2>
                <div className="services-grid">
                    {services?.map(service => (
                        <ServiceCard
                            key={service?.id}
                            title={service?.title}
                            description={service?.description}
                            icon={service?.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;