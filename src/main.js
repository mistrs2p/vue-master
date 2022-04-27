import { createApp } from 'vue'
import App from './App.vue'

// create new independent instance
const forumApp = createApp(App)

// set global component
forumApp.component('NiceButton', {})

// install a plugin
// forumApp.use(SomePlugin)

forumApp.mount('#app')

// create another new independent instance
// const anotherVueApp = createApp(App)
// anotherVueApp.mount('#another-app')
