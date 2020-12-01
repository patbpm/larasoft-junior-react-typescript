import { type } from 'os';
import React, { Component } from 'react';
import '../App.css';

type TableProps = { 
    header: JSX.Element[]
    data: JSX.Element[]
}

class Table extends Component<TableProps>{


  render() {
     
    return (
      <div >
        
        <div>
            
            <table >
                <tbody>
                <tr>{this.props.header}</tr>
                {this.props.data}
                </tbody>
            </table>
                
        </div>
      </div>
    );
  }
}
 
export default Table;