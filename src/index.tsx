import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import Parent1 from './Components/ParentToChild/Parent1';
import Parent2 from './Components/ChildToParent/Parent2';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6">
          <h3>Data Pass from Parent to Child</h3>
          <Parent1></Parent1>
        </div>
        <div className="col-sm-6 col-md-6">
          <h3>Data Pass from Child to Parent</h3>
          <Parent2></Parent2>
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
