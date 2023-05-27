import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import allReducers from './redux/reducers';
import Navbar from 'react-bootstrap/Navbar';
import  Container  from 'react-bootstrap/Container';
const store = configureStore({
  reducer:allReducers});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
  <Navbar bg="dark" style={{height:'100px',overflow:"hidden"}}  variant="dark" sticky='top'>
        <Container style={{height:'100px',textAlign:"center"}} >
          <Navbar.Brand  style={{marginTop:"20px"}}>
  <p style={{fontSize:"40px"}}>RAILWAY SERVICE - SEARCH STATIONS
    </p>

          </Navbar.Brand>
        </Container>
      </Navbar>
    <App />
  </Provider>
);

