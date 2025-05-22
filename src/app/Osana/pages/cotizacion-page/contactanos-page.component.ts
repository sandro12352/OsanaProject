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
    areaTerreno:['',[Validators.required,Validators.min(1)]],
    pisos:['0',[Validators.required,Validators.min(1)]],
    distrito:['',[Validators.required,Validators.minLength(5)]],
    nombres:['',[Validators.required,Validators.minLength(5)]],
    celular:['',[Validators.required,Validators.minLength(9)]],
    correo:['',[Validators.required,Validators.email]],
    
  })
  



  constructor(private osanaService: OsanaService) {}

  isValidField(field:string):boolean|null{
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  getFieldError(field:string):string | null{
    if(!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
        switch(key){
          case 'required':
          return 'El campo es requerido.';

          case 'minlength':
            return `Minimo   ${errors['minlength'].requiredLength} caracters.`;
        }
    }
    return null
  }


  enviarMensaje():void{
    if(!this.myForm.valid) return;
    const {areaTerreno,pisos,distrito,nombres,celular,correo} = this.myForm.value;
    const data = {
      areaTerreno,
      pisos,
      distrito,
      nombres,
      celular,
      correo,
    }
    this.osanaService.enviarWhatsapp(data).subscribe({
      next: response => console.log('Mensaje enviado correctamente', response),
      error: error => console.error('Error al enviar mensaje:', error)
    })
    this.myForm.reset();
    ;
    
    
  }

}
