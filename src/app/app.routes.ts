import { Routes } from '@angular/router';
import { ListarComponent } from './Componentes/Doctores/listar/listar.component';
import { EditarComponent } from './Componentes/Doctores/editar/editar.component';
import { GuardarComponent } from './Componentes/Doctores/guardar/guardar.component';
import { EliminarComponent } from './Componentes/Doctores/eliminar/eliminar.component';
import { ListarEspComponent } from './Componentes/Especialidades/listar-esp/listar-esp.component';
import { EditarEspComponent } from './Componentes/Especialidades/editar-esp/editar-esp.component';
import { GuardarEspComponent } from './Componentes/Especialidades/guardar-esp/guardar-esp.component';
import { EliminarEspComponent } from './Componentes/Especialidades/eliminar-esp/eliminar-esp.component';

export const routes: Routes = [

	{
		path: 'Doctores/listar',
		component: ListarComponent
	},
	{
		path: 'Doctores/editar',
		component: EditarComponent
	},
	{
		path: 'Doctores/guardar',
		component: GuardarComponent
	},
	{
		path: 'Doctores/eliminar',
		component: EliminarComponent
	},
	{
		path: 'Especialidades/listar',
		component: ListarEspComponent
	},
	{
		path: 'Especialidades/editar',
		component: EditarEspComponent
	},
	{
		path: 'Especialidades/guardar',
		component: GuardarEspComponent
	},
	{
		path: 'Especialidades/eliminar',
		component: EliminarEspComponent
	}

];
