import { Component } from '@angular/core';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';

@Component({
  selector: 'app-camara',
  templateUrl: 'camara.page.html',
  styleUrls: ['camara.page.scss'],
})
export class CamaraPage {

  imageSource:any;

  constructor() {}
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source:CameraSource.Prompt
    });

    this.imageSource=' data:image/jpeg;base64' + image.base64String;

    console.log(this.imageSource)

    }

}

