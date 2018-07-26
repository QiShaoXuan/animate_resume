import marked from 'marked'

export default function loadMd(options = {
  containerName: '',
  content: '',
}) {
  return new Promise(resolve => {
    let container = document.querySelector(options.containerName)
    let mdStr = options.content
    let interval = 16
    let num = 0
    let sum = mdStr.length

    const start = function () {
      setTimeout(() => {
        num += 1
        if (num <= sum) {
          container.innerHTML = marked(mdStr.substr(0,num))
          start()
        } else {
          console.log('resolve')
          return resolve()
        }
      }, interval)
    }

    start()
  })
}
