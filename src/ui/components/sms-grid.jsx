
//var QuickStartDescription = require('../components/QuickStartDescription')

//var ReactPlayground       = require('../assets/js/ReactPlayground');

import React from 'react';
import ReactDataGrid from 'react-data-grid';
require('react-data-grid/dist/react-data-grid.css');

/*
var SMSGrid = React.createClass({
  getInitialState: function(){
    var rows = [];
    for (var i = 1; i < 10; i++) {
      rows.push({
        id: i ,
        name: 'Name-' + i,
        mobilephone: '205 123 2123',
        homephone: '205 123 2123',
        workphone: '205 123 2123',
        altphone: '205 123 2123'
      });
    }
    return {rows, selectedIndexes: []};
  },
  getColumns: function() {
    return  [
      {
        key: 'id',
        name: 'ID'
      },
      {
        key: 'name',
        name: 'Name'
      },
      {
        key: 'mobilephone',
        name: 'Mobile Phone'
      },
      {
        key: 'homephone',
        name: 'Home Phone'
      },
      {
        key: 'workphone',
        name: 'Work Phone'
      },
      {
        key: 'altphone',
        name: 'Alt. Phone'
      }
    ];
  },
  rowGetter: function(i) {
    return this.state.rows[i];
  },
  onRowsSelected: function(rows) {
    console.dir(rows);
    this.setState({selectedIndexes: this.state.selectedIndexes.concat(rows.map(r => r.rowIdx))});
    console.dir (this.state.selectedIndexes);
  },
  onRowsDeselected: function(rows) {
    var rowIndexes = rows.map(r => r.rowIdx);
    this.setState({selectedIndexes: this.state.selectedIndexes.filter(i => rowIndexes.indexOf(i) === -1 )});
  },
  render: function() {
    var rowText = this.state.selectedIndexes.length === 1 ? 'row' : 'rows';
    return  (
      <div>
        <span>{this.state.selectedIndexes.length} {rowText} selected</span>
        <ReactDataGrid
          rowKey='id'
          columns={this.getColumns()}
          rowGetter={this.rowGetter}
          rowsCount={this.state.rows.length}
          minHeight={500}
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
});*/

function getData () {
    var rows = [];
    for (var i = 1; i < 10; i++) {
      rows.push({
        id: i ,
        name: 'Name-' + i,
        mobilephone: '205 123 2123',
        homephone: '205 123 2123',
        workphone: '205 123 2123',
        altphone: '205 123 2123'
      });
    }
    return rows;
}

export default class SMSGrid extends React.Component {
  constructor(props) {
    super(props);

    var data = getData();
    this.state = {
         rows: data,
         selectedIndexes: []

      }

    this.submitRequest = this.submitRequest.bind(this);
    this.getColumns = this.getColumns.bind(this);
    this.rowGetter = this.rowGetter.bind(this);
    this.onRowsDeselected = this.onRowsDeselected.bind(this);
    this.onRowsSelected = this.onRowsSelected.bind(this);

  };

  submitRequest() {
    console.log('About Button Working Fine');
  }

  getColumns () {
    return  [
      {
        key: 'id',
        name: 'ID'
      },
      {
        key: 'name',
        name: 'Name'
      },
      {
        key: 'mobilephone',
        name: 'Mobile Phone'
      },
      {
        key: 'homephone',
        name: 'Home Phone'
      },
      {
        key: 'workphone',
        name: 'Work Phone'
      },
      {
        key: 'altphone',
        name: 'Alt. Phone'
      }
    ];
  };

  rowGetter(i) {
    return this.state.rows[i];
  };

  onRowsSelected (rows) {
    console.dir(rows);
    this.setState({selectedIndexes: this.state.selectedIndexes.concat(rows.map(r => r.rowIdx))});
    console.dir (this.state.selectedIndexes);
  };

  onRowsDeselected(rows) {
    var rowIndexes = rows.map(r => r.rowIdx);
    this.setState({selectedIndexes: this.state.selectedIndexes.filter(i => rowIndexes.indexOf(i) === -1 )});
  };

  render() {
  {
    var rowText = this.state.selectedIndexes.length === 1 ? 'row' : 'rows';
    return  (
      <div>
        <span>{this.state.selectedIndexes.length} {rowText} selected</span>
        <ReactDataGrid
          rowKey='id'
          columns={this.getColumns()}
          rowGetter={this.rowGetter}
          rowsCount={this.state.rows.length}
          minHeight={500}
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