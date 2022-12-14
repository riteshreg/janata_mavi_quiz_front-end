import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { TablePagination } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";


export class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchData: [],
      page: 0,
      rowsPerPage: 10,
      shouldDeletedId: null,
      openModal: false,
      progress:false,
    };
  }

  componentDidMount() {
    if (this.state.fetchData.length === 0) {
      fetch("https://janta-mabi-quiz.onrender.com/").then((response) => {
        response.json().then((result) => {
          this.setState({ fetchData: result });
        });
      });
    }
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: +event.target.value });
    // setRowsPerPage(+event.target.value);
    this.setState({ page: 0 });
    // setPage(0);
  };

  ModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius:"8px",
    border:"2px solid green"
  };

  handleDelete = () => {

    this.setState({progress:true})
    fetch(`https://janta-mabi-quiz.onrender.com/delete/${this.state.shouldDeletedId}`, {
      method: "delete",
    }).then((response)=>{
      const newData = this.state.fetchData.filter((data) => this.state.shouldDeletedId !== data._id);
      this.setState({ fetchData: newData,openModal:false,progress:false });

    })
   

   
  };

  render() {
    return (
      <>
        <TableContainer component={Paper}>
          {this.state.fetchData.length === 0 && (
            <Box sx={{ width: "100%" }}>
              <LinearProgress sx={{ height: "6px" }} />
            </Box>
          )}

          <Modal
            open={this.state.openModal}
            onClose={() => this.setState({ openModal: false })}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={this.ModalStyle}>
              <Typography className="delete_modal" id="modal-modal-title" variant="h6" component="h2">
              <span className="progress_circle_div"> Are you sure?
                {this.state.progress && <CircularProgress sx={{marginTop:"10px"}}/>}
                </span>
              </Typography>

              <div className="button_container">
                <Button variant="outlined" disabled={this.state.progress}  onClick={()=>this.setState({openModal:false})}>cancel</Button>

                <Button variant="outlined" disabled={this.state.progress} onClick={this.handleDelete}>Delete</Button>
              </div>
            </Box>
          </Modal>

          {this.state.fetchData.length > 0 && (
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Questions</TableCell>
                  <TableCell align="right">Option1</TableCell>
                  <TableCell align="right">Option2</TableCell>
                  <TableCell align="right">Option3</TableCell>
                  <TableCell align="right">Correct Answer</TableCell>
                  <TableCell align="center">tools</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {this.state.fetchData
                  .slice(
                    this.state.page * this.state.rowsPerPage,
                    this.state.page * this.state.rowsPerPage +
                      this.state.rowsPerPage
                  )
                  .map((row, index) => (
                    <TableRow key={row._id}>
                      <TableCell
                        component="th"
                        style={{ fontSize: "16px", fontWeight: "500" }}
                        scope="row"
                      >
                        {row.question}
                      </TableCell>
                      <TableCell
                        component="th"
                        tyle={{ fontSize: "16px", fontWeight: "500" }}
                        align="right"
                        scope="row"
                      >
                        {row.option1}
                      </TableCell>
                      <TableCell
                        style={{ fontSize: "16px", fontWeight: "500" }}
                        align="right"
                      >
                        {row.option2}
                      </TableCell>
                      <TableCell
                        tyle={{ fontSize: "16px", fontWeight: "500" }}
                        align="right"
                      >
                        {row.option3}
                      </TableCell>
                      <TableCell
                        tyle={{ fontSize: "16px", fontWeight: "500" }}
                        align="right"
                      >
                        {row.correctAnswer}
                      </TableCell>

                      <TableCell align="right">
                        {/* for edit */}
                        <div
                          className="iconDiv"
                          style={{
                            display: "flex",
                            alignItem: "center",
                            justifyContent: "end",
                            padding: "2px 3px",
                          }}
                        >
                          <Link to={`/update/${row._id}`}>
                            <EditIcon
                              style={{ padding: "2px", margin: "0px 5px" }}
                            />
                          </Link>
                          {/* for update */}
                          <DeleteIcon
                            style={{
                              cursor: "pointer",
                              padding: "2px",
                              margin: "0px 5px",
                            }}
                            onClick={() => this.setState({openModal:true, shouldDeletedId:row._id} )}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          count={this.state.fetchData.length}
          rowsPerPage={this.state.rowsPerPage}
          page={this.state.page}
          component="div"
          onPageChange={this.handleChangePage}
          onRowsPerPageChange={this.handleChangeRowsPerPage}
        />
      </>
    );
  }
}

export default Admin;
