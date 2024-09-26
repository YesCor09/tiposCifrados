import './App.css';
import { CifradoCesar } from './CifradoCesar';
import { CifradoEscitala } from './CifradoEscitala';
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
