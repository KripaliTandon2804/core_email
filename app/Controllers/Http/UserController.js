'use strict'
const CoreMail = use('CoreMail')
const Helpers = use('Helpers')
class UserController {
    
async store() {
  await CoreMail.sendMail('welcome', 'Test Mail', 'kripalitandon@gmail.com', 'template','', ['kripali.magnates@gmail.com'], ['kripali.tandon@magnates.mobi','kripalitandon2804@gmail.com'],'ex.txt');
            //async sendMail(bodyOrTemplateName, subject, to, from = '', type = 'raw', data = {}, cc = [], bcc = [], attachment = '')
  return 'hello';
  
  }  
}

module.exports = UserController
