import {
  Component,
  DestroyRef,
  GAME_DIFFICULTY,
  GameService,
  Input,
  Output,
  Router,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  input,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YQCTCQS7.js";

// src/app/modules/game/components/card.component.ts
function CardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 4);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275domElementEnd();
  }
}
var CardComponent = class _CardComponent {
  card = input.required(
    ...ngDevMode ? [{ debugName: "card" }] : (
      /* istanbul ignore next */
      []
    )
  );
  position = input(
    1,
    ...ngDevMode ? [{ debugName: "position" }] : (
      /* istanbul ignore next */
      []
    )
  );
  locked = input(
    false,
    ...ngDevMode ? [{ debugName: "locked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  clicked = output();
  /**
   * Handler called when a card is clicked.
   * Raise an event to notify the click event.
   */
  onClicked() {
    const card = this.card();
    if (!this.disabled) {
      this.clicked.emit(card);
    }
  }
  get disabled() {
    const card = this.card();
    return this.locked() || card.flipped || card.done;
  }
  static \u0275fac = function CardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardComponent, selectors: [["app-card"]], inputs: { card: [1, "card"], position: [1, "position"], locked: [1, "locked"] }, outputs: { clicked: "clicked" }, decls: 8, vars: 8, consts: [["type", "button", 1, "button", 3, "click", "disabled"], ["aria-hidden", "true", 1, "card"], [1, "front"], [1, "back"], [1, "check"]], template: function CardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function CardComponent_Template_button_click_0_listener() {
        return ctx.onClicked();
      });
      \u0275\u0275domElementStart(1, "span", 1)(2, "span", 2)(3, "span");
      \u0275\u0275text(4, "\u2733");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "span", 3);
      \u0275\u0275text(6);
      \u0275\u0275conditionalCreate(7, CardComponent_Conditional_7_Template, 2, 0, "span", 4);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("matched", ctx.card().done);
      \u0275\u0275domProperty("disabled", ctx.disabled);
      \u0275\u0275attribute("aria-label", "Card " + ctx.position() + (ctx.card().done ? ", matched: " + ctx.card().character : ctx.card().flipped ? ", " + ctx.card().character : ", face down"));
      \u0275\u0275advance();
      \u0275\u0275classProp("flipped", ctx.card().flipped);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.card().character);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.card().done ? 7 : -1);
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  block-size: 100%;\n}\n.button[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  inline-size: 100%;\n  block-size: 100%;\n  padding: 0;\n  border: none;\n  border-radius: 14px;\n  color: var(--%NS%ink);\n  background: transparent;\n  perspective: 800px;\n}\n.card[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: block;\n  border-radius: inherit;\n  transform-style: preserve-3d;\n  transition: transform calc(300ms * var(--%NS%motion-factor));\n}\n.card.flipped[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.front[_ngcontent-%COMP%], \n.back[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  border: 1.5px solid #5932b0;\n  border-radius: 14px;\n  place-items: center;\n  backface-visibility: hidden;\n}\n.front[_ngcontent-%COMP%] {\n  color: #e5d6ff;\n  background: #7950cd;\n  background-image: radial-gradient(#a17ddf 1px, transparent 1px);\n  background-size: 10px 10px;\n  box-shadow: 0 4px 0 #57369b;\n}\n.front[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  inline-size: 52%;\n  aspect-ratio: 1;\n  border: 1px solid #bfa0ed;\n  border-radius: 50%;\n  place-items: center;\n  font-size: clamp(2rem, 5vw, 4.3rem);\n}\n.back[_ngcontent-%COMP%] {\n  border-color: #dfd5c3;\n  font-size: clamp(2.2rem, 5vw, 4.4rem);\n  background: #fffdf7;\n  transform: rotateY(180deg);\n}\n.matched[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  border-color: #93c6a5;\n  background: #e3f2e7;\n  animation: _ngcontent-%COMP%_match-pop calc(350ms * var(--%NS%motion-factor)) ease-out;\n}\n.check[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 7px;\n  inset-block-start: 4px;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #35714d;\n}\n@media (hover: hover) {\n  .button[_ngcontent-%COMP%]:enabled:hover {\n    transform: translateY(-4px) rotate(-2deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_match-pop {\n  50% {\n    scale: 1.06;\n  }\n}\n@media (width <= 600px) {\n  .front[_ngcontent-%COMP%], \n   .back[_ngcontent-%COMP%] {\n    border-radius: 9px;\n  }\n  .check[_ngcontent-%COMP%] {\n    inset-inline-end: 3px;\n    inset-block-start: 0;\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardComponent, [{
    type: Component,
    args: [{ selector: "app-card", template: `<button type="button" class="button" (click)="onClicked()" [disabled]="disabled" [class.matched]="card().done" [attr.aria-label]="'Card ' + position() + (card().done ? ', matched: ' + card().character : card().flipped ? ', ' + card().character : ', face down')">
  <span class="card" [class.flipped]="card().flipped" aria-hidden="true">
    <span class="front"><span>\u2733</span></span>
    <span class="back">{{ card().character }}@if (card().done) {<span class="check">\u2713</span>}</span>
  </span>
</button>
`, styles: ["/* src/app/modules/game/components/card.component.css */\n:host {\n  display: block;\n  block-size: 100%;\n}\n.button {\n  position: relative;\n  display: block;\n  inline-size: 100%;\n  block-size: 100%;\n  padding: 0;\n  border: none;\n  border-radius: 14px;\n  color: var(--ink);\n  background: transparent;\n  perspective: 800px;\n}\n.card {\n  position: absolute;\n  inset: 0;\n  display: block;\n  border-radius: inherit;\n  transform-style: preserve-3d;\n  transition: transform calc(300ms * var(--motion-factor));\n}\n.card.flipped {\n  transform: rotateY(180deg);\n}\n.front,\n.back {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  border: 1.5px solid #5932b0;\n  border-radius: 14px;\n  place-items: center;\n  backface-visibility: hidden;\n}\n.front {\n  color: #e5d6ff;\n  background: #7950cd;\n  background-image: radial-gradient(#a17ddf 1px, transparent 1px);\n  background-size: 10px 10px;\n  box-shadow: 0 4px 0 #57369b;\n}\n.front > span {\n  display: grid;\n  inline-size: 52%;\n  aspect-ratio: 1;\n  border: 1px solid #bfa0ed;\n  border-radius: 50%;\n  place-items: center;\n  font-size: clamp(2rem, 5vw, 4.3rem);\n}\n.back {\n  border-color: #dfd5c3;\n  font-size: clamp(2.2rem, 5vw, 4.4rem);\n  background: #fffdf7;\n  transform: rotateY(180deg);\n}\n.matched .back {\n  border-color: #93c6a5;\n  background: #e3f2e7;\n  animation: match-pop calc(350ms * var(--motion-factor)) ease-out;\n}\n.check {\n  position: absolute;\n  inset-inline-end: 7px;\n  inset-block-start: 4px;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #35714d;\n}\n@media (hover: hover) {\n  .button:enabled:hover {\n    transform: translateY(-4px) rotate(-2deg);\n  }\n}\n@keyframes match-pop {\n  50% {\n    scale: 1.06;\n  }\n}\n@media (width <= 600px) {\n  .front,\n  .back {\n    border-radius: 9px;\n  }\n  .check {\n    inset-inline-end: 3px;\n    inset-block-start: 0;\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=card.component.css.map */\n"] }]
  }], null, { card: [{ type: Input, args: [{ isSignal: true, alias: "card", required: true }] }], position: [{ type: Input, args: [{ isSignal: true, alias: "position", required: false }] }], locked: [{ type: Input, args: [{ isSignal: true, alias: "locked", required: false }] }], clicked: [{ type: Output, args: ["clicked"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardComponent, { className: "CardComponent", filePath: "src/app/modules/game/components/card.component.ts", lineNumber: 9 });
})();

// src/app/modules/game/components/card-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CardListComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-card", 2);
    \u0275\u0275listener("clicked", function CardListComponent_For_2_Template_app_card_clicked_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClicked($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r3 = ctx.$implicit;
    const \u0275$index_3_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("card", card_r3)("position", \u0275$index_3_r4 + 1)("locked", ctx_r1.locked());
  }
}
var CardListComponent = class _CardListComponent {
  /** Card array to display */
  cards = input.required(
    ...ngDevMode ? [{ debugName: "cards" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Event emitted when a card is clicked */
  cardClicked = output();
  locked = input(
    false,
    ...ngDevMode ? [{ debugName: "locked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cardsClass = computed(
    () => this.cards().length < 30 ? "four-cards" : "six-cards",
    ...ngDevMode ? [{ debugName: "cardsClass" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Notify to the parent component that the given card is clicked.
   *
   * @param card Flipped card.
   */
  onClicked(card) {
    this.cardClicked.emit(card);
  }
  static \u0275fac = function CardListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardListComponent, selectors: [["app-card-list"]], inputs: { cards: [1, "cards"], locked: [1, "locked"] }, outputs: { cardClicked: "cardClicked" }, decls: 3, vars: 2, consts: [["aria-label", "Memory cards", 1, "container"], [3, "card", "position", "locked"], [3, "clicked", "card", "position", "locked"]], template: function CardListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, CardListComponent_For_2_Template, 1, 3, "app-card", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.cardsClass());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.cards());
    }
  }, dependencies: [CardComponent], styles: ["\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.four-cards[_ngcontent-%COMP%] {\n  max-inline-size: 540px;\n  margin-inline: auto;\n  grid-template-columns: repeat(4, 1fr);\n}\n.six-cards[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(6, 1fr);\n}\napp-card[_ngcontent-%COMP%] {\n  min-inline-size: 0;\n  aspect-ratio: 1;\n}\n@media (width <= 600px) {\n  .container[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n}\n@media (width <= 450px) {\n  .six-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n/*# sourceMappingURL=card-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardListComponent, [{
    type: Component,
    args: [{ selector: "app-card-list", imports: [CardComponent], template: '<div class="container" [class]="cardsClass()" aria-label="Memory cards">\n  @for (card of cards(); track card.id; let position = $index) {\n    <app-card [card]="card" [position]="position + 1" [locked]="locked()" (clicked)="onClicked($event)"></app-card>\n  }\n</div>\n', styles: ["/* src/app/modules/game/components/card-list.component.css */\n.container {\n  display: grid;\n  gap: 12px;\n}\n.four-cards {\n  max-inline-size: 540px;\n  margin-inline: auto;\n  grid-template-columns: repeat(4, 1fr);\n}\n.six-cards {\n  grid-template-columns: repeat(6, 1fr);\n}\napp-card {\n  min-inline-size: 0;\n  aspect-ratio: 1;\n}\n@media (width <= 600px) {\n  .container {\n    gap: 8px;\n  }\n}\n@media (width <= 450px) {\n  .six-cards {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n/*# sourceMappingURL=card-list.component.css.map */\n"] }]
  }], null, { cards: [{ type: Input, args: [{ isSignal: true, alias: "cards", required: true }] }], cardClicked: [{ type: Output, args: ["cardClicked"] }], locked: [{ type: Input, args: [{ isSignal: true, alias: "locked", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardListComponent, { className: "CardListComponent", filePath: "src/app/modules/game/components/card-list.component.ts", lineNumber: 11 });
})();

// src/app/modules/game/components/flip-result.component.ts
function FlipResultComponent_Conditional_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " A lovely little match! \u2726 ");
  }
}
function FlipResultComponent_Conditional_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Not quite. You've got this! ");
  }
}
function FlipResultComponent_Conditional_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Every card found its friend! \u2728 ");
  }
}
function FlipResultComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 3);
    \u0275\u0275conditionalCreate(1, FlipResultComponent_Conditional_1_Case_1_Template, 1, 0)(2, FlipResultComponent_Conditional_1_Case_2_Template, 1, 0)(3, FlipResultComponent_Conditional_1_Case_3_Template, 1, 0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.animateClasses());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.displayResult()) === "Correct" ? 1 : tmp_2_0 === "Wrong" ? 2 : tmp_2_0 === "Finish" ? 3 : -1);
  }
}
function FlipResultComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 2);
    \u0275\u0275text(1, "Flip two cards. Find a little connection.");
    \u0275\u0275domElementEnd();
  }
}
var FEEDBACK_RESULTS = /* @__PURE__ */ new Set([
  "Correct",
  "Wrong",
  "Finish"
]);
var FlipResultComponent = class _FlipResultComponent {
  destroyRef = inject(DestroyRef);
  /** Animation duration in ms */
  ANIMATION_DURATION = 1e3;
  timers = [];
  /** Flipped result from the game service */
  result = input.required(
    ...ngDevMode ? [{ debugName: "result" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Latched result used for the visible feedback message */
  displayResult = signal(
    "None",
    ...ngDevMode ? [{ debugName: "displayResult" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether the fade-out animation class should be applied */
  fading = signal(
    false,
    ...ngDevMode ? [{ debugName: "fading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Indicate if the result message should be shown */
  showsMessage = signal(
    false,
    ...ngDevMode ? [{ debugName: "showsMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Classes that control animation */
  animateClasses = computed(
    () => {
      const result = this.displayResult();
      const fading = this.fading();
      switch (result) {
        case "Correct":
          return fading ? ["correct", "animated", "fade-out-up"] : ["correct", "animated", "swing"];
        case "Wrong":
          return fading ? ["fade-out-down"] : [];
        case "Finish":
          return fading ? ["finish", "animated", "fade-out-up"] : ["finish", "animated", "tada"];
        default:
          return [];
      }
    },
    ...ngDevMode ? [{ debugName: "animateClasses" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.destroyRef.onDestroy(() => this.clearTimers());
    effect(() => {
      const result = this.result();
      if (!FEEDBACK_RESULTS.has(result)) {
        return;
      }
      this.startFeedback(result);
    });
  }
  startFeedback(result) {
    this.clearTimers();
    this.fading.set(false);
    this.displayResult.set(result);
    this.showsMessage.set(true);
    this.timers.push(setTimeout(() => {
      this.fading.set(true);
      this.timers.push(setTimeout(() => {
        this.showsMessage.set(false);
      }, this.ANIMATION_DURATION));
    }, this.ANIMATION_DURATION));
  }
  clearTimers() {
    for (const timer of this.timers) {
      clearTimeout(timer);
    }
    this.timers = [];
  }
  static \u0275fac = function FlipResultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlipResultComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlipResultComponent, selectors: [["app-flip-result"]], inputs: { result: [1, "result"] }, decls: 3, vars: 1, consts: [["role", "status", "aria-live", "polite", "aria-atomic", "true", 1, "feedback"], [1, "result", 3, "class"], [1, "hint"], [1, "result"]], template: function FlipResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, FlipResultComponent_Conditional_1_Template, 4, 3, "p", 1)(2, FlipResultComponent_Conditional_2_Template, 2, 0, "p", 2);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showsMessage() ? 1 : 2);
    }
  }, styles: ["\n.feedback[_ngcontent-%COMP%] {\n  display: grid;\n  min-block-size: 53px;\n  padding-block: 13px;\n  place-items: center;\n  text-align: center;\n}\n.result[_ngcontent-%COMP%], \n.hint[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.hint[_ngcontent-%COMP%] {\n  color: var(--%NS%muted);\n}\n.result[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_feedback-in calc(200ms * var(--%NS%motion-factor)) ease-out;\n}\n.correct[_ngcontent-%COMP%], \n.finish[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #427455;\n}\n.fade-out-up[_ngcontent-%COMP%], \n.fade-out-down[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_feedback-out calc(1000ms * var(--%NS%motion-factor)) forwards;\n}\n@keyframes _ngcontent-%COMP%_feedback-in {\n  from {\n    opacity: 0;\n    transform: translateY(5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_feedback-out {\n  to {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=flip-result.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlipResultComponent, [{
    type: Component,
    args: [{ selector: "app-flip-result", template: `<div class="feedback" role="status" aria-live="polite" aria-atomic="true">
  @if (showsMessage()) {
    <p class="result" [class]="animateClasses()">
      @switch (displayResult()) {
        @case ('Correct') { A lovely little match! \u2726 }
        @case ('Wrong') { Not quite. You've got this! }
        @case ('Finish') { Every card found its friend! \u2728 }
      }
    </p>
  } @else { <p class="hint">Flip two cards. Find a little connection.</p> }
</div>
`, styles: ["/* src/app/modules/game/components/flip-result.component.css */\n.feedback {\n  display: grid;\n  min-block-size: 53px;\n  padding-block: 13px;\n  place-items: center;\n  text-align: center;\n}\n.result,\n.hint {\n  font-size: 1.3rem;\n}\n.hint {\n  color: var(--muted);\n}\n.result {\n  animation: feedback-in calc(200ms * var(--motion-factor)) ease-out;\n}\n.correct,\n.finish {\n  font-weight: 800;\n  color: #427455;\n}\n.fade-out-up,\n.fade-out-down {\n  animation: feedback-out calc(1000ms * var(--motion-factor)) forwards;\n}\n@keyframes feedback-in {\n  from {\n    opacity: 0;\n    transform: translateY(5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes feedback-out {\n  to {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=flip-result.component.css.map */\n"] }]
  }], () => [], { result: [{ type: Input, args: [{ isSignal: true, alias: "result", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlipResultComponent, { className: "FlipResultComponent", filePath: "src/app/modules/game/components/flip-result.component.ts", lineNumber: 23 });
})();

// src/app/modules/game/components/game-celebration.component.ts
function GameCelebrationComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "i");
  }
  if (rf & 2) {
    const piece_r1 = ctx.$implicit;
    \u0275\u0275styleProp("--%NS%i", piece_r1);
  }
}
var GameCelebrationComponent = class _GameCelebrationComponent {
  pairs = input.required(
    ...ngDevMode ? [{ debugName: "pairs" }] : (
      /* istanbul ignore next */
      []
    )
  );
  moves = input.required(
    ...ngDevMode ? [{ debugName: "moves" }] : (
      /* istanbul ignore next */
      []
    )
  );
  playAgain = output();
  chooseDifficulty = output();
  confetti = Array.from({ length: 15 }, (_, index) => index);
  static \u0275fac = function GameCelebrationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GameCelebrationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GameCelebrationComponent, selectors: [["app-game-celebration"]], inputs: { pairs: [1, "pairs"], moves: [1, "moves"] }, outputs: { playAgain: "playAgain", chooseDifficulty: "chooseDifficulty" }, decls: 17, vars: 2, consts: [["aria-labelledby", "win-title", "role", "status", 1, "celebration"], ["aria-hidden", "true", 1, "confetti"], [3, "--%NS%i"], ["aria-hidden", "true", 1, "win-icon"], [1, "eyebrow"], ["id", "win-title"], [1, "win-summary"], [1, "win-actions"], ["type", "button", 1, "action", "primary", 3, "click"], ["type", "button", 1, "action", 3, "click"]], template: function GameCelebrationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, GameCelebrationComponent_For_3_Template, 1, 2, "i", 2, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "span", 3);
      \u0275\u0275text(5, "\u{1F3C6}");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p", 4);
      \u0275\u0275text(7, "LOOK AT THAT BRAIN GO");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "h2", 5);
      \u0275\u0275text(9, "You\u2019re a match maker!");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "p", 6);
      \u0275\u0275text(11);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "div", 7)(13, "button", 8);
      \u0275\u0275domListener("click", function GameCelebrationComponent_Template_button_click_13_listener() {
        return ctx.playAgain.emit();
      });
      \u0275\u0275text(14, "Play again \u21BB");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "button", 9);
      \u0275\u0275domListener("click", function GameCelebrationComponent_Template_button_click_15_listener() {
        return ctx.chooseDifficulty.emit();
      });
      \u0275\u0275text(16, "Choose difficulty");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.confetti);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate2("All ", ctx.pairs(), " pairs, found in ", ctx.moves(), " moves. Nicely done.");
    }
  }, styles: ["\n.celebration[_ngcontent-%COMP%] {\n  position: relative;\n  margin-block: 20px 24px;\n  padding-inline: 20px;\n  padding-block: 25px;\n  border: 1px solid #d1b9ed;\n  border-radius: 20px;\n  overflow: hidden;\n  text-align: center;\n  background: #eee4fd;\n  animation: _ngcontent-%COMP%_win-in calc(350ms * var(--%NS%motion-factor)) ease-out;\n}\n.win-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 3.8rem;\n}\n.celebration[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  margin-block: 8px;\n  color: #664397;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  font-weight: 800;\n  letter-spacing: -1px;\n}\n.win-summary[_ngcontent-%COMP%] {\n  margin-block-start: 8px;\n  font-size: 1.3rem;\n}\n.win-actions[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  margin-block-start: 22px;\n  justify-content: center;\n  gap: 12px;\n}\n.confetti[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.confetti[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: calc(var(--%NS%i) * 7%);\n  inset-block-start: -20px;\n  inline-size: 7px;\n  block-size: 13px;\n  background: var(--%NS%purple);\n  animation: _ngcontent-%COMP%_confetti-fall calc(1600ms * var(--%NS%motion-factor)) calc(var(--%NS%i) * calc(45ms * var(--%NS%motion-factor))) ease-out both;\n}\n.confetti[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3n) {\n  background: #eb8865;\n}\n.confetti[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3n+1) {\n  border-radius: 50%;\n  background: #dcad32;\n}\n@keyframes _ngcontent-%COMP%_confetti-fall {\n  from {\n    opacity: 1;\n    transform: translateY(0) rotate(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(280px) rotate(260deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_win-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (width <= 600px) {\n  .win-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=game-celebration.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GameCelebrationComponent, [{
    type: Component,
    args: [{ selector: "app-game-celebration", template: '      <section class="celebration" aria-labelledby="win-title" role="status">\n        <div class="confetti" aria-hidden="true">@for (piece of confetti; track piece) {<i [style.--i]="piece"></i>}</div>\n        <span class="win-icon" aria-hidden="true">\u{1F3C6}</span><p class="eyebrow">LOOK AT THAT BRAIN GO</p><h2 id="win-title">You\u2019re a match maker!</h2><p class="win-summary">All {{ pairs() }} pairs, found in {{ moves() }} moves. Nicely done.</p>\n        <div class="win-actions"><button class="action primary" type="button" (click)="playAgain.emit()">Play again \u21BB</button><button class="action" type="button" (click)="chooseDifficulty.emit()">Choose difficulty</button></div>\n      </section>\n', styles: ["/* src/app/modules/game/components/game-celebration.component.css */\n.celebration {\n  position: relative;\n  margin-block: 20px 24px;\n  padding-inline: 20px;\n  padding-block: 25px;\n  border: 1px solid #d1b9ed;\n  border-radius: 20px;\n  overflow: hidden;\n  text-align: center;\n  background: #eee4fd;\n  animation: win-in calc(350ms * var(--motion-factor)) ease-out;\n}\n.win-icon {\n  display: block;\n  font-size: 3.8rem;\n}\n.celebration .eyebrow {\n  margin-block: 8px;\n  color: #664397;\n}\nh2 {\n  font-size: 2.8rem;\n  font-weight: 800;\n  letter-spacing: -1px;\n}\n.win-summary {\n  margin-block-start: 8px;\n  font-size: 1.3rem;\n}\n.win-actions {\n  position: relative;\n  display: flex;\n  margin-block-start: 22px;\n  justify-content: center;\n  gap: 12px;\n}\n.confetti {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.confetti i {\n  position: absolute;\n  inset-inline-start: calc(var(--i) * 7%);\n  inset-block-start: -20px;\n  inline-size: 7px;\n  block-size: 13px;\n  background: var(--purple);\n  animation: confetti-fall calc(1600ms * var(--motion-factor)) calc(var(--i) * calc(45ms * var(--motion-factor))) ease-out both;\n}\n.confetti i:nth-child(3n) {\n  background: #eb8865;\n}\n.confetti i:nth-child(3n+1) {\n  border-radius: 50%;\n  background: #dcad32;\n}\n@keyframes confetti-fall {\n  from {\n    opacity: 1;\n    transform: translateY(0) rotate(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(280px) rotate(260deg);\n  }\n}\n@keyframes win-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (width <= 600px) {\n  .win-actions {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=game-celebration.component.css.map */\n"] }]
  }], null, { pairs: [{ type: Input, args: [{ isSignal: true, alias: "pairs", required: true }] }], moves: [{ type: Input, args: [{ isSignal: true, alias: "moves", required: true }] }], playAgain: [{ type: Output, args: ["playAgain"] }], chooseDifficulty: [{ type: Output, args: ["chooseDifficulty"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GameCelebrationComponent, { className: "GameCelebrationComponent", filePath: "src/app/modules/game/components/game-celebration.component.ts", lineNumber: 8 });
})();

// src/app/modules/game/components/game-progress.component.ts
var GameProgressComponent = class _GameProgressComponent {
  pairsFound = input(
    0,
    ...ngDevMode ? [{ debugName: "pairsFound" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalPairs = input(
    0,
    ...ngDevMode ? [{ debugName: "totalPairs" }] : (
      /* istanbul ignore next */
      []
    )
  );
  numOfTry = input.required(
    ...ngDevMode ? [{ debugName: "numOfTry" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function GameProgressComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GameProgressComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GameProgressComponent, selectors: [["app-game-progress"]], inputs: { pairsFound: [1, "pairsFound"], totalPairs: [1, "totalPairs"], numOfTry: [1, "numOfTry"] }, decls: 17, vars: 5, consts: [[1, "stats"], [1, "stat"], [1, "eyebrow", "quiet"], [1, "score"], [1, "total"], [1, "progress"], [1, "progress-label"], ["aria-label", "Pairs found", 3, "value", "max"]], template: function GameProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "MOVES");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "strong", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 1)(7, "span", 2);
      \u0275\u0275text(8, "PAIRS FOUND");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "strong");
      \u0275\u0275text(10);
      \u0275\u0275domElementStart(11, "span", 4);
      \u0275\u0275text(12);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(13, "div", 5)(14, "span", 6);
      \u0275\u0275text(15, "A little closer with every match.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(16, "progress", 7);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.numOfTry());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.pairsFound(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("/ ", ctx.totalPairs());
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("value", ctx.pairsFound())("max", ctx.totalPairs() || 1);
    }
  }, styles: ["\n.stats[_ngcontent-%COMP%] {\n  display: flex;\n  padding-inline: 24px;\n  padding-block: 19px;\n  border: 1px solid var(--%NS%line);\n  border-radius: 16px;\n  align-items: center;\n  gap: 32px;\n  background: var(--%NS%paper);\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 2.7rem;\n  font-weight: 800;\n  line-height: 1.3;\n}\n.total[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 500;\n  color: var(--%NS%muted);\n}\n.progress[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  flex: 1;\n}\n.progress-label[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--%NS%muted);\n}\nprogress[_ngcontent-%COMP%] {\n  display: block;\n  inline-size: 100%;\n  block-size: 8px;\n  margin-block-start: 8px;\n  border: none;\n  border-radius: 8px;\n  overflow: hidden;\n  accent-color: var(--%NS%purple);\n  background: #eee7f7;\n}\nprogress[_ngcontent-%COMP%]::-webkit-progress-bar {\n  border-radius: 8px;\n  background: #eee7f7;\n}\nprogress[_ngcontent-%COMP%]::-webkit-progress-value {\n  border-radius: 8px;\n  background: var(--%NS%purple);\n  transition: inline-size calc(300ms * var(--%NS%motion-factor));\n}\nprogress[_ngcontent-%COMP%]::-moz-progress-bar {\n  border-radius: 8px;\n  background: var(--%NS%purple);\n}\n@media (width <= 600px) {\n  .stats[_ngcontent-%COMP%] {\n    padding-inline: 18px;\n    padding-block: 15px;\n    gap: 20px;\n  }\n  .progress-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .stat[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    letter-spacing: 1px;\n  }\n}\n/*# sourceMappingURL=game-progress.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GameProgressComponent, [{
    type: Component,
    args: [{ selector: "app-game-progress", template: '<div class="stats">\n  <div class="stat"><span class="eyebrow quiet">MOVES</span><strong class="score">{{ numOfTry() }}</strong></div>\n  <div class="stat"><span class="eyebrow quiet">PAIRS FOUND</span><strong>{{ pairsFound() }} <span class="total">/ {{ totalPairs() }}</span></strong></div>\n  <div class="progress"><span class="progress-label">A little closer with every match.</span><progress [value]="pairsFound()" [max]="totalPairs() || 1" aria-label="Pairs found"></progress></div>\n</div>\n', styles: ["/* src/app/modules/game/components/game-progress.component.css */\n.stats {\n  display: flex;\n  padding-inline: 24px;\n  padding-block: 19px;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  align-items: center;\n  gap: 32px;\n  background: var(--paper);\n}\n.stat {\n  display: flex;\n  flex-direction: column;\n}\n.stat strong {\n  font-size: 2.7rem;\n  font-weight: 800;\n  line-height: 1.3;\n}\n.total {\n  font-size: 1.6rem;\n  font-weight: 500;\n  color: var(--muted);\n}\n.progress {\n  margin-inline-start: auto;\n  flex: 1;\n}\n.progress-label {\n  font-size: 1.1rem;\n  color: var(--muted);\n}\nprogress {\n  display: block;\n  inline-size: 100%;\n  block-size: 8px;\n  margin-block-start: 8px;\n  border: none;\n  border-radius: 8px;\n  overflow: hidden;\n  accent-color: var(--purple);\n  background: #eee7f7;\n}\nprogress::-webkit-progress-bar {\n  border-radius: 8px;\n  background: #eee7f7;\n}\nprogress::-webkit-progress-value {\n  border-radius: 8px;\n  background: var(--purple);\n  transition: inline-size calc(300ms * var(--motion-factor));\n}\nprogress::-moz-progress-bar {\n  border-radius: 8px;\n  background: var(--purple);\n}\n@media (width <= 600px) {\n  .stats {\n    padding-inline: 18px;\n    padding-block: 15px;\n    gap: 20px;\n  }\n  .progress-label {\n    display: none;\n  }\n  .stat .eyebrow {\n    font-size: 0.9rem;\n    letter-spacing: 1px;\n  }\n}\n/*# sourceMappingURL=game-progress.component.css.map */\n"] }]
  }], null, { pairsFound: [{ type: Input, args: [{ isSignal: true, alias: "pairsFound", required: false }] }], totalPairs: [{ type: Input, args: [{ isSignal: true, alias: "totalPairs", required: false }] }], numOfTry: [{ type: Input, args: [{ isSignal: true, alias: "numOfTry", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GameProgressComponent, { className: "GameProgressComponent", filePath: "src/app/modules/game/components/game-progress.component.ts", lineNumber: 8 });
})();

// src/app/modules/game/components/game.component.ts
function GameComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-flip-result", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("result", ctx_r0.flippedResult());
  }
}
function GameComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-game-celebration", 18);
    \u0275\u0275listener("playAgain", function GameComponent_Conditional_23_Template_app_game_celebration_playAgain_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.replay());
    })("chooseDifficulty", function GameComponent_Conditional_23_Template_app_game_celebration_chooseDifficulty_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.back());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("pairs", ctx_r0.totalPairs())("moves", ctx_r0.numOfTry());
  }
}
function GameComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 19);
    \u0275\u0275text(2, "Take your time. Make a match.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275listener("click", function GameComponent_Conditional_26_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.replay());
    });
    \u0275\u0275text(4, "\u21BB Start fresh");
    \u0275\u0275elementEnd()();
  }
}
var GameComponent = class _GameComponent {
  gameService = inject(GameService);
  router = inject(Router);
  /** Difficulty level from the `:level` route param */
  level = input.required(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "level" } : (
    /* istanbul ignore next */
    {}
  )), { transform: numberAttribute }));
  /** Number of try */
  numOfTry = this.gameService.numOfTry;
  /** Cards used for the game */
  cards = this.gameService.cards;
  isGameClear = this.gameService.isGameClear;
  /** Indicate if a user can flip cards  */
  canFlip = this.gameService.canFlip;
  /** Card flip feedback result */
  flippedResult = this.gameService.flippedResult;
  difficulty = computed(
    () => GAME_DIFFICULTY.find((d) => d.level === this.level()),
    ...ngDevMode ? [{ debugName: "difficulty" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pairsFound = computed(
    () => this.cards().filter((card) => card.done).length / 2,
    ...ngDevMode ? [{ debugName: "pairsFound" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalPairs = computed(
    () => this.cards().length / 2,
    ...ngDevMode ? [{ debugName: "totalPairs" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    effect(() => {
      this.level();
      this.setupGame();
    });
  }
  ngOnDestroy() {
    this.gameService.reset();
  }
  /**
   * Handler that is called when resetting the game.
   */
  onRestarted() {
    this.router.navigate([""]);
  }
  /**
   * Handler that is called when a user clicked a card.
   *
   * @param card Flipped card.
   */
  async onCardClicked(card) {
    if (!this.canFlip())
      return;
    await this.gameService.flipCard(card);
  }
  setupGame() {
    const difficulty = GAME_DIFFICULTY.find((d) => d.level === this.level());
    if (difficulty === void 0)
      return;
    this.gameService.startGame(difficulty.num);
  }
  back() {
    this.router.navigate([""]);
  }
  replay() {
    this.setupGame();
  }
  static \u0275fac = function GameComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GameComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GameComponent, selectors: [["app-game"]], inputs: { level: [1, "level"] }, decls: 32, vars: 12, consts: [[1, "arcade-shell"], [1, "masthead"], ["href", "#/", "aria-label", "Concentration home", 1, "brand"], ["aria-hidden", "true", 1, "brand-mark"], [1, "eyebrow", "quiet"], ["aria-labelledby", "board-title", 1, "game-container"], [1, "board-heading"], ["id", "board-title"], ["aria-hidden", "true"], [1, "title-dot"], ["type", "button", 1, "text-button", 3, "click"], [3, "numOfTry", "pairsFound", "totalPairs"], [3, "result"], [3, "pairs", "moves"], [1, "cards-board"], [3, "cardClicked", "cards", "locked"], [1, "board-bottom"], [1, "arcade-footer"], [3, "playAgain", "chooseDifficulty", "pairs", "moves"], [1, "quiet"]], template: function GameComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "a", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u2733");
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " concentration.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, "FLIP. MATCH. HAPPY DANCE.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "section", 5)(9, "div", 6)(10, "div")(11, "p", 4);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h1", 7)(14, "span", 8);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16);
      \u0275\u0275elementStart(17, "span", 9);
      \u0275\u0275text(18, ".");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "button", 10);
      \u0275\u0275listener("click", function GameComponent_Template_button_click_19_listener() {
        return ctx.back();
      });
      \u0275\u0275text(20, "\u2190 Choose difficulty");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "app-game-progress", 11);
      \u0275\u0275conditionalCreate(22, GameComponent_Conditional_22_Template, 1, 1, "app-flip-result", 12);
      \u0275\u0275conditionalCreate(23, GameComponent_Conditional_23_Template, 1, 2, "app-game-celebration", 13);
      \u0275\u0275elementStart(24, "div", 14)(25, "app-card-list", 15);
      \u0275\u0275listener("cardClicked", function GameComponent_Template_app_card_list_cardClicked_25_listener($event) {
        return ctx.onCardClicked($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(26, GameComponent_Conditional_26_Template, 5, 0, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "footer", 17)(28, "span");
      \u0275\u0275text(29, "\u795E\u7D4C\u8870\u5F31 \xB7 A little focus. A lot of fun.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "One pair at a time.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate2("", ctx.difficulty()?.num, " CARDS \xB7 ", ctx.totalPairs(), " PAIRS");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.difficulty()?.icon);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.difficulty()?.label, " mode");
      \u0275\u0275advance(5);
      \u0275\u0275property("numOfTry", ctx.numOfTry())("pairsFound", ctx.pairsFound())("totalPairs", ctx.totalPairs());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isGameClear() ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isGameClear() ? 23 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("cards", ctx.cards())("locked", !ctx.canFlip());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isGameClear() ? 26 : -1);
    }
  }, dependencies: [
    GameProgressComponent,
    FlipResultComponent,
    CardListComponent,
    GameCelebrationComponent
  ], styles: ["\n.game-container[_ngcontent-%COMP%] {\n  max-inline-size: 680px;\n  min-block-size: calc(100dvh - 178px);\n  margin-inline: auto;\n  padding-block: 35px;\n}\n.board-heading[_ngcontent-%COMP%] {\n  display: flex;\n  margin-block-end: 24px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n}\nh1[_ngcontent-%COMP%] {\n  margin-block-start: 8px;\n  font-size: 3rem;\n  font-weight: 800;\n  letter-spacing: -1px;\n}\nh1[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  font-size: 2.6rem;\n}\n.title-dot[_ngcontent-%COMP%] {\n  color: var(--%NS%purple);\n}\n.text-button[_ngcontent-%COMP%] {\n  padding-inline: 0;\n  padding-block: 8px;\n  border: none;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--%NS%muted);\n  background: transparent;\n}\n.text-button[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%purple);\n}\n.cards-board[_ngcontent-%COMP%] {\n  padding: 24px;\n  border: 1px solid var(--%NS%line);\n  border-radius: 23px;\n  background: #eee9df;\n}\n.board-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  margin-block-start: 20px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 1.2rem;\n}\n@media (width <= 600px) {\n  .game-container[_ngcontent-%COMP%] {\n    padding-block: 25px;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n  }\n  .board-heading[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .cards-board[_ngcontent-%COMP%] {\n    padding: 12px;\n    border-radius: 16px;\n  }\n  .board-bottom[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=game.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GameComponent, [{
    type: Component,
    args: [{ selector: "app-game", imports: [
      GameProgressComponent,
      FlipResultComponent,
      CardListComponent,
      GameCelebrationComponent
    ], template: '<div class="arcade-shell">\n  <header class="masthead"><a class="brand" href="#/" aria-label="Concentration home"><span class="brand-mark" aria-hidden="true">\u2733</span> concentration.</a><span class="eyebrow quiet">FLIP. MATCH. HAPPY DANCE.</span></header>\n  <section class="game-container" aria-labelledby="board-title">\n    <div class="board-heading"><div><p class="eyebrow quiet">{{ difficulty()?.num }} CARDS \xB7 {{ totalPairs() }} PAIRS</p><h1 id="board-title"><span aria-hidden="true">{{ difficulty()?.icon }}</span> {{ difficulty()?.label }} mode<span class="title-dot">.</span></h1></div><button type="button" class="text-button" (click)="back()">\u2190 Choose difficulty</button></div>\n    <app-game-progress [numOfTry]="numOfTry()" [pairsFound]="pairsFound()" [totalPairs]="totalPairs()"></app-game-progress>\n    @if (!isGameClear()) {<app-flip-result [result]="flippedResult()"></app-flip-result>}\n    @if (isGameClear()) {\n      <app-game-celebration [pairs]="totalPairs()" [moves]="numOfTry()" (playAgain)="replay()" (chooseDifficulty)="back()"></app-game-celebration>\n    }\n    <div class="cards-board"><app-card-list [cards]="cards()" [locked]="!canFlip()" (cardClicked)="onCardClicked($event)"></app-card-list></div>\n    @if (!isGameClear()) {<div class="board-bottom"><span class="quiet">Take your time. Make a match.</span><button type="button" class="text-button" (click)="replay()">\u21BB Start fresh</button></div>}\n  </section>\n  <footer class="arcade-footer"><span>\u795E\u7D4C\u8870\u5F31 \xB7 A little focus. A lot of fun.</span><span>One pair at a time.</span></footer>\n</div>\n', styles: ["/* src/app/modules/game/components/game.component.css */\n.game-container {\n  max-inline-size: 680px;\n  min-block-size: calc(100dvh - 178px);\n  margin-inline: auto;\n  padding-block: 35px;\n}\n.board-heading {\n  display: flex;\n  margin-block-end: 24px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n}\nh1 {\n  margin-block-start: 8px;\n  font-size: 3rem;\n  font-weight: 800;\n  letter-spacing: -1px;\n}\nh1 > span:first-child {\n  font-size: 2.6rem;\n}\n.title-dot {\n  color: var(--purple);\n}\n.text-button {\n  padding-inline: 0;\n  padding-block: 8px;\n  border: none;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--muted);\n  background: transparent;\n}\n.text-button:hover {\n  color: var(--purple);\n}\n.cards-board {\n  padding: 24px;\n  border: 1px solid var(--line);\n  border-radius: 23px;\n  background: #eee9df;\n}\n.board-bottom {\n  display: flex;\n  margin-block-start: 20px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 1.2rem;\n}\n@media (width <= 600px) {\n  .game-container {\n    padding-block: 25px;\n  }\n  h1 {\n    font-size: 2.4rem;\n  }\n  .board-heading {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .cards-board {\n    padding: 12px;\n    border-radius: 16px;\n  }\n  .board-bottom {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=game.component.css.map */\n"] }]
  }], () => [], { level: [{ type: Input, args: [{ isSignal: true, alias: "level", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GameComponent, { className: "GameComponent", filePath: "src/app/modules/game/components/game.component.ts", lineNumber: 32 });
})();
export {
  GameComponent
};
//# debugId=c79c986f-39a6-573a-9371-62beb99f196a
//# sourceMappingURL=game.component-HIM7AJJE.js.map
