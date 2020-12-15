import { Title } from '@angular/platform-browser';
import { Item } from './list-item.model';
export class List{

    id:number;
    title:string;
    createdIn:Date;
    finishIn:Date;
    finish:boolean;
    items:Item[];

    constructor(title:string){
        this.title=title;
        this.createdIn=new Date();
        this.finish=false;
        this.items=[];
        this.id=new Date().getTime();
    }

}