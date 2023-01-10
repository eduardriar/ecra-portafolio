import React, { useState, useEffect, useRef } from 'react';
import SpriteSheetComponent from '../../Components/SpriteSheet/SpriteSheet';
import ArrowAnimated from '../../Components/ArrowAnimated/ArrowAnimated';

const WelcomeSection = () => {
    

    return(
        <>
            <SpriteSheetComponent>
                <ArrowAnimated />
            </SpriteSheetComponent>
        </>
    )
}

export default WelcomeSection