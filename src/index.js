export default function (store, mapState) {
  this.set(mapState(store.getState()));

  const unobserveState = store.subscribe(() => {
    this.set(mapState(store.getState()));
  });

  this.on('destroy', () => unobserveState());
}
