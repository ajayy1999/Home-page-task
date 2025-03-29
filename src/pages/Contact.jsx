import React, { useState } from "react";
import "../component/common/Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        budget: "",
        description: ""
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        if (!formData.fname) formErrors.fname = "First Name is required";
        if (!formData.lname) formErrors.lname = "Last Name is required";
        if (!formData.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Invalid email format";
        }
        if (!formData.phone) {
            formErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            formErrors.phone = "Invalid phone number";
        }
        if (!formData.budget) formErrors.budget = "Budget is required";
        if (!formData.description) formErrors.description = "Description is required";

        setErrors(formErrors);
        return Object?.keys(formErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await fetch("http://3.7.81.243:3253/api/contact/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (data) {
                setSuccessMessage(data.message);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    budget: "",
                    description: ""
                });
                setErrors({});
                setTimeout(() => setSuccessMessage(""), 5000);
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <section className="contact-section">
            {successMessage && <div className="success-message">{successMessage}</div>}
            <div className="contact-form">
                <p style={{ color: "#000", textAlign: "center" }}><small>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</small></p>
                <card>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div>
                                <label>First Name</label>
                                <input type="text" name="fname" placeholder="Please Enter Your First Name" value={formData.fname} onChange={handleChange} className="contact-input" />
                                {errors.fname && <span className="error">{errors.fname}</span>}
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input type="text" name="lname" placeholder="Please Enter Your Last Name" value={formData.lname} onChange={handleChange} className="contact-input" />
                                {errors.lname && <span className="error">{errors.lname}</span>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <label>Email</label>
                                <input type="email" name="email" placeholder="Please Enter Your Email" value={formData.email} onChange={handleChange} className="contact-input" />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>
                            <div>
                                <label>Phone</label>
                                <input type="text" name="phone" value={formData.phone} placeholder="Please Enter Your Phone Number" onChange={handleChange} className="contact-input" />
                                {errors.phone && <span className="error">{errors.phone}</span>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <label>Budget</label>
                                <select name="budget" value={formData.budget} placeholder="" onChange={handleChange} className="contact-input">
                                    <option value="">Select Budget</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                                {errors.budget && <span className="error">{errors.budget}</span>}
                            </div>
                            <div>
                                <label>Description</label>
                                <input type="text" name="description" placeholder="Please Enter Your Description" value={formData.description} onChange={handleChange} className="contact-input" />
                                {errors.description && <span className="error">{errors.description}</span>}
                            </div>
                        </div>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </form>
                </card>
            </div>
        </section>
    );
};

export default Contact;
