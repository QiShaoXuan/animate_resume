import Prism from 'prismjs'

export default class ar {
   constructor(options = {
      language: '',
      containerName: '',
      content: '',
      rewrite: true,
   }) {
      const lang = ['css', 'markdown']
      if (!lang.includes(options.language)) {
         return console.error(`language only support ${lang.join()}`)
      }

      this.container = document.querySelector(options.containerName)
      this.lang = options.language
      this.content = options.content
      this.rewrite = options.rewrite
      this.interval = 16
      this.styleContainer = null
      this.endOfSentence = /[\.\?\!]\s$/
      this.comma = /\D[\,]\s$/
      this.endOfBlock = /[^\/]\n\n$/


      if (this.lang === 'css') {
         let newStyle = document.createElement('style')
         let head = document.querySelector('head')
         head.appendChild(newStyle)
         let allStyle = document.querySelectorAll('style')
         this.styleContainer = allStyle[allStyle.length - 1]
      }
   }

   load() {
      return new Promise(resolve => {
         let num = 0
         let sum = this.content.length
         let containerOriginContent = ''
         if (!this.rewrite) {
            containerOriginContent = this.container.innerHTML
         }

         const start = function () {
            setTimeout(() => {
               num += 1
               if (num <= sum) {
                  let str = this.content.substr(0, num)
                  let code = Prism.highlight(str, Prism.languages[this.lang])
                  this.scrollToBottom()
                  this.container.innerHTML = containerOriginContent + code
                  if (this.lang === 'css') {
                     this.styleContainer.innerText = str
                  }
                  let interval = this.setInterval(str)
                  if(interval){
                     setTimeout(() => {
                        start()
                     },interval)
                  }else{
                     start()
                  }
               } else {
                  return resolve()
               }
            }, this.interval)
         }.bind(this)

         start()
      })
   }

   scrollToBottom() {
      this.container.scrollTop = 100000
   }

   setInterval(str){
      if (this.comma.test(str)) return this.interval * 20
      if (this.endOfBlock.test(str)) return this.interval * 40
      if (this.endOfSentence.test(str)) return this.interval * 60
      return 0
   }
}
