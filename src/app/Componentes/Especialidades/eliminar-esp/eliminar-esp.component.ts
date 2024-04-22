import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Especialidades } from '../../../Entidad/Especialidad';

@Component({
  selector: 'app-eliminar-esp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar-esp.component.html',
  styleUrl: './eliminar-esp.component.css'
})
export class EliminarEspComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}
	
	ngOnInit(): void {
		this.buscar();
	}

	especialidad: Especialidades = new Especialidades();

	buscar(){
		let id = localStorage.getItem('idEsp');
		this.especialidad.idEsp = Number(id);
		this.service.buscarEsp(this.especialidad).subscribe(data => {
			this.especialidad = data;
		})
	}
	eliminar(){
		this.service.eliminarEsp(this.especialidad).subscribe(data => {
			this.router.navigate(['Especialidades/listar']);
		})
	}

	cancelar(){
		this.router.navigate(['Especialidades/listar']);
	}
	

}
