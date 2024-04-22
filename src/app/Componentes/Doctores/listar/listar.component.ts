import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Doctores } from '../../../Entidad/Doctor';
import { Router } from '@angular/router';
import { ServidorService } from '../../../Servidor/servidor.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}

	doctor: Doctores = new Doctores();
	doctores !: Doctores[];

	ngOnInit(): void {
		this.listar()
	}

	listar(){
		this.service.listarDoc().subscribe(data => {
			this.doctores = data;
		})
	}

	editar(doctor: Doctores) {
		localStorage.setItem('idDoctor', doctor.idDoctor.toString());
		this.router.navigate(['Doctores/editar']);
	}

	eliminar(doctor: Doctores) {
		localStorage.setItem('idDoctor', doctor.idDoctor.toString());
		this.router.navigate(['Doctores/eliminar']);
	}

	buscarPorEspecialidad(especialidad: String) {
		if (especialidad.trim() == '') {
      this.listar();
    } else {
      this.service.buscarPorEspecialidad(especialidad).subscribe((data) => {
        this.doctores = data;
      });
    }
	}

}
