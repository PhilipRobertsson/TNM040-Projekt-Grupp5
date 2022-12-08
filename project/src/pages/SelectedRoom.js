import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Salar from '../components/Salar.json'

function getRoomData(roomCode){
    const roomData = Salar.filter(s => s.RoomCode === roomCode)[0];
    return roomData;
}


const SelectedRoom = () => {
    const roomCode = useParams().RoomCode;
    const roomData = getRoomData(roomCode);
    //console.log(roomData.RoomName != '');    
    const navigate = useNavigate();

    /*
    <Link to='/'>
        <h3>Link to home page </h3>
    </Link>
    */
    return(
        <div className='parent'>
            <div className='topBar'>
                <h1 style={{color: '#FFFFFF', display: 'inline-block'}}>{roomData.RoomCode} {(roomData.RoomName !== '') && roomData.RoomName}</h1>
                <p style={{color: '#FFFFFF', display: 'inline-block'}}>{(roomData.House !== '') && roomData.House} {(roomData.Floor !== '') && 'våning: ' + roomData.Floor}</p>
                <img className='CloseImg' alt="Close Button" src={require('../images/TempKryss.png')} onClick={() => navigate(-1)}/>
                
            </div>
            <div>
                <img style={{width: '85%', margin: '5%', border: '5px solid #3DD2DC', borderRadius: '2px'}} className='RoomImg' alt="Room Image" src={require('../images/TempPrinter.png')}/>
            </div>
            <div className='selectedRoom' style={{backgroundColor: '#FFFFFF'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <img style={{width: '10vw', height: '10vw', alignSelf: 'center'}} className='' alt='' src={require('../images/TempSlider.png')}/>
                    <p style={{marginLeft:"-4em"}}>Anpassa rutt</p>
                    <img style={{marginLeft: '40vw',marginTop: '0px', width: '5vw', height: '5vw', alignSelf: 'center'}} className='' alt='' src={require('../images/TempArrow.png')}/>
                </div>

                <div style={{width: '100%', height: '1px', backgroundColor: 'black', margin: 'auto'}}></div>

                    <p style={{fontSize: '1.1em', marginLeft: '11vw', fontWeight: 700}}>Nuvarande position:</p>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '15px', marginTop: '10px'}}>
                        <img style={{width: '8vw', height: '8vw', alignSelf:'center', filter:'invert(1)'}} alt='Location icon' src={require('../images/TempCenterMap.png')}/>
                        <div style={{border: '1px solid black', borderRadius: '15px', width: '78vw', marginLeft: '1em'}}>
                            <p style={{margin: '5%'}}>{roomData.RoomCode}</p>
                        </div>
                    </div>
                    <p style={{fontSize: '1.1em', marginLeft: '11vw', fontWeight: 700}}>Destination:</p>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '15px',marginTop: '10px'}}>
                        <img style={{width: '8vw', height: '8vw',alignSelf:'center'}} alt='Center map icon' src={require('../images/TempLocation.png')}/>
                        <div style={{border: '1px solid black', borderRadius: '15px', width: '78vw', marginLeft: '1em'}}>
                            <p style={{margin: '5%'}}>{roomData.RoomCode}</p>
                        </div>
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '10px', marginTop: '20px'}}>
                        <button style={{backgroundColor: '#3DD2DC', borderRadius: '5px', padding: '5px'}}><img style={{width: '5vw', height: '5vw'}} src={require('../images/TempLocation.png')}></img> YOOOOOOOOoo</button>
                        <button style={{backgroundColor: '#3DD2DC', borderRadius: '5px', padding: '5px'}}><img style={{width: '5vw', height: '5vw'}} src={require('../images/TempLocation.png')}></img> YOOOOOOOOoo</button>

                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                        <h2>{roomData.RoomCode} {(roomData.RoomName !== '') && roomData.RoomName} </h2>
                        <h3>{roomData.Purpose}</h3>
                        <p>{(roomData.Bokningsbar === 'y') && roomData.RoomCode + ' är bokningsbar'}</p>
                        <p>{(roomData.Bokningsbar === 'n') && roomData.RoomCode + ' är inte bokningsbar'}</p>
                    </div>
                
            </div>
        </div>
    )
}




export default SelectedRoom