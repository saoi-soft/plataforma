<?php 
include '../../conexion.php';
$query = $_POST['cursos'];
									$st = $conexion -> prepare("SELECT * FROM salon WHERE nombre LIKE '%".$query."%'");
									$st -> execute();
									while ($opciones = $st -> fetch()) {
								 ?>
								 <input type="checkbox" name="cursoradio" id="<?php echo $opciones['id'] ?>" value="<?php echo $opciones['id'] ?>" style="width: 20px;"><label for="<?php echo $opciones['id'] ?>"><?php echo $opciones['nombre'] ?></label><br>
								 <?php 
									}
								 ?>