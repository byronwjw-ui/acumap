# AcuPoint Atlas｜穴位图谱

AcuPoint Atlas 穴位图谱是一个中文穴位科普网站，帮助普通人认识常见穴位、理解针灸取穴逻辑、学习经络基础和安全按揉方法。

本项目为穴位知识科普网站，不提供医疗诊断、治疗建议或针刺指导。请勿基于本站内容自行针刺。身体不适时请咨询医生、持证针灸师或其他合格医疗专业人士。

## 技术栈

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- lucide-react
- Fuse.js
- 本地 TypeScript 数据文件

## 本地开发

```bash
npm install
npm run dev
```

构建：

```bash
npm run build
npm run start
```

## 页面结构

- `/` 首页
- `/conditions` 常见不适列表
- `/conditions/[slug]` 常见不适详情
- `/points` 穴位图谱列表与筛选
- `/points/[slug]` 穴位详情
- `/meridians` 经络入门列表
- `/meridians/[slug]` 经络详情
- `/acupressure-guide` 安全按揉指南
- `/safety` 安全须知
- `/disclaimer` 免责声明
- `/about` 关于本站
- `/search` 搜索页

## 内容与数据

数据位于 `data/`，搜索索引位于 `lib/search.ts`，覆盖穴位中文名、拼音、国际编号、常见不适名称、经络名称和标签关键词。

## 安全声明

本站内容仅用于穴位知识科普与健康教育，不提供诊断或治疗建议。普通人可以了解穴位位置和传统用途，也可以在安全前提下进行轻柔按揉，但请勿自行针刺。若出现剧烈、持续、突发或反复加重的不适，请及时就医。

## 后续可扩展方向

- 英文版 i18n
- 我的针灸记录
- 用户收藏穴位
- 诊所患者教育卡片
- 穴位图片/人体示意图
- 专业学习模式
- 课程系统
