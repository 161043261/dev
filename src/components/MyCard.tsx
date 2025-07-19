import { defineComponent, toRefs, type Ref } from 'vue'

interface IProps {
  header: string | Ref<string>
}

export default defineComponent({
  props: ['header'],
  setup(props: IProps, { slots } /** ctx */) {
    const { header } = toRefs(props)
    return () => (
      <div class="mx-auto mt-[20px] w-[800px] rounded-3xl">
        <div class="text-[20px] font-bold">{header.value}</div>
        <hr class="my-[10px]" />
        <div>{slots.default ? slots.default() : <></>}</div>
      </div>
    )
  },
})
