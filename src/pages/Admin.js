import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';

export class Admin extends Component {

  constructor(props){
    super(props)
    this.state = {
      fetchData:[],
      page:0,
      rowsPerPage:10
    }
  }

  componentDidMount(){
    fetch('https://janta-mabi-quiz.onrender.com/').then((response)=>{
      response.json().then((result)=>{
        this.setState({fetchData: result})
      })
    })
  }


   handleChangePage = (event, newPage) => {
    this.setState({page:newPage})  
  };

   handleChangeRowsPerPage = (event) => {
    this.setState({rowsPerPage: +event.target.value})
    // setRowsPerPage(+event.target.value);
    this.setState({page:0})
    // setPage(0);
  };

  
  render() {
   return (
      <div>
        <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Questions</TableCell>
            <TableCell align="right">Option1</TableCell>
            <TableCell align="right">Option2</TableCell>
            <TableCell align="right">Option3</TableCell>
            <TableCell align="right">Correct Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.fetchData.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
.map((row) => (
            <TableRow
              key={row._id}
            >
              <TableCell component="th" scope="row">
                {row.question}
              </TableCell>
              <TableCell component="th" align="right" scope="row">
                {row.option1}
              </TableCell>
              <TableCell align="right">{row.option2}</TableCell>
              <TableCell align="right">{row.option3}</TableCell>
              <TableCell align="right">{row.correctAnswer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={this.state.fetchData.length}
        rowsPerPage={this.state.rowsPerPage}
        page={this.state.page}
        onPageChange={this.handleChangePage}
        onRowsPerPageChange={this.handleChangeRowsPerPage}
        />
      </Table>
    </TableContainer>
      </div>
    )
  }
}

export default Admin