import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Especialidades } from '../../../Entidad/Especialidad';
import { Doctores } from '../../../Entidad/Doctor';

@Component({
  selector: 'app-listar-esp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listar-esp.component.html',
  styleUrl: './listar-esp.component.css'
})
export class ListarEspComponent implements OnInit{
	
	constructor(private router: Router, private service: ServidorService){}

	especialidad : Especialidades = new Especialidades();
	especialidades !: Especialidades[];

	ngOnInit(): void {
		this.listar();
	}

	listar(){
		this.service.listarEsp().subscribe(data => {
			this.especialidades = data;
		})
	}

	editar(especialidad: Especialidades){
		localStorage.setItem('idEsp', especialidad.idEsp.toString());
		this.router.navigate(['/Especialidades/editar']);
	}

	eliminar(especialidad: Especialidades){
		localStorage.setItem('idEsp', especialidad.idEsp.toString());
		this.router.navigate(['/Especialidades/eliminar']);
	}
}
