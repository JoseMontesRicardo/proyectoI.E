var modelosarea = angular.module('modelosarea', [])
 
modelosarea.service("modelosarea", function()
{
	var codigo,
        nombre
        

	return {
            getCodigo: function () {
                return codigo
            }, setCodigo: function(value) {
                codigo = value
            },
            getNombre: function () {
                return nombre
            }, setNombre: function(value) {
                nombre = value
            },
			
            }
})