import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './javascript/navigation.jsx';
import Main_button from './javascript/buttons.jsx';
import Station_card from './javascript/card.jsx';
var menuRootInstance = ReactDOM.createRoot(document.getElementById('menu'));
var button1RootInstance = ReactDOM.createRoot(document.getElementById('button_1'));
var card1in2RootInstance = ReactDOM.createRoot(document.getElementById('2_card_1'));
menuRootInstance.render( /*#__PURE__*/React.createElement(Navigation, null));
button1RootInstance.render( /*#__PURE__*/React.createElement(Main_button, {
  text: 'читать'
}));
card1in2RootInstance.render( /*#__PURE__*/React.createElement(Station_card, {
  text: 'Павелецкая',
  margin: 0
}));