'use strict';

function authService($auth,$state) {
	var Auth = {
    login: login,
		isAuthenticated: isAuthenticated,
		logout: logout,
		isAdmin: isAdmin,
		isUser: isUser
  };

  function login(user){
		$auth.login(user)
		.then(response =>{
			$state.go('main');
			console.log('Login realizado correctamente');
		})
		.catch(err =>{
			$state.go('login')
			console.log('Error al loguearse');
		})
  }

 function logout() {
	  if (Auth.isAuthenticated()) {
			$auth.logout()
			.then(response =>{
				$state.go('main');
				console.log('salida okay');
			})
		}
 }
 function isAuthenticated() {
	 if ($auth.isAuthenticated()) {
	 return true;
 }else{
	 return false;
 }
 }
 /*
*roles Admin
 */
 function isAdmin() {
	 if (Auth.isAuthenticated()) {
		 if ($auth.getPayload().roles.indexOf("ADMIN") !== -1) {

				return true;
		 }else{
			 return false;
		 }
	 }else{
		 return false;
	 }
 }
 /*
*roles User
 */
 function isUser() {
	if (Auth.isAuthenticated()) {
		if ($auth.getPayload().roles.indexOf("USER") !== -1) {

			 return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
 }
  return Auth;
}// Final de la funcion AuthService
authService.inject = ['$auth','$state'];
angular.module('videoclubApp')
  .factory('authService', authService);
