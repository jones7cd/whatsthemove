import Vue         from 'vue'
import Router      from 'vue-router'
import Home        from '@/views/Home.vue'
import About       from '@/views/About.vue'
import Calendar    from '@/views/calendar/calendar.vue'
import HelloWorld2 from '@/components/HelloWorld2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        icon: "home"
      }
    },

    {
      path: "/calendar/calendar.vue",
      name: "calendar",
      component: Calendar,
      meta: {
        icon: "date_range"
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        icon: "info"
      }
    },
    {
      path: "/components/HelloWorld2.vue",
      name: "helloworld2",
      component: HelloWorld2
      
    }
  ]
})
