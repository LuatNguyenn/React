import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";

import Input from "./Components/input";

class App extends Component {
  state = {
    input: null,
  }

  addItem(item) {
  console.log("App -> addItem -> item", item)
    
  }
  render() {
    return (
      <div className='App'>
        <Container>
          <Row>
            <Col className='columns'>
              <Input inputValue={this.state.input}/>
            </Col>
            <Col className='columns' md={3}>
              <Button click={this.addItem(this.state.input)} >Add</Button>
            </Col>
          </Row>

          <Row>
            <Col className='columns'></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
