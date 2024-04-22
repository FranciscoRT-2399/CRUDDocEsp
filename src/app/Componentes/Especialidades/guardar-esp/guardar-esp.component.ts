import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Especialidades } from '../../../Entidad/Especialidad';

@Component({
  selector: 'app-guardar-esp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guardar-esp.component.html',
  styleUrl: './guardar-esp.component.css'
})
export class GuardarEspComponent{
	
	constructor(private router: Router, private service: ServidorService){}
	
	especialidad : Especialidades = new Especialidades();
	especialidades !: Especialidades[];

	guardar(){
		this.service.guardarEsp(this.especialidad).subscribe(data => {
			this.router.navigate(['Especialidades/listar']);
		})
	}

	cancelar(){
		this.router.navigate(['Especialidades/listar']);
	}
	

}
