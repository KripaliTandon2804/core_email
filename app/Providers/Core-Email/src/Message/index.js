class Message {
    constructor() {
        this.mailerMessage = {}
        console.log(">>>>>>>>>>>>>>>>text")
    }


   /**
   * Parse and set address object/array on
   * the address key
   *
   * @method _setAddress
   *
   * @param  {String}    key
   * @param  {String|Array}    address
   * @param  {String}    [name]
   *
   * @private
   */


  _setAddress (key, address,name) {
    this.mailerMessage[key] = this.mailerMessage[key] || []

    if (address instanceof Array === true) {
      this.mailerMessage[key] = this.mailerMessage[key].concat(address)
      return
    }
  
    const addressObj = name ? { name, address } : address
    this.mailerMessage[key].push(addressObj)
  }

  from(address){
      this._setAddress('from', address)
      return this
  }

  to(address) {
      this._setAddress('to', address)
  }

  cc (address) {
    this._setAddress('cc', address)
    return this
  }

  bcc (address) {
    this._setAddress('bcc', address)
    return this
  }

  text (text) {
    this.mailerMessage.text = text
    return this
  }

  /**
   * Set email html body
   *
   * @method html
   *
   * @param  {String} html
   *
   * @chainable
   */
  html (html) {
    this.mailerMessage.html = html
    return this
  }

  /**
   * Add a new attachment to the mail
   *
   * @method attach
   *
   * @param  {String} content
   * @param  {Object} [options]
   *
   * @chainable
   *
   * @example
   * ```js
   * message.attach('absolute/path/to/file')
   * message.attach('absolute/path/to/file', { contentTpe: 'plain/text' })
   * ```
   */
  attach (filePath, options) {
    this.mailerMessage.attachments = this.mailerMessage.attachments || []
    const attachment = Object.assign({ path: filePath }, options || {})
    this.mailerMessage.attachments.push(attachment)
    return this
  }

  /**
   * Attach raw data as attachment with a custom file name
   *
   * @method attachData
   *
   * @param  {String|Buffer|Stream}   content
   * @param  {String}                 filename
   * @param  {Object}                 [options]
   *
   * @chainable
   *
   * @example
   * ```js
   * message.attachData('hello', 'hello.txt')
   * message.attachData(new Buffer('hello'), 'hello.txt')
   * message.attachData(fs.createReadStream('hello.txt'), 'hello.txt')
   * ```
   */
  attachData (content, filename, options) {
    if (!filename) {
      throw GE
        .InvalidArgumentException
        .invalidParameter('Define filename as 2nd argument when calling message.attachData')
    }

    this.mailerMessage.attachments = this.mailerMessage.attachments || []

    const attachment = Object.assign({ content, filename }, options || {})
    this.mailerMessage.attachments.push(attachment)

    return this
  }


}

module.exports = Message
