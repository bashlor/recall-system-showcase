import '@fontsource-variable/inter/index.css';
import '@fontsource-variable/jetbrains-mono/index.css';
import './style.css';

import { architectureHtml } from './architecturePage.js';
import { engineeringNotesHtml } from './engineeringNotesPage.js';
import { notFoundHtml } from './notFoundPage.js';

const LANDING_BRAND_NAME = 'Recall System';
const LANDING_APP_ICON_URL = '/favicon.svg';
const LANDING_DEV_BUILD_URL = 'https://app-recall-system.elie-patrice.fr';
const LANDING_STUDY_WEBP = { height: 776, width: 1015 } as const;
const landingHeroQuestionMd =
  'For <code>-rwxr-x---</code>, what can the <strong>owner</strong>, <strong>group</strong>, and <strong>others</strong> each do?';
const landingHeroAnswerMd = `
  <ul>
    <li><strong>Owner:</strong> read, write, execute</li>
    <li><strong>Group:</strong> read only</li>
    <li><strong>Others:</strong> no access</li>
  </ul>
`;
const landingTrainsRefineAnswerMd = `
  <ul>
    <li><strong>Owner:</strong> read, write, execute</li>
    <li><strong>Group:</strong> read only</li>
    <li><strong>Others:</strong> no access</li>
  </ul>
  <p><strong>Often missed:</strong> “others” includes service accounts and automated jobs, not just human users.</p>
`;
const heroCardShellClass =
  'overflow-hidden rounded-xl border-[3px] border-white bg-white shadow-[0_32px_64px_-12px_rgba(15,23,42,0.72),0_0_0_1px_rgba(15,23,42,0.06)] ring-2 ring-slate-900/20';
const heroCardFaceClass =
  'p-3 max-h-[min(200px,38vh)] overflow-y-auto sm:max-h-[min(220px,36vh)] lg:max-h-[min(240px,34vh)]';
const trainsCardFaceClass = 'p-4 max-h-[min(260px,45vh)] overflow-y-auto';
const trainsQuestionShellClass = `${heroCardShellClass} shadow-[0_0_0_1px_rgba(19,91,236,0.28),0_32px_72px_-16px_rgba(19,91,236,0.32)] ring-2 ring-primary/35`;
const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Missing #app root');
}

type AppRoute = 'architecture' | 'engineering-notes' | 'landing' | 'not-found';

function getRoute(): AppRoute {
  const normalized = window.location.pathname.replace(/\/+$/, '') || '/';
  if (normalized === '/engineering-notes') {
    return 'engineering-notes';
  }
  if (normalized === '/architecture') {
    return 'architecture';
  }
  if (normalized === '/') {
    return 'landing';
  }
  return 'not-found';
}

const route = getRoute();

