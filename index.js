const fs = require('fs')

const btnguardar = document.getElementById('btnguardar')
const identidad = document.getElementById('identidad')
const nombre = document.getElementById('nombre_completo')
const correo = document.getElementById('correo')
const telefono = document.getElementById('telefono')
const anio = document.getElementById('anio')
const mes = document.getElementById('mes')
const dia = document.getElementById('dia')

btnguardar.addEventListener('click', function(e){
    e.preventDefault()
    fs.open("C:/Users/gusta/Documents/AppExamen/personas/" + identidad.value + ".txt", 'a' , function(err,archivo){
        if (err) {
            console.log(`Error`)
        }
        console.log("Archivo abierto")
        const linea = `${identidad.value}\n${nombre.value}\n${correo.value}\n${telefono.value}\n${anio.value}-${mes.value}-${dia.value} `
    fs.write(archivo,linea,'w',function(err,written,archivo){
        if (err) {
            console.log(`Error`)
        }
        console.log("se escribieron los datos")

    })
    });
});
