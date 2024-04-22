import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Doctores } from '../../../Entidad/Doctor';
import { Especialidades } from '../../../Entidad/Especialidad';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}

	doctor : Doctores = new Doctores();
	especialidad : Especialidades = new Especialidades();
	especialidades !: Especialidades[];

	ngOnInit(): void {
		this.buscar();
		this.subMenuEspecialidaddes();
	}

	subMenuEspecialidaddes(){
		this.service.listarEsp().subscribe((data) => {
			this.especialidades = data;
		});
	}

	buscar(){
		const id = localStorage.getItem('idDoctor');
		this.doctor.idDoctor = Number(id);
		this.service.buscarDoc(this.doctor).subscribe(data =>{
			this.doctor = data;
		})
	}

	editar(){
		this.service.editarDoc(this.doctor).subscribe(data =>{
			this.router.navigate(['Doctores/listar']);
		})
	}

	cancelar(){
		this.router.navigate(['Doctores/listar']);
	}



}
