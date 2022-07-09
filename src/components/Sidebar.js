import React, { useState } from 'react';
import Logo from '../components/Assets/Logo.png';

function Sidebar(props) {
  const [State,SetState] = useState(false);
  const Style = {
    mItem:{
        cursor: 'pointer',
        fontSize: 'large',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.4rem 3rem',
        margin: '1rem 2rem',
        borderRadius: '7px',
        fontWeight: 'bold',
        transition: 'all ease-in-out 0.5s',
    },
    mItemActive:{
        cursor: 'pointer',
        fontSize: 'large',
        display: 'flex',
        margin: '1rem 2rem',
        justifyContent: 'space-between',
        padding: '0.4rem 3rem',
        fontWeight: 'bold',
        borderRadius: '7px',
        transition: 'all ease-in-out 0.5s',
        backgroundColor: '#0795ff',
    }
}
  const Keys = ["All","Action","Adventure","Horror","SciFi","Thriling","Drama"];
  return (
    <div className='BarContainer'>
        <img src={Logo} alt="Logo" width={140} height={140} style={{position: 'fixed'}} />
        <p style={{position:'fixed',top:'7rem'}}>{props.email}</p>
        <div className='BarItems'>
          {
              Keys.map((k)=>{
                return (
                  <p key={k} onClick={()=>{
                        props.Switcher(k);
                        SetState(!State);
                      }
                    } 
                    style={props.Categories[k]?Style.mItemActive:Style.mItem}
                  >
                  {k}
                  </p>        
                );
              })            
          }
        </div>
        <p onClick={()=>props.navigate()} className='Btn' style={{position: 'fixed',bottom:'0'}}>Sign Out</p>
    </div>
  )
}

export default Sidebar