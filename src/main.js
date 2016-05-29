var Vue = require('vue')
var VueRouter = require('vue-router')

Vue.use(VueRouter)

// Setup / import components for use with the router
var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})
// or, if you create your components in seperate .vue files:
//var Foo = require('./components/Foo.vue')

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})
//or, if you create your components in seperate .vue files:
//var Bar = require('./components/Bar.vue')

// create App instance
var App = Vue.extend({})

//create Router instance
var router = new VueRouter()

//add your routes and their components
router.map({
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
})

router.start(App, '#app')