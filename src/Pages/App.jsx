import './App.scss';
import SpriteSheetSection from './Sections/SpriteSheetSection/SpriteSheetSection';
import WelcomeSection from './Sections/WelcomeSection/WelcomeSection';
import AboutMeSection from './Sections/AboutMeSection/AboutMeSection';

const App = () => {

    return(
        <section className='app-main-content'>
            <div className='app-main-sprite'>
                {/*<SpriteSheetSection />*/}
                <WelcomeSection />
            </div>
            <div className='app-about-me'>
                <AboutMeSection />
            </div>
        </section>
    )
}

export default App;