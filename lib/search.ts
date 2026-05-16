import Fuse from 'fuse.js';
import { conditions } from '@/data/conditions';
import { points } from '@/data/points';
import { meridians } from '@/data/meridians';
export type SearchItem={type:'condition'|'point'|'meridian';title:string;summary:string;href:string;tags:string[];name?:string;pinyin?:string;code?:string;meridianName?:string;shortTitle?:string};
export const searchItems:SearchItem[]=[...conditions.map(c=>({type:'condition' as const,title:c.shortTitle,shortTitle:c.shortTitle,summary:c.summary,href:`/conditions/${c.slug}`,tags:c.tags})),...points.map(p=>({type:'point' as const,title:`${p.name} ${p.code}`,name:p.name,pinyin:p.pinyin,code:p.code,meridianName:p.meridianName,summary:p.summary,href:`/points/${p.slug}`,tags:p.tags})),...meridians.map(m=>({type:'meridian' as const,title:m.name,name:m.name,summary:m.summary,href:`/meridians/${m.slug}`,tags:m.commonThemes}))];
export const fuse = new Fuse(searchItems,{keys:['title','shortTitle','name','pinyin','code','summary','tags','meridianName'],threshold:.35,ignoreLocation:true});
export function searchAll(q:string){const term=q.trim();return term?fuse.search(term).map(r=>r.item):[];}
