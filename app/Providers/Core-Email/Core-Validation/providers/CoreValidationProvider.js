const {ServiceProvider} = require('@adonisjs/fold')

class CoreValidationProvider extends ServiceProvider {
    register() {
        this.app.bind('Core/Validations', () => {
            const ValidationSrc = require('./src/CoreValidation')
            const Validation = new ValidationSrc()
            return new Validation;
        });

        this.app.bind('Core/CheckValidation', () => {
            const CheckValidationSrc = require('./src/CoreCheckValidation')
            const CheckValidation = new CheckValidationSrc();
            return new CheckValidation;
        })
    }
}