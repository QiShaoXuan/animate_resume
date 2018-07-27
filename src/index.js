import indexCss from './styles/index.scss'

import config from './scripts/config'
import {loadStyle, skipStyle} from "./scripts/loadStyle"
import {loadMd, skipMd} from './scripts/loadMd'

import {style1, style2} from "./load/style"
import {resume} from './load/resume'


let skipBtn = document.querySelector('#skip-btn')
skipBtn.addEventListener('click', function () {
  config.pause = true
  setTimeout(() => {
    skipStyle({containerName: '#style-editor', content: style1})
    skipMd({containerName: '#resume-content', content: resume})
    skipStyle({containerName: '#style-editor', content: style2, write: false,})
  }, 100)
})

loadStyle({
  containerName: '#style-editor',
  content: style1
})
  .then(() => loadMd({
  containerName: '#resume-content',
  content: resume
}))
  .then(() => loadStyle({
    containerName: '#style-editor',
    content: style2,
    write: false,
  }))

