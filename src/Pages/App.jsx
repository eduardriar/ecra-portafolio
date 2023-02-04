import React from 'react';
import WelcomeSection from './Sections/WelcomeSection/WelcomeSection';
import AboutMeSection from './Sections/AboutMeSection/AboutMeSection';
import FooterSection from './Sections/FooterSection/FooterSection';
import copies from '../copies.json';
import { CopiesContext } from './Context/Context';

import './App.scss';

const App = () => {

    return(
        <section className='app-main-content'>
            <CopiesContext.Provider value={copies}>
                <WelcomeSection />
                <AboutMeSection />
                <FooterSection />
            </CopiesContext.Provider>
        </section>
    )
}

export default App;