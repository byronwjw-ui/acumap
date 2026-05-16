import Breadcrumbs from '@/components/Breadcrumbs';import SearchBox from '@/components/SearchBox';import { makeMetadata } from '@/lib/seo';
export const metadata=makeMetadata('搜索｜AcuPoint Atlas','搜索穴位、常见不适或经络，例如足三里、内关、胃不舒服、头痛、胃经。');
export default function Page(){return <div className="mx-auto max-w-4xl px-4 py-10"><Breadcrumbs items={[{label:'搜索'}]}/><h1 className="text-4xl font-bold text-pine">搜索</h1><p className="mt-4 text-ink/70">搜索穴位、常见不适或经络，例如：足三里、胃不舒服、内关。</p><div className="mt-8"><SearchBox large/></div></div>}
