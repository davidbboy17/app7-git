// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		$('#izquierda').on("swipeleft", function(){
			navigator.notification.alert("Deslizó a la izquierda", function(){"aplicacion7","Aceptar"});
		});//cierre deslizarIzquierda
			$('#derecha').on("swiperight", function(){
					navigator.notificaton.confirm("¿Qué quieres hacer?", function(opt){
						switch(opt)
						{
							case 1:
							navigator.notification.beep(2);
							break;
							
							case 2:
							navigator.notification.vibrate(2000);
							break;
						}
					},"Aplicacion7","beepear,Vibrar,Cancelar");
			});//Cierre del deslizar derecha
	},false);//Cierre del devideready
});//Cierre del document