import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  sessionId: any
  carDetail : any
  discount : number
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.sessionId = "5b2c6d3baabf8f2d84988a97"
    this.dataService.getCarDetail().subscribe(
      (data : any) => {
        console.log(data.data)
        console.log(data.data.length)
        this.carDetail = data.data[data.data.length - 1]

        if(this.carDetail && this.carDetail.purchaseDate){
          var date = new Date(this.carDetail.purchaseDate).toString()
          if(parseInt(date.substr(8, 2)) % 2 ==0){
            this.discount = 40
          }else{
            this.discount = 30
          }
          console.log( parseInt(this.carDetail.purchaseDate.substr(8, 2)))
          console.log( date)

        }
      });
    // this.route.params.subscribe(params => {
    //   this.sessionId = params['id'];
    //   console.log(this.sessionId)
    //   this.dataService.getCarDetail(this.sessionId).subscribe(
    //     (data) => {
    //       console.log(data)
    //      // this.carDetail = data.data
    //     });
    // },_err=>{
    //   console.log("Error")
    // })
  }
}
