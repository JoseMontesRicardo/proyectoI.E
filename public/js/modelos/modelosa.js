var modelosa = angular.module('modelosa', [])
 
modelosa.service("modelosa", function()
{
	var idasignatura,
        nombre,
        codigo_area
        

	return {
            getIdAsignatura: function () {
                return idasignatura
            }, setIdAsignatura: function(value) {
                idasignatura = value
            },
            getNombre: function () {
                return nombre
            }, setNombre: function(value) {
                nombre = value
            },
			getCodigoArea: function () {
                return codigo_area
            }, setCodigoArea: function(value) {
                codigo_area = value
            },
            
            }
})
            