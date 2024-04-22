import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Doctores } from '../../../Entidad/Doctor';
import { Especialidades } from '../../../Entidad/Especialidad';

@Component({
  selector: 'app-guardar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guardar.component.html',
  styleUrl: './guardar.component.css'
})
export class GuardarComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}

	doctor : Doctores = new Doctores();
	especialidad : Especialidades = new Especialidades();
	especialidades !: Especialidades[]; 

	ngOnInit(): void {
		this.subMenuEspecialidades();
	}

	subMenuEspecialidades() {
		this.service.listarEsp().subscribe((data) => {
			this.especialidades = data;
		});
	}

	guardar(){
		this.service.guardarDoc(this.doctor).subscribe(data =>{
			this.router.navigate(['Doctores/listar']);
		})
	}

	cancelar(){
		this.router.navigate(['Doctores/listar']);
	}

}
