import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService } from './rest-service.service';
import { Rides } from './rides';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {


  constructor(private restService:RestServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getRidesList();
  }

  ridesList!:Rides[];
  // errorMessage!:string;

  isOfferRide:boolean=false;


  getRidesList(){
    this.restService.getRidesList().subscribe({
      next:rides=>this.ridesList=rides,
      // error:error=>this.errorMessage=<any>error
    });
  }



  // ridesList =[
  //   {id:1,offerId:"T100",name:"Ramesh",car:"Audi",seatsLeft:3,pickUp:"Vanrose Junction",destination:"Office"},
  //   {id:2,offerId:"T101",name:"Manu",car:"Renault",seatsLeft:2,pickUp:"PTP",destination:"Office"},
  //   {id:3,offerId:"T102",name:"Shiva",car:"BMW X5",seatsLeft:7,pickUp:"Office",destination:"East-Fort"},
  //   {id:4,offerId:"T103",name:"Rajini",car:"Ford",seatsLeft:5,pickUp:"Office",destination:"Central Mail"}
  // ];


  activeState!:string;
  isActive:boolean=false;
  renderAllRides:boolean=true;

  rideObj!:any;
  renderRide:boolean=false;

  onRideSelect(ride:any){
    this.rideObj=ride;
    this.renderRide=true;
  }

  tableEvent(val:boolean){
    this.renderAllRides=val;
    this.isActive=false;
  }
  // decrementSeat(seatId:number){
  //   this.ridesList = this.ridesList.map(eachItem=>{
  //     if(eachItem.id==seatId){
  //       return {
  //         id:eachItem.id,
  //         offerId:eachItem.offerId,
  //         name:eachItem.name,
  //         pickUp:eachItem.pickUp,
  //         car:eachItem.car,
  //         destination:eachItem.destination,
  //         seatsLeft:eachItem.seatsLeft-1
  //       }
  //     }else{
  //     return eachItem;
  //     }
  //   });
  // }
  // incrementSeat(seatId:number){
  //   this.ridesList = this.ridesList.map(eachItem=>{
  //     if(eachItem.id==seatId){
  //       return {
  //         id:eachItem.id,
  //         offerId:eachItem.offerId,
  //         name:eachItem.name,
  //         pickUp:eachItem.pickUp,
  //         car:eachItem.car,
  //         destination:eachItem.destination,
  //         seatsLeft:eachItem.seatsLeft+1
  //       }
  //     }
  //     return eachItem
  //   });
  // }



  onGoBackInOfferRide(val:boolean){
    this.isOfferRide=false;
  }
  onFormSubmitInOfferRide(obj:any){
    let rideObj ={
      id:this.ridesList[this.ridesList.length-1].id+1,
      offerId:"S"+(parseInt(this.ridesList[this.ridesList.length-1].offerId.slice(1,))+1),
      name:obj.name,
      car:obj.car,
      seatsLeft:obj.seatsAvailable,
      pickUp:obj.startLocation,
      destination:obj.destination
    }
    this.ridesList.push(rideObj);

  }




  onShowAllRidesClick(){

      this.isActive=!this.isActive;
      this.activeState="showAllRides";
      // this.rideObj=null;
      if(this.renderAllRides==true){
        this.renderRide=false;
      }else{
        this.renderRide=true;
      }

  }
  onToOfficeClick(){

      this.activeState="toOffice";

  }
  onFromOfficeClick(){

      this.activeState="fromOffice";

  }
  onOthersClick(){

      this.activeState="others";
  }

  onOfferRideClick(){
    this.isOfferRide=true;
    // this.router.navigate(['/offer-ride']);
  }




}
