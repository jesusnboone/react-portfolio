import React from 'react';
import "../../index.css";
import Me from "../../assets/images/headshot.png"
function About(props) {
    return (
        
        <div class="container-fluid about">



            <div class="row overflow-hidden">
            <img src={Me} alt="Logo" class="headshot align-bottom"/>
                <div class="col-6">
                    <div class="off-white">
                        <div class="text-center justify-center me">
                            <div class="name">
                                <h2>Jesus Boone</h2>
                            </div>
                            <div class="skills container-fluid">
                                <p>
                                    Full Stack Web Developer
                    HTML, CSS, Javascript 
                    SQL, NoSQL, Node, Express
                  </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div class="row">

                <div class="port">
                    <div class="inner-port">
                        <h2 class="portfolio">
                            About Me
            </h2>
                        <p class="portfolio">
                     
                                The University of Texas at Austin Class of 2018
              Bachelor of Science in Radio-Television-Film
              Currently Enrolled in UT Austin Coding Bootcamp
              Hobbies and Interests:
              Building applications
              Discovering unique video games
              Producing music
              Caring for my golden retriever
   
                        </p>
                    </div>

                </div>

            </div>
        </div>

    )


}

export default About;