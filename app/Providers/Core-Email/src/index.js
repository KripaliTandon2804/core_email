
const Mail = use('Mail')
const CoreMailProvider
class CoreMail {
    constructor (Config){
        this.Config = Config
    }

    sendMail(from, to, subject, cc, bcc){
        try{
           Mail.send(data, (message) => {
               message
               .from(from)
               .to(to)
               .subject(subject)
               .cc(cc)
               .bcc(bcc)               
           }) 

        }catch(err){
            console.log(err)
        }
    }

    attachSubject(subject){
        try{
            this.subject = subject
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
            this.cc = cc
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
            this.bcc = bcc
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
            this.data = data
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
            this.data = data
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
