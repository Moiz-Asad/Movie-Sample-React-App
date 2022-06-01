import React,{ useState } from "react"

function Card(props) {
    const [MoveState,SetMoveState] = useState(false);
    const Style = {
        Container:{
            fontFamily: 'Arial, Helvetica, sans-serif',
            backgroundImage: `url(${props.src})`,
            margin: '3rem 3rem 3rem 3rem',
            width: '185px',
            cursor:'pointer',
            height: '270px',
            textAlign: 'center',
        },
        HoverContainer:{
            color: 'white',
            display: MoveState?'flex':'none',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            width: 'inherit',
            height: 'inherit',
            backgroundImage: 'linear-gradient(to top, black , transparent)',
        }
    }
  return (
    <div style={Style.Container} 
    onMouseEnter={()=>{SetMoveState(true)}}
    onMouseLeave={()=>{SetMoveState(false)}}
    >
        <div style={Style.HoverContainer}>
            <p style={{padding: '0 0.5rem', fontWeight:'bold'}}>{props.title}</p>
            <p style={{paddingRight: '0.5rem'}}>{props.date}</p>
        </div>
    </div>
  )
}

export default Card