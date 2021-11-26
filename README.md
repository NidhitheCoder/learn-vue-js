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
