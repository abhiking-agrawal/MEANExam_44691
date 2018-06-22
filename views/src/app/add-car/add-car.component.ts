import { Component, OnInit } from '@angular/core';
import { Car } from '../common/car';
import { Router } from '@angular/router';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  step = "1"
  carObj : Car
  features = []
  constructor(private route : Router,private dataService : DataService) { 
    this.carObj = new Car;
    this.carObj.model = ''
  }

  ngOnInit() {
  }


  
  collectFeatures(item){
    if(this.features.includes(item)){
      this.features.splice(this.features.indexOf(item),1)
    }else{
      this.features.push(item)
    }
    
  }

  goToStep2(carObj){
    console.log(carObj)
    this.step = "2"
  }

  saveTheFormData(carObj) {
    carObj.features = this.features.toString()
    console.log(carObj)
    this.dataService.addCarDetail(this.carObj)
      .subscribe((data:any) => {
        console.log(data)
        this.route.navigate(["/detailCar/"+ data.id]);
      },
    err=>{
      console.log("error",err)
    })
    
  }

}
