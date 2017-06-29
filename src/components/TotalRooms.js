import React, { Component } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap';
import '../assets/App.css';

class totalRooms extends Component {

  render () {
    var ee = [];

    ee["single"]=this.props.totalHotelRooms[0].number;
    ee["double"]=this.props.totalHotelRooms[1].number;
    ee["suite"]=this.props.totalHotelRooms[2].number;
    ee["triple"]=this.props.totalHotelRooms[3].number;

    var roomsBookedByType = [];

    roomsBookedByType["single"] = 0;
    roomsBookedByType["double"] = 0;
    roomsBookedByType["suite"] = 0;
    roomsBookedByType["triple"] = 0;

    var single=false;
    var double=false;
    var suite=false;
    var triple=false;

    var search = !Object.keys(this.props.actualSearch).length;
    var isBookingDBEmpty = !Object.keys(this.props.bookingDB).length;

    if(this.props.actualSearch[0]== undefined ){
      search=true;
    }

    if(search==false){
      this.props.actualSearch[0].type== "single" && this.props.actualSearch[0].number <= this.props.totalHotelRooms[0].people 
      || this.props.actualSearch[0].type== "single" && this.props.actualSearch[0].number=="All room sizes" 
      ||this.props.actualSearch[0].type== "All room types"  && this.props.actualSearch[0].number=="All room sizes" 
      || this.props.actualSearch[0].type== "All room types"  && this.props.actualSearch[0].number <= this.props.totalHotelRooms[0].people ? 
      single= true
      : single= false

      this.props.actualSearch[0].type== "double" && this.props.actualSearch[0].number <= this.props.totalHotelRooms[1].people 
      ||this.props.actualSearch[0].type== "double" && this.props.actualSearch[0].number=="All room sizes" 
      ||this.props.actualSearch[0].type== "All room types"  && this.props.actualSearch[0].number=="All room sizes"
      || this.props.actualSearch[0].type== "All room types"  && this.props.actualSearch[0].number <= this.props.totalHotelRooms[1].people ?          
      double= true
      : double= false

      this.props.actualSearch[0].type== "suite" && this.props.actualSearch[0].number <= this.props.totalHotelRooms[2].people 
      ||this.props.actualSearch[0].type== "suite" && this.props.actualSearch[0].number=="All room sizes" 
      ||this.props.actualSearch[0].type== "All room types"  && this.props.actualSearch[0].number=="All room sizes"
      ||this.props.actualSearch[0].type== "All room types"  && this.props.actualSearch[0].number <= this.props.totalHotelRooms[2].people ? 
      suite= true
      : suite= false 

      this.props.actualSearch[0].type== "triple" && this.props.actualSearch[0].number <= this.props.totalHotelRooms[3].people
      || this.props.actualSearch[0].type== "triple" && this.props.actualSearch[0].number=="All room sizes"
      || this.props.actualSearch[0].type== "All room types"  && this.props.actualSearch[0].number=="All room sizes"
      || this.props.actualSearch[0].type== "All room types"  && this.props.actualSearch[0].number <= this.props.totalHotelRooms[3].people ? 
      triple= true
      : triple= false
    }


    if(isBookingDBEmpty == false && search == false){
      
      this.props.bookingDB.map(bd => {
        return (
          this.props.totalHotelRooms.map(hr => { 
            this.props.totalDaysSearch[0].map(td => {
              if(td == bd.reserved[0]){
                if(hr.type == bd.type ){
                  roomsBookedByType[hr.type] = Number(roomsBookedByType[hr.type])+ Number(bd.number);
                  ee[hr.type] = hr.number-Number(roomsBookedByType[hr.type]);               
                }
              }
            })
          })
        );
      })
      return (
        <Grid>
          <Col xs={12} sm={12} md={3} mdPush={4} className='bookings' >
            From: {this.props.actualSearch[0].reserved[0]} / To: {this.props.actualSearch[0].reserved[1]}
          </Col>
          <Col xs={12} sm={12} md={12} className={single && ee["single"] !=0 == true ?  'bookings' : 'hide bookings'} >
            <Col xs={3} sm={2} md={2} className="available">
              { single && ee["single"] !=0 == true ?  ee.single : ""}
              <br />
              { single == true ?  " available  " : ""}
            </Col>
            <Col xs={4} sm={3} md={2}>
              { single == true ?  "Single" : ""} 
              <br />
              { single == true ?  "For " + this.props.totalHotelRooms[0].people +" person(s) - max "+this.props.totalHotelRooms[0].max : ""}
            </Col>
            <Col mdPush={5} xs={3} sm={3} md={1}>
              { single == true ?  "Total: "+this.props.totalHotelRooms[0].price + " €" : ""}
            </Col>
            <Col mdPush={5} xs={3} sm={1} md={1}>
                 
            </Col>
            <Col mdPush={4} xs={12} sm={4} md={2}>
              { single == true ? <Button bsStyle="success returnBook" className="bookBtn" id="single" onClick={this.props.onCartRoom.bind(this)}>Add Room</Button>  : "" }
            </Col>
          </Col>
          <Col xs={12} sm={12} md={12} className={double && ee["double"] !=0 == true ?  'bookings' : 'hide bookings'}>
           <Col xs={3} sm={2} md={2} className="available">
              { double == true ?  ee.double : ""}
              <br />
              { double == true ?  " available  " : ""}
            </Col>
           <Col xs={4} sm={3} md={2}>
              { double == true ?  "Double" : ""} 
              <br />
              { double == true ?  "For " + this.props.totalHotelRooms[1].people +" person(s) - max "+this.props.totalHotelRooms[1].max : ""}
            </Col>
           <Col mdPush={5} xs={3} sm={3} md={1}>
              { double == true ?  "Total: "+this.props.totalHotelRooms[1].price + " €" : ""}
            </Col>
             <Col mdPush={5} xs={3} sm={1} md={1}>
                 
            </Col>
             <Col mdPush={4} xs={12} sm={4} md={2}>
              { double == true ? <Button bsStyle="success returnBook" className="bookBtn" id="double" onClick={this.props.onCartRoom.bind(this)}>Add Room</Button>  : "" }
            </Col>
          </Col>

          <Col xs={12} sm={12} md={12} className={suite && ee["suite"] !=0 == true ?  'bookings' : 'hide bookings'} >
           <Col xs={3} sm={2} md={2} className="available">
              { suite == true ?  ee.suite : ""}
              <br />
              { suite == true ?  " available  " : ""}
            </Col>
           <Col xs={4} sm={3} md={2}>
              { suite == true ?  "Suite" : ""} 
              <br />
              { suite == true ?  "For " + this.props.totalHotelRooms[2].people +" person(s) - max "+this.props.totalHotelRooms[2].max : ""}
            </Col>
            <Col mdPush={5} xs={3} sm={3} md={1}>
              { suite == true ?  "Total: "+this.props.totalHotelRooms[2].price + " €" : ""}
            </Col>
            <Col mdPush={5} xs={3} sm={1} md={1}>
                 
            </Col>
            <Col mdPush={4} xs={12} sm={4} md={2}>
              { suite == true ? <Button bsStyle="success returnBook" className="bookBtn" id="suite" onClick={this.props.onCartRoom.bind(this)}>Add Room</Button>  : "" }
            </Col>
          </Col>


          <Col xs={12} sm={12} md={12} className={triple && ee["triple"] !=0 == true ?  'bookings' : 'hide bookings'} >
            <Col xs={3} sm={2} md={2} className="available">
              { triple == true ?  ee.triple : ""}
              <br />
              { triple == true ?  " available  " : ""}
            </Col>
            <Col xs={4} sm={3} md={2}>
              { triple == true ?  "Triple" : ""} 
              <br />
              { triple == true ?  "For " + this.props.totalHotelRooms[3].people +" person(s) - max "+this.props.totalHotelRooms[3].max : ""}
            </Col>
            <Col mdPush={5} xs={3} sm={3} md={1}>
              { triple == true ?  "Total: "+this.props.totalHotelRooms[3].price + " €" : ""}
            </Col>
            <Col mdPush={5} xs={3} sm={1} md={1}>
                 
            </Col>
            <Col mdPush={4} xs={12} sm={4} md={2}>
              { triple == true ? <Button bsStyle="success returnBook" className="bookBtn" id="triple" onClick={this.props.onCartRoom.bind(this)}>Add Room</Button>  : "" }
            </Col>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <Button className="btn-danger returnBook" onClick={this.props.onReturnButton.bind(this)}>Return</Button>
          </Col>
          <Col xs={12} sm={6} md={4} mdPush={2}>
            <Button bsStyle="success returnBook" className="bookBtn {`indicator${this.props.currentSlide2 === 1 ? ' current' : ''}`}" onClick={this.props.onBookRooms.bind(this)}>Book Now</Button>
          </Col>
        </Grid>
      );
    }
    else{
      return (
        <ul></ul>   
      );
    }
  }
}

export default totalRooms;