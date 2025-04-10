// No third-party components
import { Github, Iphone, Mail } from '@icon-park/vue-next'
import { defineComponent } from 'vue'
import avatar from '@/assets/avatar.jpg'
import CvCard from './components/cv_card'

export default defineComponent(() => {
  let timer: number | null = null

  const handleClick = (ev: MouseEvent) => {
    ev.preventDefault()
    if (timer) {
      return // throttle
    }
    const classList = (ev.target as HTMLHeadElement).classList
    classList.add('animate__animated', 'animate__bounceIn')
    timer = setTimeout(() => {
      classList.remove('animate__animated', 'animate__bounceIn')
      timer = null
    }, 3000)
  }

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

      <div class="avatar-container">
        {/* 禁止右键下载, 禁止拖动下载 */}
        <img
          src={avatar}
          alt="avatar"
          class="absolute top-5 right-80 w-[150px] rounded-lg opacity-85"
          onContextmenu={(ev) => ev.preventDefault()}
          onDragstart={(ev) => ev.preventDefault()}
        ></img>
      </div>

      <CvCard header="个人信息">
        <div>男, 2002</div>
      </CvCard>

      <CvCard header="求职意向">
        <ul class="ml-[20px] list-disc">
          <li>目标岗位: 前端开发 (Vue/React)</li>
          <li>目标地点: 不限</li>
        </ul>
      </CvCard>

      <CvCard header="教育经历">
        <ul>
          <li class="grid grid-cols-3">
            <div>本科: 2019 - 2023</div>
            <div>西安电子科技大学</div>
            <div>微电子科学与工程</div>
          </li>
          <li class="grid grid-cols-3">
            <div>硕士: 2024 至今</div>
            <div>南京邮电大学</div>
            <div>计算机技术</div>
          </li>
        </ul>
      </CvCard>

      <CvCard header="技能清单">
        <ul class="ml-[20px] list-disc">
          <li>熟悉 CSS, tailwind, 了解 CSS 原子化, CSS 模块化, CSS-in-JS</li>
          <li>熟悉 JS/TS, 熟悉 ES6 语法, pnpm monorepo, 了解 nodejs fs库, net库, pm2</li>
          <li>熟悉 vue3, pinia vue-router, 了解 Vue3 响应式原理, 了解 AST 的遍历转换过程</li>
          <li>熟悉 JSX/TSX, 了解 React</li>
          <li>熟悉数据结构, 计算机网络, 设计模式</li>
          <li>熟悉 Git, 有良好的开发习惯, 了解 husky, CI/CD</li>
          <li>了解 Web 性能优化: 使用 rollup 插件分析 dist, 了解 FCP 等 Web 性能指标</li>
          <li>了解 SEO, 服务器端渲染, Hydration 水合</li>
          <li>对创建前端 UI 有强烈的兴趣和成就感</li>
        </ul>
      </CvCard>

      {/* 工作经历 */}
      <CvCard header="实习经历">暂无 🤣</CvCard>

      <CvCard header="项目经历">
        <div>
          <div class="my-[20px] flex gap-[20px]">
            <div class="font-bold">ToB 后台管理系统</div>
            <div>
              项目地址:
              <a
                href="https://github.com/161043261/chahan"
                class="hover:bg-[#c4d9ff] ml-[10px] underline duration-500"
                target="_blank"
                rel="noopener"
              >
                github.com/161043261/chahan
              </a>
            </div>
          </div>
          <div>
            技术栈: vite, vue3, vue-router, axios, pinia, sass, tailwind, element-plus, mockjs,
            高德地图 api, husky 等
          </div>

          <ul class="ml-[20px] list-disc">
            <li>手写单例模式的事件总线</li>
            <li>手写 vite 插件, 模拟后端接口</li>
            <li>后端动态渲染侧边栏</li>
            <li>缓存组件, 记忆滚动位置</li>
            <li>手写虚拟滚动列表, 优化前端性能</li>
            <li>使用 web worker 处理计算密集型任务</li>
            <li>封装自定义指令, 实现可拖拽窗口</li>
            <li>封装全局toast (使用 vue 插件和全局 provide/inject 两种方式实现)</li>
            <li>使用 vue3+TSX 开发, 目前正在迁移到 SSR 框架 Nuxt</li>
          </ul>

          <div class="my-[20px] flex gap-[20px]">
            <div class="font-bold">electron 视频转码软件</div>
            <div>
              项目地址:
              <a
                href="https://github.com/161043261/ffmpeg-wrapper"
                class="hover:bg-[#c4d9ff] ml-[10px] underline duration-500"
              >
                github.com/161043261/ffmpeg-wrapper
              </a>
            </div>
          </div>
          <div>技术栈: electron, vite, vue3, vue-router, pinia, sass, tailwind, element-plus</div>
        </div>
      </CvCard>
    </div>
  )
})
