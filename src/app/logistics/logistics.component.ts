import { Component } from '@angular/core';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.css']
})
export class LogisticsComponent {
  data =[
    {
      "S_No":1,
      "R_Id":12,
      "P_code":16237729,
      "Qty":50,
      "T_Id":11,
      "D_Id":1000,
      "D_loc": "Bangalore",
      
    },
    {
      "S_No":2,
      "R_Id":13,
      "P_code":15621892,
      "Qty":45,
      "T_Id":14,
      "D_Id":6789,
      "D_loc": "Hyderabad",
      
    },
    {
      "S_No":3,
      "R_Id":19 ,
      "P_code":56743212,
      "Qty":35,
      "T_Id":22,
      "D_Id":5653,
      "D_loc": "Chennai",
      
    },
    {
      "S_No":4,
      "R_Id":17,
      "P_code":182910272,
      "Qty":21,
      "T_Id":42,
      "D_Id":3422,
      "D_loc": "Kerala",
      
    }
    
  ];
}
