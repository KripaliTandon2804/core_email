
const Mail = use('Mail')
const message = require('./Message')
const CoreMailProvider = require('../providers/CoreMailProvider')
class CoreMail {
    constructor (Config){
        this.Config = Config
        this.sendMail = this.sendMail
        this.attachSubject = this.attachSubject
        this.attachBCC = this.attachBCC
        this.attachTemplate = this.attachTemplate
        this.attachCC = this.attachCC
    }

    sendMail(from, to, subject, cc, bcc){
        Mail.raw('Plain text message', (message) => {
            message
            .from(from)
            .to(to)
            .subject(subject)               
        })    
    }

    attachSubject(subject){
        try{
            if(subject){
                Mail.send(data, (message) => {
                    message.subject(subject)
                })             
            }
            return 'Sending mail without subject'
        }catch(err){
            console.log(err)
        }
    }

    attachCC(cc){
        try{
            if(cc){
                Mail.send(data, (message) => {
                    message.cc(cc)
                })
            }
            return 'Sending mail without cc'
        }catch(err){
            console.log(err)
        }
    }

    attachBCC(bcc){
        try{
            if(bcc){
                Mail.send(data, (message) => {
                    message.bcc(bcc)
                })
            }
            return 'Sending mail without bcc'
        }catch(err){
            console.log(err)
        }
    }

    attachTemplate(template){
        try{
            if(data){
                Mail.send(data,(message) => {
                    message.attach('path', {contentType: 'plain/text'})
                })
            }
            return 'Sending mail without template'
        }catch(err){
            console.log(err)
        }
    }

    attachAttachment(data){
        try{
            if(data){
                Mail.send(data, (message) => {
                    message.attachData(Buffer.from('data'), data.txt)
                })
            }
            return 'Sending mail without data'
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = CoreMail;