if (route === 'engineering-notes') {
  document.title = `Engineering notes · ${LANDING_BRAND_NAME}`;
  app.innerHTML = engineeringNotesHtml({
    brandName: LANDING_BRAND_NAME,
    iconUrl: LANDING_APP_ICON_URL,
  });
} else if (route === 'architecture') {
  document.title = `Architecture · ${LANDING_BRAND_NAME}`;
  app.innerHTML = architectureHtml({
    brandName: LANDING_BRAND_NAME,
    iconUrl: LANDING_APP_ICON_URL,
  });
} else if (route === 'not-found') {
  document.title = `Page not found · ${LANDING_BRAND_NAME}`;
  app.innerHTML = notFoundHtml({
    brandName: LANDING_BRAND_NAME,
    iconUrl: LANDING_APP_ICON_URL,
  });
} else {
  app.innerHTML = `
  <div class="min-h-screen bg-slate-50">
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-[10%] right-[5%] h-[800px] w-[800px] rounded-full bg-primary/3 blur-[120px]"></div>
      <div class="absolute bottom-[10%] left-[5%] h-[600px] w-[600px] rounded-full bg-emerald-500/3 blur-[100px]"></div>
      <div class="absolute top-[40%] left-[30%] h-[400px] w-[400px] rounded-full bg-blue-500/2 blur-[80px]"></div>
    </div>

    <header class="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a class="flex items-center gap-3" href="/">
          <img
            alt=""
            class="h-9 w-9 shrink-0"
            decoding="async"
            height="36"
            src="${LANDING_APP_ICON_URL}"
            width="36"
          />
          <h2 class="text-lg font-semibold tracking-tight text-slate-900">${LANDING_BRAND_NAME}</h2>
        </a>
        <nav class="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 sm:gap-x-5">
          <span class="text-sm font-medium text-slate-900">Home</span>
          <a class="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900" href="/engineering-notes">Engineering notes</a>
          <a class="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900" href="/architecture">Architecture</a>
        </nav>
      </div>
    </header>

    <main class="relative" id="top">
      <section class="relative overflow-x-clip bg-gradient-to-br from-slate-50/50 to-transparent pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_50%_40%_at_50%_50%,#000_60%,transparent_95%)]"></div>
        <div class="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-4 lg:px-8 xl:gap-6">
          <div class="relative z-20 max-w-[440px] space-y-6 lg:col-span-4 lg:space-y-7">
            <div class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 ring-1 ring-inset ring-slate-900/5">
              <div class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></div>
              <span class="text-xs font-medium text-slate-600">Deliberate practice for technical work</span>
            </div>

            <h1 class="text-4xl font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              Turn technical knowledge
              <br />
              <span class="bg-gradient-to-r from-blue-600 via-primary to-emerald-500 bg-clip-text text-transparent">into reliable judgment.</span>
            </h1>

            <p class="text-lg leading-[1.75] text-slate-700 sm:text-[1.1rem]">
              Capture what matters, train retrieval under pressure, and build
              knowledge you can actually use in real technical situations.
            </p>

            <p class="pt-1 text-xs tracking-widest text-slate-400">
              <span class="text-slate-500">Notes</span>
              <span class="mx-2 text-slate-300">→</span>
              <span class="text-slate-500">practice</span>
              <span class="mx-2 text-slate-300">→</span>
              <span class="text-slate-500">recall</span>
              <span class="mx-2 text-slate-300">→</span>
              <span class="bg-gradient-to-r from-blue-600 via-primary to-emerald-500 bg-clip-text font-medium text-transparent">judgment</span>
            </p>
          </div>

          <div class="relative z-10 lg:col-span-8">
            <div class="group relative mx-auto w-full max-w-[640px] lg:-mr-4 xl:-mr-6">
              <div class="relative min-h-[180px] pt-3 pb-24 sm:min-h-[230px] sm:pt-4 sm:pb-28 lg:min-h-[300px] lg:pt-6 lg:pb-36">
                <div class="absolute left-[15%] top-1/2 h-[90%] w-[50%] -translate-y-1/2 rounded-full bg-primary/15 blur-[60px]"></div>
                <div class="absolute left-[-20%] top-1/2 h-[120%] w-[80%] -translate-y-1/2 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-3xl"></div>

                <div class="relative z-20 ml-auto w-full transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:-translate-y-2 lg:w-[95%] xl:w-full" style="transform: rotate(3deg);">
                  <div class="overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-[0_64px_140px_-40px_rgba(15,23,42,0.72)]">
                    <img
                      alt="Study session interface"
                      class="landing-study-shot h-auto w-full"
                      decoding="async"
                      fetchpriority="high"
                      height="${LANDING_STUDY_WEBP.height}"
                      src="/landing/study.webp"
                      width="${LANDING_STUDY_WEBP.width}"
                    />
                    <div class="landing-study-fallback aspect-[1015/776] w-full bg-slate-100 p-6 sm:p-8" hidden>
                      <div class="grid h-full gap-4">
                        <div class="grid content-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                          <div class="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Question</div>
                          <div class="landing-card-markdown prose-sm">${landingHeroQuestionMd}</div>
                        </div>
                        <div class="grid content-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                          <div class="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Answer</div>
                          <div class="landing-card-markdown prose-sm">${landingHeroAnswerMd}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="absolute z-25 -bottom-[14%] left-[-4%] w-[58%] max-w-[400px] [backface-visibility:hidden] sm:-bottom-[16%] sm:left-[-5%] sm:w-[56%] sm:max-w-[440px] lg:-bottom-[18%] lg:max-w-[min(100%,480px)]" style="transform: rotate(3deg) translateZ(0.1px);">
                    <div class="${heroCardShellClass}">
                      ${cardPreview('question', landingHeroQuestionMd, heroCardFaceClass)}
                    </div>
                  </div>

                  <div class="absolute z-30 -bottom-[14%] right-[-4%] w-[58%] max-w-[400px] [backface-visibility:hidden] sm:-bottom-[16%] sm:right-[-5%] sm:w-[56%] sm:max-w-[440px] lg:-bottom-[18%] lg:max-w-[min(100%,480px)]" style="transform: rotate(-3deg) translateZ(0.1px);">
                    <div class="${heroCardShellClass}">
                      ${cardPreview('answer', landingHeroAnswerMd, heroCardFaceClass)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative overflow-hidden py-20 sm:py-24" id="learning-loop">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100"></div>
        <div class="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-[100px]"></div>
        <div class="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/2 blur-[80px]"></div>
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
            ${sectionLabel('The Learning Loop')}
            <h2 class="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Learning is a system.
              <br class="hidden sm:block" />
              <span class="block sm:ml-1 sm:inline">Not a checklist.</span>
            </h2>
            <p class="text-lg leading-relaxed text-slate-600">
              Each step feeds the next, until knowledge becomes something you can
              actually use.
            </p>
          </div>

          <div class="relative mx-auto max-w-6xl">
            <div class="relative z-0 hidden lg:flex lg:items-center lg:justify-center lg:gap-4 xl:gap-5">
              <div
                aria-hidden
                class="pointer-events-none absolute left-[6%] right-[6%] top-[calc(50%+0.5rem)] z-0 h-[3px] -translate-y-1/2 rounded-full"
                style="background: linear-gradient(90deg, rgb(59 130 246 / 0.42) 0%, rgb(59 130 246 / 0.2) 22%, rgb(19 91 236 / 0.88) 50%, rgb(16 185 129 / 0.2) 78%, rgb(16 185 129 / 0.42) 100%);"
              ></div>
              ${loopStepDesktop('Capture', 'Turn scattered notes into structured knowledge you can reuse.', noteIcon('h-6 w-6 text-blue-500 drop-shadow-[0_0_10px_rgb(59_130_246/0.45)]'), false, 'translateY(0) scale(1)', 'from-blue-500 to-blue-600', 'from-blue-500/26 via-blue-500/16 to-blue-500/8', 'ring-blue-500/25', 'text-blue-500')}
              ${loopStepDesktop('Practice', 'Train with real technical scenarios, not passive review.', brainIcon('h-6 w-6 text-primary drop-shadow-[0_0_22px_rgb(19_91_236/0.45)]'), true, 'translateY(-14px) scale(1.05)', 'from-primary to-primary/90', 'from-primary/28 via-primary/18 to-primary/8', 'ring-primary/25', 'text-primary')}
              ${loopStepDesktop('Recall', 'Reinforce what matters through retrieval, not passive repetition.', boltIcon('h-6 w-6 text-primary drop-shadow-[0_0_10px_rgb(19_91_236/0.35)]'), false, 'translateY(8px) scale(1.02)', 'from-primary/80 to-emerald-500', 'from-primary/22 via-emerald-500/16 to-emerald-500/8', 'ring-primary/18', 'text-primary')}
              ${loopStepDesktop('Diagnose', 'Expose where your reasoning fails, and fix it.', troubleshootIcon('h-6 w-6 text-emerald-500 drop-shadow-[0_0_10px_rgb(16_185_129/0.45)]'), false, 'translateY(-6px) scale(1)', 'from-emerald-500 to-emerald-600', 'from-emerald-500/26 via-emerald-500/16 to-emerald-500/8', 'ring-emerald-500/25', 'text-emerald-500')}
            </div>

            <div class="relative z-10 space-y-4 lg:hidden">
              ${loopStepMobile('Capture', 'Turn scattered notes into structured knowledge you can reuse.', noteIcon('h-5 w-5 text-blue-500'), false, 'bg-blue-500/22', 'border-blue-500/35', 'shadow-[0_0_14px_-2px_rgb(59_130_246/0.4)]')}
              ${loopStepMobile('Practice', 'Train with real technical scenarios, not passive review.', brainIcon('h-5 w-5 text-primary drop-shadow-[0_0_12px_rgb(19_91_236/0.55)]'), true, 'bg-primary/22', 'border-primary/38', 'shadow-[0_0_20px_-2px_rgb(19_91_236/0.5)]')}
              ${loopStepMobile('Recall', 'Reinforce what matters through retrieval, not passive repetition.', boltIcon('h-5 w-5 text-emerald-500'), false, 'bg-emerald-500/18', 'border-emerald-500/35', 'shadow-[0_0_14px_-2px_rgb(16_185_129/0.35)]')}
              ${loopStepMobile('Diagnose', 'Expose where your reasoning fails, and fix it.', troubleshootIcon('h-5 w-5 text-emerald-500'), false, 'bg-emerald-500/22', 'border-emerald-500/35', 'shadow-[0_0_14px_-2px_rgb(16_185_129/0.4)]')}
            </div>

            <div class="relative z-10 mx-auto mt-14 max-w-2xl px-2 text-center sm:mt-16">
              <p class="text-sm font-medium tracking-wide text-slate-700 leading-relaxed sm:text-base">
                <span class="text-slate-500">Capture</span>
                <span class="mx-1.5 text-slate-400">→</span>
                <span class="text-slate-500">Practice</span>
                <span class="mx-1.5 text-slate-400">→</span>
                <span class="text-slate-500">Recall</span>
                <span class="mx-1.5 text-slate-400">→</span>
                <span class="bg-gradient-to-r from-blue-600 via-primary to-emerald-500 bg-clip-text text-[0.95rem] font-semibold tracking-tight text-transparent sm:text-lg">Judgment</span>
                <span class="mx-1.5 text-slate-400">→</span>
                <span class="text-slate-500">repeat</span>
              </p>
              <p class="mt-3 text-sm leading-relaxed text-slate-500">
                Not a one-way pipeline: a loop that reshapes how you think.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="trains-section-heading" class="relative border-t border-slate-200/60 py-20 sm:py-24">
        <div aria-hidden class="absolute inset-0 bg-white/50"></div>
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header class="mx-auto mb-7 max-w-3xl text-center sm:mb-8 lg:mx-0 lg:text-left">
            <h2 class="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl" id="trains-section-heading">
              What this actually trains
            </h2>
            <p class="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Capture what matters from docs, bugs, or experience, then turn it into
              structured prompts you train on.
            </p>
          </header>

          <ol class="m-0 ml-0.5 list-none border-l-2 border-primary/25 bg-gradient-to-b from-primary/1 via-transparent to-emerald-500/1 p-0 pl-5 sm:ml-1 sm:pl-8">
            <li class="mb-10 pt-0.5 sm:mb-12">
              <div class="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-x-6 lg:gap-y-6">
                ${trainsStepText(1, 'Think from real prompts', 'The same concrete scenarios you saved, so you rehearse what you will need, not a generic quiz bank.')}
                <div class="flex min-w-0 w-full flex-col self-start">
                  <div class="w-full max-w-xl -rotate-1 transition-transform lg:max-w-2xl lg:hover:-rotate-[0.5deg] ${trainsQuestionShellClass}">
                    ${cardPreview('question', landingHeroQuestionMd, trainsCardFaceClass)}
                  </div>
                </div>
              </div>
            </li>

            <li class="mb-10 sm:mb-12 lg:mb-14">
              <div class="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-6">
                ${trainsStepText(2, 'Train under pressure', 'You recall and explain, forcing your brain to work through the problem.', true)}
                <div class="flex min-w-0 w-full flex-col self-start overflow-x-clip">
                  <div class="mx-auto w-full max-w-[min(100%,38rem)]">
                    <div class="relative z-0 mx-auto w-full max-w-[min(100%,38rem)]">
                      <div aria-hidden class="pointer-events-none absolute left-[6%] top-1/2 h-[86%] w-[58%] -translate-y-1/2 rounded-full bg-primary/26 blur-[64px]"></div>
                      <div aria-hidden class="pointer-events-none absolute right-[8%] top-[18%] h-[42%] w-[36%] rounded-full bg-primary/12 blur-[48px]"></div>
                      <div aria-hidden class="pointer-events-none absolute inset-[-2%] rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/7 opacity-95"></div>
                      <div class="relative rotate-[0.45deg] rounded-xl shadow-[0_28px_72px_-26px_rgba(15,23,42,0.55)] ring-2 ring-primary/38">
                        <div class="overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.45)]">
                          <img alt="Study session with question card and recall UI" class="h-auto w-full" decoding="async" height="${LANDING_STUDY_WEBP.height}" loading="lazy" src="/landing/study.webp" width="${LANDING_STUDY_WEBP.width}" />
                        </div>
                      </div>
                      <p class="mx-auto mt-4 max-w-[min(100%,38rem)] border-t border-primary/25 pt-4 pb-1 text-center text-sm font-bold uppercase tracking-wider text-primary">
                        Recall first: answer stays hidden until you commit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="mb-10 sm:mb-12 lg:mb-12">
              <div class="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-6">
                ${trainsStepText(3, 'Refine your understanding', 'You see what you missed and correct your reasoning.')}
                <div class="mx-auto flex min-w-0 w-full max-w-[min(100%,38rem)] flex-col self-start overflow-x-clip pt-2 lg:pt-0">
                  <div aria-hidden class="mb-3 hidden h-6 w-px shrink-0 self-center bg-gradient-to-b from-primary/40 via-amber-400/30 to-amber-500/25 lg:block"></div>
                  <div class="flex w-full flex-col gap-3">
                    <span class="inline-flex w-fit items-center gap-1 rounded-full bg-amber-500/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-amber-950 ring-1 ring-amber-500/35">
                      ${lightbulbIcon('h-4 w-4 text-amber-700')}
                      Often missed
                    </span>
                    <div class="${heroCardShellClass} border-l-4 border-l-amber-400/80 ring-1 ring-amber-500/25">
                      ${cardPreview('answer', landingTrainsRefineAnswerMd, trainsCardFaceClass)}
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="mb-10 sm:mb-12">
              <div class="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-6">
                ${trainsStepText(4, 'Calibrate your knowledge', 'You rate how well you actually understood, shaping what comes next.', false, true)}
                <div class="flex min-w-0 w-full flex-col self-start">
                  <div class="relative mx-auto w-full max-w-[min(100%,38rem)] overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-white via-slate-50/90 to-primary/6 p-5 shadow-[0_24px_60px_-28px_rgba(19,91,236,0.26)] sm:p-6">
                    <div aria-hidden class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/4 via-transparent to-emerald-500/3"></div>
                    <p class="relative mb-4 text-center text-sm font-semibold tracking-wide text-slate-600">
                      Calibrate what you actually know
                    </p>
                    ${ratingStrip()}
                  </div>
                </div>
              </div>
            </li>

            <li class="mt-8 pt-2 sm:mt-9">
              <div class="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-6">
                <div class="flex gap-4 self-start">
                  <div aria-hidden class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary ring-2 ring-primary/30 shadow-sm shadow-primary/10">
                    ${refreshIcon('h-5 w-5')}
                  </div>
                  <div class="min-w-0 text-left">
                    <h3 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                      Build judgment over time
                    </h3>
                    <span aria-hidden class="mt-2 mb-3 block h-1 max-w-52 rounded-full bg-gradient-to-r from-primary via-primary/85 to-emerald-500"></span>
                    <p class="text-lg leading-relaxed text-slate-700">
                      Repeated cycles turn isolated knowledge into something you
                      can rely on.
                    </p>
                  </div>
                </div>
                <div class="flex flex-col justify-start self-start pt-1 lg:pt-2">
                  <p class="text-xs tracking-widest text-slate-500">
                    <span class="text-slate-600">Notes</span>
                    <span class="mx-2 text-slate-300">→</span>
                    <span class="text-slate-600">practice</span>
                    <span class="mx-2 text-slate-300">→</span>
                    <span class="text-slate-600">recall</span>
                    <span class="mx-2 text-slate-300">→</span>
                    <span class="bg-gradient-to-r from-blue-600 via-primary to-emerald-500 bg-clip-text text-transparent">judgment</span>
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section aria-labelledby="philosophy-section-heading" class="relative border-t border-slate-200/60 py-14 sm:py-[4.25rem]">
        <div aria-hidden class="absolute inset-0 bg-white/50"></div>
        <div class="relative mx-auto max-w-3xl px-4 text-center sm:px-8">
          <h2 class="mb-5 text-xl font-bold tracking-tight text-slate-900 sm:mb-6 sm:text-2xl" id="philosophy-section-heading">
            Most learning systems fail because…
          </h2>

          <div class="space-y-3">
            <p class="text-balance text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
              Most learning systems optimize for exposure.
            </p>

            <div class="space-y-2.5 text-base leading-normal text-slate-600 sm:text-[1.0625rem]">
              <p>Reading, watching, highlighting.</p>
              <p>But exposure is not understanding.</p>
              <p>
                In real work, you don't recognize answers.
                <br />
                You have to produce them.
              </p>
            </div>

            <p class="pt-0.5 text-sm leading-normal text-slate-500/90 sm:text-[0.9375rem]">
              Under pressure. With incomplete context.
            </p>

            <div class="space-y-2.5 pt-0.5 text-base leading-normal text-slate-600 sm:text-[1.0625rem]">
              <p>This is where learning breaks.</p>
              <p>You forget, or worse, you think you know.</p>
              <p>This system is built on a different assumption:</p>
              <p>Understanding is what you can recall, explain, and apply.</p>
            </div>

            <div class="mx-auto mt-6 max-w-xl pt-5">
              <div aria-hidden class="mx-auto mb-4 h-px w-[min(100%,22rem)] bg-gradient-to-r from-transparent via-slate-400/25 to-transparent"></div>
              <div class="space-y-2">
                <p class="text-base font-medium leading-snug text-slate-500 sm:text-lg">
                  This is not a learning app.
                </p>
                <p class="text-xl font-bold leading-tight tracking-tight sm:text-2xl">
                  <span class="bg-gradient-to-r from-blue-600 via-primary to-emerald-500 bg-clip-text text-transparent">
                    It's a system to build technical judgment.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="development-state-heading"
        class="relative border-t border-slate-200/60 py-14 sm:py-16"
      >
        <div aria-hidden class="absolute inset-0 bg-white/40"></div>
        <div class="relative mx-auto max-w-3xl px-4 sm:px-8">
          ${sectionLabel('Status')}
          <h2
            class="mb-4 text-xl font-bold tracking-tight text-slate-900 sm:mb-5 sm:text-2xl"
            id="development-state-heading"
          >
            Current Development State
          </h2>
          <div class="space-y-4 text-left text-base leading-relaxed text-slate-600 sm:text-[1.0625rem]">
            <p>
              Recall System is in active development. The core application already runs locally
              (web and desktop), while the backend and synchronization architecture are being refined
              for reliability, consistency, and long-term maintainability.
            </p>
            <p>This project is a long-term exploration of:</p>
            <ul class="list-disc space-y-1.5 pl-5 marker:text-slate-400">
              <li>retrieval systems</li>
              <li>local-first architecture</li>
              <li>contextual memory</li>
              <li>synchronization tradeoffs</li>
              <li>technical learning workflows</li>
            </ul>
          </div>
          <div class="mt-8">
            <a
              class="inline-flex min-w-[12rem] items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 ring-1 ring-primary/20 transition hover:bg-primary/92 hover:shadow-primary/35"
              href="${LANDING_DEV_BUILD_URL}"
              rel="noopener noreferrer"
              target="_blank"
            >
              Access development build
            </a>
          </div>
        </div>
      </section>

      <footer class="relative bg-white pb-12 pt-10">
        <div aria-hidden class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/35 to-transparent"></div>
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex min-w-0 items-start gap-3 sm:gap-4">
            <img
              alt=""
              class="h-10 w-10 shrink-0 sm:h-11 sm:w-11"
              decoding="async"
              height="44"
              src="${LANDING_APP_ICON_URL}"
              width="44"
            />
            <div class="min-w-0 text-left">
              <p class="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                ${LANDING_BRAND_NAME}
              </p>
              <p class="mt-1.5 max-w-md text-sm leading-relaxed text-slate-600">
                A system for building technical judgment.
              </p>
              <p class="mt-2 text-xs text-slate-500">
                Built by an engineer, for engineers
              </p>
            </div>
          </div>
          <p class="mt-6 text-xs text-slate-500">© <span id="current-year"></span> Recall System</p>
        </div>
      </footer>
    </main>
  </div>
`;
}

