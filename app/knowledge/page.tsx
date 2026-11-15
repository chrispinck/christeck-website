import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering Knowledge Centre",
  description: "Engineering insights on LV switchboards, IEC 61439, temperature-rise assessment and busbar systems.",
  alternates: { canonical: "https://christeck.in/knowledge" },
};

const posts = [
  {tag:"IEC 61439",title:"IEC 61439: Guide to LV Switchboard Design Verification",desc:"An introduction to design verification, key assembly characteristics and engineering documentation.",href:"/knowledge/iec-61439-design-verification-guide",read:"8 min read"},
  {tag:"Thermal Engineering",title:"Temperature-Rise Assessment of LV Switchboards",desc:"Thermal inputs, design considerations and assessment documentation.",href:"#",read:"Coming soon"},
  {tag:"Busbar Engineering",title:"Copper vs Aluminium Busbars in LV Assemblies",desc:"Material properties and design considerations for busbar systems.",href:"#",read:"Coming soon"},
];

export default function KnowledgePage() {
 return <main className="min-h-screen bg-white text-slate-900">
  <header className="border-b bg-gradient-to-br from-teal-50 via-white to-white">
   <div className="mx-auto max-w-7xl px-6 py-20">
    <p className="text-sm font-semibold uppercase tracking-[.18em] text-[#176C73]">CHRISTECK · Engineering Knowledge</p>
    <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Engineering Knowledge Centre</h1>
    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Technical articles and practical engineering insights for LV switchboard design, verification, thermal assessment and busbar systems.</p>
   </div>
  </header>
  <section className="mx-auto max-w-7xl px-6 py-16">
   <h2 className="mb-8 text-3xl font-bold">Latest articles</h2>
   <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{posts.map(p=><article key={p.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-md">
    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-[#176C73]">{p.tag}</span>
    <h3 className="mt-5 text-xl font-semibold leading-7">{p.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{p.desc}</p>
    {p.href!=="#" ? <Link className="mt-6 inline-block font-semibold text-[#176C73]" href={p.href}>Read article →</Link>:<span className="mt-6 inline-block text-sm text-slate-400">{p.read}</span>}
   </article>)}</div>
  </section>
  <section className="border-t bg-slate-50"><div className="mx-auto max-w-7xl px-6 py-12"><div className="rounded-2xl bg-[#176C73] p-8 text-white"><h2 className="text-2xl font-bold">Need engineering support?</h2><p className="mt-3 text-teal-50">Explore CHRISTECK services for LV switchboard engineering, IEC 61439 support and technical documentation.</p><Link className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-[#176C73]" href="/services">Explore services</Link></div></div></section>
 </main>;
}