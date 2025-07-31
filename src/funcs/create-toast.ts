import BaseToast from '@/components/BaseToast.vue'
import { createVNode, render, type VNode } from 'vue'

export interface IToast {
  show: (message: string) => void
}

export function createToast(): IToast {
  const container = document.body

  const mountToast = (options: { message: string }) => {
    render(null, container)
    const vnode: VNode = createVNode(BaseToast, {
      message: options.message,
    })
    render(vnode, container)
    vnode.component?.exposed?.mount()
  }

  return {
    show: (message: string) => mountToast({ message }),
  }
}
