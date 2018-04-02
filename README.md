# redux-svelte
This is a very small package (just 200B gzipped) to join Redux and Svelte, simply and delcaratively. It subscribes to your Redux store and updates mapped data only when it changes. It's very efficient, and very fast.

### Installation

```
npm install redux-svelte
```

### Usage

In your Svelte component:
```js
<script>
import observeState from 'redux-svelte';

export default {
  immutable: true, // This MUST be set to make Svelte efficiently understand what to update
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
When the state changes in Redux, the Svelte `data` state is updated. This works by comparing the object reference and updating only what has changed. This is a tiny package, but is exceptionally useful and joins these two wonderful packages with elegance and without anti-patterns in either.
