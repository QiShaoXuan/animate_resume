import indexCss from './styles/index.scss'

import loadStyle from "./scripts/loadStyle"
import loadMd from './scripts/loadMd'

import {style1, style2} from "./load/style"
import {resume} from './load/resume'

loadStyle({
  containerName: '#style-editor',
  content: style1
}).then(() => loadMd({
    containerName:'#resume-content',
    content:resume}))
  .then(() => {
    console.log('down')
  })

// style-editor
