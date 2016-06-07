var sendMailapp = angular.module('sendMailapp',[])

sendMailapp.controller('sendMail', function($scope, $http){
	$scope.enviarCorreo = ()=>{
		if ( $scope.correo ){
			Materialize.toast('enviando correo!!', 5000, 'success')
			reqAjax=$http.post('/sendMail', {
				mail: $scope.correo
			})
			.success((res)=>{
				if (res.exito){
					Materialize.toast('correo enviado!!', 2000, 'success')
				} else {
					Materialize.toast('correo incorrecto!!',2000, 'error')
				}
			})
		} else {
			Materialize.toast('debe digitar el correo!!',2000, 'error')
		}
	}
})