import {createRoot} from 'react-dom/client';
import App from './Pages/App.jsx';
import '../Globals.scss';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App/>);