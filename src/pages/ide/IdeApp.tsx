import { useEffect, useRef, useState } from 'react';
import { Readme, About, Skills, Work, Career, Contact } from './panels';
import { socialLink, EMAILL } from '../../utils/constant/constant';

type FileDef = {
  id: string;
  ext: string;
  label: string;
};

const FILES: FileDef[] = [
  { id: 'README.md', ext: 'md', label: '소개 홈' },
  { id: 'about.md', ext: 'md', label: '자기소개' },
  { id: 'skills.json', ext: 'json', label: '기술 스택' },
  { id: 'work.tsx', ext: 'tsx', label: '프로젝트' },
  { id: 'career.log', ext: 'log', label: '경력 · 학력' },
  { id: 'contact.sh', ext: 'sh', label: '연락처' },
];

const EXT_COLOR: Record<string, string> = {
  md: 'text-syn-fn',
  json: 'text-syn-num',
  tsx: 'text-syn-key',
  log: 'text-syn-str',
  sh: 'text-syn-tag',
};

function FileIcon({ ext }: { ext: string }) {
  const label: Record<string, string> = { md: 'M↓', json: '{}', tsx: 'TS', log: '≡', sh: '$_' };
  return (
    <span className={`shrink-0 w-5 text-[10px] font-bold ${EXT_COLOR[ext] || 'text-ide-dim'}`}>{label[ext] || '•'}</span>
  );
}

