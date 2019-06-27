var express = require('express')
var Router  = express.Router()

Router.get('/users', function(req,res){
	//get usuario
})

Router.get('/messages', function(req,res){
	//get messages
})

Router.post('/users', function(req,res){
	//post usuario
})

Router.post('/messages', function(req,res){
	//post messages
})

module.exports = Router

(function(document,window,undefined,$){
	(function(){
		return Chat = {
			//Todo el codigo
			apiUrl: '/chat',
			$userDataModal: $('#modalCaptura'),
			$btnMessages: $('#btnMessage'),
			$messageText: $('#messageText'),
			userName: '',

			Init: function(){
				var self = this
				this.fetchUserInfo(function(user){
					self.renderUser(user)
				})

			},

			fetchUserInfo: function(callback){
				var self = this
				this.$userDataModal.openModal()
				var $GuardaInfo = $('.guardaInfo')
				$GuardaInfo.on('click', function(){
					var nombre = $('.nombreUsuario').val()
					var user = [{nombre: nombre,img:'p2.jpg'}]
					callback(user)

					self.joinUser(user[0])

					self.userName = nombre
					self.$userDataModal.closeModal()
				})
				self.getInitialUsers()

			},

			getInitialUsers: function(){
				var self = this
				var endpoint = self.apiUrl + '/users'
				self.ajaxRequest(endpoint, 'GET', {})
					.done(function(data){
						var users = data.current
						self.renderUser(users)
					}).fail(function(err){
						console.log(err)
					})
			},

			ajaxRequest: function(url,type,data){
				return $.ajax({
					url: url,
					type: type,
					data: data
				})
			},

			joinUser: function(user){
				var self = this
				var endpoint = self.apiUrl + '/users'
				var userObj = {user: user}
				self.ajaxRequest(endpoint,'POST',userObj)
					.done(function(confirm){
						console.log(confimr)
					}).fail(function(error){
						alert(error)
					})
			},

			renderUser: function(users){
				var self = this
				var userList = $('users-list')
				var userTemplate = '<li class="collection-item avatar>'+
									'<img src="image/:image:" class="circle">' +
									'<span class="title">:nombre:</span>' +
									'<p><img src="image/online.png"/>En linea </p>'+
									'</li>'
				users.map(function(user){
					var newUser = userTemplate.replace(':image:','p2.jpg')
											  .replace(':nombre:',user.nombre)
				})
			},

			watchMessages: function(){
				var self = this
				self.$messageText.on('keypress',function(e){
					if(e.wich == 13){
						if($(this).val().trim() !=''){
							var message = {
								sender: self.userName,
								text: $(this).val()
							}
						self.renderMessages(message)
						$(this).val('')
						}

					}else{
						e.preventDefault()
					}
				})

				self.$btnMessages.on('click', function(){
					if($(this).val().trim() !=''){
							var message = {
								sender: self.userName,
								text: $(this).val()
							}
					self.renderMessages(message)
					$(this).val('')
					}
				})
			},

			renderMessages: function(message){
				var self = this 
				var tipoMensaje = message.sender == self.userName ? 'recibidos': 'enviados'
				var messageList = $('.historial-chat')
				var messageTemplate = '<div class=":tipoMensaje:">'+
										'<div class="mensaje">'+
											'<div class="imagen">'+
												'<img src="image/p2.jpg" alt="Contacto"/>'+
											'</div>'+
											'<div class="texto">'+
											 '<span class="nombre">:nombre:</span>'+
											 '<span>:mensaje:</span>'+
											'</div>'+
											'<div class="hora">'+
												'<span class="numHora">:hora:</span>'+
											'</div>'+
										'</div>'+
									  '</div>'
				var currentDate = new Date()
				var newmMessage = messageTemplate.replace(':tipoMensaje:', tipoMensaje)
												 .replace(':nombre:',message.sender)
												 .replace(':mensaje:', message.text)
												 .replace(':hora:', currentDate.getHours() + ':'+ currentDate.getMinutes())
				messageList.append(newmMessage)
				$('.scroller-chat').animate({ scrollTop: $('.scroller-chat').get(0).scrollHight},500)
			}



		}

	})()
	Chat.Init()
})//(document, window, undefined,jQuery);










