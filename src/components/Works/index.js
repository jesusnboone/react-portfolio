import React from 'react';
import RedBag from "../../assets/images/red_bag.png";
import NoteTaker from "../../assets/images/note-taker.png";
import PasswordGenerator from "../../assets/images/password-generator.png";
import WorkScheduler from "../../assets/images/work-scheduler.png";
import WorthMyTime from "../../assets/images/worth-my-time.png";
import "../../index.css";

function Portfolio(props) {
    return (

        <div class="row" id="portfolio">
            <div class="column">
                <a class="myDIV" href="https://red-bag-p2.herokuapp.com/">
                <img src={RedBag} alt="Logo" />
                </a>
                <a href="https://jesusnboone.github.io/work-scheduler/">
                <img src={WorkScheduler} alt="Logo" />
                </a>
    
          </div>
                <div class="column">
                    <a href="https://gentle-stream-25122.herokuapp.com/">
                    <img src={NoteTaker} alt="Logo" />
            </a>
                        <a href="https://jessbot500.github.io/Worth-My-Time/">
                        <img src={WorthMyTime} alt="Logo" />
            </a>
                            <a href="https://jesusnboone.github.io/password-generator/">
                            <img src={PasswordGenerator} alt="Logo" />
            </a>
          </div>
        </div>
    
    )


}

export default Portfolio;