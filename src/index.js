import indexCss from './styles/index.scss'
import ar from "./scripts/AR"
import startAnimate from './scripts/startAnimate'
import {code1, code2} from "./load/load";

var startCode = `// magic don\`t touch`

let rightFont = new ar({
   language: 'css',
   containerName: '#style-editor',
   content: code1
})
// let rightFont2 = new ar({
//    language: 'css',
//    containerName: '#right-container',
//    content: code2,
//    rewrite: false
// })

// let comma = /\D[\,]\s$/;
// let endOfBlock = /[^\/]\n\n$/;

// startAnimate('#style-editor',startCode)
//     .then(rightFont.load.bind(rightFont))
// .then(rightFont2.load.bind(rightFont2))

rightFont.load()

// style-editor
