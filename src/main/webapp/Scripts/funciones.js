//Constructores
class usuario{
	constructor(idUsuario,nombre,apellidos,edad,telefono,correoElectronico,dni){
		this.idUsuario=idUsuario
		this.nombre=nombre
		this.apellidos=apellidos
		this.edad=edad
		this.telefono=telefono
		this.correoElectronico=correoElectronico
		this.dni=dni
	}
	
} 

class centroMedico{
	constructor(idCentroMedico,direccion){
		this.idCentroMedico=idCentroMedico
		this.direccion=direccion
	}
}

class consulta{
	constructor(idConsultaMedica,centroConsulta,especializacionConsulta){
		this.idConsultaMedica=idConsultaMedica
		this.centroConsulta=centroConsulta
		this.especializacionConsulta=especializacionConsulta
	}
}

class medico{
	constructor(idMedico,nombre,apellidos,telefono,correoEmpleado,utilidad,dni){
		this.idMedico=idMedico
		this.nombre=nombre
		this.apellidos=apellidos
		this.telefono=telefono
		this.correoEmpleado=correoEmpleado
		this.utilidad=utilidad
		this.dni=dni
	}
}

class citaMedica{
	constructor(usuarioCita,medicoCita,centroCita,consultaCita,idCitaMedica){
		this.usuarioCita=usuarioCita
		this.medicoCita=medicoCita
		this.centroCita=centroCita
		this.consultaCita=consultaCita
		this.idCitaMedica=idCitaMedica
		
	}
	
}

//Listas
let usuarios=[]
let centrosMedicos=[]
let consultas=[]
let medicos=[]
let citasMedicas=[]


/*Como al reiniciar la lista se vacia, cuando crea otro elemento sube a la memoria la lista con solo el ultimo elemento creado,
si recupero los datos antes de todo solo perderia los datos al borrar la cache*/
var storedNames = JSON.parse(localStorage.getItem("usuarios1"));
usuarios=storedNames
var storedUsu = JSON.parse(localStorage.getItem("citas1"));
citasMedicas=storedUsu

//Funciones para crear Objetos
function crearUsuario(form){
	
	
	let idUsuario = usuarios.length+1
	let nombre = form.nombreUsuario.value
	let apellido = form.apellidoUsuario.value
	let dni = form.dniUsuario.value
	let edad = form.edadUsuario.value
	let telefono = form.telefonoUsuario.value
	let correoElectronico = form.correoUsuario.value
	let usuario1 = new usuario(idUsuario,nombre,apellido,edad,telefono,correoElectronico,dni)
	usuarios.push(usuario1)
	
	
	localStorage.setItem("usuarios1", JSON.stringify(usuarios));
	return usuarios
}

function crearCentroMedico(){
	let direccion = "Sevilla, Calle Luis Montoto, 12"
	let id = centrosMedicos.length+1
	
	let centro1= new centroMedico(id,direccion)
	
	centrosMedicos.push(centro1)
	
	return centrosMedicos
	
}


function crearConsultas(especializacion){
	let aux=especializacion
	let idConsultaMedica=consultas.length+1
	let centroConsulta = 1
	
	let consulta1 = new consulta(idConsultaMedica,centroConsulta,aux)
	
	consultas.push(consulta1)
	
	return consultas
}

function crearMedico(){
	
	let idMedico=medicos.length+1
	let nombre="Juan"
	let apellidos="Garcia Perez"
	let telefono="123456789"
	let correoEmpleado="JuanGarciaPerez@gmail.com"
	let utilidad="Cardiologo"
	let dni="12312312A"
	
	let medico1 = new medico(idMedico,nombre,apellidos,telefono,correoEmpleado,utilidad,dni)
	
	medicos.push(medico1)
	
	return medicos
}

function crearCitaMedica(form){
	let idCitaMedica = citasMedicas.length+1
	let usuario = form.idusuario.value
	let medico = form.idmedico.value
	let centro = form.idcentro.value
	let consulta = form.idconsulta.value
	
	let cita1 = new citaMedica(usuario,medico,centro,consulta,idCitaMedica)
	citasMedicas.push(cita1)
	localStorage.setItem("citas1", JSON.stringify(citasMedicas));
	return citasMedicas
}

