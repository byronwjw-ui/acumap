import type { Metadata } from 'next';
import { site } from '@/data/site';
export function makeMetadata(title?: string, description?: string): Metadata { const t = title || site.title; const d = description || site.description; return { title: t, description: d, openGraph: { title: t, description: d, type: 'website', locale: 'zh_CN' } }; }
