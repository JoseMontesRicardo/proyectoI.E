var usuarios_chat = angular.module('usuarios_chat', [])

usuarios_chat.service('usuariosChat', function(){
	var usuariosConectados = []

	return {
		getUsuariosConectados: function(){
			return usuariosConectados
		},
		getUsuariosConectados: function(value){
			usuariosConectados = value
		}
	}
})
