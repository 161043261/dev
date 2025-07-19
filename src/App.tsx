import { Github, Iphone, Mail } from '@icon-park/vue-next'
import { defineComponent, onUnmounted } from 'vue'
import MyCard from './components/MyCard'

export default defineComponent(() => {
  let timer: number | null = null

  const handleClick = (ev: MouseEvent) => {
    ev.preventDefault()
    if (timer) {
      return
    }
    const classList = (ev.target as HTMLHeadElement).classList
    classList.add('animate__animated', 'animate__bounceIn')
    timer = setTimeout(() => {
      classList.remove('animate__animated', 'animate__bounceIn')
      timer = null
    }, 3000)
  }

  onUnmounted(() => (timer = null))

  return () => (
    <div>
      <div class="flex flex-col items-center">
        <h1
          class="mt-[20px] cursor-pointer text-[30px]"
          onClick={(ev) => handleClick(ev)}
          onContextmenu={(ev) => handleClick(ev)}
        >
          杭天铖
        </h1>
        <div class="my-[20px] flex items-center gap-[10px]">
          <Iphone theme="outline" size="24" fill="#4a90e2" strokeWidth={3} />
          <a href="tel:153****7789" class="hover:bg-[#c4d9ff]">
            15395377789
          </a>
          <Mail theme="outline" size="24" fill="#4a90e2" strokeWidth={3} />
          <a href="mailto:161043261@qq.com" class="hover:bg-[#c4d9ff]">
            161043261@qq.com
          </a>
          <Github theme="outline" size="24" fill="#4a90e2" strokeWidth={3} />
          <a
            href="https://github.com/161043261"
            class="hover:bg-[#c4d9ff]"
            target="_blank"
            rel="noopener"
          >
            Github
          </a>
        </div>
        <a
          href="https://161043261.github.io/"
          class="hover:bg-[#c4d9ff] underline"
          target="_blank"
          rel="noopener"
        >
          161043261.github.io
        </a>
      </div>

      <MyCard header="个人信息">
        <div>男, 2002</div>
      </MyCard>

      <MyCard header="求职意向">
        <ul class="ml-[20px] list-disc">
          <li>目标岗位: 前端实习 (Vue3/React)</li>
          <li>目标地点: 不限</li>
        </ul>
      </MyCard>

      <MyCard header="教育经历">
        <ul>
          <li class="grid grid-cols-3">
            <div>本科: 2019-2023</div>
            <div>西安电子科技大学</div>
            <div>微电子科学与工程</div>
          </li>
          <li class="grid grid-cols-3">
            <div>硕士: 2024 至今</div>
            <div>南京邮电大学</div>
            <div>计算机技术</div>
          </li>
        </ul>
      </MyCard>

      <MyCard header="技能清单">
        <ul class="ml-[20px] list-disc">
          <li>熟悉 CSS, CSS 预处理器, CSS 后处理器, CSS 原子化, CSS 模块化</li>
          <li>熟悉 JS/TS, 熟悉 Node.js, 了解 monorepo</li>
          <li>熟悉 Express.js, Nest.js, 有前端 bff 层开发经验</li>
          <li>熟悉 Vue3, Pinia, vue-router, 熟悉响应式原理</li>
          <li>熟悉 React, Zustand, react-router, 了解 Fiber 架构, 性能优化 hooks</li>
          <li>熟悉数据结构, 计算机网络, 设计模式</li>
          <li>熟悉 Git, 了解 CI/CD</li>
          <li>熟悉 Vite, 了解 Webpack</li>
          <li>了解打包产物分析, Web 性能指标, 性能优化</li>
          <li>对创建前端 UI 有强烈的兴趣和成就感</li>
        </ul>
      </MyCard>

      <MyCard header="实习经历"></MyCard>

      <MyCard header="项目经历"></MyCard>

      <MyCard header="科研经历">研究方向是 BBR 拥塞控制协议, ns3 网络仿真</MyCard>
    </div>
  )
})
