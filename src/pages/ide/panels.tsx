import { useState } from 'react';
import { MindData, StackData, interviewData, splitEmphasis } from '../../data/introData';
import { projectData } from '../../data/content/projectData';
import { careerData } from '../../data/content/careerData';
import { recordData } from '../../data/content/recordData';
import { socialLink, EMAILL } from '../../utils/constant/constant';
import { getIconUrl } from '../../utils/assets';
import useModal from '../../hooks/useModal';

/* ───────── 공통 헬퍼 ───────── */

// 라인넘버 거터가 있는 코드 영역
function Code({ lines }: { lines: React.ReactNode[] }) {
  return (
    <div className="font-mono text-[13px] leading-7">
      {lines.map((ln, i) => (
        <div key={i} className="flex">
          <span className="select-none w-12 shrink-0 pr-4 text-right text-ide-dim/60">{i + 1}</span>
          <span className="flex-1 whitespace-pre-wrap break-words text-ide-text">{ln}</span>
        </div>
      ))}
    </div>
  );
}

const Cmt = ({ children }: { children: React.ReactNode }) => <span className="text-syn-cmt">{children}</span>;
const Str = ({ children }: { children: React.ReactNode }) => <span className="text-syn-str">{children}</span>;
const Key = ({ children }: { children: React.ReactNode }) => <span className="text-syn-key">{children}</span>;
const Fn = ({ children }: { children: React.ReactNode }) => <span className="text-syn-fn">{children}</span>;
const Punct = ({ children }: { children: React.ReactNode }) => <span className="text-ide-dim">{children}</span>;

