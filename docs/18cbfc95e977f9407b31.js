import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './javascript/navigation.jsx';
import Station_card from './javascript/card.jsx';
ReactDOM.createRoot(document.getElementById('menu')).render( /*#__PURE__*/React.createElement(Navigation, null));
ReactDOM.createRoot(document.getElementById('2_card_1')).render( /*#__PURE__*/React.createElement(Station_card, {
  text: 'Маяковская',
  margin: 0
}));
ReactDOM.createRoot(document.getElementById('2_card_2')).render( /*#__PURE__*/React.createElement(Station_card, {
  text: 'Проспект мира',
  margin: 0
}));