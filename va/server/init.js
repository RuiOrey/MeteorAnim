//para publicar mas com restrições dependendo do secret
Meteor.publish("minhasEntidades", function( secret ) {

	//unico parametro injectado
	console.log( this.userId );

	//objecto tem grupo
	var user = Meteor.users.findOne( this.userId );

	//var user = Meteor.user(); - n funciona no publish

	if ( secret == "rui" ) {

		return Entidades.find( );

	}
});

//onCreateUser - grupo