# learn-vue-js
Learning vue js

## VUE JS
Vue is a approchable, versatile and perfomant javascript framework that helps to create more maintainable and testable codebase. vue is reactive.

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