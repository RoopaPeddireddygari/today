import { isNgTemplate } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rideFilter'
})
export class RideFilterPipe implements PipeTransform {

  transform(value: any, arg?:string): any {
    if(arg=="toOffice"){
      return value.filter((item:any)=>item.destination=="Office");
    }else if(arg=="fromOffice"){
      return value.filter((item:any)=>item.pickUp=="Office");
    }else if(arg=="others"){
      return value.filter((item:any)=>{if((item.pickUp!="Office")&&(item.destination!="Office")){return item;}});
    }else{
      return value;
    }
  }


}