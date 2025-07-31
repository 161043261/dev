import { ref, toRefs, defineComponent, type VNode } from 'vue'
import BaseCard from './BaseCard'

interface IProps {
  // App
  dev: boolean
  // BaseCard
  header: string | VNode
  itemList: string[]
}

export default defineComponent({
  props: ['dev', 'header', 'placeholder', 'itemList'],

  setup(props: IProps) {
    const { dev, header, itemList } = toRefs(props)

    const newItem = ref('')
    const removeItem = (idx: number) => {
      itemList.value.splice(idx, 1)
    }
    const addNewItem = () => {
      itemList.value.push(newItem.value)
      newItem.value = ''
    }

    const handleChange = (ev: Event, idx: number) => {
      itemList.value[idx] = (ev.target as HTMLInputElement)?.value
    }

    return () => (
      <BaseCard header={header.value}>
        {dev.value ? (
          <ul class="ml-5 list-disc">
            <li class="flex gap-5">
              <textarea class="flex-7/8" v-model={newItem.value} placeholder="newItem" />
              <button class="flex-1/16" onClick={() => addNewItem()}>
                add
              </button>
            </li>
            {itemList.value.map((item, idx) => (
              <li key={idx} class="flex gap-5">
                <textarea
                  class="flex-7/8"
                  v-model={item}
                  placeholder="技能"
                  onInput={(ev) => handleChange(ev, idx)}
                />
                <button class="flex-1/16" onClick={() => removeItem(idx)}>
                  remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <ul class="ml-5 list-disc">
            {itemList.value.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </BaseCard>
    )
  },
})
