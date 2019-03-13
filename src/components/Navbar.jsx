import React from 'react';
import './assets/styles/styles.css';

function Navbar(){
  return(

  <section class="top-nav">
    <div>
      <img src="https://lh3.ggpht.com/jgRxxSNZWjiG9pGQNIoE0F-9Xgn7BzvgeyCXb-55TnR7sixhfOsLStXcZLlMwPheaic" alt="The weather" height='30px' width='30px'/>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <p><bold>THE  WEATHER  APP</bold></p>
    </ul>
  </section>
  )
}

export default Navbar;
