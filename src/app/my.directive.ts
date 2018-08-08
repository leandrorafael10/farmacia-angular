import { Directive,ElementRef,HostListener, Input } from '@angular/core';
import {Task} from './model/task';
@Directive({
  selector: '[myTask]'
})
export class MyDirective {

  private _myTask:Task;


  constructor(private el: ElementRef) {
    this.el.nativeElement.innerHTML='Ola mundo'
   }

   get myTask(){return this._myTask};
   
   @Input()
   set myTask(value:Task){
     debugger
     this._myTask=value
     this.changeColorTask();
    };


  
  

  @HostListener('click')
  onClick(){
    alert(this.myTask.nome)
  }

  changeColorTask(){
    
    this.el.nativeElement.className=this.myTask.valor<5? 'item-blue' :'item-red';
  }

}
