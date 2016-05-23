var modelosgrupo = angular.module('modelosgrupo', [])
 
modelosgrupo.service("modelosgrupo", function()
{
	var idgrupo  
        

	return {
            getIdgrupo: function () {
                return idgrupo
            }, setIdgrupo: function(value) {
                idgrupo = value
            },
			
            }
})