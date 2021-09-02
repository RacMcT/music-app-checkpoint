import React, { useReducer, useEffect, useState } from 'react';
import UxSwitch from './UxSwitch';
import UxSlider from './UxSlider';
import UxSelect from './UxSelect';
import UxCard from './UxCard'
export let ACTIONS = { Switch: 'switch', Slider: 'volume', Select: 'quality' };

let Dashboard = (props) => {

  let reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.Switch:
        return { ...state, online: action.payload.online };
      case ACTIONS.Slider:
        return { ...state, volume: action.payload.volume };
      case ACTIONS.Select:
        return { ...state, quality: action.payload.quality };
      default:
        return state;
    };
  };

  let [vals, dispatch] = useReducer(reducer, { online: false, volume: 70, quality: 1 });

  let objMsg = () => {
    return {
      Switch: vals.online ? '' : "Your application is offline. You won't be able to share or stream music to other devices",
      Slider: vals.volume > 80 ? 'Listening to music at a high volume could cause long-term hearing loss' : '',
      Select: vals.quality === 1 ? 'Music quality is degraded. Increase quality if your connection allows it' : ''
    };
  };

  let [msg, setMsg] = useState(objMsg());

  useEffect(() => {
    setMsg(objMsg());
    
  }, [vals]);

  let uxTxt = {
    Switch: { header: 'Online Mode', desc: 'Is this application connected to the internet?' },
    Slider: { header: 'Master Volume', desc: 'Overrides all other sound settings in this application' },
    Select: { header: 'Sound Quality', desc: 'Manually control the music quality in the event of poor connection' }
  };

  let marginLR = '45px';
//put into css for easier troubleshooting in future :) 

  let SysNotifications = () => {
    let ar = []
    for (let prop in msg) {
      if (msg[prop] !== '') ar.push(msg[prop])
    };

    let li = ar.map((m, i) => (<li key={i} style={{ listStyle: 'square' }}>{m}</li>))

    return (
      <ul>
        {li}
      </ul>
    )
  };


  return (

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

      <div style={{ width: '1000px' }}>

        <h1 style={{ color: 'grey', marginBottom: '150px' }}> Welcome User!</h1>

        <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

          <UxCard
            header={uxTxt.Switch.header}
            desc={uxTxt.Switch.desc}
            marginLR={''}
            jsx={<UxSwitch dispatch={dispatch} online={vals.online} actions={ACTIONS}/>} />

<UxCard
            header={uxTxt.Slider.header}
            desc={uxTxt.Slider.desc}
            marginLR={marginLR}
            jsx={<UxSlider dispatch={dispatch} volume={vals.volume} />} />

          <UxCard
            header={uxTxt.Select.header}
            desc={uxTxt.Select.desc}
            marginLR={''}
            jsx={<UxSelect dispatch={dispatch} quality={vals.quality} />} />

        </section>

        <section>
          <h3 style={{ margin: '60px 0px 30px 0px' }}>System Notifications:</h3>

          <SysNotifications />

        </section>

      </div>

    </div>

  )
};

export default Dashboard;