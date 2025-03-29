
import { useState } from "react";
import "./Hero.css";
import Button from "../common/Button";
import bottomBg from "/images/banner-1.png";
import bottom2 from "/images/bottom.png";

const Hero = () => {
    const [turnoverAbove85k, setTurnoverAbove85k] = useState(null);

    return (
        <div className="hero-container">
            {/* Background image wrapper */}
            <div className="bg-image"></div>

            <div className="hero-content">
                <h1>HOW MUCH <br />COULD YOU SAVE?</h1>
                <p>
                    Answer the questions below to get a fixed price quotation for us to take your
                    accountancy hassles away from you.
                </p>

                <div className="quotation-card">
                    <h2>Is your turnover expected to be more than £85k?</h2>
                    <div className="button-group">
                        <Button
                            text="Yes"
                            onClick={() => setTurnoverAbove85k(true)}
                            className={turnoverAbove85k === true ? "active" : ""}
                        />
                        <Button
                            text="No"
                            onClick={() => setTurnoverAbove85k(false)}
                            className={turnoverAbove85k === false ? "active" : ""}
                        />
                    </div>
                </div>
                <p className="time-note">Takes less than 30 seconds</p>
            </div>

            <div className="hero-image">
                <img src={bottomBg} alt="Team analyzing financial data" />
            </div>

            <div className="bottom2-image">
                <img src={bottom2} alt="" />
            </div>
        </div>
    );
};

export default Hero;
