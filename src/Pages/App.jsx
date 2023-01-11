import './App.scss';
import WelcomeSection from './Sections/WelcomeSection/WelcomeSection';
import AboutMeSection from './Sections/AboutMeSection/AboutMeSection';

const App = () => {

    return(
        <section className='app-main-content'>
                <WelcomeSection />
            <div className='app-about-me'>
                <AboutMeSection />
            </div>
        </section>
    )
}

export default App;