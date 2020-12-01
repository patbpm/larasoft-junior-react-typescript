import React, { Component , ReactHTMLElement} from 'react';
import '../App.css';

type FilterState = {
    filterWord: string
    filterBy: string
}

type FilterProps = {
    filterData(filterWord: string, filterBy: string): void
}
 
class FilterList extends Component <FilterProps, FilterState> {
    filterByOptions: {  [index: string]: string
        'License Plate': string; 'Fuel Type': string; 'Manufacturer': string; 'Tyre type': string;
    }
    constructor(props : FilterProps) {
        super(props);
    
        this.state = {
          filterWord: '',
          filterBy: 'registration'
        }; 

        this.handlefilterWordChange = this.handlefilterWordChange.bind(this);
        this.handlefilterByChange = this.handlefilterByChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    
       
        this.filterByOptions = {
          'License Plate': 'registration',
          'Fuel Type': 'fuel',
          'Manufacturer': 'manufacturer',
          'Tyre type': 'tyres'
        };
    }

    getfilterByClass(filterByOption: string) {
        if (this.state.filterBy === filterByOption) {
          return 'active';
        }
        return '';
    }

    handlefilterByChange(filterByOption: string) {
        this.setState({filterBy: filterByOption});
    }

    handlefilterWordChange(event:React.ChangeEvent<HTMLInputElement>) {
        this.setState({filterWord: event.target.value});
    }

    handleFilter(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        this.props.filterData(this.state.filterWord, this.state.filterBy);
    
        event.preventDefault();
    }


    renderfilterByOptions() {
        return Object.keys(this.filterByOptions).map(filterByOption => {
          let filterByOptionValue = this.filterByOptions[filterByOption];
          return (<li className={this.getfilterByClass(filterByOptionValue)}
                      key={filterByOptionValue}
                      onClick={this.handlefilterByChange.bind(this, filterByOptionValue)}>
                    {filterByOption}
                 </li>);
        });
      }
  render() {
    return (
        <div className="filterlist">
            <div className="filter-options">
                <ul>
                    {this.renderfilterByOptions()}
                </ul>
            </div>
        <div className="filter-fields">
            <input placeholder="Filter Message" onChange={this.handlefilterWordChange} />
        </div>
        <div className="filter-submit">
            <a onClick={this.handleFilter}>Filter</a>
        </div>
      </div>
    );
  }
}
 
export default FilterList;