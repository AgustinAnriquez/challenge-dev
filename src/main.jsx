import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {ApolloProvider} from '@apollo/client';
import { client } from './graphql/ApolloClient';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ApolloProvider client={client}>
        <App />
     </ApolloProvider>
    
  </React.StrictMode>,
)
