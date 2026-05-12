export type EngineeringNotesPageOptions = {
  brandName: string;
  iconUrl: string;
};

/**
 * Engineering notes: six short, scannable decisions on backend-shaped product
 * engineering (no repo-specific paths or identifiers in the page copy).
 */
export function engineeringNotesHtml(
  opts: EngineeringNotesPageOptions
): string {
  const { brandName, iconUrl } = opts;

  const noteBlock = (label: string, body: string) => `
    <p class="text-sm leading-relaxed text-slate-700">
      <strong class="text-slate-900">${label}</strong>
      ${body}
    </p>
  `;

  const principleBlock = (text: string) => `
    <div class="border-l-2 border-primary pl-3">
      <p class="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Principle</p>
      <p class="mt-0.5 text-sm font-semibold leading-snug text-slate-900">${text}</p>
    </div>
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
          <span class="text-sm font-medium text-slate-900">Engineering notes</span>
          <a class="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900" href="/architecture">Architecture</a>
        </nav>
      </div>
    </header>

    <main class="relative" id="top">
      <div class="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <p class="text-xs font-semibold uppercase tracking-widest text-slate-500">Engineering</p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Engineering notes
        </h1>
        <p class="mt-4 text-lg font-medium leading-snug text-slate-900">
          Backend = system + product + time
        </p>
        <p class="mt-3 text-base leading-relaxed text-slate-600">
          “Backend” here is not only a remote server. It is how rules, state, time, and coherence are structured so the
          product can evolve: clear layering, domain rules kept away from infrastructure, and a learning loop that
          stays one system instead of a pile of disconnected features. These notes stay short by design.
        </p>

        <p class="mt-10 text-xs font-semibold uppercase tracking-wider text-slate-500">Contents</p>
        <ol class="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-800 marker:font-semibold sm:text-base">
          <li><a class="font-medium text-primary underline-offset-4 hover:underline" href="#learning-as-state">Modeling learning as state transitions, not CRUD</a></li>
          <li><a class="font-medium text-primary underline-offset-4 hover:underline" href="#time-first-class">Time as a first-class concern</a></li>
          <li><a class="font-medium text-primary underline-offset-4 hover:underline" href="#client-server-split">Split client and server responsibility</a></li>
          <li><a class="font-medium text-primary underline-offset-4 hover:underline" href="#distributed-pressure">Design for multi-device consistency from the start</a></li>
          <li><a class="font-medium text-primary underline-offset-4 hover:underline" href="#late-complexity">Mistake: discovering product complexity too late</a></li>
          <li><a class="font-medium text-primary underline-offset-4 hover:underline" href="#product-drives-backend">Let the product drive backend design</a></li>
        </ol>

        <div class="mt-12 space-y-8">
          <article id="learning-as-state" class="scroll-mt-28 space-y-3 rounded-xl border border-slate-200/80 bg-white/80 p-5 shadow-sm sm:p-6">
            <h2 class="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Modeling learning as state transitions, not CRUD
            </h2>
            ${principleBlock('The product is a workflow, not a dataset.')}
            ${noteBlock(
              'Context',
              `A learning product <em>looks</em> like CRUD (decks, cards), but users experience sessions, queues, and outcomes that evolve over time.`
            )}
            ${noteBlock(
              'Decision',
              `Model the study experience as explicit states and transitions. A dedicated study-flow module owns session phases and transitions; the domain layer owns entities and rules.`
            )}
            ${noteBlock(
              'Why',
              `The product is not data storage: it is a workflow that moves in time. <strong>CRUD is an implementation detail, not a model.</strong>`
            )}
            ${noteBlock(
              'Trade-offs',
              `More concepts to design and test. In exchange, orchestration stays out of the UI layer and stays stable when requirements shift.`
            )}
          </article>

          <article id="time-first-class" class="scroll-mt-28 space-y-3 rounded-xl border border-slate-200/80 bg-white/80 p-5 shadow-sm sm:p-6">
            <h2 class="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Time as a first-class concern
            </h2>
            ${principleBlock('Time drives behavior, not storage.')}
            ${noteBlock(
              'Context',
              `Cards are not static inventory. Visibility depends on due dates, pacing, and study policies, not on “what exists in a table.”`
            )}
            ${noteBlock(
              'Decision',
              `Embed scheduling, timers, and spaced repetition rules in the domain layer, with a hard split between session pacing and per-card timing when both apply.`
            )}
            ${noteBlock(
              'Why',
              `The system must decide <em>when</em> work appears, not just <em>what</em> exists. Policies and clocks are part of the model, not an afterthought on top of storage.`
            )}
            ${noteBlock(
              'Trade-offs',
              `More edge cases and heavier tests around intervals, policies, and clock semantics.`
            )}
          </article>

          <article id="client-server-split" class="scroll-mt-28 space-y-3 rounded-xl border border-slate-200/80 bg-white/80 p-5 shadow-sm sm:p-6">
            <h2 class="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Split client and server responsibility
            </h2>
            ${principleBlock('Interaction on the client; convergence at the boundary.')}
            ${noteBlock(
              'Context',
              `Interactive study demands low latency. Consistency still needs a single reconciliation point when writes can race or disagree.`
            )}
            ${noteBlock(
              'Decision',
              `Let the client own interaction and intent. Let the server (or authoritative persistence boundary) own reconciliation when the product requires it. The boundary exists to control drift, ordering, and conflicts, not to drag every click across the network.`
            )}
            ${noteBlock(
              'Why',
              `A fully server-driven flow hurts UX. A fully client-driven model breaks consistency. <strong>You pick the split on purpose.</strong>`
            )}
            ${noteBlock(
              'Trade-offs',
              `Partial duplication of rules and more explicit conflict handling. That cost buys predictable behavior when reality gets messy.`
            )}
          </article>

          <article id="distributed-pressure" class="scroll-mt-28 space-y-3 rounded-xl border border-slate-200/80 bg-white/80 p-5 shadow-sm sm:p-6">
            <h2 class="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Design for multi-device consistency from the start
            </h2>
            ${principleBlock('Even one user on multiple devices is already a distributed system.')}
            ${noteBlock(
              'Context',
              `Multiple devices, retries, and parallel sessions produce out-of-order and duplicate events before you ever “ship sync.”`
            )}
            ${noteBlock(
              'Decision',
              `Design contracts with <strong>idempotency</strong>, explicit write identities, and <strong>defined conflict strategies</strong> at persistence boundaries, so growth does not rewrite meaning.`
            )}
            ${noteBlock(
              'Why',
              `Treat the happy path as unordered at the boundary. If the model pretends writes are always sequential and unique, the fixes end up in the UI, and they do not scale.`
            )}
            ${noteBlock(
              'Trade-offs',
              `More moving parts than a single-writer toy model. Conflict resolution stops being “just engineering”; it becomes a product stance (last-write-wins vs merge, etc.).`
            )}
          </article>

          <article id="late-complexity" class="scroll-mt-28 space-y-3 rounded-xl border border-slate-200/80 bg-white/80 p-5 shadow-sm sm:p-6">
            <h2 class="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Mistake: discovering product complexity too late
            </h2>
            ${principleBlock('The risk is not bad code; it is a misunderstood problem.')}
            ${noteBlock(
              'Context',
              `Early slices look like simple content storage. The real product shows up when sessions, history, scheduling, and multi-device pressure connect.`
            )}
            ${noteBlock(
              'Reality',
              `Concurrency, ordering, and reconciliation show up once the loop is real, not when the first schema is drawn.`
            )}
            ${noteBlock(
              'Impact',
              `Late discovery forces boundary and ownership changes under pressure, exactly when mistakes are expensive.`
            )}
            ${noteBlock(
              'Lesson',
              `The failure mode is not messy code. <strong>The failure mode is a clean system built around the wrong abstraction of the problem.</strong>`
            )}
            ${noteBlock(
              'Trade-offs',
              `Avoid premature distributed machinery, but also avoid naive CRUD assumptions that guarantee a rewrite when the product story tightens.`
            )}
          </article>

          <article id="product-drives-backend" class="scroll-mt-28 space-y-3 rounded-xl border border-slate-200/80 bg-white/80 p-5 shadow-sm sm:p-6">
            <h2 class="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Let the product drive backend design
            </h2>
            ${principleBlock('Locally correct is not the same as globally coherent.')}
            ${noteBlock(
              'Context',
              `Purely technical optimization produces slices that are locally correct but <strong>globally incoherent</strong>: they do not compose into one learning system.`
            )}
            ${noteBlock(
              'Decision',
              `Let the product story (capture, practice, memorization, visibility) drive boundaries and layering. Keep business logic independent from infrastructure so storage and runtime can change without redefining what a review or a session <em>means</em>.`
            )}
            ${noteBlock(
              'Why',
              `Decisions become explainable: why a state machine, why stable interfaces, why timers are not “just UI.” The backend shape follows continuity over time, not fashion.`
            )}
            ${noteBlock(
              'Trade-offs',
              `Accept technically imperfect choices when they serve the product, while keeping boundaries explicit so those choices stay reversible.`
            )}
          </article>
        </div>
      </div>

      <footer class="relative border-t border-slate-200/80 bg-white pb-10 pt-8">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p class="text-xs text-slate-500">
            © <span id="current-year"></span> ${brandName} · engineering notes
          </p>
        </div>
      </footer>
    </main>
  </div>
`;
}
