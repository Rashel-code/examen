let item = 0;

function test() {

    item++;
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbd");
    let sexo = "a";
    let nombre = document.getElementById('nombre').value;
    if (document.getElementById('Masculino').checked) {
        sexo = "Masculino";

    } else {
        sexo = "Femenino";

    }
    var ciclo = document.getElementById('ciclo').value;
    var e_p = document.getElementById('ep').value;
    var ep = "";
    if (e_p == 1) {
        ep = "Ing. Sistemas";

    } else if (e_p == 2) { ep = "Ing. Alimentos"; } 
    else if (e_p == 3) { ep = "Ing.Ambiental"; } 
    else if (e_p == 4) { ep = "Ing. Arquitectura"; } 
    else if (e_p == 5) { ep = "Ing. civil"; } 
    else { ep = "nada" }


    var fil = document.createElement("tr");
    var celda_item = document.createElement("td");
    var celda_nombre = document.createElement("td")
    var celda_sexo = document.createElement("td");
    var celda_ciclo = document.createElement("td");
    var celda_ep = document.createElement("td");
    var celda_accion = document.createElement("td");
    celda_sexo.innerHTML = sexo;
    celda_item.innerHTML = item;
    celda_nombre.innerHTML = nombre;
    celda_ciclo.innerHTML = ciclo;
    celda_ep.innerHTML = ep;
    celda_accion.innerHTML="<a href='#' class='icono2' onclick='editar(this)'><i class='fa-solid fa-pencil'></i> </a>"
    +"<a href='#' class='icono1' onclick='eliminar(this)'><i class='fa-solid fa-ban'></i></a>";

    fil.appendChild(celda_item);
    fil.appendChild(celda_nombre);
    fil.appendChild(celda_sexo);
    fil.appendChild(celda_ciclo);
    fil.appendChild(celda_ep);
    fil.appendChild(celda_accion);
    tbody.appendChild(fil);
    table.appendChild(tbody);
    limpiar();

}
function limpiar(){
    nombre.value = "";
    nombre.focus();
    mujer.value= "";
}
function eliminar(row){
    let f = row.parentNode.parentNode;
    f.parentNode.removeChild(f);
}
function editar(row){
    fila = row.parentNode.parentNode;
    nombre.value = fila.cells[1].innerHTML;
    
}