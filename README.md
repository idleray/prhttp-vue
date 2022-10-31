# prhttp-vue
Vue Component lifecycle binding for prhttp

## Installation
```shell
npm install prhttp-vue
```

## Usage
### Vue 2.x 
Use Mixin
```javascript
import {lifecycleMixin} from 'prhttp-vue'

// PrHttpClient instance
const httpClient = /.../

export default {
  mixins: [lifecycleMixin(httpClient)],
}

```

### Composition API
Bind lifecycle in `<script setup>` or `setup()`
```javascript
import { bindVue3Lifecycle } from 'prhttp-vue'

// PrHttpClient instance
const httpClient = /.../

bindVue3Lifecycle(httpClient)
```