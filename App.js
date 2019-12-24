import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import First from './First';
import Second from './Second';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="first"
          component={First}
          title="First Page Hai"
        />
        <Scene
          key="second"
          component={Second}
          title="Second Page Hai"
        />
      </Scene>
    </Router>
  );
};

export default App;
