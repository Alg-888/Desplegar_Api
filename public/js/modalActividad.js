const modalActividad = new bootstrap.Modal(document.getElementById('modalActividad'))
const onA = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
onA(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode;
    console.log(fila);  // Agrega esta línea para depurar
    document.getElementById('id_Editar').value = fila.children[0].innerHTML;
    document.getElementById('identificacion_Editar').value = fila.children[1].innerHTML;
    document.getElementById('nombre_Editar').value = fila.children[2].innerHTML;
    document.getElementById('fecha_Editar').value = fila.children[3].innerHTML;
    document.getElementById('tipo_Editar').value = fila.children[4].innerHTML;
    document.getElementById('descripcion_Editar').value = fila.children[5].innerHTML;
    modalActividad.show();
});