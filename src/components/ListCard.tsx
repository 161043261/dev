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
  props: ['dev', 'header', 'itemList'],
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

    return () => (
      <BaseCard header={header.value}>
        {dev.value ? (
          <ul class="ml-5 list-disc">
            {itemList.value.map((item, idx) => (
              <li key={idx} class="flex">
                <input class="flex-7/8" v-model={item} placeholder="技能" />
                <button class="flex-1/8" onClick={() => removeItem(idx)}>
                  删除
                </button>
              </li>
            ))}
            <li class="flex">
              <input class="flex-7/8" v-model={newItem.value} placeholder="技能" />
              <button class="flex-1/8" onClick={() => addNewItem()}>
                添加
              </button>
            </li>
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
