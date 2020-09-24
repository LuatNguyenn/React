import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";

import Input from "./Components/input";
import Chart from "./Components/ChartDemo";

class App extends Component {
  state = {
    input: null,
  };

  addItem(item) {
    console.log("App -> addItem -> item", item);
  }
  render() {
    return (
      <div className='App'>
        <Container>
          <Row>
            <Col className='columns'>
              <Input inputValue={this.state.input} />
            </Col>
            <Col className='columns' md={3}>
              <Button click={this.addItem(this.state.input)}>Add</Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Chart />
            </Col>
          </Row>
        </Container>

        {/* 
        <div className='container'>
          <div className='form-group'>
            <label className=''>User name</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter user name'
            ></input>
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
