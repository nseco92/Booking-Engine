import React, { Component } from 'react'
import { Grid, Row, Col ,DropdownButton,MenuItem, Button } from 'react-bootstrap';
class UpdateCart extends Component {

  constructor() {
    super();
    this.state = {
      arrayCart : [
        {
          single : 0,
          double : 0,
          suite : 0,
          triple : 0
        }
      ]
    };
  }

  render () {
    if(this.state.minus == "false"){
      if(this.props.cartData=="single"){
        this.state.arrayCart[0].single=this.props.cartRooms[0].single;
      }
      else if(this.props.cartData=="double"){
        this.state.arrayCart[0].double=this.props.cartRooms[0].double;
      }
      else if(this.props.cartData=="suite"){
        this.state.arrayCart[0].suite=this.props.cartRooms[0].suite;
      }
      else if(this.props.cartData=="triple"){
        this.state.arrayCart[0].triple=this.props.cartRooms[0].triple;
      }
    }
    var sing = [this.props.cartRooms[0].single,"single"];
    var double = [this.props.cartRooms[0].double,"double"];
    var suite = [this.props.cartRooms[0].suite,"suite"];
    var triple = [this.props.cartRooms[0].triple,"triple"];

    if(sing[0] == 0 && double[0] == 0 && suite[0] ==0 &&triple[0] ==0){
      return (
        <DropdownButton className="topcorner" title="Shopping Cart" id="bg-nested-dropdown">
          <Col xs={12} sm={12} md={12} >
            "There is no bookings"
          </Col>  
        </DropdownButton>
      );
    }
    return (
      <div>
        <DropdownButton className="topcorner" title="Shopping Cart" id="bg-nested-dropdown">
          {this.props.cartData.map((z,index) => {
            <MenuItem className="cartItem" eventKey={index}>{z}</MenuItem> 
            return(
              <Grid> 
                <Row className="topCart">
                  <Col xs={12} sm={12} md={3}>
                    { sing[0] !=0 ? sing[0] +" single"+ " x 60.00 = " + (sing[0]*Number(60)) + ".00 €" : ""}
                  </Col>
                  <Col xs={12} sm={12} md={1} mdPull={1}>
                    { sing[0] !=0 ?  <Button className="btn-danger cartBtn" name="single" onClick={this.props.onMinus.bind(this,"single",sing,double,suite,triple)}>-</Button> : "" }
                  </Col>
                </Row>
                <Row className="topCart">
                  <Col xs={12} sm={12} md={3} >
                    { double[0] !=0 ? double[0] +" double"+ " x 120.00 = " + (double[0]*Number(120)) + ".00 €" : ""}
                  </Col>
                  <Col xs={12} sm={12} md={1} mdPull={1}>  
                    { double[0] !=0 ? <Button className="btn-danger cartBtn" name="double" onClick={this.props.onMinus.bind(this,"double",sing,double,suite,triple)}>-</Button> : "" }
                  </Col>
                </Row>
                <Row className="topCart">
                  <Col xs={12} sm={12} md={3} >
                    { suite[0] !=0 ? suite[0] +" suite"+ " x 120.00 = " + (suite[0]*Number(120)) + ".00 €" : ""}
                  </Col>
                  <Col xs={12} sm={12} md={1} mdPull={1}>  
                    { suite[0] !=0 ? <Button className="btn-danger cartBtn" name="suite" onClick={this.props.onMinus.bind(this,"suite",sing,double,suite,triple)}>-</Button> : "" }
                  </Col>
                </Row>
                <Row className="topCart">
                  <Col xs={12} sm={12} md={3}>
                    { triple[0] !=0 ? triple[0] +" triple"+ " x 250.00 = " + (triple[0]*Number(250)) + ".00 €" : ""}
                  </Col>
                  <Col xs={12} sm={12} md={1} mdPull={1}>  
                    { triple[0] !=0 ? <Button className="btn-danger cartBtn" name="triple" onClick={this.props.onMinus.bind(this,"triple",sing,double,suite,triple)}>-</Button> : "" }
                  </Col>
                </Row>
                <Row className="topCart">
                <div className=" totalCart"></div>
                  <Col xs={12} sm={12} md={3}>
                    {sing[0] !=0 || double[0] !=0 || suite[0] !=0 ||triple[0] !=0 ? "Total: "+ (Number(sing[0]*Number(60)) + Number(double[0]*Number(120))+Number(suite[0]*Number(120))+Number(triple[0]*Number(250))) : ""}       
                  </Col>
                </Row>
              </Grid>      
            );
          })}    
           
        </DropdownButton>
      </div>   
    );
  }
}

export default UpdateCart;
