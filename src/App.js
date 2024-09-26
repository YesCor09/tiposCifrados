import './App.css';
import { Toaster } from 'react-hot-toast';
import { AppRoutes } from './Routes';

function App() {
    return (
        <div className="App">
            <AppRoutes/>
            <Toaster/>
        </div>
    );
}

export default App;
