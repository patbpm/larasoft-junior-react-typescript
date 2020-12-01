import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import FilterList from './components/FilterList';
import data from './utility/data.json';

interface Vehicle {
  id: number;
  manufacturer: string;
  model: string;
  type: string;
  fuel: string;
  colour: string;
  mileage: number;
  tyres: string;
  registration: string;
}

interface Data {
  data: Vehicle[];
}

type filterOptions = 'registration' | 'fuel' | 'manufacturer' | 'tyres';

class App extends Component<{}, Data> {

  constructor(props: {}) {
    super(props);

   
    this.state = {
      data: data.data
    };

    
    this.filterData = this.filterData.bind(this);

  }

  filterData(filterWord: string, filterBy: filterOptions) {
    let filtered = this.state.data.filter(vehicle => vehicle[filterBy].toLowerCase().includes(filterWord.toLowerCase()));
      
    this.setState({ data: filtered});
    
  }


  displayTableData() {
    return this.state.data.map((data) => {
      const { id, manufacturer , model, type, fuel, colour, mileage, tyres , registration } = data
      return (
          <tr key={id}>
              <td>{id}</td>
              <td>{manufacturer}</td>
              <td>{model}</td>
              <td>{type}</td>
              <td>{fuel}</td>
              <td>{colour}</td>
              <td>{mileage}</td>
              <td>{tyres }</td>
              <td>{registration}</td>
          </tr>
      ) 
    })
  }

  displayTableHeader(){
    let header = Object.keys(this.state.data[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

  render(){
    return (
      <div className="App">
          <Header />
          
          <FilterList filterData={this.filterData}/>
          
          <p>
            Please see below the table of All Vehicles!
          </p>
          <Table 
              header = {this.displayTableHeader()}
              data = {this.displayTableData()} />
          
          
      </div>
    );
  }
  
}


export default App;
