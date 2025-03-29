import React from "react";
import "../component/common/Testimonials.css";
import Icon from "../../public/images/icons.svg"
const testimonials = [
    {
        id: 1,
        name: "Josh Brollins",
        title:"Testimonials",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
    {
        id: 2,
        name: "Josh Brollins",
        title:"",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                {testimonials?.map((testimonial) => (
                    <div key={testimonial?.id}>
                        <h2 className={`testimonials-title ${testimonial.title === "" ? "empty-title" : ""}`}>{testimonial.title}</h2>
                    <div  className="testimonial-card">
                        <img src={Icon} alt="" className="quote-icon top" />
                        <div className="testimonial-content">
                            <div>
                                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>

                                    <img src={testimonial?.image} alt={testimonial.name} className="testimonial-image" />
                                    <h4 className="testimonial-name">{testimonial.name}</h4>
                                </div>
                                <p className="testimonial-text">{testimonial.text}</p>
                            </div>
                        </div>
                        <img src={Icon} alt="" className="quote-icon bottom" />

                    </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
