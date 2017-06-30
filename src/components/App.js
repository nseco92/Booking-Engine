import React, { Component } from 'react';
import HotelBookings from '../components/HotelBookings';
import ActualBookingsList from '../components/ActualBookingsList';
import SearchForm from '../components/SearchForm';
import TotalRooms from '../components/TotalRooms';
import UpdateCart from '../components/UpdateCart';
import DetailsForm from '../components/DetailsForm';
import FinishBooking from '../components/FinishBooking';
import img1 from '../assets/images/image1.jpg';
import img2 from '../assets/images/image2.jpg';
import Deck from 'react-slide-deck';
import '../assets/bootstrap-theme.min.css';
import '../assets/bootstrap.min.css';
import '../assets/App.css';
import { Grid, Row, Col } from 'react-bootstrap';
/*import Slider from '../slider/slider'*/

class App extends Component {

  constructor() {

    var newDate = new Date();
    var day = newDate.getDate();
    var month = newDate.getMonth()+1; 
    var year = newDate.getFullYear();

    super();
    this.state = {
      dayIn : year+'-'+month+'-'+day,
      dayOut : year+'-'+month+'-'+(day+2),
      people : ['1','2','3','4','5'],
      room : ['single','double','suite','triple'],

      totalRoomsFixed: [
       {
        type : "single",
        number : "10",
       },
       {
        type : "double",
        number : "5",
       },
       {
        type : "suite",
        number : "3",
       },
       {
        type : "triple",
        number : "5",
       }
      ],

      totalHotelRooms: [
       {
        type : "single",
        number : "10",
        people : "1",
        max : "1",
        price : "60.00"
       },
       {
        type : "double",
        number : "5",
        people : "2",
        max : "2",
        price : "120.00"
       },
       {
        type : "suite",
        number : "3",
        people : "2",
        max : "4",
        price : "120.00"
       },
       {
        type : "triple",
        number : "5",
        people : "3",
        max : "3",
        price : "250.00"
       }
      ],
      bookingDB: [
       {
        type : "single",
        reserved : ["2017-06-22","2017-06-24"],
        number : "1"
       },
       {
        type : "double",
        reserved : ["2017-07-22","2017-07-24"],
        number : "1"
       },
       {
        type : "suite",
        reserved : ["2017-07-14","2017-07-18"],
        number : "1"
       }
      ],
      actualSearch : [],
      totalDaysSearch : [],
      cart: [],
      cartRooms : [
        {
          single : 0,
          double : 0,
          suite : 0,
          triple : 0
        }
      ],
      current: 0,
      userData : []
    };
    this.changeToBooking = this.changeToBooking.bind(this);
    this.changeToDetails = this.changeToDetails.bind(this);
    this.changeToResume = this.changeToResume.bind(this);
  }

  restartRooms(){
    this.state.totalHotelRooms[0].number = this.state.totalRoomsFixed[0].number;
    this.state.totalHotelRooms[1].number = this.state.totalRoomsFixed[1].number;
    this.state.totalHotelRooms[2].number = this.state.totalRoomsFixed[2].number;
    this.state.totalHotelRooms[3].number = this.state.totalRoomsFixed[3].number;
  }

  changeToBooking(target) {
    /*
    if(this.state.actualSearch == ""){
      alert("Please put a correct date");
    }
    else{*/
      this.restartRooms();
      this.setState({
         current: 1,
        });
    /*} */
  }

  changeToBookingFromDetails(target){
    this.setState({
       current: 1,
      });
  }

  changeToDetails(target) {
    this.setState({
       current: 2
      });
  }

  changeToResume(target) {
    this.setState({
       current: 3
    });
  }
  
  changeReturnToSearch(target) {
    this.restartRooms();
    var reset1 = {
      double: 0,
      single: 0,
      suite: 0,
      triple: 0
    };

    var reset2 = {
      type: "",
      reserved: ["",""],
      number: ""
    };

    this.setState({
      current: 0,
      actualSearch : reset2,
      cartRooms : [reset1]
    });
  }


  daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
  }

  calBetweenDays(dateIn,dateOut){
  
    var dateInArray = dateIn.split('-');
    var dateOutArray = dateOut.split('-');

    var dayIn = dateInArray[2];
    var monthIn = dateInArray[1];
    var yearIn = dateInArray[0];

    var dayOut = dateOutArray[2];
    var monthOut = dateOutArray[1];
    var yearOut = dateOutArray[0];

    var eachDayReserved = [];
    var totalDays= dayOut-dayIn;

    /* Booking in 2 months */
    var daysInMonthIn = this.daysInMonth(Number(monthIn),Number(yearIn));
    var daysInMonthOut = this.daysInMonth(Number(monthOut),Number(yearOut));
    var totalDaysIn = daysInMonthIn - dayIn;
    /* */

    if(monthIn == monthOut){
      for(var i=0; i<=totalDays;i++){
        eachDayReserved.push(yearIn+"-"+monthIn+"-"+dayIn);
        dayIn=Number(dayIn)+1;
      }
    }
    else{
      for(var i=0; i<=totalDaysIn;i++){
        eachDayReserved.push(yearIn+"-"+monthIn+"-"+dayIn);
        dayIn=Number(dayIn)+1;
      }
      dayIn = "01";
      for(var i=0; i<dayOut;i++){
        eachDayReserved.push(yearOut+"-"+monthOut+"-"+dayIn);
        dayIn=Number(dayIn)+1;
      }
    }
    return eachDayReserved;
  }

  handleSetSearch (event) {
    this.changeToBooking();
    event.preventDefault();
    var booking = {
      type: event.target.roomTypes.value,
      reserved: [event.target.checkIn.value,event.target.checkOut.value],
      number: event.target.peopleInput.value
    };
    var totalDaysSearch =this.calBetweenDays(event.target.checkIn.value,event.target.checkOut.value);

    this.state.actualSearch = [];
    this.setState({
      actualSearch: this.state.actualSearch.concat([booking])
    });
    this.setState({
      totalDaysSearch: this.state.totalDaysSearch.splice(0,1),
      totalDaysSearch: this.state.totalDaysSearch.concat([totalDaysSearch])
    });
  }

  handleGoToDetails(event){
    if(this.state.cartRooms[0].single != 0 || this.state.cartRooms[0].double != 0 || this.state.cartRooms[0].suite != 0 || this.state.cartRooms[0].triple != 0){
      this.changeToDetails();
      event.preventDefault();
    }
    else{
      alert("You dont have any booking");
    }
  }

  handleCartRoom (event) {
    event.preventDefault();
    var room = event.target.id;
    
    if(room=="single"){
      this.state.cartRooms[0].single +=1;
      this.state.totalHotelRooms[0].number = Number(this.state.totalHotelRooms[0].number)-1;
    }
    else if(room=="double"){
      this.state.cartRooms[0].double += 1;
      this.state.totalHotelRooms[1].number = Number(this.state.totalHotelRooms[1].number)-1;
    }
    else if(room=="suite"){
      this.state.cartRooms[0].suite += 1;
      this.state.totalHotelRooms[2].number = Number(this.state.totalHotelRooms[2].number)-1;
    }
    else if(room=="triple"){
      this.state.cartRooms[0].triple += 1;
      this.state.totalHotelRooms[3].number = Number(this.state.totalHotelRooms[3].number)-1;
    }
    this.setState({
      cart: this.state.cart.splice(0,1),
      cart: this.state.cart.concat(event.target.value)
    });
  }

  onMinusRooms(event,type,sing,double,suite,triple){

    if(event=="single"){

      type = [this.state.cartRooms[0].single -1,"single"];
      this.state.totalHotelRooms[0].number = Number(this.state.totalHotelRooms[0].number)+1;
           
      this.setState ({
        cartRooms : [{
          single: type[0],
          double: this.state.cartRooms[0].double,
          suite : this.state.cartRooms[0].suite,
          triple : this.state.cartRooms[0].triple
        }]
      }); 
    }

    else if(event=="double"){
       
      type = [this.state.cartRooms[0].double -1,"double"];
      this.state.totalHotelRooms[1].number = Number(this.state.totalHotelRooms[1].number)+1;
        
      this.setState ({
        cartRooms : [{
          single: this.state.cartRooms[0].single,
          double: type[0],
          suite : this.state.cartRooms[0].suite,
          triple : this.state.cartRooms[0].triple
        }]
      }); 
    }

    else if(event=="suite"){
       
      type = [this.state.cartRooms[0].suite -1,"suite"];
      this.state.totalHotelRooms[2].number = Number(this.state.totalHotelRooms[2].number)+1;
        
      this.setState ({
        cartRooms : [{
          single: this.state.cartRooms[0].single,
          double: this.state.cartRooms[0].double,
          suite : type[0],
          triple : this.state.cartRooms[0].triple
        }]
      }); 
     }

     else if(event=="triple"){
       
        type = [this.state.cartRooms[0].triple -1,"triple"];
        this.state.totalHotelRooms[3].number = Number(this.state.totalHotelRooms[3].number)+1;
        
        this.setState ({
          cartRooms : [{
            single: this.state.cartRooms[0].single,
            double: this.state.cartRooms[0].double,
            suite : this.state.cartRooms[0].suite,
            triple : type[0]
          }]
        }); 
     }
  }

  handleReturnToSearch(event){
    this.changeReturnToSearch();
    event.preventDefault();
  }

  onUserInfoHandler(event){

    var userInfo = {
      name: event.target.Name.value,
      surname: event.target.Surname.value,
      mail: event.target.e_mail.value,
      check_mail: event.target.Check_e_mail.value
    };

    if(userInfo.mail==userInfo.check_mail){

      this.changeToResume();
      event.preventDefault();

      var numberSing = this.state.cartRooms[0].single;
      var numberDoub = this.state.cartRooms[0].double;
      var numberSuite = this.state.cartRooms[0].suite;
      var numberTriple = this.state.cartRooms[0].triple;

      var bookingDates = [this.state.actualSearch[0].reserved[0],this.state.actualSearch[0].reserved[1]];



      if(this.state.cartRooms[0].single !=0){
        var newBookings = {
          type: "single",
          reserved: bookingDates,
          number: numberSing
        };
        this.state.bookingDB.push(newBookings);
      }
      if(this.state.cartRooms[0].double !=0){
        var newBookings = {
          type: "double",
          reserved: bookingDates,
          number: numberDoub
        };
        this.state.bookingDB.push(newBookings);
      }
      if(this.state.cartRooms[0].suite !=0){
        var newBookings = {
          type: "suite",
          reserved: bookingDates,
          number: numberSuite
        };
        this.state.bookingDB.push(newBookings);
      }
      if(this.state.cartRooms[0].triple !=0){
        var newBookings = {
          type: "triple",
          reserved: bookingDates,
          number: numberTriple
        };       
        this.state.bookingDB.push(newBookings);
      }  


      this.setState({
        userData: this.state.userData.splice(0,1),
        userData: this.state.userData.concat([userInfo]),
      });
    }
    else{
      alert("E-mails do not match");
      event.preventDefault();
    }
  }

 

  handleReturnToBooking(event){
    this.changeToBookingFromDetails();
    event.preventDefault();
  }



  render() {
    const slideClasses = {
      current: 'slideCurrent',
      entering: 'slideCurrentEntering',
      prev: 'slidePrev',
      leaving: 'slidePrevLeaving'
    };
    return (
      <div className="App" ref="App2">
        <Deck
          className='deck'
          current={this.state.current}
          slideClasses={slideClasses}
          dura={750}
        >

          <section id ="searchSection">
            <div className="App-header">
              <Grid>
                <h2>Book your room at best price</h2>
                <SearchForm currentSlide = {this.state.current} today={this.state.dayIn} future={this.state.dayOut} room={this.state.room} people = {this.state.people} setSearch={this.handleSetSearch.bind(this)} />
              </Grid>
            </div>
          </section>
           
          <Deck.Slide className='bg-green'>
            <section id ="bookingSection">
              <Row className="cartContainer">
              <Col xs={12} sm={4} md={12}>
              <UpdateCart onMinus={this.onMinusRooms.bind(this)} cartRooms = {this.state.cartRooms} cartData = {this.state.cart} minus= "false" />
              </Col>
              </Row>
              <Row className="bookingContainer">
              <Col xs={12} sm={4} md={12}>
              <TotalRooms onBookRooms = {this.handleGoToDetails.bind(this)} onReturnButton={this.handleReturnToSearch.bind(this)} onCartRoom={this.handleCartRoom.bind(this)} currentSlide2 = {this.state.current} totalDaysSearch = {this.state.totalDaysSearch} actualSearch = {this.state.actualSearch} bookingDB = {this.state.bookingDB}  totalHotelRooms={this.state.totalHotelRooms} />
              </Col>
              </Row>
            </section>
          </Deck.Slide>
            

          <Deck.Slide className='bg-red'>
            <section id ="contactSection">
              <DetailsForm onReturnButtonUser={this.handleReturnToBooking.bind(this)} onUserInfo={this.onUserInfoHandler.bind(this)} />
            </section>
          </Deck.Slide>

          <Deck.Slide className=''>
            <section id ="finishSection">
              <FinishBooking actualSearch={this.state.actualSearch} onReturnButton={this.handleReturnToSearch.bind(this)} bookedRooms={this.state.cartRooms} userData={this.state.userData} />
            </section>
          </Deck.Slide>
        </Deck>

        <p><strong>Actual Bookings</strong></p>
        <ActualBookingsList bookingDB={this.state.bookingDB}  />
      </div>
    );
  }

}

export default App;