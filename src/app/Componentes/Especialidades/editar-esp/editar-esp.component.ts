import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Especialidades } from '../../../Entidad/Especialidad';

@Component({
  selector: 'app-editar-esp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-esp.component.html',
  styleUrl: './editar-esp.component.css'
})
export class EditarEspComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}

	especialidad : Especialidades = new Especialidades();

	ngOnInit(): void {
		this.buscar();
	}

	buscar(){
		let id = localStorage.getItem('idEsp');
		this.especialidad.idEsp = Number(id);
		this.service.buscarEsp(this.especialidad).subscribe(data => {
			this.especialidad = data;
		})
	}

	editar(){
		this.service.editarEsp(this.especialidad).subscribe(data => {
			this.router.navigate(['Especialidades/listar']);
		})
	}

	cancelar(){
		this.router.navigate(['Especialidades/listar']);	
	}

	
}
