import { Component} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
// 1. CORREGIDO: Se ajusta el nombre de la importación del archivo Pipe
import { DesarrolladorMayusculaPipe } from './desarrollador-mayuscula.pipe';



@Component({
  selector: 'app-root',
  standalone : true,
  imports: [
    // Importaciones necesarias para la plantilla:
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        CommonModule,
        FormsModule,
        DesarrolladorMayusculaPipe // Añadimos el Pipe standalone
      ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // Propiedad requerida por la plantilla del Canvas para el Pipe
  desarrollador = "omar valencia";

  //ngIf
  isVisible= false;

  //ngFor
  items= ['Item1' ,'Item2','Item3'];

  //ngSwitch
  value= 'case1';

  //ngClass
  isColor= true;
  isBackground= false;

  //ngStyle
  fontColor = 'blue';
  fontSize = 16;

  //disabled
  isDisabled = true;

  //title
  tooltipText = 'Este en un tooltip';

  //click
  handleClick(){
    // 2. CORREGIDO: Cambiado de alert() a console.log() para evitar interrupciones en la interfaz.
    console.log('!Botón presionado!');
    }

  //keyup y keydown
  key = "";
  onKeyUp(event: KeyboardEvent){
    this.key = "tecla levantada";
    }
  onKeyDown(event: KeyboardEvent){
      this.key = "tecla presionada";
      }
  //ngModel y ngModelChange
  name = 'Angular';

  onNameChange(value: string){
    this.name = value;
    console.log('Name Changed to:' , value);
    }

}
