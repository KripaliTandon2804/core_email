const {ServiceProvider} = require('@adonisjs/fold')

class CoreMailProvider extends ServiceProvider {
	register() {
		this.app.singleton('Core/MailProvider', function(app) {
			const Config =  app.use('Adonis/Src/Config')
			return new (require('../src'))(Config)
		});
		this.app.alias('Core/MailProvider', 'CoreMail');
	}
}

module.exports = CoreMailProvider