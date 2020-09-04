

var ingresarnombre = document.getElementById("ingresarnombre");
var ingresarapellido = document.getElementById("ingresarapellido");
var ingresardirrecion = document.getElementById("ingresardirrecion");
var ingresartelefono = document.getElementById("ingresartelefono");
var ingresarcorreo = document.getElementById("ingresarcorreo");
var buttonSubmit = document.getElementById("buttonSubmit");
var buttonCancel = document.getElementById("buttonCancel");
var formulario = document.getElementById("ingresarFormulario");

buttonSubmit.addEventListener("click", validForm)
buttonCancel.addEventListener("click", Cancelar)


function Cancelar() {
    swal({
        title: `¿Cancelar la carga?`,
        icon: "warning",
        buttons: {
            cancel: {
                text: 'No',
                value: null
            },
            confirm: {
                text: 'Yes',
                value: true
            }
        }
    });
}


function validForm() {
    if (ingresarnombre.value.trim().length != 0 && ingresarapellido.value.trim().length != 0 && ingresardirrecion.value.trim().length != 0 
        && ingresartelefono.value.trim().length != 0 && ingresarcorreo.trim().length != 0) {
            swal("se enviaron corectamente los datos", {
                icon: "success",
                buttons: 'ok'
            })
    }
    else {
        swal("Completar campos", {
            icon: "warning",
            buttons: "ok"
        });
    }
}