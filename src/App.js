import React from 'react';
import Header from "./Header";
import InsightList from "./InsightList";
import GraphView from "./GraphView";
import TableView from "./TableView";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className='top'>
            <InsightList/>
            <GraphView/>
        </div>
        <TableView/>
    </div>
  );
}

export default App;
