export const style1 = `/**
 *
 * Hey. My name's qishaoxuan. I'm a web developer.
 *
 * I build a animating resume
 *
 * Let's begin. We start by animating... yes, everything.
 */

* {
  transition: all 1s;
}

/**
 * It seems to do noting. But you'll see.
 *
 * Black on white is really boring,
 * change them first.
 */

html {
  background: rgb(63, 82, 99);
  font-size: 16px;
}

/***
 * Hold on...
 */

pre {
  color: #ffffff;
}

/**
 * That's better. 
 *
 * Working in this big empty space is tough.
 *
 * I'm going to make a nice area to show the content.
 */

pre:not(:empty) {
  max-height: 94%;
  overflow: auto;
  background: rgb(48, 48, 48);
  border: 1px solid #ccc;
  width: 49%;
  /*font-family: monospace;*/
  padding: 10px 10px 20px;
  box-shadow: -4x 2px 0 rgba(0,0,0,0.3);
  white-space: pre-wrap;
  outline: 0;
}

#style-editor {
  transform: translateX(95%);
  position: absolute;
  left: 0;
  top: 0;
}

/**
 * This is good, but all the text is white!
 * Let's make it more readable.
 */

#style-editor  { color: #DEDEDE }
.comment       { color: #857F6B; font-style: italic; }
.selector      { color: #D7BA7D; }
.keyword       { color: #569CD6; }
.property      { color: #569CD6; }
.function      { color: #C366A3; }
.punctuation   { color: #FFCF00; }

/**
 * It\`s time to get a little perspective.
 */

body {
  perspective: 1000px;
}

#style-editor {
  transform: translateX(98.5%) rotateY(-10deg);
  transform-origin: right;
}

/**
 *  * Okey, it is time to show the resume.
 * You must not just come to see the pretty colors.
 */
 
 #resume-content {
  transform: rotateY(10deg);
  transform-origin: left;
}
`

export const style2 = `

/**
 * That markdown on the left doesn't look great. Let's render it.
 */

#work-text.flipped {
  -webkit-transform: rotateX(0deg) rotateY(190deg) rotateZ(180deg);
}

#work-text .md {
  -webkit-transform: rotateY(190deg) rotateZ(180deg);
  margin-top: 800px;
}

/**
 * Alright. We're ready.
 *
 * 3...
 * 2...
 * 1...
 *
 * .
 * ....faked you out.
 *
 * Okay here we go!
 *
 */


/**
 * The text could use some tweaks.
 */

.md {
  font-family: "Helvetica Neue", Helvetica, sans-serif;
}

.md h1, .md h2, .md h3, .md h4, .md h5, .md h6 {
  display: inline-block;
  color: #ddd;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}

.md li {
  margin: 5px 0;
}

.md h1, .md h2, .md h3, .md h4, .md h5, .md h6, .md ul, .md p {
  margin: 0px;
}

/**
 * That's better.
 *
 * If you want to contact me, use the PGP keys on the left.
 *
 * You know, if you're into that sort of thing.
 */

#pgp-text {
  font-size: 12px;
  color: #ada;
}


/**
 * We're almost done.
 */

 pre:hover{
   box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);
 }

 #skip-animation, #pause-resume {
   display: none;
 }

/**
 * I hope you enjoyed this.
 *
 * Thanks to Jake Albaugh, who was the first (that I know of) to do
 * a page like this. Some of the autotyping and syntax highlighting
 * code is based off his work.
 *
 * See more of Jake's work at http://codepen.io/jakealbaugh/
 */

/**
 * By the way, you can edit this box. Try adding new CSS!
 *
 * For example,
 *
 * The property 'text-shadow' takes the parameters:
 * 'x', 'y', 'blur', 'color'.
 *
 * So if I wanted to mirror the values,
 * I could place a shadow 15px under it,
 * with a little blur for effect:
 */

.value {
  color:hi;
  text-shadow: 0px 15px 1px white;
}

/**
 * Try it out! There's lots you can do.
 * Try playing with text sizes, shadows, animations, or just
 * break the page. I won't hold it against you.
 */`

