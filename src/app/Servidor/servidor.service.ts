import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctores } from '../Entidad/Doctor';
import { Especialidades } from '../Entidad/Especialidad';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  constructor(private http: HttpClient) { }

	url = 'http://localhost:8004/api'

	// * DOCTORES

	listarDoc(){
		return this.http.get<Doctores[]>(this.url + '/Doctor/listar')
	}

	buscarDoc(doctor: Doctores){
		return this.http.post<Doctores>(this.url + '/Doctor/buscar', doctor)
	}

	guardarDoc(doctor: Doctores){
		return this.http.post<String>(this.url + '/Doctor/guardar', doctor)
	}

	editarDoc(doctor: Doctores){
		return this.http.post<String>(this.url + '/Doctor/editar', doctor)
	}

	eliminarDoc(doctor: Doctores){
		return this.http.post<String>(this.url + '/Doctor/eliminar', doctor)
	}

	buscarPorEspecialidad(especialidad: String){
		return this.http.post<Doctores[]>(`${this.url}/Doctor/buscarPorEspecialidad?esp=${especialidad}`,{});
	}

	// * ESPECIALIDADES

	listarEsp(){
		return this.http.get<Especialidades[]>(this.url + '/Especialidades/listar')
	}

	buscarEsp(especialidad: Especialidades){
		return this.http.post<Especialidades>(this.url + '/Especialidades/buscar', especialidad);
	}

	guardarEsp(especialidad: Especialidades){
		return this.http.post<String>(this.url + '/Especialidades/guardar', especialidad)
	}

	editarEsp(especialidad: Especialidades){
		return  this.http.post<String>(this.url + '/Especialidades/editar', especialidad)
	}
	
	eliminarEsp(especialidad: Especialidades){
		return this.http.post<String>(this.url + '/Especialidades/eliminar', especialidad)
	}
}