//funciones para ver datos
function verDatosUsuarios(){
	
	var storedNames = JSON.parse(localStorage.getItem("usuarios1"));
	usuarios=storedNames
	document.write("<h1>Datos Usuarios</h1>")
	storedNames.forEach(function(storedName){
		document.write("Nombre: "+storedName.nombre+"<br/>"+"Apellidos: "+storedName.apellidos+"<br/>"+"Edad: "+storedName.edad+"<br/>"+"Telefono: "+storedName.telefono+"<br/>"+"Correo Electronico: "+storedName.correoElectronico+"<br/>"+"dni: "+storedName.dni+"<br/><br/><hr/>")
	})
	document.write("<button onclick=\"actualizar()\">Volver Atras</button>")
}

function verDatosCentro(){
	
	document.write("<h1>Datos Centros</h1>")
	centrosMedicos.forEach(function(centroMedico){
		document.write("ID: "+centroMedico.idCentroMedico+"<br/>"+"Direccion: "+centroMedico.direccion+"<br/><br/><hr/>")
	})	
	document.write("<button onclick=\"actualizar()\">Volver Atras</button>")
	
	
}

function verDatosConsultas(){
	document.write("<h1>Datos Consultas</h1>")
	consultas.forEach(function(consulta){
		document.write("ID: "+consulta.idConsultaMedica+"<br/>Especializacion: "+consulta.especializacionConsulta+"<br/>ID Centro: "+consulta.centroConsulta+"<br/><br/><hr/>")
	})
	document.write("<button onclick=\"actualizar()\">Volver Atras</button>")
	
	
}

function verDatosMedicos(){
	document.write("<h1>Datos Centros</h1>")
	medicos.forEach(function(medico){
		document.write("Nombre: "+medico.nombre+"<br/>"+"Apellidos: "+medico.apellidos+"<br/>"+"Telefono: "+medico.telefono+"<br/>"+"Correo Empleado: "+medico.correoEmpleado+"<br/>"+"Utilidad: "+medico.utilidad+"<br/>"+"Dni: "+medico.dni+"<br/><br/><hr/>")
	})
	document.write("<button onclick=\"actualizar()\">Volver Atras</button>")
	
}

function verDatosCitas(){
	var storedNames = JSON.parse(localStorage.getItem("usuarios1"));
	var storedUsu = JSON.parse(localStorage.getItem("citas1"));
	usuarios=storedNames
	document.write("<h1>Citas Medicas</h1>")
	

	storedUsu.forEach(function(storedUsu1){
		document.write("Nombre del paciente: "+usuarios[storedUsu1.usuarioCita-1].nombre+"<br/> Nombre del medico: "+medicos[storedUsu1.medicoCita-1].nombre+"<br/> Centro Medico: "+centrosMedicos[storedUsu1.centroCita-1].direccion+"<br/> Consulta: "+consultas[storedUsu1.consultaCita-1].idConsultaMedica+"<br/> Especializacion Consulta: "+consultas[storedUsu1.consultaCita-1].especializacionConsulta+"<br/><br/><hr/>")		
		
		
	})
	document.write("<button onclick=\"actualizar()\">Volver Atras</button>")
	
	
	
	
}
function eliminarCita(form){
	let eliminar = form.idcita.value
	var storedUsu = JSON.parse(localStorage.getItem("citas1"));
	citasMedicas=storedUsu
	citasMedicas.splice(eliminar-1,1)
	localStorage.setItem("citas1", JSON.stringify(citasMedicas));
	//CONTINUAR AUQUI EL VIERNES
}

//Funciones extras


function volver(){
	history.back()
}
function actualizar(){
	location.reload()
}

function ShowSelected()
{
var combo = document.getElementById("ver-select");
var selected = combo.options[combo.selectedIndex].text;

switch(selected){
	case "Usuarios":
		verDatosUsuarios()
		break;
	case "Medicos":
		verDatosMedicos()
		break;
	case "Centros":
		verDatosCentro()
		break;
	case "Consultas":
		verDatosConsultas()
		break;
	case "Citas Medicas":
		verDatosCitas()
		break;
	
}

}
	crearCentroMedico()
	crearMedico()
	crearConsultas("Vacunas")
	crearConsultas("Familia")
	crearConsultas("Revisiones")