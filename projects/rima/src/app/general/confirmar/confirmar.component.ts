import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  titulo = "";
  constructor(
    public dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

  }

  ngOnInit() {
    this.titulo = this.data.titulo;
    
  }

  confirmar(){
    this.dialogRef.close(true);
  }
  
  cancelar(){
    this.dialogRef.close(false);
  }
}
