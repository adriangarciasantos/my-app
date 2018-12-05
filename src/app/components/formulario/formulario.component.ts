import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;  //Formulario para agrupar inputs == FormControl
  colores: FormArray;     //Array de FormControl
  msg: string;

  constructor(public frutaService: FrutaService) {
    console.trace('FormularioComponent constructor');

    const patronImg: string = '^(http(s?):\/\/).+(\.(jpg|png|jpeg))$';

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
                                Validators.min(0.01),
                                Validators.max(999)
                              ]
                              ),
      calorias: new FormControl(
                              '0',            
                              [               
                                Validators.required,
                                Validators.min(0.01),
                                Validators.max(999)
                              ]
                              ),
      oferta: new FormControl(false),
      imagen: new FormControl(
                              'https://picsum.photos/200/300/?random.png',            
                              [               
                                Validators.required,
                                Validators.pattern(patronImg)
                              ]
                              ),
      descuento: new FormControl(
                              '0',            //Valor inicial
                              [ 
                                Validators.min(0),
                                Validators.max(90)
                              ]
                              ),
      colores: new FormArray([this.crearColorFormGroup()], Validators.minLength(1))
    });

    this.msg = '';

  }

  ngOnInit() {
    console.trace('FormularioComponent ngOnInit');
  }

  crearColorFormGroup(): FormGroup{
    return new FormGroup({
        color: new FormControl(
                              'Verde', [
                              Validators.required, 
                              Validators.minLength(2), 
                              Validators.maxLength(15)
                              ])
    });
  }

  nuevoColor(){
    let arrayColores = this.formulario.get('colores') as FormArray;
    arrayColores.push(this.crearColorFormGroup());
  }

  eliminarColor(index: number){
    let arrayColores = this.formulario.get('colores') as FormArray;
    
    if(arrayColores.length > 1){
      arrayColores.removeAt(index);
    }
    
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
    fruta.colores.push(this.formulario.controls.colores.value);
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
