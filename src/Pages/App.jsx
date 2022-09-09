import './App.scss';
import SpriteSheetSection from './Sections/SpriteSheetSection';

const App = () => {

    return(
        <section className='app-main-content'>
            <div className='app-main-sprite'>
                <SpriteSheetSection />
            </div>
            
            Hello World
        </section>
    )
}

export default App;