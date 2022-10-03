import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
//import { SidebarComponent, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { SidebarComponent, ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { SelectEventArgs } from '@syncfusion/ej2-angular-lists';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userlog = "";
  iditem = 0;
  constructor(
    public router: Router,
  ) {
    
   }

  @ViewChild('sidebar') sidebar: SidebarComponent;
  public type: string = 'Push';
  public target: string = '.content';
  @ViewChild('togglebtn')
  public togglebtn: ButtonComponent;
  public onCreated(args: any) {
       this.sidebar.element.style.visibility = '';
  }

  ngOnInit(): void {
    this.userlog = localStorage.getItem('usuario').toString();
    this.iditem = parseInt(localStorage.getItem('ITEM_MENU'));
    //console.log(this.iditem);   
  }

  btnClick(){
      if(this.togglebtn.element.classList.contains('e-active')){
          this.togglebtn.content = 'Open';
          this.sidebar.hide();
      }
      else{
          this.togglebtn.content = 'Close';
          this.sidebar.show();
      }
  }
  closeClick() {
       this.sidebar.hide();
       this.togglebtn.element.classList.remove('e-active');
       this.togglebtn.content = 'Open'
  }

  salir(){
    localStorage.removeItem("usuario") 
    localStorage.removeItem("ID_TOKEN") 
    //localStorage.clear();
    this.router.navigate(['']);
  }

  setItem(item){
    console.log(item);  
    localStorage.setItem("ITEM_MENU", item);  
    this.iditem = item;
  }

}
