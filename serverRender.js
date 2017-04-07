// fetch data from the api
import React from 'react';

// The ReactDOMServer class allows you to render your components on the server.
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';

// Promise based HTTP client for the browser and node.js
import axios from 'axios';



const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then( resp => {
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialContests={resp.data.contests} />
        ),
        initialData: resp.data
      };
    });

export default serverRender;
