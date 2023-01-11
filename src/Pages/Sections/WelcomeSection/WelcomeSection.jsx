import React, { useState, useEffect, useRef } from 'react';
import './WelcomeSection.scss';
import SpriteSheetComponent from '../../Components/SpriteSheet/SpriteSheet';
import ArrowAnimated from '../../Components/ArrowAnimated/ArrowAnimated';

const WelcomeSection = () => {
    

    return(
        <section className='welcome-section'>
            <SpriteSheetComponent>
                <ArrowAnimated />
            </SpriteSheetComponent>
        </section>
    )
}

export default WelcomeSection