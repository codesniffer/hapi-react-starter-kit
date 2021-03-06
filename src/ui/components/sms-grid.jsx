
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import ReactDataGrid from 'react-data-grid';
import JSPath from 'jspath';

var ReactDataGridPlugins = require ('react-data-grid/addons');
var Toolbar = ReactDataGridPlugins.Toolbar;
var Selectors = ReactDataGridPlugins.Data.Selectors;

require('react-data-grid/dist/react-data-grid.css');

var smsText = '';
var Rows = null;
var Columns = [
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

function createRows () {
    var _rows = [];
    for (var i = 1; i < 100; i++) {
      _rows.push({
        id: i ,
        name: 'Name-' + i,
        mobilephone: '205 123 2123',
        homephone: '205 123 2123',
        workphone: '205 123 2123',
        altphone: '205 123 2123'
      });
    }
    Rows = _rows;
    return _rows;
}

export default class SMSGrid extends React.Component {
  constructor(props) {
    super(props);

    var data = createRows();
    this.state = {
         rows: data,
         selectedIndexes: [],
         filters: {}
      }

    this.sendText = this.sendText.bind(this);
    this.sendToAllMembers = this.sendToAllMembers.bind(this);

    this.rowGetter = this.rowGetter.bind(this);
    this.onRowsDeselected = this.onRowsDeselected.bind(this);
    this.onRowsSelected = this.onRowsSelected.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.onClearFilters = this.onClearFilters.bind(this);

  };

  sendText() {
      var smstext = ReactDOM.findDOMNode(this.refs.inputsmstext).value;
      console.log(smstext);
  }

  sendToAllMembers() {
      console.log('sendTo all memeber Button Working Fine');
  }


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
    return  (
      <div>
        <h3>Send SMS</h3>
        <span>{this.state.selectedIndexes.length} {rowText} selected</span>
        <ReactDataGrid
          rowKey='id'
          columns={Columns}
          rowGetter={this.rowGetter}
          rowsCount={this.getSize()}
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

        <div>
          {/*<span>Send this text as SMS to selected members (sent to only the primary number) </span>*/}
          
          <div>
            <input type="text" ref = "inputsmstext"></input>
          </div>

          <div>
            <button onClick = {this.sendText}>Send Text</button>
          </div>

        </div>

        <div>
          <button onClick = {this.sendToAllMembers}>Send to All Members</button>
        </div>

      </div>);
    }  
  }
};