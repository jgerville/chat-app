import './App.css';
import React from 'react';
import AddMessage from './containers/addMessage';
import MessagesList from './containers/messagesList';
import Sidebar from './containers/sidebar';

function App() {
  return (
    <div id="container">
      <Sidebar />
      <section id="main">
        <MessagesList />
        <AddMessage />
      </section>
    </div>
  );
}

export default App;
