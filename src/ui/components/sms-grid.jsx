
'use strict';

import React from 'react';
import ReactDataGrid from 'react-data-grid';
import JSPath from 'jspath';

var ReactDataGridPlugins = require ('react-data-grid/addons');
var Toolbar = ReactDataGridPlugins.Toolbar;
var Selectors = ReactDataGridPlugins.Data.Selectors;

require('react-data-grid/dist/react-data-grid.css');


var dataSet = {data: null};

function getData () {
    var rows = [];
    for (var i = 1; i < 100; i++) {
      rows.push({
        id: i ,
        name: 'Name-' + i,
        mobilephone: '205 123 2123',
        homephone: '205 123 2123',
        workphone: '205 123 2123',
        altphone: '205 123 2123'
      });
    }
    dataSet.data = rows;
    return rows;
}

export default class SMSGrid extends React.Component {
  constructor(props) {
    super(props);

    var data = getData();
    this.state = {
         rows: data,
         selectedIndexes: [],
         filters: {},
         inputData: ''
      }

    this.submitRequest = this.submitRequest.bind(this);
    this.searchName = this.searchName.bind(this);

    this.getColumns = this.getColumns.bind(this);
    this.rowGetter = this.rowGetter.bind(this);
    this.onRowsDeselected = this.onRowsDeselected.bind(this);
    this.onRowsSelected = this.onRowsSelected.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.onClearFilters = this.onClearFilters.bind(this);

  };

  submitRequest() {
    console.log('About Button Working Fine');
  }
  searchName(e) {
    //look for matched names
    var query = '.data{.name *= '+ '"'+ e.target.value + '"}';
    console.log(query);
    var matchedNames = JSPath.apply(query, dataSet);
    console.dir(matchedNames);
    this.setState({inputData: e.target.value});
  }

  getColumns () {
    return  [
      {
        key: 'id',
        name: 'ID',
        width: 60

      },
      {
        key: 'name',
        name: 'Name',
        filterable: true
      },
      {
        key: 'mobilephone',
        name: 'Mobile Phone',
        filterable: true
      },
      {
        key: 'homephone',
        name: 'Home Phone',
        filterable: true
      },
      {
        key: 'workphone',
        name: 'Work Phone',
        filterable: true
      },
      {
        key: 'altphone',
        name: 'Alt. Phone',
        filterable: true
      }
    ];
  };

  getRows () {
    return Selectors.getRows(this.state);
  }

  getSize  () {
    return this.getRows().length;
  }

  rowGetter (rowIdx){
    var rows = this.getRows();
    return rows[rowIdx];
  }
  onRowsSelected (rows) {
    console.dir(rows);
    this.setState({selectedIndexes: this.state.selectedIndexes.concat(rows.map(r => r.rowIdx))});
    console.dir (this.state.selectedIndexes);
  };

  onRowsDeselected(rows) {
    var rowIndexes = rows.map(r => r.rowIdx);
    this.setState({selectedIndexes: this.state.selectedIndexes.filter(i => rowIndexes.indexOf(i) === -1 )});
  };

  handleFilterChange (filter){
    var newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
     delete newFilters[filter.column.key];
    }
    this.setState({filters: newFilters});
  };

  onClearFilters (){
    //all filters removed
    this.setState({filters: {} });
  };

  render() {
  {
    var rowText = this.state.selectedIndexes.length === 1 ? 'row' : 'rows';
    //<input value = {this.state.inputData} onChange = {this.searchName}></input>
    return  (
      <div>
        <span>{this.state.selectedIndexes.length} {rowText} selected</span>
         
        <ReactDataGrid
          rowKey='id'
          columns={this.getColumns()}
          rowGetter={this.rowGetter}
          rowsCount={this.state.rows.length}
          minHeight={500}
          toolbar={<Toolbar enableFilter={true}/>}
          onAddFilter={this.handleFilterChange}
          onClearFilters={this.onClearFilters}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: this.onRowsSelected,
            onRowsDeselected: this.onRowsDeselected,
            selectBy: {
              indexes: this.state.selectedIndexes
            }
          }} 
          />
      </div>);
    }  
  }
};