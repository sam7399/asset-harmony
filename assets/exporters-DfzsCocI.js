const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/exceljs.min-3nMFCRBq.js","assets/vendor-CzhIAH40.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js"])))=>i.map(i=>d[i]);
import{c as u}from"./index-CnvTlklq.js";import{_ as h}from"./pdf-02sHI_jh.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=u("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);function f(){return new Date().toISOString().split("T")[0]}function b(e,o){const i=URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=o,document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function g(e,o){return o.get?o.get(e):e[o.key]}function m(e){if(e==null)return"";if(typeof e=="object")try{return JSON.stringify(e)}catch{return String(e)}return String(e)}function y(e,o,i){const a=o.map(r=>`"${r.label.replace(/"/g,'""')}"`).join(","),c=e.map(r=>o.map(s=>`"${m(g(r,s)).replace(/"/g,'""')}"`).join(",")).join(`
`),d=new Blob(["\uFEFF"+a+`
`+c],{type:"text/csv;charset=utf-8;"});b(d,`${i}_${f()}.csv`)}function w(e,o){const i=new Blob([JSON.stringify(e,null,2)],{type:"application/json"});b(i,`${o}_${f()}.json`)}async function x(e,o,i,a="Sheet1"){const c=(await h(async()=>{const{default:n}=await import("./exceljs.min-3nMFCRBq.js").then(l=>l.e);return{default:n}},__vite__mapDeps([0,1,2]))).default,d=new c.Workbook;d.created=new Date;const r=d.addWorksheet(a);r.columns=o.map(n=>({header:n.label,key:String(n.key),width:n.width??Math.max(12,n.label.length+2)})),r.getRow(1).font={bold:!0,color:{argb:"FFFFFFFF"}},r.getRow(1).fill={type:"pattern",pattern:"solid",fgColor:{argb:"FF1E293B"}},r.getRow(1).alignment={vertical:"middle"};for(const n of e){const l={};for(const p of o)l[String(p.key)]=m(g(n,p));r.addRow(l)}r.views=[{state:"frozen",ySplit:1}];const s=await d.xlsx.writeBuffer(),t=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});b(t,`${i}_${f()}.xlsx`)}async function _(e,o,i,a,c){const[{default:d},r]=await Promise.all([h(()=>import("./pdf-02sHI_jh.js").then(l=>l.j),[]),h(()=>import("./pdf-02sHI_jh.js").then(l=>l.c),[])]),s=r.default,t=new d({orientation:"landscape",format:"a4"}),n=t.internal.pageSize.getWidth();t.setFillColor(30,41,59),t.rect(0,0,n,22,"F"),t.setTextColor(255,255,255),t.setFont("helvetica","bold"),t.setFontSize(14),t.text(a,12,12),c&&(t.setFont("helvetica","normal"),t.setFontSize(9),t.text(c,12,18)),t.setFontSize(9),t.text(new Date().toLocaleString(),n-12,12,{align:"right"}),t.text(`${e.length} row${e.length===1?"":"s"}`,n-12,18,{align:"right"}),t.setTextColor(0),s(t,{startY:28,head:[o.map(l=>l.label)],body:e.map(l=>o.map(p=>m(g(l,p)))),headStyles:{fillColor:[30,41,59],textColor:255,fontSize:9},bodyStyles:{fontSize:8},alternateRowStyles:{fillColor:[248,250,252]},margin:{left:8,right:8},didDrawPage:()=>{const l=t.internal.pageSize.getHeight();t.setFontSize(8),t.setTextColor(120),t.text(`Page ${t.getNumberOfPages()}`,n/2,l-6,{align:"center"})}}),t.save(`${i}_${f()}.pdf`)}function S(e,o,i,a){const c=window.open("","_blank","noopener,noreferrer");if(!c)return;const d=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),r=o.map(t=>`<th>${d(t.label)}</th>`).join(""),s=e.map(t=>`<tr>${o.map(n=>`<td>${d(m(g(t,n)))}</td>`).join("")}</tr>`).join("");c.document.write(`<!doctype html>
<html><head><title>${d(i)}</title><style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; padding: 24px; color: #111; }
  h1 { margin: 0 0 4px 0; font-size: 18px; }
  .sub { color: #666; font-size: 12px; margin-bottom: 16px; }
  table { width: 100%; border-collapse: collapse; font-size: 11px; }
  th, td { border: 1px solid #ddd; padding: 6px 8px; text-align: left; vertical-align: top; }
  th { background: #1e293b; color: #fff; }
  tr:nth-child(even) td { background: #f8fafc; }
  @media print { @page { size: A4 landscape; margin: 12mm; } body { padding: 0; } }
</style></head><body>
  <h1>${d(i)}</h1>
  ${a?`<div class="sub">${d(a)} — ${e.length} row${e.length===1?"":"s"} — printed ${new Date().toLocaleString()}</div>`:""}
  <table><thead><tr>${r}</tr></thead><tbody>${s}</tbody></table>
  <script>window.addEventListener("load", () => { window.print(); });<\/script>
</body></html>`),c.document.close()}const k=Object.freeze(Object.defineProperty({__proto__:null,exportCSV:y,exportJSON:w,exportPDF:_,exportXLSX:x,printTable:S},Symbol.toStringTag,{value:"Module"}));export{v as C,w as a,y as b,_ as c,k as d,x as e,S as p};
