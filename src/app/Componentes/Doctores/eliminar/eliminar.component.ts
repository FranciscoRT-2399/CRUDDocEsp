import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Doctores } from '../../../Entidad/Doctor';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}

	doctor: Doctores = new Doctores();

	ngOnInit(): void {
		this.buscar();
	}

	buscar(){
		let id = localStorage.getItem('idDoctor');
		this.doctor.idDoctor = Number(id);
		this.service.buscarDoc(this.doctor).subscribe(data => {
			this.doctor = data;
		})
	}

	eliminar(){
		this.service.eliminarDoc(this.doctor).subscribe(data => {
			this.router.navigate(['Doctores/listar']);
		})
	}
	
	cancelar(){
		this.router.navigate(['Doctores/listar']);
	}
}
