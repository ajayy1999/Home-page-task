import React from "react";
import "../component/common/process.css";

const steps = [
    { id: 1, title: "Step 1", title1: "Our Process", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor" },
    { id: 2, title: "Step 2", title1: "", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor" },
    { id: 3, title: "Step 3", title1: "", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor" },
];

const Process = () => {
    return (
        <section className="process-section">
            <div className="process-container">
                {steps.map((step) => (
                    <div key={step.id} className="process-step">
                        <h2 className={`process-title ${step.title1 === "" ? "empty-title" : ""}`}>
                            {step.title1}
                        </h2>
                        <div className="circle">
                            <div className="circle-content">
                                <h3 style={{ color: "#000" }}>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;
