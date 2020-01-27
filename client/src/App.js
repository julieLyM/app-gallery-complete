import React from 'react';
import { Provider } from 'react-redux';
import PictureContainer from './containers/PictureContainer';
import store from './store/configureStore';
function App() {
  return (
    <Provider store={store}>
      <div>
        <PictureContainer />
      </div>
    </Provider>
  );
}

export default App;
