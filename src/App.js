import './App.css';
import { useState } from 'react';

import Navbar from './components/navbar/Navbar';
import Chat from './components/chat/Chat';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function App() {

  const [display, setDisplay] = useState(false);
  const [userName, setUserName] = useState('');

  const displayChange = () =>{
    setDisplay(!display);
  }

  return (
    <div className="App">
      <Navbar userName={userName} display={display} displayChange={displayChange} />

    <div className={display? 'hidden' : 'visible'}>

      <div className='login_container'>
        <input
          className='input_login'
          placeholder='Username'
          value={userName}
          onChange={event => setUserName(event.target.value)}
        />
        <button className='btn_login' type="submit" disabled={!userName} onClick={displayChange}>
          <ArrowForwardIcon />
        </button>
      </div>
      
    </div>
      
    <div className={display? 'visible': 'hidden'}>
      <Chat userName={userName}/>
    </div>
      
    </div>
  );
}

export default App;
