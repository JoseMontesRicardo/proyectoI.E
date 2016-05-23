var modelosgrado = angular.module('modelosgrado', [])
 
modelosgrado.service("modelosgrado", function()
{
	var idgrado  
        

	return {
            getIdgrado: function () {
                return idgrado
            }, setIdgrado: function(value) {
                idgrado = value
            },
			
            }
})