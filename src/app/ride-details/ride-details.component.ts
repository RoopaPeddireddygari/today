import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bookingMsg!:string;

  rideObj!:any;

  @Input() set rideSelect(ride:any){
    this.rideObj={};
    this.rideObj=ride;
  }

  @Output() bookingEvent = new EventEmitter();

  bookBtn:boolean=true;
  cancelBtn:boolean=false;
  isBookingErr:boolean=false;
  onBooking(){
    if(this.rideObj.offerId[0]=="S"){
     this.isBookingErr=true;
    }else{
    this.isBookingErr=false;
    this.bookBtn=false;
    this.cancelBtn=true;
    this.bookingMsg=`Booking done. Your booking id: ${this.rideObj.offerId.slice(1,)}`;
    this.decrementSeat();
    this.bookingEvent.emit(false);
    }
  }
  onCancelling(){
    this.bookBtn=true;
    this.cancelBtn=false;
    this.bookingMsg="";
    this.incrementSeat()
    this.bookingEvent.emit(true);
    // {isRenderAllRides:true,decSeatId:null,incSeatId:this.rideObj.id}
  }

  decrementSeat(){
    this.rideObj = {
          id:this.rideObj.id,
          offerId:this.rideObj.offerId,
          name:this.rideObj.name,
          pickUp:this.rideObj.pickUp,
          car:this.rideObj.car,
          destination:this.rideObj.destination,
          seatsLeft:this.rideObj.seatsLeft-1
        }
  }
  incrementSeat(){
    this.rideObj = {
      id:this.rideObj.id,
      offerId:this.rideObj.offerId,
      name:this.rideObj.name,
      pickUp:this.rideObj.pickUp,
      car:this.rideObj.car,
      destination:this.rideObj.destination,
      seatsLeft:this.rideObj.seatsLeft+1
    }
  }





}
