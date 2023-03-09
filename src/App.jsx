import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const test = () => {


    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://jsonplaceholder.typicode.com/todos/", requestOptions)
      .then(response => response.json())
      .then(result => {

        console.log(result);
        const header = Object.keys(result[0]);
        const headerString = header.join(',');

      const rowItems = result.map((row) =>header.map((fieldName) => JSON.stringify(row[fieldName])).join(','));
      const csv = [headerString, ...rowItems].join('\r\n');
      
      var element = document.createElement('a');
      element.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
      element.target = '_blank';
      element.download = 'export.csv';
      element.click();

      })
      .catch(error => console.log('error', error));
    
  };


  return (
    <div className="App">
      <button
        onClick={() => test()}
      > Test</button>
    </div>
  )
}

export default App
