class CoreValidation{
    constructor(){
        CheckValidation = require('./CoreCheckValidation')
        this.CheckValidation = new CheckValidation()
    }

    isMandatory(argument){
        try{
            if(this.CheckValidation.isMandatory(argument) !== null){
                return true
            }

        }catch(err){
            return err
        }
    }

    isFloat(argument){
        try{
            if(this.CheckValidation.isFloat(argument) !== null ){
                return true
            }
        }catch(err){
            return err
        }
    }

    isPublicIPAddress(argument){
        try{
            if(this.CheckValidation.isPublicIPAddress(argument)){
                return true
            }
        }catch(err){
            return err
        }
    }

    isYesNo(argument){
        try{
            if(this.CheckValidation.isYesNo(argument)){
                return true
            }
        }catch(err){
            return err
        }
    }

    isInteger(argument){
        try{
            if(this.CheckValidation.isInteger(argument)){
                return true
            }
        }catch(err){
            return err
        }
    }

    isPopulated(argument){
        try{
            if(this.CheckValidation.isPopulated(argument)){
                return true
            }
        }catch(err){
            return err
        }
    }

    isAlphaNumericString(argument){
        try{
            if(this.CheckValidation.isAlphaNumericString(argument)){
                return true
            }
        }catch(err){
            return err
        }
    }

    isString(argument){
        try{
            if(this.CheckValidation.isString(argument)){
                return true
            }
        }catch(err){
            return err
        }
    }

    isBoolean(argument){
        try{
            if(this.CheckValidation.isBoolean(argument)){
                return true
            }
        }catch(err){
            return err
        }
    }

    isObjectId(argument){
        try{
            if(this.CheckValidation.isObjectId(argument)){
                return true
            }
        }catch(err){
            return err
        }
    }

    isDomain(argument){
        try{
            if(this.CheckValidation.isDomain(argument)){
                return true
            }
        }catch(err){
            return err
        }
    }

    isDateTime(argument){
        try{
            if(this.CheckValidation.isDateTime(argument)){
                return true
            }
        }catch(err){
            return err
        }
    }

    isTime(argument){
        try{
            if(this.CheckValidation.isTime(argument)){
                return true
            }
        }catch(err){
            return err
        }
    }

    isLengthCorrect(argument){
        try{
            if(this.CheckValidation.isLengthCorrect(argument)){
                return true
            }
        }catch(err){
            return err
        }
    }

    isDate(argument){
        try{
            if(this.CheckValidation.isDate(argument)){
                return true
            }
        }catch(err){
            return err
        }
    }

    isIPAddress(argument){
        try{
            if(this.CheckValidation.isIPAddress(argument)){
                return true
            }
        }catch(err){
            return err
        }
    }

    isPrivateIPAddress(argument){
        try{
            if(this.CheckValidation.isPublicIPAddress(argument)){
                return true
            }
        }catch(err){
            return err
        }
    }
}

module.exports = CoreValidation