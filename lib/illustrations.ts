export function getPointIllustration(bodyRegion:string){
  if(['后颈部','头顶部','肩部'].includes(bodyRegion)) return {src:'/illustrations/head-neck-points.svg',alt:'头颈肩常见穴位大致区域示意图',title:'头颈肩区域示意'};
  if(['前臂','腕部','肘部','手部'].includes(bodyRegion)) return {src:'/illustrations/arm-points.svg',alt:'前臂手部常见穴位大致区域示意图',title:'手臂与手部区域示意'};
  if(['腹部','下腹部','胸部'].includes(bodyRegion)) return {src:'/illustrations/abdomen-points.svg',alt:'胸腹部常见穴位大致区域示意图',title:'胸腹部区域示意'};
  return {src:'/illustrations/leg-points.svg',alt:'小腿足部常见穴位大致区域示意图',title:'小腿与足部区域示意'};
}
export const meridianIllustration={src:'/illustrations/meridian-overview.svg',alt:'现代化经络概念线稿示意图',title:'经络概念示意'};
export const acupressureIllustration={src:'/illustrations/acupressure-hand.svg',alt:'指腹轻柔按揉手势示意图',title:'轻柔按揉手势示意'};
