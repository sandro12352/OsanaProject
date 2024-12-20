import { Component } from '@angular/core';
import { OsanaService } from '../../services/osana-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactanos-page',
  templateUrl: './contactanos-page.component.html',
  styleUrl: './contactanos-page.component.css'
})
export class ContactanosPageComponent {

  // public myForm:FormGroup = new FormGroup({
  //   correo:new FormControl('',Validators.email),
  //   mensaje:new FormControl('',Validators.required),
  // });

  public fb:FormBuilder = new FormBuilder();

  public myForm:FormGroup = this.fb.group({
    correo:['',[Validators.required,Validators.email]],
    mensaje:['',[Validators.required,Validators.minLength(5)]]
  })
  



  constructor(private osanaService: OsanaService) {}




  enviarMensaje(){
    if(!this.myForm.valid) return;
    console.log(this.myForm.value);
  }

}
