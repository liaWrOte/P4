import React, { useEffect, useState } from 'react';
import './assets/scss/index.scss';

// import './App.scss';


import Block from './components/block/block';
import Loader from './components/loader/loader';

function App() {

  const [haveLoader, setLoader] = useState(true);



  useEffect(() => {
    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
     
    document.addEventListener('mousemove',(e) => {
      mouseX = e.pageX - 30;
      mouseY = e.pageY - 30; 
      // console.log(mouseX);
    });
      
    // let circle = document.getElementById('circle');
    // setInterval(() => {
    //   xp += ((mouseX - xp)/6);
    //   yp += ((mouseY - yp)/6);
    //   circle.style.left = xp  +'px'
    //   circle.style.top = yp +'px'
    //   // console.log(circle);
    // }, 20);

    setTimeout(() => {
      setLoader(false);
    }, 100)
    // }, 5000)
  }, [])

  return (
    <div className="app">
      {haveLoader &&
        <Loader />
      }
      {/* <span id="circle"></span> */}
      <div className='column-1'>
        <div className='flex-basis-1'>
          <Block grid="small-height" content="intro"/>
          <Block grid="small-height" content="player"/>
        </div>
        <Block grid="big-height" content="animation" id="animation"/>
      </div>
        <Block grid="flex-basis-2 full-height" content="main"/>
    </div>
  );
}

export default App;
 