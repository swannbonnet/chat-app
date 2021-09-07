import React from 'react';
import './Navbar.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export default function Navbar({userName, display, displayChange}) {
    return (
        <div className='navbar_container'>

            <div className={display? 'hidden' : 'visible'}>
                <div className='title_block'>
                    <h1 className='title'>Chat app</h1>
                </div>
            </div>
            
            <div className={display? 'visible': 'hidden'}>
                <div className='welcome_block'>
                    <h1 className="title"> Welcome {userName} </h1>
                    <button className="btn" onClick={displayChange}>
                        <ExitToAppIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}
