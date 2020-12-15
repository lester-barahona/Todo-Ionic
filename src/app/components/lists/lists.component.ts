import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from './../../services/deseos.service';
import { AlertController, IonList } from '@ionic/angular';
import { List } from './../../models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild(IonList) listIon:IonList;
  @Input()finish=true;

  constructor(public _deseos:DeseosService,private router:Router,private alertController:AlertController) { }

  ngOnInit() {}

  showList(id:number){
    this.router.navigateByUrl(`/tabs/${(this.finish)?'tab2':'tab1'}/add/${id}`);
  }

  deleteList(id:number){ 
    this._deseos.deleteList(id);
  }

  async changeListName(list:List){
    const alert = await this.alertController.create({
      header: 'Cambiar Titulo',
      inputs:[
        {
          name:'newTitle',
          type:'text',
          value:list.title,
          placeholder:'Nombre de la Lista'
        }
      ],
      buttons: [
        {
          text:'Cancelar',
          role:'cancel',
          handler:()=>this.listIon.closeSlidingItems()
        },
        {
          text:'Actualizar',
          handler:(data)=>{
            if(data.newTitle.length===0){
              return;
            }else{
             list.title=data.newTitle;
             this._deseos.saveStorage(); 
             this.listIon.closeSlidingItems();
            }
          }
        }
      ]
    });

    alert.present();
  }
}