/* 하단 통합 터미널 — 타이핑 효과 */
function TerminalBar() {
  const seq = [
    { cmd: 'whoami', out: '심봉교 — Backend Developer' },
    { cmd: 'cat motto.txt', out: '함께하는 개발, 생동감 있게.' },
    { cmd: 'echo $STATUS', out: '새로운 도전을 환영합니다 :)' },
  ];
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState('');
  const [phase, setPhase] = useState<'cmd' | 'out'>('cmd');
  const tick = useRef(0);

  useEffect(() => {
    const full = seq[i].cmd;
    if (typed.length < full.length) {
      const t = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 55);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase('out'), 350);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typed, i]);

  useEffect(() => {
    if (phase !== 'out') return;
    const t = setTimeout(() => {
      tick.current += 1;
      setPhase('cmd');
      setTyped('');
      setI((p) => (p + 1) % seq.length);
    }, 2200);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  return (
    <div className="shrink-0 border-t border-ide-line bg-ide-side/80 px-4 py-2.5 font-mono text-[12.5px]">
      <div className="flex items-center gap-2">
        <span className="text-syn-str">➜</span>
        <span className="text-syn-fn">~/portfolio</span>
        <span className="text-ide-dim">$</span>
        <span className="text-ide-text">{typed}</span>
        {phase === 'cmd' && <span className="inline-block w-2 h-4 bg-accent2 animate-blink align-middle" />}
      </div>
      {phase === 'out' && (
        <div className="mt-1 pl-5 text-ide-dim animate-fade-up">{seq[i].out}</div>
      )}
    </div>
  );
}

export default function IdeApp() {
  const [active, setActive] = useState('README.md');
  const [tabs, setTabs] = useState<string[]>(['README.md']);

  const openFile = (id: string) => {
    setActive(id);
    setTabs((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const closeTab = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setTabs((prev) => {
      const next = prev.filter((t) => t !== id);
      if (active === id && next.length) setActive(next[next.length - 1]);
      if (!next.length) setActive('');
      return next.length ? next : prev; // 최소 1개 유지
    });
  };

  const renderPanel = (id: string) => {
    switch (id) {
      case 'README.md': return <Readme onOpen={openFile} />;
      case 'about.md': return <About />;
      case 'skills.json': return <Skills />;
      case 'work.tsx': return <Work />;
      case 'career.log': return <Career />;
      case 'contact.sh': return <Contact />;
      default: return <Readme onOpen={openFile} />;
    }
  };

  return (
    <main className="ide-backdrop min-h-screen w-full flex items-center justify-center md:p-6">
      <div className="flex flex-col w-full md:max-w-6xl h-screen md:h-[88vh] bg-ide-window md:rounded-xl border border-ide-line overflow-hidden shadow-glow font-mono">

        {/* 타이틀바 */}
        <div className="shrink-0 flex items-center gap-3 h-11 px-4 bg-ide-bar border-b border-ide-line">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex-1 text-center text-xs text-ide-dim truncate">
            bonggyo — <span className="text-ide-text">portfolio</span> — {active || 'welcome'}
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs">
            {socialLink.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="text-ide-dim hover:text-accent2 transition-colors">
                {s.arialabel}
              </a>
            ))}
          </div>
        </div>

        {/* 본문 */}
        <div className="flex-1 flex min-h-0">

          {/* 사이드바 (데스크톱) */}
          <aside className="hidden md:flex flex-col w-60 shrink-0 bg-ide-side border-r border-ide-line">
            <div className="px-4 py-3 text-[11px] tracking-widest text-ide-dim">EXPLORER</div>
            <div className="px-2 text-[13px]">
              <div className="flex items-center gap-1 px-2 py-1 text-ide-dim">
                <span className="text-[10px]">▾</span>
                <span className="font-bold tracking-wide">PORTFOLIO</span>
              </div>
              <div className="pl-3">
                <div className="flex items-center gap-1 px-2 py-1 text-ide-dim">
                  <span className="text-[10px]">▾</span>
                  <span className="text-syn-fn">src</span>
                </div>
                <ul className="pl-2">
                  {FILES.map((f) => (
                    <li key={f.id}>
                      <button
                        onClick={() => openFile(f.id)}
                        className={`group w-full flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors ${
                          active === f.id ? 'bg-ide-active text-ide-text' : 'text-ide-dim hover:bg-ide-active/60 hover:text-ide-text'
                        }`}
                      >
                        <FileIcon ext={f.ext} />
                        <span className="truncate">{f.id}</span>
                        {active === f.id && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-grad" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-auto p-4 text-[11px] text-ide-dim/70 leading-5">
              <span className="text-syn-cmt">// 좌측 파일을 클릭해</span><br />
              <span className="text-syn-cmt">// 둘러보세요.</span>
            </div>
          </aside>

          {/* 우측: 탭 + 콘텐츠 */}
          <div className="flex-1 flex flex-col min-w-0">

            {/* 모바일 파일 스트립 */}
            <div className="md:hidden flex gap-1 overflow-x-auto scroll-thin bg-ide-bar border-b border-ide-line px-2 py-2">
              {FILES.map((f) => (
                <button
                  key={f.id}
                  onClick={() => openFile(f.id)}
                  className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs whitespace-nowrap transition-colors ${
                    active === f.id ? 'bg-ide-active text-ide-text border border-ide-line' : 'text-ide-dim'
                  }`}
                >
                  <FileIcon ext={f.ext} />
                  {f.id}
                </button>
              ))}
            </div>

            {/* 탭바 (데스크톱) */}
            <div className="hidden md:flex shrink-0 bg-ide-bar border-b border-ide-line overflow-x-auto scroll-thin">
              {tabs.map((id) => {
                const f = FILES.find((x) => x.id === id);
                if (!f) return null;
                return (
                  <button
                    key={id}
                    onClick={() => setActive(id)}
                    className={`group relative flex items-center gap-2 px-4 py-2.5 text-[13px] border-r border-ide-line transition-colors ${
                      active === id ? 'bg-ide-window text-ide-text' : 'text-ide-dim hover:text-ide-text'
                    }`}
                  >
                    {active === id && <span className="absolute top-0 left-0 h-[2px] w-full bg-grad" />}
                    <FileIcon ext={f.ext} />
                    <span>{id}</span>
                    <span
                      onClick={(e) => closeTab(e, id)}
                      className="ml-1 w-4 h-4 grid place-items-center rounded text-ide-dim opacity-0 group-hover:opacity-100 hover:bg-ide-line transition-opacity"
                    >
                      ×
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 콘텐츠 */}
            <div className="flex-1 overflow-y-auto scroll-thin bg-ide-window text-ide-text">
              {renderPanel(active)}
            </div>
          </div>
        </div>

        {/* 터미널 */}
        <TerminalBar />

        {/* 상태바 */}
        <div className="shrink-0 flex items-center gap-4 h-7 px-4 bg-grad text-[11px] text-white/90 font-medium">
          <span className="flex items-center gap-1">⎇ main*</span>
          <span className="opacity-80">{EMAILL}</span>
          <span className="ml-auto opacity-80">UTF-8</span>
          <span className="opacity-80">TSX</span>
          <span className="opacity-80">© 2026 심봉교</span>
        </div>
      </div>
    </main>
  );
}
