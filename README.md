# redux-svelte
This is a very small package (just 200B gzipped) to join Redux and Svelte, simply and declaratively. It subscribes to your Redux store and updates mapped data only when it changes. It's very efficient, and very fast.

### Installation

```
npm install --save redux-svelte
```

### Usage

In your Svelte component:
```html
<div>{{ a }}{{ b }}{{ c }}</div>

<script>
import observeState from 'redux-svelte';

export default {
  // This MUST be set (either here on in the root component)
  // to make Svelte efficiently update only what has changed.
  immutable: true,

  oncreate() {
    this.observeState(store, state => ({
      a: state.a,
      b: state.mod.b, // Mapping to namespaced reducers
      c: myReselectSelector(state) // Works with Reselect selectors
    }));
  },

  methods {
    observeState,
  },
}
</script>
```
When the state changes in Redux, the Svelte `data` state is updated. This works by comparing the object reference and updating only what has changed.
