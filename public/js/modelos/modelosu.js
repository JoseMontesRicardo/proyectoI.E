var modelosu = angular.module('modelosu', [])
 
modelosu.service("modelosu", function()
{
	var cedula,
        nombre1,
        nombre2,
        apellido1,
        apellido2,
        password,
        direccion,
        sexo,
        email,
        telefono,
        rol

	return {
            getCedula: function () {
                return cedula
            }, setCedula: function(value) {
                cedula = value
            },
            getNombre1: function () {
                return nombre1
            }, setNombre1: function(value) {
                nombre1 = value
            },
			getNombre2: function () {
                return nombre2
            }, setNombre2: function(value) {
                nombre2 = value
            },
            getApellido1: function () {
                return apellido1
            }, setApellido1: function(value) {
                apellido1 = value
            },
            getApellido2: function () {
                return apellido2
            }, setApellido2: function(value) {
                apellido2 = value
            },
            getPassword: function () {
                return password
            },setPassword: function(value){
            	password = value
            },
            getDireccion: function(){
            	return direccion
            }, setDireccion: function(value){
            	direccion = value
            }, 
            getSexo: function(){
            	return sexo
            }, setSexo: function(value){
            	sexo = value
            },
            getEmail: function(){
            	return email
            }, setEmail: function(value){
            	email = value
            },
            getTelefono: function(){
                return telefono
            }, setTelefono: function(value){
                telefono = value
            },
            getRol: function(){
                return rol
            }, setRol: function(value){
                rol = value
            },
        }
})