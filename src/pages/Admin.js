import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { Pagination } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import "./pages_style.css";

export class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchData: [],
      skip: 0,
      rowsPerPage: 15,
      numOfData: null,
      shouldDeletedId: null,
      openModal: false,
      progress: false,
    };
  }

  componentDidMount() {
    if (this.state.fetchData.length === 0) {
      fetch(`https://janta-mabi-quiz.onrender.com/admin_question/${this.state.skip}`).then((response) => {
        response.json().then((result) => {
          console.log(result)
          this.setState({
            fetchData: result.data,
            numOfData: result.numOfItems,
          });
        });
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.skip !== prevState.skip) {
      fetch(`https://janta-mabi-quiz.onrender.com/admin_question/${this.state.skip}`).then((response) => {
        response.json().then((result) => {
          this.setState({
            fetchData: result.data,
            numOfData: result.numOfItems,
          });
        });
      });
    }
  }

 
  ModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    border: "2px solid green",
  };

  font_size = {
    fontSize: "1.06rem",
    color: "#292f33",
    fontFamily: "Roboto",
  };

  handleDelete = () => {
    this.setState({ progress: true });
    fetch(
      `https://janta-mabi-quiz.onrender.com/delete/${this.state.shouldDeletedId}`,
      {
        method: "delete",
      }
    ).then((response) => {
      const newData = this.state.fetchData.filter(
        (data) => this.state.shouldDeletedId !== data._id
      );
      this.setState({ fetchData: newData, openModal: false, progress: false });
    });
  };

  render() {
    console.log(this.state.numOfData);
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
              <Typography
                className="delete_modal"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                <span className="progress_circle_div">
                  {" "}
                  Are you sure?
                  {this.state.progress && (
                    <CircularProgress sx={{ marginTop: "10px" }} />
                  )}
                </span>
              </Typography>

              <div className="button_container">
                <Button
                  variant="outlined"
                  disabled={this.state.progress}
                  onClick={() => this.setState({ openModal: false })}
                >
                  cancel
                </Button>

                <Button
                  variant="outlined"
                  disabled={this.state.progress}
                  onClick={this.handleDelete}
                >
                  Delete
                </Button>
              </div>
            </Box>
          </Modal>

          {this.state.fetchData.length > 0 && (
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={this.font_size} align="left">
                    Questions
                  </TableCell>
                  <TableCell sx={this.font_size} align="right">
                    Option1
                  </TableCell>
                  <TableCell sx={this.font_size} align="right">
                    Option2
                  </TableCell>
                  <TableCell sx={this.font_size} align="right">
                    Option3
                  </TableCell>
                  <TableCell sx={this.font_size} align="right">
                    Answer
                  </TableCell>
                  <TableCell sx={this.font_size} align="center">
                    tools
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {this.state.fetchData
                .map((row, index) => (
                    <TableRow key={row._id}>
                      <TableCell
                        component="th"
                        sx={this.font_size}
                        style={{ fontWeight: "500" }}
                        scope="row"
                      >
                        {row.question}
                      </TableCell>
                      <TableCell
                        component="th"
                        sx={this.font_size}
                        tyle={{ fontSize: "16px", fontWeight: "500" }}
                        align="right"
                        scope="row"
                      >
                        {row.option1}
                      </TableCell>
                      <TableCell
                        sx={this.font_size}
                        style={{ fontWeight: "500" }}
                        align="right"
                      >
                        {row.option2}
                      </TableCell>
                      <TableCell
                        sx={this.font_size}
                        tyle={{ fontWeight: "500" }}
                        align="right"
                      >
                        {row.option3}
                      </TableCell>
                      <TableCell
                        sx={this.font_size}
                        style={{ fontWeight: "500" }}
                        align="right"
                      >
                        {row.correctAnswer}
                      </TableCell>

                      <TableCell sx={this.font_size} align="right">
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
                              sx={{ height: "1.5rem" }}
                              style={{ padding: "2px", margin: "0px 5px" }}
                            />
                          </Link>
                          {/* for update */}
                          <DeleteIcon
                            sx={{ height: "1.5rem" }}
                            style={{
                              cursor: "pointer",
                              padding: "2px",
                              margin: "0px 5px",
                            }}
                            onClick={() =>
                              this.setState({
                                openModal: true,
                                shouldDeletedId: row._id,
                              })
                            }
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
          <Pagination
            style={{ marginBottom: "10px", padding: "8px 6px", position:"absolute",right:0, marginRight:"20px" }}
            count={Math.floor(this.state.numOfData / 10) - 1}
            onChange={(e, value) => {
              this.setState({ skip: value * 10 });
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            variant="outlined"
            shape="rounded"
          />
        </TableContainer>
      </>
    );
  }
}

export default Admin;
