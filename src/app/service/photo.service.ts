import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import  { Preferences } from '@capacitor/preferences';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: FotoUsuario[] = [];

  constructor() {}

  public async anadirAGaleria() {
    const fotoTomada = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // Usa la URI de la imagen
      source: CameraSource.Camera,      // Fuerza el uso de la cámara
      quality: 100,
    });
    

    this.photos.unshift({
      filepath: "pronto...", // Nombre temporal
      webviewPath: fotoTomada.webPath!, // Ruta que puede mostrar el <img>
    });
  }
}

export interface FotoUsuario {
  filepath: string;
  webviewPath?: string;
}

