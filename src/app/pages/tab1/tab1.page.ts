import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeseosService } from './../../services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public _deseos:DeseosService, private router:Router,private alertController: AlertController) {}

  async addList() {
    
    const alert = await this.alertController.create({
      header: 'Nueva Lista',
      inputs:[
        {
          name:'title',
          type:'text',
          placeholder:'Nombre de la Lista'
        }
      ],
      buttons: [
        {
          text:'Cancelar',
          role:'cancel',
          handler:()=>console.log("Cancelado")
        },
        {
          text:'Crear',
          handler:(data)=>{
            if(data.title.length===0){
              return;
            }else{
              const id=this._deseos.createList(data.title);
              console.log(id);
              
              this.router.navigateByUrl(`/tabs/tab1/add/${id}`);
            }
          }
        }
      ]
    });

    alert.present();
    
  }



}
