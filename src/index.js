import React from 'react';

// The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to.
import ReactDOM from 'react-dom';


import App from './components/App';

// Ajax request to fetch the data from ./src/testData.json
ReactDOM.render(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);
