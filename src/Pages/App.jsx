import './App.scss';
import SpriteSheetSection from './Sections/SpriteSheetSection/SpriteSheetSection';

const App = () => {

    return(
        <section className='app-main-content'>
            <div className='app-main-sprite'>
                <SpriteSheetSection />
            </div>
            
            <p>Hello World</p>
        </section>
    )
}

export default App;