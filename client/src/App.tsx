import { Card } from './components/Card.component';
import { Info } from './components/Info.component';
import './App.css'

function App() {

  return (
    <div className='h-screen bg-dark-blue-plane text-white'>
        <div className='flex flex-col justify-center'>
          <div className='my-10 bg-dark-blue-plane'>
            <Info />
          </div>
          <div className='bg-dark-blue-plane'>
            <Card />
          </div>
        </div>
    </div>
  );
}

export default App
