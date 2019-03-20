export default function ({ store, redirect }) {
  if (store.state.users.currentUser) {
    return redirect('/')
  }
}