const {ServiceProvider} = require('@adonisjs/fold')

class CoreMailProvider extends ServiceProvider {
	register() {
		this.app.singleton('Core/MailProvider', function(app) {
			const Config =  app.use('Adonis/Src/Config')
			const CoreMail = new CoreMail(Config)
			return new (require('../src/Message'))(Config)
		});
	} 
	
}

module.exports = CoreMailProvider