import React, { useState, useEffect, useRef } from 'react';
//import SpriteSheetImage from './SpriteSheetImage.jsx';
import './SpriteSheetSection.scss';

const SpriteSheetSection = () => {

    let spriteComponent = useRef(),
        frameSize = 320,
        steps = 11,
        [frame, setFrame] = useState(1),
        [lastScroll, setLastScroll] = useState(0),
        [backgroundPosition, setBackgroundPosition] = useState(0);

        useEffect(() => {
            const onScroll = () => {
                const scrolledValue = window.scrollY || window.pageYOffset,
                    windowHeight = window.innerHeight,
                    frameWindowRelation = scrolledValue / windowHeight,
                    backgroundFrameRelation = Math.min(frame - 1, Math.floor(frame * frameWindowRelation)) * frameSize;

                    setBackgroundPosition(backgroundFrameRelation);

                if (frame < steps) {
                    if (scrolledValue > lastScroll) {
                        setFrame(frame + 1);
                        setLastScroll(scrolledValue);
                    } else if (scrolledValue < lastScroll) {
                        setFrame(frame - 1);
                        setLastScroll(scrolledValue);
                    }
                }
            }
            // clean up code
            window.removeEventListener('scroll', onScroll);
            window.addEventListener('scroll', onScroll, { passive: true });
            return () => window.removeEventListener('scroll', onScroll);
        }, [lastScroll, backgroundPosition]);

    return (
        <section className='app-intro-sprite-sheet'>
                <div className='intro-sprite-sheet'>
                    {<div ref={spriteComponent} className='intro-sprite-sheet-image' style={{backgroundPositionX: '-' + backgroundPosition + 'px'}}/>}
                </div>
        </section>
    )
}

export default SpriteSheetSection;