/* ───────── README.md ───────── */
export function Readme({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <div className="px-6 py-10 md:px-12 md:py-14 max-w-4xl mx-auto">
      <p className="font-mono text-sm text-ide-dim">$ whoami</p>
      <h1 className="mt-3 text-6xl md:text-8xl font-black tracking-tight leading-none">
        <span className="gradient-text drop-shadow-glow">심봉교</span>
      </h1>
      <p className="mt-2 font-mono text-lg md:text-xl text-ide-text">
        <span className="text-syn-key">const</span> <span className="text-syn-fn">role</span>{' '}
        <span className="text-ide-dim">=</span> <span className="text-syn-str">'AI-Driven Backend Developer'</span>
        <span className="text-ide-dim">;</span>
      </p>

      <p className="mt-8 font-mono text-sm md:text-[15px] leading-7 text-ide-dim max-w-2xl">
        <span className="text-syn-cmt">/**</span>
        <br />
        <span className="text-syn-cmt"> * AI를 파이프라인으로 설계해 rule.md · 검수 AI · 테스트 · 보고서로</span>
        <br />
        <span className="text-syn-cmt"> * 검증된 결과를 빠르게 만들어내는 개발자입니다.</span>
        <br />
        <span className="text-syn-cmt"> */</span>
      </p>

      {/* 스탯 */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
        {[
          { k: 'experience', v: '3y+' },
          { k: 'projects', v: String(projectData.length) },
          { k: 'companies', v: String(careerData.length) },
          { k: 'stack', v: 'AI·BE·FE' },
        ].map((s) => (
          <div key={s.k} className="rounded-lg border border-ide-line bg-ide-bar/60 px-4 py-3">
            <div className="text-2xl font-bold gradient-text">{s.v}</div>
            <div className="text-xs text-ide-dim mt-1">{s.k}</div>
          </div>
        ))}
      </div>

      {/* 빠른 이동 */}
      <div className="mt-10">
        <p className="font-mono text-xs text-ide-dim mb-3">$ ls ./src</p>
        <div className="flex flex-wrap gap-2 font-mono text-sm">
          {[
            ['about.md', '소개'],
            ['skills.json', '기술'],
            ['work.tsx', '프로젝트'],
            ['career.log', '경력'],
            ['contact.sh', '연락'],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => onOpen(id)}
              className="group rounded-md border border-ide-line bg-ide-window px-3 py-2 hover:border-accent/60 hover:bg-ide-active transition-colors"
            >
              <span className="text-syn-fn group-hover:text-accent2 transition-colors">{id}</span>
              <span className="text-ide-dim"> — {label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────── about.md ───────── */
export function About() {
  return (
    <div className="px-5 py-7 md:px-8 md:py-9">
      <Code
        lines={[
          <Cmt># About — {MindData.subtitle}</Cmt>,
          <span> </span>,
          <span>
            <Key>## </Key>
            <span className="font-bold text-ide-text">Mind</span>
          </span>,
          ...MindData.text.split('\n').map((t) => <span className="text-ide-dim">{t}</span>),
          <span> </span>,
        ]}
      />

      <div className="mt-6 space-y-5">
        {interviewData.map((it, i) => (
          <div key={i} className="rounded-xl border border-ide-line bg-ide-bar/50 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-ide-line bg-ide-active/50">
              <span className="text-syn-tag font-mono text-xs">{`</>`}</span>
              <span className="font-mono text-sm font-bold text-ide-text">{it.q}</span>
            </div>
            <ul className="px-5 py-4 space-y-2.5 font-mono text-[13px] leading-7">
              {it.a.map((line, j) => (
                <li key={j} className="flex gap-2 text-ide-dim">
                  <span className="text-syn-str shrink-0">{'>'}</span>
                  <span>
                    {splitEmphasis(line).map((part, k) =>
                      k % 2 ? <span key={k} className="text-syn-str">{part}</span> : part
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────── skills.json ───────── */
export function Skills() {
  const entries = Object.entries(StackData.stack).map(([k, v]) => [k === 'Sever' ? 'Server' : k, v] as [string, string[]]);
  const allStacks = entries.flatMap(([, v]) => v);

  return (
    <div className="px-5 py-7 md:px-8 md:py-9">
      <div className="rounded-xl border border-ide-line bg-ide-window/70 p-5 font-mono text-[13px] leading-7 overflow-x-auto scroll-thin">
        <div className="flex">
          <span className="w-8 shrink-0 text-ide-dim/50 select-none">1</span>
          <Punct>{'{'}</Punct>
        </div>
        {entries.map(([cat, arr], idx) => (
          <div key={cat} className="flex">
            <span className="w-8 shrink-0 text-ide-dim/50 select-none">{idx + 2}</span>
            <span className="pl-4">
              <Fn>"{cat}"</Fn>
              <Punct>: [</Punct>
              {arr.map((s, i) => (
                <span key={s}>
                  <Str>"{s}"</Str>
                  {i < arr.length - 1 && <Punct>, </Punct>}
                </span>
              ))}
              <Punct>]</Punct>
              {idx < entries.length - 1 && <Punct>,</Punct>}
            </span>
          </div>
        ))}
        <div className="flex">
          <span className="w-8 shrink-0 text-ide-dim/50 select-none">{entries.length + 2}</span>
          <Punct>{'}'}</Punct>
        </div>
      </div>

      {/* 아이콘 그리드 */}
      <p className="mt-7 mb-3 font-mono text-xs text-ide-dim">// stack icons</p>
      <div className="grid grid-cols-5 sm:grid-cols-8 gap-3">
        {allStacks.map((s) => (
          <div
            key={s}
            className="group aspect-square rounded-xl border border-ide-line bg-ide-window flex items-center justify-center hover:border-accent/50 hover:bg-ide-active hover:-translate-y-1 transition-all"
            title={s}
          >
            <img src={getIconUrl(s)} alt={s} className="w-1/2 h-1/2 object-contain group-hover:scale-110 transition-transform" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────── work.tsx ───────── */
export function Work() {
  const { openModal } = useModal();
  return (
    <div className="px-5 py-7 md:px-8 md:py-9">
      <p className="font-mono text-xs text-ide-dim mb-5">
        <Cmt>// {projectData.length} projects · 클릭하여 상세 보기</Cmt>
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {projectData.map((p) => (
          <div
            key={p.name}
            className="group rounded-xl border border-ide-line bg-ide-bar/50 p-5 hover:border-accent/50 hover:bg-ide-active transition-all flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-ide-dim">
              <span className="text-syn-key">export</span>
              <span className="text-syn-key">const</span>
              <span className="text-syn-fn">{p.name}</span>
              <span className="ml-auto rounded-full border border-ide-line px-2 py-0.5 text-[10px] text-ide-dim">{p.type}</span>
            </div>
            <h3 className="text-lg font-bold text-ide-text">{p.title}</h3>
            <p className="text-[13px] leading-6 text-ide-dim flex-1">{p.subject}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tag.map((t) => (
                <span key={t} className="font-mono text-[11px] text-syn-str bg-syn-str/10 border border-syn-str/20 rounded px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2 pt-1 font-mono text-xs">
              <button
                onClick={() => openModal(p.name)}
                className="rounded-md bg-grad px-3 py-1.5 text-white font-medium hover:shadow-glow-sm transition-shadow"
              >
                자세히 보기
              </button>
              {p.giturl && (
                <a
                  href={p.giturl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-ide-line px-3 py-1.5 text-ide-text hover:border-accent/60 transition-colors"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────── career.log ───────── */
function LogItem({ data, title, role, infos, stacks }: { data?: string; title: string; role: string; infos: string[]; stacks: string[] }) {
  return (
    <li className="relative pl-7 pb-7 last:pb-0 border-l border-ide-line">
      <span className="absolute -left-[6px] top-1.5 w-[11px] h-[11px] rounded-full bg-grad ring-4 ring-ide-window" />
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        {data && <span className="font-mono text-xs text-accent2 bg-accent2/10 border border-accent2/20 rounded-full px-2.5 py-0.5">{data}</span>}
        <h3 className="text-base font-bold text-ide-text">{title}</h3>
        <span className="text-xs text-ide-dim">{role}</span>
      </div>
      <ul className="mt-2.5 space-y-1.5 font-mono text-[12.5px] leading-6">
        {infos.map((info, i) => (
          <li key={i} className="flex gap-2 text-ide-dim">
            <span className="text-syn-cmt shrink-0">▹</span>
            <span>{info}</span>
          </li>
        ))}
      </ul>
      {stacks?.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {stacks.map((s) => (
            <span key={s} className="font-mono text-[11px] text-ide-dim">#{s}</span>
          ))}
        </div>
      )}
    </li>
  );
}

export function Career() {
  return (
    <div className="px-5 py-7 md:px-8 md:py-9">
      <p className="font-mono text-xs text-ide-dim mb-5">
        <Cmt>// $ git log --career</Cmt>
      </p>

      <h2 className="font-mono text-sm font-bold text-syn-key mb-4">## Career</h2>
      <ul>
        {[...careerData].reverse().map((c, i) => (
          <LogItem key={i} {...c} />
        ))}
      </ul>

      <h2 className="font-mono text-sm font-bold text-syn-key mt-8 mb-4">## Education & Training</h2>
      <ul>
        {recordData.map((r, i) => (
          <LogItem key={i} {...r} />
        ))}
      </ul>
    </div>
  );
}

/* ───────── contact.sh ───────── */
export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(EMAILL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };
  return (
    <div className="px-5 py-7 md:px-8 md:py-9 max-w-3xl">
      <div className="rounded-xl border border-ide-line bg-ide-window/70 p-5 font-mono text-[13px] leading-7">
        <p className="text-ide-dim">#!/bin/bash</p>
        <p className="text-syn-cmt"># 연락 및 채널</p>
        <br />
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-syn-fn">echo</span>
          <span className="text-syn-str">"📧 {EMAILL}"</span>
          <button onClick={copy} className="rounded border border-ide-line px-2 py-0.5 text-xs text-ide-text hover:border-accent/60 transition-colors">
            {copied ? '✓ 복사됨' : 'copy'}
          </button>
        </div>
        <div className="mt-3 space-y-1.5">
          {socialLink.map((s) => (
            <div key={s.href} className="flex items-center gap-2">
              <span className="text-syn-key">open</span>
              <a href={s.href} target="_blank" rel="noreferrer" className="text-syn-fn hover:text-accent2 underline-offset-4 hover:underline">
                {s.href}
              </a>
              <span className="text-ide-dim"># {s.arialabel}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button onClick={copy} className="rounded-lg bg-grad px-5 py-2.5 text-white font-medium font-mono text-sm hover:shadow-glow transition-shadow">
          {copied ? '✓ 이메일 복사됨' : '이메일 복사'}
        </button>
        {socialLink.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-ide-line px-5 py-2.5 text-ide-text font-mono text-sm hover:border-accent/60 hover:bg-ide-active transition-colors"
          >
            {s.arialabel} ↗
          </a>
        ))}
      </div>
    </div>
  );
}
