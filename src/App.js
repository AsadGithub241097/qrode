import imge from './images/image-qr-code.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className="box">
        <div className='boximg'>
          <img src={imge} />
        </div>
        <div className='text'>
          <p className='text1'>Improve your front-end skills by building projects</p>
          <p className='text2'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
}
export default App;
