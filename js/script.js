function validarContacto(){
    if(validarNombre()==true){
        if(validarApellido()==true){
            if(validarCorreo()==true){
                if(validarTelefono()==true){
                    if(validarProblema()==true){
                        alert('solicitud enviada')
                       // Swal.fire('Solicitud enviada')
                    }
                    
                }
                
            }
            
        }
        
    }
   
}
function validarNombre(){
var nombre= document.getElementById('txtNombre').value;
var largo = nombre.trim().length;
if(largo==0){
    //alert('nombre vacio')
    Swal.fire({
        icon: 'error',
        title: 'nombre',
        text: 'el nombre esta vacio'
      });
    return false
}
if(largo<3){
    //alert('el nombre tiene un largo menor a 3 caracteres')
    Swal.fire({
        icon: 'error',
        title: 'nombre',
        text: 'el nombre tiene un largo menor a 3 caracteres'
      });
    return false
}
return true

}

function validarApellido(){
var apellido= document.getElementById('txtApellido').value;
var largo = apellido.trim().length;
if(largo==0){
    //alert('apellido vacio')
    Swal.fire({
        icon: 'error',
        title: 'Apellido',
        text: 'El apellido esta vacio'
      });
    return false
}
if(largo<3){
    //alert('el nombre tiene un largo menor a 3 caracteres')
    Swal.fire({
        icon: 'error',
        title: 'Apellido',
        text: 'El Apellido tiene un largo menor a 3 caracteres'
      });
    return false
}
return true

}

function validarCorreo(){
var correo= document.getElementById('txtCorreo').value;
if(correo.trim().length==0){
    //alert('correo vacio')
    Swal.fire({
        icon: 'error',
        title: 'Correo',
        text: 'El correo esta vacio'
      });
    return false
}
return true

}

function validarTelefono(){
var telefono= document.getElementById('txtTelefono').value;
if(telefono.trim().length==0){
    //alert('telefono vacio')
    Swal.fire({
        icon: 'error',
        title: 'Telefono',
        text: 'El telefono esta vacio'
      });
    return false
}
return true

}

function validarProblema(){
var problema= document.getElementById('txtProblema').value;
var largo= problema.trim().length;
if(largo==0){
    //alert('problema vacio')
    //Swal.fire('Problema vacio')
    Swal.fire({
        icon: 'error',
        title: 'Problema',
        text: 'El problema esta vacio',
        footer: '<a href>Why do I have this issue?</a>'
      })
    return false
}
if(largo < 10){
    Swal.fire({
        icon: 'error',
        title: 'Problema',
        text: 'El problema debe tener al menos 10 caracteres',
        footer: '<a href>Why do I have this issue?</a>'
      })
    return false
}
return true

}

function validarPassword(){
    var password=document.getElementById('txtPassword').value;
    if(password.trim().length==0){
        //alert('contraseña vacia')
        Swal.fire('Contraseña vacia')
        return false
    }
    return true
}

function validarCuenta(){
    if(validarNombre()==true){
        if(validarApellido()==true){
            if(validarCorreo()==true){
                if(validarPassword()==true){
                    alert('Cuenta creada con exito')
                    //Swal.fire('Cuenta creada con exito')
                    
                }
            }
        }
    }
}

function iniciaresion(){
    alert('sesion iniciada')
    
}

function validarFecha() {
    var fechaUsuario = document.getElementById('txtFechaNaci').value;
    var fechaSistema = new Date();
    console.log('Fecha Usuario:' + fechaUsuario);
    console.log('Fecha Sistema:' + fechaSistema);
    ////////////////////////////////////////// 2021-04-01
    var ano = fechaUsuario.slice(0, 4);
    var mes = fechaUsuario.slice(5, 7);
    var dia = fechaUsuario.slice(8, 10);
    console.log('A:' + ano + ' M:' + mes + ' D:' + dia);
    var fechaNuevaUsuario = new Date(ano, (mes - 1), dia);
    console.log('Nueva Fecha:' + fechaNuevaUsuario);
    //////////////////////////////////////////////////
    if (fechaNuevaUsuario > fechaSistema) {
        //alert('fecha de nacimiento mayor a la fecha actual');
        Swal.fire({
            icon: 'error',
            title: 'fecha de ingreso',
            text: 'fecha de Ingreso mayor a la fecha actual'
          });
        return false;
    }
    ///////////////////////////////////////////////////

    return true;
}
//validar trabajos
function validarDiagnistico(){
var diagnostico= document.getElementById('txtDiagnostico').value;
var largo = diagnostico.trim().length;
if(largo==0){
    //alert('nombre vacio')
    Swal.fire({
        icon: 'error',
        title: 'nombre',
        text: 'el nombre esta vacio'
      });
    return false
}
if(largo<3){
    //alert('el nombre tiene un largo menor a 3 caracteres')
    Swal.fire({
        icon: 'error',
        title: 'nombre',
        text: 'el nombre tiene un largo menor a 3 caracteres'
      });
    return false
}
return true

}

function validarMecanico(){
    var material= document.getElementById('txtMateriales').value;
    var largo = material.trim().length;
    if(largo==0){
    //alert('nombre vacio')
     Swal.fire({
            icon: 'error',
            title: 'Materiales',
            text: 'el listado de materiales esta vacio'
      });
        return false
    }
    if(largo<3){
    //alert('el nombre tiene un largo menor a 3 caracteres')
        Swal.fire({
            icon: 'error',
            title: 'Mecanico',
            text: 'el nombre del mecanico  tiene un largo menor a 3 caracteres'
        });
        return false
    }
    return true
}

function validarMateriales(){
    var mecanico= document.getElementById('txtNombreMecanico').value;
    var largo = mecanico.trim().length;
    if(largo==0){
    //alert('nombre vacio')
     Swal.fire({
            icon: 'error',
            title: 'Materiales',
            text: 'el listado de materiales esta vacio'
      });
        return false
    }
    if(largo<3){
    //alert('el nombre tiene un largo menor a 3 caracteres')
        Swal.fire({
            icon: 'error',
            title: 'Mecanico',
            text: 'el nombre del mecanico  tiene un largo menor a 3 caracteres'
        });
        return false
    }
    return true
}

function validarTrabajo(){
    if (validarDiagnistico==true) {
       alert('hola')
    }
}