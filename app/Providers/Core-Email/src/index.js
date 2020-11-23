const Mail = use('Mail')

/**
     * @method sendMail
     * @async
     * @param {*String} bodyOrTemplateName 
     * @param {*String} subject 
     * @param {*Array} to 
     * @param {*String} from 
     * @param {*String} type 
     * @param {*Object} data 
     * @param {*Array} cc 
     * @param {*Array} bcc 
     * @param {*String} attachment 
     */

class CoreMail {
    constructor (Config){
        this.Config = Config
    }
     
    async sendMail(bodyOrTemplateName, subject, to, from = '', type = '', data = {}, cc = [], bcc = [], attachment = '') {
        this.to = to;
        this.from = this.attachFrom(from);
        this.attachment = attachment;
        this.cc = cc;
        this.bcc = bcc;
        this.bodyOrTemplateName = bodyOrTemplateName;
        this.subject = subject;
        this.data = data;

        try {
            const that = this;
            //Remaining error handling
            if(to === '' || to === null){
                //console.log("Email Recepient Not Defined")
            }           
            if (type === 'raw') {
                await Mail.raw(this.bodyOrTemplateName, (message) => {
                    message.from(this.from);
                    message.to(to);
                    message.subject(this.subject);
                    that.attachCC(this.cc, message);
                    that.attachBCC(this.bcc, message);
                    that.attachAttachment(this.attachment, message);
                });
            } else if (type === 'template') {
                await Mail.send(this.bodyOrTemplateName, this.data, (message) => {                  
                    message.from(this.from);
                    message.to(to);
                    message.subject(this.subject);
                    that.attachCC(this.cc, message);
                    that.attachBCC(this.bcc, message);
                    that.attachAttachment(this.attachment, message);
                });
            }
            
        } catch (err) {
            throw err;
        }
        
    }

    attachFrom(from) {
        return from || this.Config.get('mail.from');
        
    }

    attachCC(cc , message){
        if (cc.length > 0) {
            for(let x in cc) {
                message.cc(cc[x]);
            }
        }
    }

    attachBCC(bcc, message) {
        if (bcc.length > 0) {
            for(let x in bcc) {
                message.bcc(bcc[x]);
            }
        }
    }

    attachAttachment(attachment, message) {
        if (attachment !== '') {
            message.attach(attachment);
        }
    }
}

module.exports = CoreMail;
