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
  ɵɵanimateEnter,
  ɵɵanimateLeave,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2GQ2P2DH.js";

// src/app/modules/game/components/card.component.ts
var CardComponent = class _CardComponent {
  card = input.required(
    ...ngDevMode ? [{ debugName: "card" }] : (
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
    if (!card.flipped) {
      this.clicked.emit(card);
    }
  }
  get disabled() {
    const card = this.card();
    return card.flipped || card.done;
  }
  static \u0275fac = function CardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardComponent, selectors: [["app-card"]], inputs: { card: [1, "card"] }, outputs: { clicked: "clicked" }, decls: 5, vars: 6, consts: [["aria-label", "Open card", 1, "button", 3, "click", "disabled"], [1, "card"], [1, "front"], [1, "back"]], template: function CardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function CardComponent_Template_button_click_0_listener() {
        return ctx.onClicked();
      });
      \u0275\u0275domElementStart(1, "div", 1);
      \u0275\u0275domElement(2, "div", 2);
      \u0275\u0275domElementStart(3, "div", 3);
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275domProperty("disabled", ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275classProp("flipped", ctx.card().flipped);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("done", ctx.card().done);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.card().character);
    }
  }, styles: ["\n.button[_ngcontent-%COMP%] {\n  --%NS%color-border: var(--%NS%gray-5);\n  position: relative;\n  inline-size: 100%;\n  block-size: 100%;\n  border: none;\n  background-color: transparent;\n  perspective: 800px;\n}\n.button[_ngcontent-%COMP%]:disabled {\n  color: unset;\n}\n.card[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  inline-size: 100%;\n  block-size: 100%;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: 10px;\n  transform-style: preserve-3d;\n  transition:\n    -webkit-transform 1s,\n    -moz-transform 1s,\n    -o-transform 1s,\n    box-shadow 0.5s,\n    transform 0.5s;\n}\n.card[_ngcontent-%COMP%]:not(.flipped) {\n  box-shadow: 1px 1px 2px var(--%NS%color-border);\n}\n.card.flipped[_ngcontent-%COMP%] {\n  box-shadow: -1px 1px 2px var(--%NS%color-border);\n  transform: rotateY(180deg);\n  cursor: default;\n}\n.card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  position: absolute;\n  display: grid;\n  inline-size: 100%;\n  block-size: 100%;\n  border-radius: 10px;\n  place-items: center;\n  font-size: var(--%NS%font-size-8);\n  backface-visibility: hidden;\n  transition: transform, color 0.3s ease-in-out;\n}\n.card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  background-color: var(--%NS%gray-2);\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotateY(180deg);\n}\n@media (hover: hover) {\n  .card[_ngcontent-%COMP%]:not(.flipped):hover {\n    box-shadow: 5px 5px 10px var(--%NS%color-border);\n    transform: scale(1.1, 1.1);\n  }\n}\n/*# sourceMappingURL=card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardComponent, [{
    type: Component,
    args: [{ selector: "app-card", template: '<button\n  class="button"\n  (click)="onClicked()"\n  [disabled]="disabled"\n  aria-label="Open card"\n>\n  <div class="card" [class.flipped]="card().flipped">\n    <div class="front"></div>\n    <div class="back" [class.done]="card().done">{{ card().character }}</div>\n  </div>\n</button>\n', styles: ["/* src/app/modules/game/components/card.component.css */\n.button {\n  --color-border: var(--gray-5);\n  position: relative;\n  inline-size: 100%;\n  block-size: 100%;\n  border: none;\n  background-color: transparent;\n  perspective: 800px;\n}\n.button:disabled {\n  color: unset;\n}\n.card {\n  position: absolute;\n  inset: 0;\n  inline-size: 100%;\n  block-size: 100%;\n  border: 1px solid var(--color-border);\n  border-radius: 10px;\n  transform-style: preserve-3d;\n  transition:\n    -webkit-transform 1s,\n    -moz-transform 1s,\n    -o-transform 1s,\n    box-shadow 0.5s,\n    transform 0.5s;\n}\n.card:not(.flipped) {\n  box-shadow: 1px 1px 2px var(--color-border);\n}\n.card.flipped {\n  box-shadow: -1px 1px 2px var(--color-border);\n  transform: rotateY(180deg);\n  cursor: default;\n}\n.card .front,\n.card .back {\n  position: absolute;\n  display: grid;\n  inline-size: 100%;\n  block-size: 100%;\n  border-radius: 10px;\n  place-items: center;\n  font-size: var(--font-size-8);\n  backface-visibility: hidden;\n  transition: transform, color 0.3s ease-in-out;\n}\n.card .front {\n  background-color: var(--gray-2);\n  cursor: pointer;\n}\n.card .back {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotateY(180deg);\n}\n@media (hover: hover) {\n  .card:not(.flipped):hover {\n    box-shadow: 5px 5px 10px var(--color-border);\n    transform: scale(1.1, 1.1);\n  }\n}\n/*# sourceMappingURL=card.component.css.map */\n"] }]
  }], null, { card: [{ type: Input, args: [{ isSignal: true, alias: "card", required: true }] }], clicked: [{ type: Output, args: ["clicked"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardComponent, { className: "CardComponent", filePath: "src/app/modules/game/components/card.component.ts", lineNumber: 9 });
})();

// src/app/modules/game/components/card-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CardListComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "app-card", 2);
    \u0275\u0275listener("clicked", function CardListComponent_For_2_Template_app_card_clicked_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClicked($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("card", card_r3);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardListComponent, selectors: [["app-card-list"]], inputs: { cards: [1, "cards"] }, outputs: { cardClicked: "cardClicked" }, decls: 3, vars: 2, consts: [[1, "container"], [1, "card-box"], [3, "clicked", "card"]], template: function CardListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, CardListComponent_For_2_Template, 2, 1, "div", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.cardsClass());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.cards());
    }
  }, dependencies: [CardComponent], styles: ["\n.container[_ngcontent-%COMP%] {\n  --%NS%four-grid-item-size-md: 100px;\n  --%NS%six-grid-item-size-md: 80px;\n  --%NS%four-grid-item-size-sm: 80px;\n  --%NS%six-grid-item-size-sm: 55px;\n  display: grid;\n}\n.container.four-cards[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, var(--%NS%four-grid-item-size-md));\n  grid-auto-rows: var(--%NS%four-grid-item-size-md);\n  font-size: 4rem;\n}\n.container.six-cards[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(6, var(--%NS%six-grid-item-size-md));\n  grid-auto-rows: var(--%NS%six-grid-item-size-md);\n  font-size: 3rem;\n}\n.container[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n@media only screen and (width <= 700px) {\n  .container.four-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, var(--%NS%four-grid-item-size-sm));\n    grid-auto-rows: var(--%NS%four-grid-item-size-sm);\n    font-size: 3rem;\n  }\n  .container.four-cards[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .container.six-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, var(--%NS%six-grid-item-size-sm));\n    grid-auto-rows: var(--%NS%six-grid-item-size-sm);\n    font-size: 2rem;\n  }\n  .container.six-cards[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%] {\n    margin: 3px;\n  }\n}\n/*# sourceMappingURL=card-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardListComponent, [{
    type: Component,
    args: [{ selector: "app-card-list", imports: [CardComponent], template: '<div class="container" [class]="cardsClass()">\n  @for (card of cards(); track card.id) {\n    <div class="card-box">\n      <app-card [card]="card" (clicked)="onClicked($event)"></app-card>\n    </div>\n  }\n</div>\n', styles: ["/* src/app/modules/game/components/card-list.component.css */\n.container {\n  --four-grid-item-size-md: 100px;\n  --six-grid-item-size-md: 80px;\n  --four-grid-item-size-sm: 80px;\n  --six-grid-item-size-sm: 55px;\n  display: grid;\n}\n.container.four-cards {\n  grid-template-columns: repeat(4, var(--four-grid-item-size-md));\n  grid-auto-rows: var(--four-grid-item-size-md);\n  font-size: 4rem;\n}\n.container.six-cards {\n  grid-template-columns: repeat(6, var(--six-grid-item-size-md));\n  grid-auto-rows: var(--six-grid-item-size-md);\n  font-size: 3rem;\n}\n.container .card-box {\n  margin: 5px;\n}\n@media only screen and (width <= 700px) {\n  .container.four-cards {\n    grid-template-columns: repeat(4, var(--four-grid-item-size-sm));\n    grid-auto-rows: var(--four-grid-item-size-sm);\n    font-size: 3rem;\n  }\n  .container.four-cards .card-box {\n    margin: 5px;\n  }\n  .container.six-cards {\n    grid-template-columns: repeat(6, var(--six-grid-item-size-sm));\n    grid-auto-rows: var(--six-grid-item-size-sm);\n    font-size: 2rem;\n  }\n  .container.six-cards .card-box {\n    margin: 3px;\n  }\n}\n/*# sourceMappingURL=card-list.component.css.map */\n"] }]
  }], null, { cards: [{ type: Input, args: [{ isSignal: true, alias: "cards", required: true }] }], cardClicked: [{ type: Output, args: ["cardClicked"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardListComponent, { className: "CardListComponent", filePath: "src/app/modules/game/components/card-list.component.ts", lineNumber: 11 });
})();

// src/app/modules/game/components/flip-result.component.ts
function FlipResultComponent_Conditional_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Correct! ");
  }
}
function FlipResultComponent_Conditional_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", "Congrats!\nYou've finished!!", " ");
  }
}
function FlipResultComponent_Conditional_1_Case_3_Template(rf, ctx) {
}
function FlipResultComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, FlipResultComponent_Conditional_1_Case_1_Template, 1, 0)(2, FlipResultComponent_Conditional_1_Case_2_Template, 1, 1)(3, FlipResultComponent_Conditional_1_Case_3_Template, 0, 0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.animateClasses());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.displayResult()) === "Correct" ? 1 : tmp_2_0 === "Finish" ? 2 : tmp_2_0 === "Wrong" ? 3 : -1);
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
          return fading ? ["correct", "animated", "fadeOutUp"] : ["correct", "animated", "swing"];
        case "Wrong":
          return fading ? ["fadeOutDown"] : [];
        case "Finish":
          return fading ? ["finish", "animated", "fadeOutUp"] : ["finish", "animated", "tada"];
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlipResultComponent, selectors: [["app-flip-result"]], inputs: { result: [1, "result"] }, decls: 2, vars: 1, consts: [[1, "container", "unclickable"], [1, "result", 3, "class"], [1, "result"]], template: function FlipResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, FlipResultComponent_Conditional_1_Template, 4, 3, "div", 1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showsMessage() ? 1 : -1);
    }
  }, styles: ["\n.container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 100;\n  inline-size: 100%;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  z-index: 100;\n  font-size: 60px;\n  font-weight: bold;\n  white-space: pre-wrap;\n}\n.container[_ngcontent-%COMP%]   .result.correct[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(151 255 0 / 50%), rgb(0 114 6 / 70%));\n}\n.container[_ngcontent-%COMP%]   .result.wrong[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(250 0 0 / 20%), rgb(255 0 0 / 80%));\n}\n.container[_ngcontent-%COMP%]   .result.finish[_ngcontent-%COMP%] {\n  font-size: 70px;\n  background: linear-gradient(rgb(151 255 0 / 50%), rgb(0 114 6 / 70%));\n}\n.container[_ngcontent-%COMP%]   .result.correct[_ngcontent-%COMP%], \n.container[_ngcontent-%COMP%]   .result.wrong[_ngcontent-%COMP%], \n.container[_ngcontent-%COMP%]   .result.finish[_ngcontent-%COMP%] {\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.unclickable[_ngcontent-%COMP%] {\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n  pointer-events: none;\n}\n/*# sourceMappingURL=flip-result.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlipResultComponent, [{
    type: Component,
    args: [{ selector: "app-flip-result", template: `<div class="container unclickable">
  @if (showsMessage()) {
    <div class="result" [class]="animateClasses()">
      @switch (displayResult()) {
        @case ('Correct') {
          Correct!
        }
        @case ('Finish') {
          {{ "Congrats!\\nYou've finished!!" }}
        }
        @case ('Wrong') {}
      }
    </div>
  }
</div>
`, styles: ["/* src/app/modules/game/components/flip-result.component.css */\n.container {\n  position: absolute;\n  z-index: 100;\n  inline-size: 100%;\n  text-align: center;\n}\n.container .result {\n  z-index: 100;\n  font-size: 60px;\n  font-weight: bold;\n  white-space: pre-wrap;\n}\n.container .result.correct {\n  background: linear-gradient(rgb(151 255 0 / 50%), rgb(0 114 6 / 70%));\n}\n.container .result.wrong {\n  background: linear-gradient(rgb(250 0 0 / 20%), rgb(255 0 0 / 80%));\n}\n.container .result.finish {\n  font-size: 70px;\n  background: linear-gradient(rgb(151 255 0 / 50%), rgb(0 114 6 / 70%));\n}\n.container .result.correct,\n.container .result.wrong,\n.container .result.finish {\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.unclickable {\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n  pointer-events: none;\n}\n/*# sourceMappingURL=flip-result.component.css.map */\n"] }]
  }], () => [], { result: [{ type: Input, args: [{ isSignal: true, alias: "result", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlipResultComponent, { className: "FlipResultComponent", filePath: "src/app/modules/game/components/flip-result.component.ts", lineNumber: 23 });
})();

// src/app/modules/game/components/game-progress.component.ts
var GameProgressComponent = class _GameProgressComponent {
  numOfTry = input.required(
    ...ngDevMode ? [{ debugName: "numOfTry" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function GameProgressComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GameProgressComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GameProgressComponent, selectors: [["app-game-progress"]], inputs: { numOfTry: [1, "numOfTry"] }, decls: 3, vars: 1, consts: [[1, "container"], [1, "score"]], template: function GameProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Attempt: ", ctx.numOfTry());
    }
  }, styles: ["\n.container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  margin-block-end: var(--%NS%size-4);\n  font-family: var(--%NS%font-sans);\n  font-size: var(--%NS%font-size-6);\n}\n/*# sourceMappingURL=game-progress.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GameProgressComponent, [{
    type: Component,
    args: [{ selector: "app-game-progress", template: '<div class="container">\n  <div class="score">Attempt: {{ numOfTry() }}</div>\n</div>\n', styles: ["/* src/app/modules/game/components/game-progress.component.css */\n.container {\n  text-align: center;\n}\n.container .score {\n  margin-block-end: var(--size-4);\n  font-family: var(--font-sans);\n  font-size: var(--font-size-6);\n}\n/*# sourceMappingURL=game-progress.component.css.map */\n"] }]
  }], null, { numOfTry: [{ type: Input, args: [{ isSignal: true, alias: "numOfTry", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GameProgressComponent, { className: "GameProgressComponent", filePath: "src/app/modules/game/components/game-progress.component.ts", lineNumber: 8 });
})();

// src/app/modules/game/components/game.component.ts
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GameComponent, selectors: [["app-game"]], inputs: { level: [1, "level"] }, decls: 14, vars: 5, consts: [[1, "container"], [1, "game-container"], [1, "progress-container"], [3, "numOfTry"], [3, "result"], [1, "cards-board"], [3, "cardClicked", "cards"], [1, "icon-container"], ["type", "button", "aria-label", "Back to home", 1, "icon-btn", 3, "click"], ["viewBox", "0 0 24 24", "aria-hidden", "true", "focusable", "false", 1, "icon"], ["fill", "currentColor", "d", "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"], ["type", "button", "aria-label", "Replay", 1, "icon-btn", 3, "click"], ["fill", "currentColor", "d", "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"]], template: function GameComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275animateLeave("switch-view-leave");
      \u0275\u0275animateEnter("switch-view-enter");
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "app-game-progress", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "app-flip-result", 4);
      \u0275\u0275elementStart(5, "div", 5)(6, "app-card-list", 6);
      \u0275\u0275listener("cardClicked", function GameComponent_Template_app_card_list_cardClicked_6_listener($event) {
        return ctx.onCardClicked($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 7)(8, "button", 8);
      \u0275\u0275listener("click", function GameComponent_Template_button_click_8_listener() {
        return ctx.back();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 9);
      \u0275\u0275element(10, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "button", 11);
      \u0275\u0275listener("click", function GameComponent_Template_button_click_11_listener() {
        return ctx.replay();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 9);
      \u0275\u0275element(13, "path", 12);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("numOfTry", ctx.numOfTry());
      \u0275\u0275advance();
      \u0275\u0275property("result", ctx.flippedResult());
      \u0275\u0275advance(2);
      \u0275\u0275property("cards", ctx.cards());
      \u0275\u0275advance();
      \u0275\u0275styleProp("visibility", ctx.isGameClear() ? "visible" : "hidden");
    }
  }, dependencies: [GameProgressComponent, FlipResultComponent, CardListComponent], styles: ["\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  block-size: 100vh;\n  align-items: center;\n  justify-content: center;\n}\n.controller-container[_ngcontent-%COMP%] {\n  inline-size: 100%;\n}\n.game-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.progress-container[_ngcontent-%COMP%] {\n  margin-block-end: 15px;\n}\n.functions[_ngcontent-%COMP%] {\n  margin-block-start: 15px;\n  text-align: end;\n}\n.icon-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  margin: 1rem;\n  padding: 0.5rem;\n  border: none;\n  font-size: 3rem;\n  color: #aaa;\n  background: transparent;\n  cursor: pointer;\n}\n.icon-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: block;\n  inline-size: 1em;\n  block-size: 1em;\n}\n.cards-board[_ngcontent-%COMP%] {\n  max-inline-size: 800px;\n  margin-inline: auto;\n}\n.switch-view-enter[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_switch-view-enter 200ms;\n}\n.switch-view-leave[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_switch-view-leave 200ms;\n}\n@keyframes _ngcontent-%COMP%_switch-view-enter {\n  from {\n    opacity: 0;\n    transform: translateY(20%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_switch-view-leave {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-20%);\n  }\n}\n@media only screen and (width <= 700px) {\n  .cards-board[_ngcontent-%COMP%] {\n    max-inline-size: 100%;\n  }\n}\n/*# sourceMappingURL=game.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GameComponent, [{
    type: Component,
    args: [{ selector: "app-game", imports: [GameProgressComponent, FlipResultComponent, CardListComponent], template: `<div class="container">
  <div
    class="game-container"
    animate.enter="switch-view-enter"
    animate.leave="switch-view-leave"
  >
    <div class="progress-container">
      <app-game-progress [numOfTry]="numOfTry()"></app-game-progress>
    </div>
    <app-flip-result [result]="flippedResult()"></app-flip-result>
    <div class="cards-board">
      <app-card-list [cards]="cards()" (cardClicked)="onCardClicked($event)"></app-card-list>
    </div>

    <div class="icon-container" [style.visibility]="isGameClear() ? 'visible' : 'hidden'">
      <button type="button" class="icon-btn" (click)="back()" aria-label="Back to home">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
          />
        </svg>
      </button>
      <button type="button" class="icon-btn" (click)="replay()" aria-label="Replay">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/game/components/game.component.css */\n.container {\n  display: flex;\n  block-size: 100vh;\n  align-items: center;\n  justify-content: center;\n}\n.controller-container {\n  inline-size: 100%;\n}\n.game-container {\n  position: relative;\n}\n.progress-container {\n  margin-block-end: 15px;\n}\n.functions {\n  margin-block-start: 15px;\n  text-align: end;\n}\n.icon-container {\n  text-align: center;\n}\n.icon-btn {\n  margin: 1rem;\n  padding: 0.5rem;\n  border: none;\n  font-size: 3rem;\n  color: #aaa;\n  background: transparent;\n  cursor: pointer;\n}\n.icon-btn .icon {\n  display: block;\n  inline-size: 1em;\n  block-size: 1em;\n}\n.cards-board {\n  max-inline-size: 800px;\n  margin-inline: auto;\n}\n.switch-view-enter {\n  animation: switch-view-enter 200ms;\n}\n.switch-view-leave {\n  animation: switch-view-leave 200ms;\n}\n@keyframes switch-view-enter {\n  from {\n    opacity: 0;\n    transform: translateY(20%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes switch-view-leave {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-20%);\n  }\n}\n@media only screen and (width <= 700px) {\n  .cards-board {\n    max-inline-size: 100%;\n  }\n}\n/*# sourceMappingURL=game.component.css.map */\n"] }]
  }], () => [], { level: [{ type: Input, args: [{ isSignal: true, alias: "level", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GameComponent, { className: "GameComponent", filePath: "src/app/modules/game/components/game.component.ts", lineNumber: 25 });
})();
export {
  GameComponent
};
//# debugId=9da7116e-7285-5cab-ab94-2088f952407b
//# sourceMappingURL=game.component-XZHQPFPH.js.map
