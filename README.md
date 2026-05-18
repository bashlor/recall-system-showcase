# Recall System

## Engineering notes

Short, scannable decisions on backend-shaped product engineering. Copy stays generic (no repo-specific paths or identifiers).

### Backend = system + product + time

“Backend” here is not only a remote server. It is how rules, state, time, and coherence are structured so the product can evolve: clear layering, domain rules kept away from infrastructure, and a learning loop that stays one system instead of a pile of disconnected features. These notes stay short by design.

### Contents

1. [Modeling learning as state transitions, not CRUD](#1-modeling-learning-as-state-transitions-not-crud)
2. [Time as a first-class concern](#2-time-as-a-first-class-concern)
3. [Split client and server responsibility](#3-split-client-and-server-responsibility)
4. [Design for multi-device consistency from the start](#4-design-for-multi-device-consistency-from-the-start)
5. [Mistake: discovering product complexity too late](#5-mistake-discovering-product-complexity-too-late)
6. [Let the product drive backend design](#6-let-the-product-drive-backend-design)

---

### 1. Modeling learning as state transitions, not CRUD

> **Principle:** The product is a workflow, not a dataset.

**Context**

A learning product _looks_ like CRUD (decks, cards), but users experience sessions, queues, and outcomes that evolve over time.

**Decision**

Model the study experience as explicit states and transitions. A dedicated study-flow module owns session phases and transitions; the domain layer owns entities and rules.

**Why**

The product is not data storage: it is a workflow that moves in time. **CRUD is an implementation detail, not a model.**

**Trade-offs**

More concepts to design and test. In exchange, orchestration stays out of the UI layer and stays stable when requirements shift.

---

### 2. Time as a first-class concern

> **Principle:** Time drives behavior, not storage.

**Context**

Cards are not static inventory. Visibility depends on due dates, pacing, and study policies, not on “what exists in a table.”

**Decision**

Embed scheduling, timers, and spaced repetition rules in the domain layer, with a hard split between session pacing and per-card timing when both apply.

**Why**

The system must decide _when_ work appears, not just _what_ exists. Policies and clocks are part of the model, not an afterthought on top of storage.

**Trade-offs**

More edge cases and heavier tests around intervals, policies, and clock semantics.

---

### 3. Split client and server responsibility

> **Principle:** Interaction on the client; convergence at the boundary.

**Context**

Interactive study demands low latency. Consistency still needs a single reconciliation point when writes can race or disagree.

**Decision**

Let the client own interaction and intent. Let the server (or authoritative persistence boundary) own reconciliation when the product requires it. The boundary exists to control drift, ordering, and conflicts, not to drag every click across the network.

**Why**

A fully server-driven flow hurts UX. A fully client-driven model breaks consistency. **You pick the split on purpose.**

**Trade-offs**

Partial duplication of rules and more explicit conflict handling. That cost buys predictable behavior when reality gets messy.

---

### 4. Design for multi-device consistency from the start

> **Principle:** Even one user on multiple devices is already a distributed system.

**Context**

Multiple devices, retries, and parallel sessions produce out-of-order and duplicate events before you ever “ship sync.”

**Decision**

Design contracts with **idempotency**, explicit write identities, and **defined conflict strategies** at persistence boundaries, so growth does not rewrite meaning.

**Why**

Treat the happy path as unordered at the boundary. If the model pretends writes are always sequential and unique, the fixes end up in the UI, and they do not scale.

**Trade-offs**

More moving parts than a single-writer toy model. Conflict resolution stops being “just engineering”; it becomes a product stance (last-write-wins vs merge, etc.).

---

### 5. Mistake: discovering product complexity too late

> **Principle:** The risk is not bad code; it is a misunderstood problem.

**Context**

Early slices look like simple content storage. The real product shows up when sessions, history, scheduling, and multi-device pressure connect.

**Reality**

Concurrency, ordering, and reconciliation show up once the loop is real, not when the first schema is drawn.

**Impact**

Late discovery forces boundary and ownership changes under pressure, exactly when mistakes are expensive.

**Lesson**

The failure mode is not messy code. **The failure mode is a clean system built around the wrong abstraction of the problem.**

**Trade-offs**

Avoid premature distributed machinery, but also avoid naive CRUD assumptions that guarantee a rewrite when the product story tightens.

---

### 6. Let the product drive backend design

> **Principle:** Locally correct is not the same as globally coherent.

**Context**

Purely technical optimization produces slices that are locally correct but **globally incoherent**: they do not compose into one learning system.

**Decision**

Let the product story (capture, practice, memorization, visibility) drive boundaries and layering. Keep business logic independent from infrastructure so storage and runtime can change without redefining what a review or a session _means_.

**Why**

Decisions become explainable: why a state machine, why stable interfaces, why timers are not “just UI.” The backend shape follows continuity over time, not fashion.

**Trade-offs**

Accept technically imperfect choices when they serve the product, while keeping boundaries explicit so those choices stay reversible.
