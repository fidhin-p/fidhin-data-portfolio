export function AnalyticsVisual({ decorative = false }: { decorative?: boolean }) {
  return <svg viewBox="0 0 640 400" className="analytics-scene" role={decorative ? undefined : "img"} aria-hidden={decorative || undefined} aria-label={decorative ? undefined : "Conceptual analytics grid connecting research, analysis and recommendations; no measured company results"}>
    <g className="analytics-grid" fill="none" strokeWidth="1">{[70,130,190,250,310,370].map(y => <path key={y} d={`M35 ${y}H615`} />)}{[35,115,195,275,355,435,515,595].map(x => <path key={x} d={`M${x} 40V370`} />)}</g>
    <g fill="none" stroke="currentColor" strokeWidth="2.5"><path className="signal-path" d="M35 300L90 275L150 285L215 225L275 248L340 170L400 190L455 130L520 140L595 70" /><path className="analytics-secondary signal-path" d="M35 330L110 325L190 285L270 298L350 260L430 270L510 220L595 200" strokeDasharray="4 7" /></g>
    <g fill="currentColor">{[[215,225],[340,170],[455,130],[595,70]].map(([x,y]) => <circle key={x} cx={x} cy={y} r="5" />)}</g>
    <text x="35" y="25" className="analytics-text">RESEARCH / ANALYSIS / INSIGHT</text>
    <text x="35" y="395" className="analytics-text">CONCEPTUAL VISUAL · NOT PERFORMANCE DATA</text>
    <g className="analytics-muted" fill="none"><path d="M610 54h12v12M23 54H11v12M610 356h12v-12M23 356H11v-12" /></g>
  </svg>;
}

export function StrategyFlow() {
  return <div className="grid gap-0 border-y sm:grid-cols-4">{[
    ["01", "Research", "Market & competitor context"], ["02", "Segment", "Customer needs & willingness to pay"], ["03", "Model", "Tiers, pricing & forecast assumptions"], ["04", "Recommend", "Growth, retention & KPI planning"],
  ].map(([number,title,body]) => <div key={number} className="border-b px-5 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"><span className="font-mono text-xs text-primary">{number}</span><h3 className="mt-3 font-display text-lg">{title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{body}</p></div>)}</div>;
}
