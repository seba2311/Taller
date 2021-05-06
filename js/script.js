function validarContacto(){
    if(validarNombre()==true){
        if(validarApellido()==true){
            if(validarCorreo()==true){
                if(validarTelefono()==true){
                    if(validarProblema()==true){
                        alert('solicitud enviada')
                    }
                    
                }
                
            }
            
        }
        
    }
   
}
function validarNombre(){
var nombre= document.getElementById('txtNombre').value;
if(nombre.trim().length==0){
    alert('nombre vacio')
    return false
}
return true

}

function validarApellido(){
var apellido= document.getElementById('txtApellido').value;
if(apellido.trim().length==0){
    alert('apellido vacio')
    return false
}
return true

}

function validarCorreo(){
var correo= document.getElementById('txtCorreo').value;
if(correo.trim().length==0){
    alert('correo vacio')
    return false
}
return true

}

function validarTelefono(){
var telefono= document.getElementById('txtTelefono').value;
if(telefono.trim().length==0){
    alert('telefono vacio')
    return false
}
return true

}

function validarProblema(){
var problema= document.getElementById('txtProblema').value;
if(problema.trim().length==0){
    alert('problema vacio')
    return false
}
return true

}

function validarPassword(){
    var password=document.getElementById('txtPassword').value;
    if(password.trim().length==0){
        alert('contraseña vacia')
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
                }
            }
        }
    }
}

function iniciaresion(){
    alert('sesion iniciada')
}