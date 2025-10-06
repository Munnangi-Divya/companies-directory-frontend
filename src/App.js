import React from 'react';
import { CompanyProvider } from './context/CompanyContext';
import Filters from './components/Filters';
import CompanyList from './components/CompanyList';
import './styles.css';

function App() {
  return (
    <CompanyProvider>
      <div className="app">
        <h1>Companies Directory</h1>
        <Filters />
        <CompanyList />
      </div>
    </CompanyProvider>
  );
}

export default App;



