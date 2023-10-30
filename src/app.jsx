import React from 'react';
import './assets/scss/index.scss';

// import './App.scss';


import Block from './components/block/block';

function App() {

  return (
    <div className="app">
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
 