import { Component, OnInit } from '@angular/core';

//servicio 
import { PhotosService } from '../service/photos.service';


@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrls: ['./card-photo.component.css']
})
export class CardPhotoComponent implements OnInit {

  photos:Array<any> =[];
  constructor(private photoService:PhotosService) { }

  ngOnInit() {

    this.getPhotos();
  }

  getPhotos(){
    this.photoService.getPhotos()
        .subscribe((resp:any)=>{
          this.photos = resp;
          console.log(this.photos);
        })
  }


}
