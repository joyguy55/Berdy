import React from 'react'
import './style.scss'
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

class List extends React.Component {
  constructor() {
    super()
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px'
    }
  }

  render() {
    console.log(this.props.movies)
    return (
      <div className="list">
        <Table style={{
          background: 181818,
          margin: '0px 20px 0px 20px'
        }} height={this.state.height} fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable} multiSelectable={this.state.multiSelectable}>
          <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll}>
            <TableRow style={{
              'border-bottom': '1px solid #282828'
            }}>
              <TableHeaderColumn tooltip="" style={{
                width: 50
              }}></TableHeaderColumn>
              <TableHeaderColumn tooltip="Movie Title">TITLE</TableHeaderColumn>
              <TableHeaderColumn tooltip="Genre's">GENRE</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody style={{
            margin: '0px'
          }} displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
            {this.props.movies.map((row, index) => (
              <TableRow style={{
                'border-bottom': '1px solid #282828'
              }} key={index} selected={row.selected}>
                <TableRowColumn style={{
                  width: 50
                }}>
                  <div className="img-cont">
                    <img key={index} alt="" src={`https://image.tmdb.org/t/p/w185//${row.poster_path}`}/>
                  </div>
                </TableRowColumn>
                <TableRowColumn style={{
                  color: '#dbdbdb'
                }}>{row.title}</TableRowColumn>
                <TableRowColumn style={{
                  color: '#dbdbdb'
                }}>{row.status}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default List
