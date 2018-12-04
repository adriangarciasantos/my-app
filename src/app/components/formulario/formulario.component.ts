import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;  //Formulario para agrupar inputs == FormControl
  msg: string;

  constructor(public frutaService: FrutaService) {
    console.trace('FormularioComponent constructor');

    //Agrupación de controles == formulario
    this.formulario = new FormGroup({
      nombre: new FormControl(
                              'Kiwi',            
                              [               
                                Validators.required,
                                Validators.minLength(2),
                                Validators.maxLength(50)
                              ]
                              ),
      precio: new FormControl(
                              '0',            //Valor inicial
                              [               //Validaciones
                                Validators.required,
                                Validators.minLength(0),
                                Validators.maxLength(5)
                              ]
                              ),
      calorias: new FormControl(
                              '0',            
                              [               
                                Validators.required,
                                Validators.minLength(0),
                                Validators.maxLength(5)
                              ]
                              ),
      oferta: new FormControl(
                              false,            //Valor inicial
                              [               //Validaciones
                                Validators.required
                              ]
                              ),
      imagen: new FormControl(
                              'https://upload.wikimedia.org/wikipedia/commons/7/74/Apple_logo_dark_grey.svg',            
                              [               
                                Validators.required
                              ]
                              ),
      descuento: new FormControl(
                              '0',            //Valor inicial
                              [               //Validaciones
                                Validators.required,
                                Validators.minLength(0),
                                Validators.maxLength(2)
                              ]
                              )
    });

    this.msg = '';

  }

  ngOnInit() {
    console.trace('FormularioComponent ngOnInit');
  }

  cargarFormulario(){
    this.formulario.controls.nombre.setValue('Piña');
    this.formulario.controls.precio.setValue(2.45);
  }

  sumitar(){
    console.trace('FormularioComponent sumitar %o', this.formulario);

    let fruta = new Fruta();
    fruta.nombre = this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;
    fruta.calorias = this.formulario.controls.calorias.value;
    fruta.oferta = this.formulario.controls.oferta.value;
    fruta.imagen = this.formulario.controls.imagen.value;
    fruta.descuento = this.formulario.controls.descuento.value;
    fruta.cantidad = 0;

    this.frutaService.crear(fruta).subscribe(data =>{
      console.debug('data %o', data);
      this.msg = `${fruta.nombre} creada correctamente`;
    });

    console.debug('Llamar provider pasando la fruta %o', fruta);

  }

}
