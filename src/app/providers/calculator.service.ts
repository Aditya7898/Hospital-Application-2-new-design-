import { Injectable } from '@angular/core';

@Injectable()

export class FormService{
    data:any;
    Rweight:any;
   storeData(data){
     this.data=data;
     this.data.Rweight = Math.round(data.weight);
     this.data.DOB=this.data.DOB.toString().split("-").reverse().join("-");
     console.log(data);
     console.log(this.data.Rweight);
   }
   

   getValue(){
       return (this.data);
   }
   

}