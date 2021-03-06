import React from 'react';
import ReactDataGrid from 'react-data-grid';
import JSPath from 'jspath';

var ReactDataGridPlugins = require ('react-data-grid/addons');
var Toolbar = ReactDataGridPlugins.Toolbar;
var Selectors = ReactDataGridPlugins.Data.Selectors;

require('react-data-grid/dist/react-data-grid.css');
//helper to generate a random date
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
}

//helper to create a fixed number of rows
function createRows(numberOfRows){
  var _rows = [];
  for (var i = 1; i < numberOfRows; i++) {
    _rows.push({
      id: i,
      task: 'Task ' + i,
      complete: Math.min(100, Math.round(Math.random() * 110)),
      priority : ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
      issueType : ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
      startDate: randomDate(new Date(2015, 3, 1), new Date()),
      completeDate: randomDate(new Date(), new Date(2016, 0, 1))
    });
  }
  return _rows;
}

//function to retrieve a row for a given index
var rowGetter = function(i){
  return _rows[i];
};

//Columns definition
var columns = [
{
  key: 'id',
  name: 'ID',
  width: 80,
  filterable: true
},
{
  key: 'task',
  name: 'Title',
  filterable: true
},
{
  key: 'priority',
  name: 'Priority',
  filterable: true
},
{
  key: 'issueType',
  name: 'Issue Type',
  filterable: true
},
{
  key: 'complete',
  name: '% Complete',
  filterable: true
},
{
  key: 'startDate',
  name: 'Start Date',
  filterable: true
},
{
  key: 'completeDate',
  name: 'Expected Complete',
  filterable: true
}
]


var Example = React.createClass({

  getInitialState : function(){
    var rows = createRows(1000);
    return {rows : rows, filters : {}};
  },

  getRows : function() {
    return Selectors.getRows(this.state);
  },

  getSize : function() {
    return this.getRows().length;
  },

  rowGetter : function(rowIdx){
    var rows = this.getRows();
    return rows[rowIdx];
  },

  handleFilterChange : function(filter){
    var newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
     delete newFilters[filter.column.key];
    }
    this.setState({filters: newFilters});
  },

  onClearFilters: function(){
    //all filters removed
    this.setState({filters: {} });
  },

  render:function(){
    return(
      <div>
        <ReactDataGrid
          columns={columns}
          rowGetter={this.rowGetter}
          enableCellSelect={true}
          rowsCount={this.getSize()}
          minHeight={500}
          toolbar={<Toolbar enableFilter={true}/>}
          onAddFilter={this.handleFilterChange}
          onClearFilters={this.onClearFilters}
          />
      </div>
    )
  }
});

export default Example;