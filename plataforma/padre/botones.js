function inicio(){
	location.href = "index.php";
}

function funciones(){
	location.href = "funciones.php";
}

function menu_show(){
	document.getElementById('menu').style.display = 'block';
	document.getElementById('menu_btn1').style.display = 'none';
	document.getElementById('menu_btn2').style.display = 'inline';
}

function menu_hide(){
	document.getElementById('menu').style.display = 'none';
	document.getElementById('menu_btn1').style.display = 'inline';
	document.getElementById('menu_btn2').style.display = 'none';
}

function perfil(){
	location.href = "mi_perfil.php";
}

function clases(){
	location.href = "mis_clases.php";
}

function mi_info(){
	location.href = "mi_info.php";
}

function nuevo_correo(){
	location.href = "newmail.php";
}

function seleccionar_usuario(){
	document.getElementById('modal6').style.display = 'inline-flex';
	$.ajax({
		url: 'validar/mostrar_usuarios.php',
		success: function(response){
			document.getElementById('datos6').innerHTML = response;

		}
	});
	$('input[name=query6]').focus();
}

function busqueda6(){
	var busqueda = document.getElementById('query6').value;
	console.log(busqueda);
	prueba6(busqueda);
}

function prueba6(usuario){
	//console.log('escribio algo...');
	$.ajax({
		url: 'validar/buscar_usuarios.php',
		type: "POST",
		data: { usuario: usuario},
		success: function(response){
			document.getElementById('datos6').innerHTML = response;
		}
	});
}


function modalvalidar6(){
	/*document.getElementById('modal6').style.display = 'none';
   	var radioValue = $("input[name='usuarioradio']:checked").val();
   	//console.log(document.getElementsByName("cursoradio")[4].checked);
    if(radioValue){
    	console.log(radioValue);
        document.getElementById('usuariog').value = radioValue;
    }*/
    document.getElementById('modal6').style.display = 'none';
	curso = document.getElementsByClassName('usuarios');
	console.log(curso.length);
	cursos = "";
	value = "";
	for (var i = curso.length - 1; i >= 0; i--) {
		console.log(i);
		if (curso[i].checked == true) {
			cursos = value + curso[i].value+",";
		}
		value = cursos;
	}
	cursos = cursos + "fin";
	console.log(cursos);
   	//var radioValue = $("input[name='cursoradio']:checked").val();
   	//console.log(document.getElementsByName("cursoradio")[4].checked);
    document.getElementById('usuariog').value = cursos;
}

function cerrar6(){
	modalvalidar6();
	document.getElementById('modal6').style.display = 'none';
}

function recargar6(){
	$.ajax({
		url: 'validar/mostrar_usuarios.php',
		success: function(response){
			document.getElementById('datos6').innerHTML = response;

		}
	});
}

function cerrarSesion(){
	location.href = "../cerrar_sesion.php";
}

function newactivity(){
	location.href = "newactivity.php";	
}

function changepass(){
	location.href = "changepass.php";
}

function horario(){
	location.href = "horario.php";
}

function querysearchbar(){
	var busqueda = document.getElementById('querysearchbar').value;
	console.log(busqueda);
	querysearchbarq(busqueda);
}

function querysearchbarq(dato){
	//console.log('escribio algo...');
	$.ajax({
		url: 'validar/buscar_todo.php',
		type: "POST",
		data: { dato: dato},
		success: function(response){
			document.getElementById('querysearchbardiv').innerHTML = response;
		}
	});
}

function usuarioperfil(id){
	location.href = "user_profile.php" + "?id=" + id;
}
function cursopublicacion(id){
	location.href = "publicaciones_curso.php?id=" + id;
}
function revisar_tareas(){
	location.href = "mis_tareas.php";
}