import React, { useState, useEffect, useRef } from 'react';
import '../AboutMeSection/AboutMeSection.scss'

const AboutMeSection = () => {

    return (
        <section className='about-me-section'>
            <h1>My name is Eduard Rincon, and I'm a web developer</h1>
            <p>Well... As you read, I'm a <strong>web developer</strong> formed in Universidad de La Sabana in Bogotá - Colombia where I'm currently located. I'm a big fan of building the <strong>front-end</strong> part of a web page, and also really into solving challenges from it. I'm very curious about learning new technologies and passionate from writing code that everyone can understand.</p>
            <div className='about-me-section-image'></div>
        </section>
    )
}

export default AboutMeSection