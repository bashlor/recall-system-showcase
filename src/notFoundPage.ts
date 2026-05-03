export type NotFoundPageOptions = {
  brandName: string;
  iconUrl: string;
};

export function notFoundHtml(opts: NotFoundPageOptions): string {
  const { brandName, iconUrl } = opts;

  return `
  <div class="min-h-screen bg-slate-50">
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-[12%] right-[8%] h-[520px] w-[520px] rounded-full bg-primary/8 blur-[100px]"></div>
      <div class="absolute bottom-[18%] left-[12%] h-[380px] w-[380px] rounded-full bg-emerald-500/6 blur-[90px]"></div>
      <div class="absolute left-1/2 top-[42%] h-[280px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[80px]"></div>
    </div>

    <header class="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a class="flex items-center gap-3" href="/">
          <img alt="" class="h-9 w-9 shrink-0" decoding="async" height="36" src="${iconUrl}" width="36" />
          <h2 class="text-lg font-semibold tracking-tight text-slate-900">${brandName}</h2>
        </a>
        <nav class="flex items-center gap-5">
          <a class="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900" href="/">Home</a>
          <a class="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900" href="/engineering-notes">Engineering notes</a>
        </nav>
      </div>
    </header>

    <main class="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 sm:px-6">
      <div class="relative z-10 mx-auto max-w-lg text-center">
        <p class="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400">Error</p>
        <div class="mt-6 inline-flex items-baseline gap-2">
          <span class="bg-gradient-to-br from-slate-200 to-slate-300 bg-clip-text text-7xl font-black tabular-nums tracking-tighter text-transparent sm:text-8xl">404</span>
        </div>
        <h1 class="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          This path doesn’t exist
        </h1>
        <p class="mt-3 text-base leading-relaxed text-slate-600">
          The URL may be mistyped, or the page was moved. Double-check the address or head back to keep practicing.
        </p>
        <div class="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            class="inline-flex min-w-[11rem] items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 ring-1 ring-primary/20 transition hover:bg-primary/92 hover:shadow-primary/35"
            href="/"
          >
            Back to home
          </a>
          <a
            class="inline-flex min-w-[11rem] items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-900/5 transition hover:border-slate-300 hover:bg-slate-50"
            href="/engineering-notes"
          >
            Engineering notes
          </a>
        </div>
      </div>

      <div aria-hidden class="pointer-events-none absolute bottom-8 left-1/2 h-px w-[min(90%,20rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-300/40 to-transparent"></div>
    </main>
  </div>
`;
}
