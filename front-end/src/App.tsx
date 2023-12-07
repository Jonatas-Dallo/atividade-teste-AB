import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes/Rotas';
import { RotaProvider } from './Context/RotaContext';

function App() {
  return (
      <BrowserRouter>
      <RotaProvider>
        <Rotas />
      </RotaProvider>
    </BrowserRouter>
    
  );
}

export default App;