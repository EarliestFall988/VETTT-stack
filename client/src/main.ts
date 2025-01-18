import './assets/main.css'
import { httpBatchLink } from '@trpc/client'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin, useQueryClient } from '@tanstack/vue-query'
import { createTRPCVueQueryClient } from '@falcondev-oss/trpc-vue-query'

import type { AppRouter } from '../../server/trpc/router/index'
import SuperJSON from 'superjson'

export const app = createApp(App)

app.use(VueQueryPlugin)
app.use({
  install(app) {
    const queryClient = app.runWithContext(useQueryClient)
    const trpc = createTRPCVueQueryClient<AppRouter>({
      queryClient,
      trpc: {
        links: [
          httpBatchLink({
            url: 'http://localhost:3001/api/trpc',
          }),
        ],
        transformer: SuperJSON,
      },
    })
    app.provide('trpc', trpc)
  },
})

app.use(router)
app.mount('#app')
