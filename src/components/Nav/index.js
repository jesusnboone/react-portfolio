import React from 'react';
import "../../index.css";

function Nav(props) {
    return (
        <div class="col align-bottom">

            <div class="grey">
                <nav class="navbar justify-content-end">
                    <a class="navbar-text" href="#portfolio">
                        Portfolio
            </a>
                    <a class="navbar-text" href="https://mail.google.com/mail/?view=cm&fs=1&to=jesusnboone@gmail.com" target="_blank">
                        About
            </a>
                    <a class="navbar-text" href="./assets/pdf/resume_jnb.pdf" target="_blank">
                        Resume
            </a>
                    <a class="navbar-text" href="https://mail.google.com/mail/?view=cm&fs=1&to=jesusnboone@gmail.com" target="_blank">
                        Contact
            </a>
                </nav>

            </div>
        </div>

    );
}

export default Nav;