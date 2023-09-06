import { Card } from './components/Card.component';
import { Info } from './components/Info.component';
import './App.css'

function App() {

  return (
    <div className='h-screen bg-[#053B50] text-white'>
        <div className='flex flex-col justify-center'>
          <div className='my-10'>
            <Info />
          </div>
          <div>
            <Card />
          </div>
        </div>
    </div>
  );
}

export default App
