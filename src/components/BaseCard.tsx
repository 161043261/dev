import { defineComponent, toRefs, type VNode } from 'vue'

interface IProps {
  header: string | VNode
}

export default defineComponent({
  props: ['header'],
  setup(props: IProps, { slots } /** ctx */) {
    const { header } = toRefs(props)
    return () => (
      <div class="mx-auto mt-2 w-[80vw]">
        <div class="font-bold">{header.value}</div>
        <hr class="my-2" />
        <div>{slots.default ? slots.default() : <></>}</div>
      </div>
    )
  },
})
