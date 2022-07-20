import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RestServiceService } from '../book-ride/rest-service.service';


@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router,private restService:RestServiceService) { }

  @Output() goBackEvent = new EventEmitter();

  registerForm!:FormGroup;
  isSuccess:boolean=false;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:['',Validators.required],
      startLocation:['',Validators.required],
      destination:['',Validators.required],
      car:['',Validators.required],
      seatsAvailable:['',[Validators.required,this.validateSeats]]
    });

  }
  
  @Output() submitEvent = new EventEmitter();
  onSubmit(){
  if(this.registerForm.status=="VALID"){
    this.isSuccess=true;
    this.submitEvent.emit(this.registerForm.value);

  }else{
    this.isSuccess=false;
  }
  }

  onGoBack(){
    this.goBackEvent.emit(true);
    // window.history.back();
    // this.router.navigate(['/book-ride']);
  }

  validateSeats(fc:FormControl):any{
    let NUM_REGEXP = /^[1-7]+(\.?[1-7]+)?$/;
  return NUM_REGEXP.test(fc.value) ?null:  {
    seatsInvalid: {
      message: "Seats should be greater than zero and less than 8"
    }
  };
  }


}
