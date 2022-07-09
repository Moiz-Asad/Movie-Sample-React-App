import React,{useState} from 'react'
import {Data} from '../Movies';
import Card from './Card';
import Sidebar from './Sidebar';

function Dashboard(props) {
  var Categories = {
    All: true,
    Action: false,
    Adventure: false,
    Horror: false,
    SciFi: false,
    Thriling: false,
    Deama: false,
    ActiveCategory: "all"
  }
  const [ch,setCh] = useState(true);  
  const [changer,setChanger] = useState(Categories);
  const Switcher=(ke)=>{
    Object.keys(Categories).map((key)=>{
      if (key !== 'ActiveCategory')
        Categories[key] = false;
    })
    Categories[ke] = true;
    Categories['ActiveCategory'] = ke.toLowerCase();
    setChanger(Categories);
    setCh(!ch);
  }
  return (
    <div className='Dashboard'>
      <Sidebar email={props.obj.email} navigate={props.navigate} Categories={changer} Switcher={Switcher}/>
      <div className='DashboardContainer'>
          {
              Data.map((movie)=>{
                console.log(changer.ActiveCategory);
                if (movie.tags.find((e)=>{return e.toLowerCase() == changer.ActiveCategory}))
                {
                  return <Card
                  key={movie.id} 
                  src={movie.images[0].thumbnail}
                  title={movie.title} 
                  date={movie.release_date}/>
                }
          })
        }
      </div>
    </div>
  )
}

export default Dashboard