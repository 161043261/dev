import { Github, Iphone, Mail } from '@icon-park/vue-next'
import { computed, defineComponent, inject, onMounted, reactive, ref, watch } from 'vue'
import BaseCard from './components/BaseCard'
import ListCard from './components/ListCard'
import type { IToast } from './funcs/create-toast'

export default defineComponent(() => {
  const dev = ref<boolean>(false)

  const toast = inject('toast') as IToast

  const handleClick = (ev: MouseEvent) => {
    ev.preventDefault()
    dev.value = !dev.value

    if (dev.value) {
      toast.show('Updating')
    } else {
      toast.show('Saved')
    }
  }

  // ========== headers ==========
  const headers = reactive<
    [
      personalInfo: string, // 0. personalInfo 个人信息
      intendedJob: string, // 1. intendedJob 意向工作
      eduExperience: string, // 2. eduExperience 教育经历
      skillList: string, // 3. skillList 技能
      jobExperience: string, // 4. jobExperience 实习/工作经历
      projectExperience: string, // 5. projectExperience 项目经历
      researchExperience: string, // 6. researchExperience 科研经历
    ]
  >(['个人信息', '意向工作', '教育经历', '技能', '实习经历', '项目经历', '科研经历'])

  // ========== theme ==========
  const primaryThemeColor = ref('#478fe1')

  // ========== state ==========
  const name = ref('你的名字 (右键以编辑)')
  const phoneNumber = ref('15395377789')
  const phoneNumberHref = computed(() => `tel:${phoneNumber.value}`)
  const email = ref('161043261@qq.com')
  const emailHref = computed(() => `mailto:${email.value}`)
  const githubUsername = ref('161043261')
  const githubHref = computed(() => `https://github.com/${githubUsername.value}`)
  const homepageHref = computed(() => `https://${githubUsername.value}.github.io/`)
  const personalInfo = ref('男, 2002')
  const targetJob = ref('前端实习 Vue3/React')
  const targetAddress = ref('上海')
  const eduExperienceList = ref<[timeRange: string, university: string, major: string][]>([
    ['高中: 2016-2019', '安徽省南陵中学', '理科'],
    ['本科: 2019-2023', '西安电子科技大学', '微电子科学与工程'],
    ['硕士: 2024 至今', '南京邮电大学', '计算机技术'],
  ])
  const newEduExperience = reactive<[timeRange: string, university: string, major: string]>([
    '',
    '',
    '',
  ])
  const skillList = ref<string[]>([
    '熟悉 CSS, CSS 预处理器, CSS 后处理器, CSS 原子化, CSS 模块化',
    '熟悉 JS/TS, 熟悉 Node.js, 了解 monorepo',
    '熟悉 Express.js, Nest.js, 有前端 bff 层开发经验',
    '熟悉 Vue3, Pinia, vue-router, 熟悉响应式原理',
    '熟悉 React, Zustand, react-router, 了解 Fiber 架构, 性能优化 hooks',
    '熟悉数据结构, 计算机网络, 设计模式',
    '熟悉 Git, 了解 CI/CD',
    '熟悉 Vite, 了解 Webpack',
    '熟悉打包产物分析, Web 性能指标, 了解打包产物体积优化, Web 性能优化',
  ])

  const jobExperienceList = ref<string[]>([])
  const projectExperienceList = ref<string[]>([])
  const researchExperienceList = ref<string[]>([])

  const addNewEduExperience = () => {
    eduExperienceList.value.push(newEduExperience)
    newEduExperience[0] = ''
    newEduExperience[1] = ''
    newEduExperience[2] = ''
  }

  const removeEduExperience = (idx: number) => {
    eduExperienceList.value.splice(idx, 1)
  }

  const clearEduExperience = (idx: number) => {
    eduExperienceList.value[idx] = ['', '', '']
  }

  const clearNewEduExperience = () => {
    newEduExperience[0] = ''
    newEduExperience[1] = ''
    newEduExperience[2] = ''
  }

  watch(dev, (newVal) => {
    if (!newVal /** dev.value == false */) {
      localStorage.setItem('name', name.value)
      localStorage.setItem('phoneNumber', phoneNumber.value)
      localStorage.setItem('email', email.value)
      localStorage.setItem('githubUsername', githubUsername.value)
      localStorage.setItem('personalInfo', personalInfo.value)
      localStorage.setItem('intendedJob', targetJob.value)
      localStorage.setItem('eduExperienceList', JSON.stringify(eduExperienceList.value))
      localStorage.setItem('skillList', JSON.stringify(skillList.value))
      localStorage.setItem('jobExperienceList', JSON.stringify(jobExperienceList.value))
      localStorage.setItem('projectExperienceList', JSON.stringify(projectExperienceList.value))
      localStorage.setItem('researchExperienceList', JSON.stringify(researchExperienceList.value))
    }
  })

  onMounted(() => {
    name.value = localStorage.getItem('name') ?? name.value
    phoneNumber.value = localStorage.getItem('phoneNumber') ?? phoneNumber.value
    email.value = localStorage.getItem('email') ?? email.value
    githubUsername.value = localStorage.getItem('githubUsername') ?? githubUsername.value
    personalInfo.value = localStorage.getItem('personalInfo') ?? personalInfo.value
    targetJob.value = localStorage.getItem('intendedJob') ?? targetJob.value

    const cacheEduExperienceList = localStorage.getItem('eduExperienceList')
    if (cacheEduExperienceList) {
      eduExperienceList.value = JSON.parse(cacheEduExperienceList)
    }

    const cacheSkillList = localStorage.getItem('skillList')
    if (cacheSkillList) {
      skillList.value = JSON.parse(cacheSkillList)
    }

    const cacheJobExperienceList = localStorage.getItem('jobExperienceList')
    if (cacheJobExperienceList) {
      jobExperienceList.value = JSON.parse(cacheJobExperienceList)
    }

    const cacheProjectExperienceList = localStorage.getItem('projectExperienceList')
    if (cacheProjectExperienceList) {
      projectExperienceList.value = JSON.parse(cacheProjectExperienceList)
    }

    const cacheResearchExperienceList = localStorage.getItem('researchExperienceList')
    if (cacheResearchExperienceList) {
      researchExperienceList.value = JSON.parse(cacheResearchExperienceList)
    }
  })

  return () => (
    <>
      <div class="flex flex-col items-center">
        <h1
          class="mt-2 cursor-pointer text-lg"
          // onClick={(ev) => handleClick(ev)}
          onContextmenu={(ev) => handleClick(ev)}
        >
          {dev.value ? <input v-model={name.value} placeholder="姓名" /> : name.value}
        </h1>

        <div class="my-2 flex items-center gap-2">
          <Iphone theme="outline" size="24" fill={primaryThemeColor.value} strokeWidth={3} />
          {dev.value ? (
            <input v-model={phoneNumber.value} placeholder="手机号" />
          ) : (
            <a href={phoneNumberHref.value} class="hover:bg-theme-light">
              {phoneNumber.value}
            </a>
          )}

          <Mail theme="outline" size="24" fill={primaryThemeColor.value} strokeWidth={3} />
          {dev.value ? (
            <input v-model={email.value} placeholder="邮箱" />
          ) : (
            <a href={emailHref.value} class="hover:bg-theme-light">
              {email.value}
            </a>
          )}

          <Github theme="outline" size="24" fill={primaryThemeColor.value} strokeWidth={3} />
          {dev.value ? (
            <input v-model={githubUsername.value} placeholder="GitHub 用户名" />
          ) : (
            <a href={githubHref.value} class="hover:bg-theme-light" target="_blank" rel="noopener">
              GitHub
            </a>
          )}
        </div>

        <a href={homepageHref.value} class="hover:bg-theme-light">
          {homepageHref.value}
        </a>
      </div>

      {/* 0. personalInfo 个人信息 */}
      <BaseCard
        header={dev.value ? <input v-model={headers[0]} placeholder={headers[0]} /> : headers[0]}
      >
        {dev.value ? (
          <input v-model={personalInfo.value} placeholder="个人信息" />
        ) : (
          personalInfo.value
        )}
      </BaseCard>

      {/* 1. intendedJob 意向工作 */}
      <BaseCard
        header={dev.value ? <input v-model={headers[1]} placeholder={headers[1]} /> : headers[1]}
      >
        <ul class="ml-5 list-disc">
          <li class="flex gap-2">
            <div>目标工作:</div>
            {dev.value ? (
              <input v-model={targetJob.value} placeholder="目标工作" />
            ) : (
              targetJob.value
            )}
          </li>
          <li class="flex gap-2">
            <div>目标地点:</div>
            {dev.value ? (
              <input v-model={targetAddress.value} placeholder="目标地点" />
            ) : (
              targetAddress.value
            )}
          </li>
        </ul>
      </BaseCard>

      {/* 2. eduExperience 教育经历 */}
      <BaseCard
        header={dev.value ? <input v-model={headers[2]} placeholder={headers[2]} /> : headers[2]}
      >
        {dev.value ? (
          <>
            <div class="grid grid-cols-4">
              <input v-model={newEduExperience[0]} placeholder="时间范围" />
              <input v-model={newEduExperience[1]} placeholder="大学" />
              <input v-model={newEduExperience[2]} placeholder="专业" />
              <div class="flex justify-center gap-5">
                <button onClick={() => addNewEduExperience()} class="w-15">
                  add
                </button>
                <button onClick={() => clearNewEduExperience()} class="w-15">
                  clear
                </button>
              </div>
            </div>
            <ul>
              {eduExperienceList.value.map((item, idx) => (
                <li class="grid grid-cols-4" key={idx}>
                  <input v-model={item[0]} placeholder="时间范围" />
                  <input v-model={item[1]} placeholder="大学" />
                  <input v-model={item[2]} placeholder="专业" />
                  <div class="flex justify-center gap-5">
                    <button onClick={() => removeEduExperience(idx)} class="w-15">
                      remove
                    </button>
                    <button onClick={() => clearEduExperience(idx)} class="w-15">
                      clear
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <ul>
            {eduExperienceList.value.map(([timeRange, university, major]) => (
              <li class="grid grid-cols-3">
                <div>{timeRange}</div>
                <div>{university}</div>
                <div>{major}</div>
              </li>
            ))}
          </ul>
        )}
      </BaseCard>

      {/* 3. skillList 技能 */}
      <ListCard
        header={dev.value ? <input v-model={headers[3]} placeholder={headers[3]} /> : headers[3]}
        itemList={skillList.value}
        dev={dev.value}
      />

      {/* 4. jobExperience 实习/工作经历 */}
      <ListCard
        header={dev.value ? <input v-model={headers[4]} placeholder={headers[4]} /> : headers[4]}
        itemList={jobExperienceList.value}
        dev={dev.value}
      />

      {/* 5. projectExperience 项目经历 */}
      <ListCard
        header={dev.value ? <input v-model={headers[5]} placeholder={headers[5]} /> : headers[5]}
        itemList={projectExperienceList.value}
        dev={dev.value}
      />

      {/* 6. researchExperience 科研经历 */}
      <ListCard
        header={dev.value ? <input v-model={headers[6]} placeholder={headers[6]} /> : headers[6]}
        itemList={researchExperienceList.value}
        dev={dev.value}
      />
    </>
  )
})
