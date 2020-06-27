import React from 'react';
import List from './Components/List';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="wrapper">
        <List/>
      </div>
    </DndProvider>
  );
}

export default App;