const yearNode = document.querySelector<HTMLElement>('#current-year');
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (route === 'landing') {
  const studyShot = document.querySelector<HTMLImageElement>(
    '.landing-study-shot'
  );
  const studyFallback = document.querySelector<HTMLElement>(
    '.landing-study-fallback'
  );

  if (studyShot && studyFallback) {
    studyShot.addEventListener('error', () => {
      studyShot.hidden = true;
      studyFallback.hidden = false;
    });
  }
}

function sectionLabel(text: string) {
  return `<p class="mb-4 text-xs font-semibold tracking-widest uppercase text-slate-500">${text}</p>`;
}

function cardPreview(
  face: 'answer' | 'question',
  content: string,
  className: string
) {
  const labelClass =
    face === 'answer'
      ? 'text-gray-500 font-semibold tracking-wider uppercase'
      : 'text-gray-500 font-semibold tracking-wider uppercase';
  const label = face === 'answer' ? 'Answer' : 'Question';

  return `
    <div class="rounded-lg border border-transparent bg-gray-50 p-4 ${className}">
      <div class="mb-2 text-[10px] ${labelClass}">${label}</div>
      <div class="landing-card-markdown prose-sm">${content}</div>
    </div>
  `;
}

function loopStepDesktop(
  title: string,
  description: string,
  icon: string,
  highlight: boolean,
  transform: string,
  colorGradient: string,
  iconBgGradient: string,
  ringColor: string,
  accentColor: string
) {
  return `
    <div class="relative z-10 flex-1 max-w-[280px]" style="transform: ${transform};">
      <div class="relative group">
        ${highlight ? '<div aria-hidden class="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-br from-blue-500/35 via-cyan-400/28 to-primary/32 opacity-[0.22] blur-xl transition-opacity duration-500 group-hover:opacity-[0.3]"></div>' : ''}
        <div class="absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${colorGradient} opacity-0 transition-all duration-500 ${highlight ? 'group-hover:opacity-35 blur-md' : 'group-hover:opacity-15 blur-sm'}"></div>
        <div class="relative overflow-hidden rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${highlight ? 'border-2 border-primary/55 bg-white/90 ring-2 ring-primary/40 shadow-lg shadow-primary/20 hover:shadow-primary/30' : 'border border-slate-200/70 bg-white/80 hover:shadow-slate-900/5'}">
          ${highlight ? '<div aria-hidden class="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/8 via-transparent to-cyan-400/10"></div>' : ''}
          <div class="relative z-10">
            <div class="relative mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br shadow-inner ${iconBgGradient} ring-1 ring-inset ${ringColor} ${highlight ? 'ring-2 ring-primary/45 shadow-[0_0_24px_-4px_rgb(19_91_236/0.28)]' : 'shadow-[0_0_16px_-4px_rgb(15_23_42/0.12)]'}">
              <span class="${accentColor}">${icon}</span>
            </div>
            <h3 class="mb-2 text-base font-semibold tracking-tight text-slate-900">${title}</h3>
            <p class="text-sm leading-relaxed text-slate-600">${description}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function loopStepMobile(
  title: string,
  description: string,
  icon: string,
  highlight: boolean,
  bg: string,
  border: string,
  glow: string
) {
  return `
    <div class="flex items-start gap-4">
      <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${bg} ${border} ${glow} ${highlight ? 'ring-2 ring-primary/50 ring-offset-2 ring-offset-slate-50' : ''}">
        ${icon}
      </div>
      <div class="flex-1 rounded-xl p-4 backdrop-blur-sm ${highlight ? 'relative overflow-hidden border-2 border-primary/55 bg-gradient-to-br from-blue-500/10 via-white/88 to-cyan-400/12 ring-2 ring-primary/35' : 'border border-slate-200/70 bg-white/70'}">
        <h3 class="mb-1 text-base font-semibold text-slate-900">${title}</h3>
        <p class="text-sm text-slate-600">${description}</p>
      </div>
    </div>
  `;
}

function trainsStepText(
  step: number,
  title: string,
  body: string,
  peak = false,
  decision = false
) {
  const circleClass = peak
    ? 'h-12 w-12 text-base shadow-lg shadow-primary/25 ring-2 ring-primary/40 bg-primary/20'
    : decision
      ? 'h-11 w-11 text-sm shadow-md shadow-primary/15 ring-2 ring-primary/35 bg-primary/18'
      : 'h-10 w-10 text-sm ring-2 ring-primary/25 bg-primary/15';
  const titleClass = peak
    ? 'text-2xl font-bold tracking-tight text-slate-900 mb-2'
    : decision
      ? 'text-[1.35rem] font-bold tracking-tight text-slate-900 mb-2'
      : 'text-xl font-semibold tracking-tight text-slate-900 mb-2';
  const bodyClass =
    peak || decision
      ? 'text-lg leading-relaxed text-slate-700'
      : 'text-lg leading-relaxed text-slate-600';

  return `
    <div class="mx-auto flex max-w-xl min-w-0 justify-center gap-4 text-center lg:mx-0 lg:justify-start lg:text-left">
      <div aria-hidden class="flex shrink-0 items-center justify-center rounded-full font-bold text-primary ${circleClass}">
        ${step}
      </div>
      <div class="min-w-0 pt-0.5 text-left">
        <h3 class="${titleClass}">${title}</h3>
        <p class="${bodyClass}">${body}</p>
      </div>
    </div>
  `;
}

function ratingStrip() {
  return `
    <div aria-label="Example card ratings: Again, Hard, Good, Easy" class="relative grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3.5" role="group">
      <div class="pointer-events-none flex flex-col items-center gap-1 rounded-xl border border-red-200 bg-red-50 p-3.5 text-center text-red-600 select-none sm:p-4">
        <span class="text-sm font-bold uppercase tracking-wide">Again</span>
        <span class="text-xs opacity-75">&lt; 1m</span>
      </div>
      <div class="pointer-events-none flex flex-col items-center gap-1 rounded-xl border border-orange-200 bg-orange-50 p-3.5 text-center text-orange-600 select-none sm:p-4">
        <span class="text-sm font-bold uppercase tracking-wide">Hard</span>
        <span class="text-xs opacity-75">2d</span>
      </div>
      <div class="pointer-events-none relative z-1 flex scale-[1.04] flex-col items-center gap-1 rounded-xl border border-primary/20 bg-primary/5 p-3.5 text-center text-primary ring-2 ring-primary/50 shadow-[0_0_32px_-6px_rgba(19,91,236,0.45)] select-none sm:scale-105 sm:p-4">
        <span class="text-sm font-bold uppercase tracking-wide">Good</span>
        <span class="text-xs opacity-75">4d</span>
      </div>
      <div class="pointer-events-none flex flex-col items-center gap-1 rounded-xl border border-green-200 bg-green-50 p-3.5 text-center text-green-600 select-none sm:p-4">
        <span class="text-sm font-bold uppercase tracking-wide">Easy</span>
        <span class="text-xs opacity-75">7d</span>
      </div>
    </div>
  `;
}

function iconBase(className: string, path: string, viewBox = '0 0 24 24') {
  return `<svg aria-hidden="true" class="${className}" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="${viewBox}">${path}</svg>`;
}

function noteIcon(className: string) {
  return iconBase(
    className,
    '<path d="M16 3H5a2 2 0 0 0-2 2v14"></path><path d="M8 7h6"></path><path d="M8 11h8"></path><path d="M8 15h5"></path><path d="M3 19a2 2 0 0 0 2 2h14V7a2 2 0 0 0-2-2"></path>'
  );
}

function brainIcon(className: string) {
  return iconBase(
    className,
    '<path d="M9.5 2A2.5 2.5 0 0 0 7 4.5V5a3 3 0 0 0-2.83 4 3 3 0 0 0 .83 5.83V15a3 3 0 0 0 3 3h1"></path><path d="M14.5 2A2.5 2.5 0 0 1 17 4.5V5a3 3 0 0 1 2.83 4 3 3 0 0 1-.83 5.83V15a3 3 0 0 1-3 3h-1"></path><path d="M12 2v20"></path><path d="M10 7.5h4"></path><path d="M9.5 12H14"></path><path d="M10 16.5h4"></path>'
  );
}

function boltIcon(className: string) {
  return iconBase(className, '<path d="M13 2 3 14h7l-1 8 10-12h-7z"></path>');
}

function troubleshootIcon(className: string) {
  return iconBase(
    className,
    '<circle cx="10" cy="10" r="6"></circle><path d="m14.5 14.5 5 5"></path><path d="m8 10 1.5 1.5L12 8"></path>'
  );
}

function lightbulbIcon(className: string) {
  return iconBase(
    className,
    '<path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-4 12.75c.6.43 1 1.09 1 1.83V18h6v-1.42c0-.74.4-1.4 1-1.83A7 7 0 0 0 12 2z"></path>'
  );
}

function refreshIcon(className: string) {
  return iconBase(
    className,
    '<path d="M21 2v6h-6"></path><path d="M3 22v-6h6"></path><path d="M20.49 9A9 9 0 0 0 5.64 5.64L3 8"></path><path d="M3.51 15A9 9 0 0 0 18.36 18.36L21 16"></path>'
  );
}
