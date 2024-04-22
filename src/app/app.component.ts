import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUDDocEsp';
	
	constructor(private router: Router){}

	listarD(){
		this.router.navigate(['Doctores/listar']);
	}

	nuevoD(){
		this.router.navigate(['Doctores/guardar']);
	}

	listarE(){
		this.router.navigate(['Especialidades/listar']);
	}

	nuevoE(){
		this.router.navigate(['Especialidades/guardar']);
	}
}
