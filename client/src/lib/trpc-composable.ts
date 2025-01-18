import { createTRPCVueQueryClient } from '@falcondev-oss/trpc-vue-query'
import type { AppRouter } from '../../../server/trpc/router'
import { inject } from 'vue'

const useApi = () => {
  return inject('trpc') as ReturnType<typeof createTRPCVueQueryClient<AppRouter>>
}

export default useApi
