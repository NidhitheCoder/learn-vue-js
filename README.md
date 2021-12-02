# learn-vue-js

Learning vue js

## VUE JS

Vue is a approchable, versatile and perfomant javascript framework that helps to create more maintainable and testable codebase. vue is reactive.

- vue js is a front-end framework for create javascript drive web applications and it runs in the browser.
- No need make multiple server requests for pages.
- vue js is very lean(16kb) and it has very high run-time performance.

## How to install ?

- go to https://v3.vuejs.org/guide/installation.html#vue-devtools
- use CDN option to install vue js.
-

### v-bind

- Dynamically binds an attribute to an expression.
- Syntax - `v-bind:src="expression"`.
- Examples -
  :alt="description"
  :href="url"
  :title="tooltip"
  :class="isActive"
  :style="isStyled"
  :disabled="isDisabled"

### @

- We can use @ for modifier or event occuring(moveover,mouseup).

### v-on:

- v-on: for event handling.

### Event modifiers

- Vue.js allows us to handle events triggered by the user. Handling events helps add interactivity to web apps by responding to the user’s input.
- https://vuejs.org/v2/guide/events.html#Event-Modifiers

### Vue.component

- vue allow to create reusable components.
- syntax : `Vue.components('componentName', {optionalComponents}`
- example :

  ```
  Vue.components('item', {
    props: [message],
    template: `<div>
              ...contents{{message}}
              </div> `,
    data() {
      return ..some-data
    }
  });
  ```

- Props: A custom attribute for passing data into our components.

## To install

- vue create <appName>

## To run

- npm run serve

# vue CLI

- Vue CLI allows to create a dev environment workflow with webpack. Vue CLI uses ES6 features.
- It allows to compile and minify our js into 1 file, significantly reduce our loading speed.
- It use single file templates.
- Allows to Compile everything on our machine, not in a browser.
- Live reload dev server.
- How to install ? `npm install vue-cli`
- How to create new vue project with CLI? `vue init <template-name> <project-name>`
- For installing all the dependencies `npm install`.
- For run `npm run dev`.
