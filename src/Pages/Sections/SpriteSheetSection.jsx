import React, { useState, useEffect, useRef } from 'react';
import './SpriteSheetSection.scss';

const SpriteSheetSection = () => {

    let spriteComponent = useRef(),
        frameSize = 320,
        steps = 9,
        [frame, setFrame] = useState(0),
        [currentPosition, setCurrentPosition] = useState(0),
        [lastScroll, setLastScroll] = useState(0);

        useEffect(() => {
            const onScroll = () => {
                
                const scrolledValue = window.scrollY || window.pageYOffset,
                    documentHeight = document.body.getBoundingClientRect().height;

                    setFrame(frame + 1);

                if (scrolledValue > lastScroll)/*Esta bajando*/ {
                    console.log('Bajandoooo...');
                    setFrame(frame + 1);
                    setCurrentPosition(currentPosition + frameSize);
                    setLastScroll(scrolledValue);
                    
                } else if (scrolledValue < lastScroll) /*Esta subiendo*/ {
                    console.log('Subiendo...');
                    setFrame(frame - 1);
                    setCurrentPosition(currentPosition - frameSize)
                }
            }
            // clean up code
            //window.removeEventListener('scroll', onScroll);
            window.addEventListener('scroll', onScroll, { passive: true });
            return () => window.removeEventListener('scroll', onScroll);
        }, []);

        console.log(frame);

        const onClick = () => {
            setFrame(frame + 1);
            console.log('Clicked!!!');
        }

    return (
        <section className='app-intro-sprite-sheet'>
                <div className='intro-sprite-sheet'>
                    <div className='dump-component' onClick={() => onClick()}>
                        {frame}
                    </div>
                    {/*<div ref={spriteComponent} className='intro-sprite-sheet-image' style={{backgroundPositionX: currentPosition + 'px'}}/>*/}
                </div>
        </section>
    )
}

export default SpriteSheetSection;