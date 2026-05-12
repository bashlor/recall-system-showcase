export type ArchitecturePageOptions = {
  brandName: string;
  iconUrl: string;
};

/**
 * High-level architecture framing: tradeoffs and boundaries, not implementation detail.
 */
export function architectureHtml(opts: ArchitecturePageOptions): string {
  const { brandName, iconUrl } = opts;

  const topic = (title: string, body: string) => `
    <article class="scroll-mt-28 space-y-3 rounded-xl border border-slate-200/80 bg-white/80 p-5 shadow-sm sm:p-6">
      <h2 class="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">${title}</h2>
      <div class="space-y-3 text-sm leading-relaxed text-slate-700">${body}</div>
    </article>
  `;

  const ul = (items: string[]) =>
    `<ul class="list-disc space-y-1.5 pl-5 marker:text-slate-400">${items.map((t) => `<li>${t}</li>`).join('')}</ul>`;

  const bodyLocalFirst = `
    <p>
      The client owns the active working state. Notes, review sessions, scheduling metadata, and in-progress
      interactions remain usable offline by default to preserve continuity and reduce friction during technical practice.
    </p>
    <p>Synchronization is eventual, not immediate.</p>
    <p><strong class="text-slate-900">The system assumes:</strong></p>
    ${ul([
      'intermittent connectivity',
      'retries',
      'duplicate events',
      'delayed synchronization',
      'conflicting edits across devices',
    ])}
    <p>Instead of hiding these realities, the architecture favors:</p>
    ${ul([
      'deterministic merge behavior',
      'explicit ownership boundaries',
      'observable sync states',
      'predictable recovery paths',
    ])}
    <p><strong class="text-slate-900">Current areas of exploration include:</strong></p>
    ${ul([
      'authoritative state per device vs per account',
      'queued operations and replay ordering',
      'conflict visibility in the UI',
      'retry behavior under unstable connectivity',
      'clock skew and temporal consistency',
    ])}
  `;

  const bodyClientServer = `
    <p>
      The system intentionally splits computation between client and server depending on latency sensitivity,
      reliability requirements, and user experience impact.
    </p>
    <p><strong class="text-slate-900">Fast feedback loops happen locally whenever possible:</strong></p>
    ${ul([
      'scheduling previews',
      'review transitions',
      'practice session flow',
      'immediate grading feedback',
      'interaction state',
    ])}
    <p><strong class="text-slate-900">The server is used for:</strong></p>
    ${ul([
      'synchronization',
      'durable persistence',
      'cross-device consistency',
      'account-level history',
      'heavier retrieval and indexing workloads',
    ])}
    <p>
      This separation exists to preserve responsiveness while keeping long-term state coherent across environments.
    </p>
    <p>
      The goal is not &ldquo;thin client vs thick client,&rdquo; but operational clarity: what must feel instantaneous
      stays local; what must remain durable becomes authoritative remotely.
    </p>
  `;

  const bodyRetrieval = `
    <p>
      Learning value does not come from recognizing familiar information. It comes from producing answers under
      constraints:
    </p>
    ${ul(['incomplete context', 'time pressure', 'uncertainty', 'retrieval effort'])}
    <p><strong class="text-slate-900">The retrieval pipeline separates:</strong></p>
    ${ul(['capture (preserving context)', 'selection (choosing what matters next)', 'presentation (forcing active reconstruction)'])}
    <p><strong class="text-slate-900">Key constraints currently explored:</strong></p>
    ${ul([
      'stable card identity across edits',
      'retrieval history preservation',
      'scheduling driven by recall quality, not passive exposure',
      'reinforcement of weak areas without collapsing signal into noise',
      'balancing precision vs cognitive overload',
    ])}
  `;

  const bodyStudyPolicy = `
    <p>Recall System does not optimize for exposure frequency.</p>
    <p>It optimizes for reliable retrieval under realistic conditions.</p>
    <p><strong class="text-slate-900">The scheduling layer combines:</strong></p>
    ${ul([
      'spaced repetition principles',
      'recall quality signals',
      'calibration history',
      'contextual difficulty',
      'retrieval stability over time',
    ])}
    <p>
      Traditional SM-2 style scheduling is used as a foundation, but not treated as a fixed truth. The scheduler is
      intentionally policy-driven: review behavior can evolve independently from storage and retrieval infrastructure.
    </p>
    <p><strong class="text-slate-900">Current areas of exploration include:</strong></p>
    ${ul([
      'retrieval stability vs short-term performance',
      'confidence calibration',
      'difficulty inflation over time',
      'session fatigue effects',
      'scheduling pressure under backlog growth',
      'separating recognition from actual recall ability',
    ])}
    <p>The goal is not maximizing streaks or retention percentages.</p>
    <p>
      The goal is building durable technical judgment: what remains usable under pressure, incomplete context, and time
      constraints.
    </p>
  `;

  const bodyNoteLifecycle = `
    <p>Notes are not treated as static documents. They move through explicit operational states:</p>
    ${ul(['draft', 'structured', 'practiced', 'stale', 'refined'])}
    <p>Transitions matter more than storage.</p>
    <p>
      &ldquo;Memory&rdquo; in Recall System means reproducible judgment: what can be recalled, explained, and applied
      consistently over time.
    </p>
    <p><strong class="text-slate-900">The system therefore favors:</strong></p>
    ${ul([
      'historical attempts over static confidence',
      'calibration over completion',
      'explicit review history over opaque scoring',
    ])}
    <p><strong class="text-slate-900">Where possible, the architecture uses:</strong></p>
    ${ul([
      'immutable review events',
      'derived read models for UI projections',
      'append-oriented history',
      'minimal duplicated state',
    ])}
    <p><strong class="text-slate-900">Complexity is allowed to grow only where it improves:</strong></p>
    ${ul(['reliability', 'retrieval quality', 'long-term maintainability', 'operational clarity'])}
  `;

  return `
  <div class="min-h-screen bg-slate-50">
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-[10%] right-[5%] h-[800px] w-[800px] rounded-full bg-primary/3 blur-[120px]"></div>
      <div class="absolute bottom-[10%] left-[5%] h-[600px] w-[600px] rounded-full bg-emerald-500/3 blur-[100px]"></div>
      <div class="absolute top-[40%] left-[30%] h-[400px] w-[400px] rounded-full bg-blue-500/2 blur-[80px]"></div>
    </div>

    <header class="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a class="flex items-center gap-3" href="/">
          <img alt="" class="h-9 w-9 shrink-0" decoding="async" height="36" src="${iconUrl}" width="36" />
          <h2 class="text-lg font-semibold tracking-tight text-slate-900">${brandName}</h2>
        </a>
        <nav class="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 sm:gap-x-5">
          <a class="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900" href="/">Home</a>
          <a class="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900" href="/engineering-notes">Engineering notes</a>
          <span class="text-sm font-medium text-slate-900">Architecture</span>
        </nav>
      </div>
    </header>

    <main class="relative" id="top">
      <div class="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <p class="text-xs font-semibold uppercase tracking-widest text-slate-500">System</p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Architecture</h1>
        <p class="mt-4 text-base leading-relaxed text-slate-600">
          A concise map of how Recall System is structured: what stays local first, what becomes authoritative remotely,
          and where complexity is intentionally allowed to grow.
        </p>
        <p class="mt-3 text-base leading-relaxed text-slate-600">
          This page tracks system intent, operational constraints, and architectural tradeoffs. It does not aim to
          document every implementation detail.
        </p>

        <hr class="my-8 border-slate-200/80" />

        <div class="space-y-6">
          ${topic('Local-first and synchronization model', bodyLocalFirst)}
          ${topic('Client/server execution boundaries', bodyClientServer)}
          ${topic('Retrieval pipeline', bodyRetrieval)}
          ${topic('Study policy and scheduling model', bodyStudyPolicy)}
          ${topic('Note lifecycle and memory model', bodyNoteLifecycle)}
        </div>
      </div>

      <footer class="relative border-t border-slate-200/80 bg-white pb-10 pt-8">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p class="text-xs text-slate-500">
            © <span id="current-year"></span> ${brandName} · architecture
          </p>
        </div>
      </footer>
    </main>
  </div>
`;
}
