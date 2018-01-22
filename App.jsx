import React from 'react';

import {TopPanel} from './components/TopPanel.jsx';

import './App.css';

class App extends React.Component {
   render() {
      return (
         <div className="app-component">
            <TopPanel />
         </div>
      );
   }
}
export default App;