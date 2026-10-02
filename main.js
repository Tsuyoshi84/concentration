import {
  Component,
  GAME_DIFFICULTY,
  GameService,
  Input,
  Output,
  Router,
  RouterOutlet,
  bootstrapApplication,
  inject,
  input,
  output,
  provideRouter,
  provideZonelessChangeDetection,
  setClassMetadata,
  withComponentInputBinding,
  withHashLocation,
  withInMemoryScrolling,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YQCTCQS7.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "concentration";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "app-component"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0);
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet], styles: ["\n.app-component[_ngcontent-%COMP%] {\n  min-block-size: 100dvh;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: '<main class="app-component">\n  <router-outlet></router-outlet>\n</main>', styles: ["/* src/app/app.component.css */\n.app-component {\n  min-block-size: 100dvh;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/app/modules/game/components/card-art.component.ts
var CardArtComponent = class _CardArtComponent {
  static \u0275fac = function CardArtComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardArtComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardArtComponent, selectors: [["app-card-art"]], decls: 22, vars: 0, consts: [["aria-hidden", "true", 1, "card-illustration"], [1, "orbit", "orbit-one"], [1, "orbit", "orbit-two"], [1, "mini-label"], [1, "illustration-card", "purple-card"], [1, "illustration-card", "peach-card"], [1, "tiny-spark"], [1, "illustration-card", "yellow-card"], [1, "match-tick"], [1, "match-note"]], template: function CardArtComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "\u2726");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "span", 2);
      \u0275\u0275text(4, "\u2733");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "span", 3);
      \u0275\u0275text(6, "A PERFECT LITTLE MATCH");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "div", 4)(8, "span");
      \u0275\u0275text(9, "\u2733");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "div", 5);
      \u0275\u0275text(11, "\u{1F34A}");
      \u0275\u0275domElementStart(12, "span", 6);
      \u0275\u0275text(13, "\u2726");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(14, "div", 7);
      \u0275\u0275text(15, "\u{1F34A}");
      \u0275\u0275domElementStart(16, "span", 8);
      \u0275\u0275text(17, "\u2713");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(18, "span", 9);
      \u0275\u0275text(19, "better together ");
      \u0275\u0275domElementStart(20, "span");
      \u0275\u0275text(21, "\u2197");
      \u0275\u0275domElementEnd()()();
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  container-type: inline-size;\n  inline-size: 100%;\n  max-inline-size: 420px;\n  margin-inline: auto;\n}\n.card-illustration[_ngcontent-%COMP%] {\n  position: relative;\n  inline-size: 100%;\n  aspect-ratio: 420 / 294;\n}\n.illustration-card[_ngcontent-%COMP%] {\n  position: absolute;\n  display: grid;\n  inline-size: 30.5%;\n  block-size: 55.4%;\n  border: 2px solid var(--%NS%ink);\n  border-radius: 20px;\n  place-items: center;\n  font-size: 15cqi;\n  box-shadow: 5px 7px 0 rgb(41 35 60 / 12%);\n}\n.purple-card[_ngcontent-%COMP%] {\n  inset-inline-start: 3.3%;\n  inset-block-start: 14.6%;\n  color: #e4d7ff;\n  background: var(--%NS%purple);\n  background-image: radial-gradient(#9169e7 1.5px, transparent 1.5px);\n  background-size: 12px 12px;\n  transform: rotate(-17deg);\n}\n.purple-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  inline-size: 60%;\n  aspect-ratio: 1;\n  border: 1px solid #c5a5ff;\n  border-radius: 50%;\n  place-items: center;\n}\n.peach-card[_ngcontent-%COMP%] {\n  inset-inline-start: 30.7%;\n  inset-block-start: 11.6%;\n  background: #ffddd0;\n  transform: rotate(6deg);\n}\n.yellow-card[_ngcontent-%COMP%] {\n  inset-inline-start: 59%;\n  inset-block-start: 26.2%;\n  background: #ffe393;\n  transform: rotate(19deg);\n}\n.match-tick[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: -8%;\n  inset-block-start: -8%;\n  display: grid;\n  inline-size: 28%;\n  aspect-ratio: 1;\n  border: 2px solid var(--%NS%ink);\n  border-radius: 50%;\n  place-items: center;\n  font-size: 5cqi;\n  color: var(--%NS%ink);\n  background: #b9e8c0;\n}\n.tiny-spark[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 8%;\n  inset-block-start: 4%;\n  font-size: 5cqi;\n}\n.orbit[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 10cqi;\n}\n.orbit-one[_ngcontent-%COMP%] {\n  inset-inline-end: 5%;\n  inset-block-start: 0;\n  color: #e27350;\n}\n.orbit-two[_ngcontent-%COMP%] {\n  inset-inline-start: 4%;\n  inset-block-end: 4%;\n  font-size: 8cqi;\n  color: var(--%NS%purple);\n}\n.mini-label[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 22.6%;\n  inset-block-start: 0;\n  font-size: 2.2cqi;\n  font-weight: 800;\n  letter-spacing: 2px;\n  transform: rotate(-6deg);\n}\n.match-note[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 35.7%;\n  inset-block-end: 0;\n  font-size: 3.6cqi;\n  font-style: italic;\n  transform: rotate(-5deg);\n}\n.match-note[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-inline-start: 10px;\n  font-size: 7cqi;\n}\n/*# sourceMappingURL=card-art.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardArtComponent, [{
    type: Component,
    args: [{ selector: "app-card-art", template: '    <div class="card-illustration" aria-hidden="true">\n      <span class="orbit orbit-one">\u2726</span><span class="orbit orbit-two">\u2733</span>\n      <span class="mini-label">A PERFECT LITTLE MATCH</span>\n      <div class="illustration-card purple-card"><span>\u2733</span></div>\n      <div class="illustration-card peach-card">\u{1F34A}<span class="tiny-spark">\u2726</span></div>\n      <div class="illustration-card yellow-card">\u{1F34A}<span class="match-tick">\u2713</span></div>\n      <span class="match-note">better together <span>\u2197</span></span>\n    </div>\n', styles: ["/* src/app/modules/game/components/card-art.component.css */\n:host {\n  display: block;\n  container-type: inline-size;\n  inline-size: 100%;\n  max-inline-size: 420px;\n  margin-inline: auto;\n}\n.card-illustration {\n  position: relative;\n  inline-size: 100%;\n  aspect-ratio: 420 / 294;\n}\n.illustration-card {\n  position: absolute;\n  display: grid;\n  inline-size: 30.5%;\n  block-size: 55.4%;\n  border: 2px solid var(--ink);\n  border-radius: 20px;\n  place-items: center;\n  font-size: 15cqi;\n  box-shadow: 5px 7px 0 rgb(41 35 60 / 12%);\n}\n.purple-card {\n  inset-inline-start: 3.3%;\n  inset-block-start: 14.6%;\n  color: #e4d7ff;\n  background: var(--purple);\n  background-image: radial-gradient(#9169e7 1.5px, transparent 1.5px);\n  background-size: 12px 12px;\n  transform: rotate(-17deg);\n}\n.purple-card > span {\n  display: grid;\n  inline-size: 60%;\n  aspect-ratio: 1;\n  border: 1px solid #c5a5ff;\n  border-radius: 50%;\n  place-items: center;\n}\n.peach-card {\n  inset-inline-start: 30.7%;\n  inset-block-start: 11.6%;\n  background: #ffddd0;\n  transform: rotate(6deg);\n}\n.yellow-card {\n  inset-inline-start: 59%;\n  inset-block-start: 26.2%;\n  background: #ffe393;\n  transform: rotate(19deg);\n}\n.match-tick {\n  position: absolute;\n  inset-inline-end: -8%;\n  inset-block-start: -8%;\n  display: grid;\n  inline-size: 28%;\n  aspect-ratio: 1;\n  border: 2px solid var(--ink);\n  border-radius: 50%;\n  place-items: center;\n  font-size: 5cqi;\n  color: var(--ink);\n  background: #b9e8c0;\n}\n.tiny-spark {\n  position: absolute;\n  inset-inline-end: 8%;\n  inset-block-start: 4%;\n  font-size: 5cqi;\n}\n.orbit {\n  position: absolute;\n  font-size: 10cqi;\n}\n.orbit-one {\n  inset-inline-end: 5%;\n  inset-block-start: 0;\n  color: #e27350;\n}\n.orbit-two {\n  inset-inline-start: 4%;\n  inset-block-end: 4%;\n  font-size: 8cqi;\n  color: var(--purple);\n}\n.mini-label {\n  position: absolute;\n  inset-inline-start: 22.6%;\n  inset-block-start: 0;\n  font-size: 2.2cqi;\n  font-weight: 800;\n  letter-spacing: 2px;\n  transform: rotate(-6deg);\n}\n.match-note {\n  position: absolute;\n  inset-inline-start: 35.7%;\n  inset-block-end: 0;\n  font-size: 3.6cqi;\n  font-style: italic;\n  transform: rotate(-5deg);\n}\n.match-note > span {\n  margin-inline-start: 10px;\n  font-size: 7cqi;\n}\n/*# sourceMappingURL=card-art.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardArtComponent, { className: "CardArtComponent", filePath: "src/app/modules/game/components/card-art.component.ts", lineNumber: 8 });
})();

// src/app/modules/game/components/top-button.component.ts
var TopButtonComponent = class _TopButtonComponent {
  difficulty = input.required(
    ...ngDevMode ? [{ debugName: "difficulty" }] : (
      /* istanbul ignore next */
      []
    )
  );
  start = output();
  static \u0275fac = function TopButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopButtonComponent, selectors: [["app-top-button"]], inputs: { difficulty: [1, "difficulty"] }, outputs: { start: "start" }, decls: 18, vars: 8, consts: [[1, "start-button", 3, "click"], [1, "card-top"], ["aria-hidden", "true", 1, "icon"], [1, "level-number"], [1, "label"], [1, "description"], [1, "card-bottom"], [1, "separator"], ["aria-hidden", "true", 1, "play-arrow"]], template: function TopButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function TopButtonComponent_Template_button_click_0_listener() {
        return ctx.start.emit(ctx.difficulty());
      });
      \u0275\u0275domElementStart(1, "span", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "span", 4);
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "span", 5);
      \u0275\u0275text(9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "span", 6)(11, "span");
      \u0275\u0275text(12);
      \u0275\u0275domElementStart(13, "span", 7);
      \u0275\u0275text(14, "\xB7");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(15);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "span", 8);
      \u0275\u0275text(17, "\u2197");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classMap("level-" + ctx.difficulty().level);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.difficulty().icon);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("0", ctx.difficulty().level);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.difficulty().label);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.difficulty().description);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.difficulty().num / 2, " pairs ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.difficulty().num, " cards");
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.start-button[_ngcontent-%COMP%] {\n  display: flex;\n  inline-size: 100%;\n  block-size: 100%;\n  padding: 21px;\n  border: 1.5px solid #c7bedb;\n  border-radius: 19px;\n  flex-direction: column;\n  text-align: start;\n  color: var(--%NS%ink);\n  background: #eae0fc;\n  box-shadow: 0 4px 0 #d9cdef;\n  transition: transform calc(180ms * var(--%NS%motion-factor)), box-shadow calc(180ms * var(--%NS%motion-factor));\n}\n.level-2[_ngcontent-%COMP%] {\n  border-color: #b5cfc3;\n  background: #e1f0e7;\n  box-shadow: 0 4px 0 #cbded2;\n}\n.level-3[_ngcontent-%COMP%] {\n  border-color: #ddc59b;\n  background: #fff0cc;\n  box-shadow: 0 4px 0 #eeddb6;\n}\n.level-4[_ngcontent-%COMP%] {\n  border-color: #e3b9a7;\n  background: #ffe2d6;\n  box-shadow: 0 4px 0 #f0ccbc;\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  margin-block-end: 20px;\n  align-items: center;\n  justify-content: space-between;\n}\n.icon[_ngcontent-%COMP%] {\n  display: grid;\n  inline-size: 48px;\n  block-size: 48px;\n  border: 1px solid rgb(41 35 60 / 10%);\n  border-radius: 14px;\n  place-items: center;\n  font-size: 2.8rem;\n  background: rgb(255 255 255 / 50%);\n}\n.level-number[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  opacity: 0.55;\n}\n.label[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n}\n.description[_ngcontent-%COMP%] {\n  margin-block-start: 4px;\n  font-size: 1.2rem;\n}\n.card-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  margin-block-start: 25px;\n  padding-block-start: 14px;\n  border-block-start: 1px solid rgb(41 35 60 / 14%);\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.separator[_ngcontent-%COMP%] {\n  padding-inline: 3px;\n}\n.play-arrow[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 1;\n}\n@media (hover: hover) {\n  .start-button[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 8px 0 rgb(41 35 60 / 15%);\n    transform: translateY(-5px);\n  }\n}\n.start-button[_ngcontent-%COMP%]:active {\n  transform: translateY(2px);\n}\n@media (width <= 600px) {\n  .start-button[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .label[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .card-bottom[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=top-button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopButtonComponent, [{
    type: Component,
    args: [{ selector: "app-top-button", template: `<button class="start-button" [class]="'level-' + difficulty().level" (click)="start.emit(difficulty())">
  <span class="card-top"><span class="icon" aria-hidden="true">{{ difficulty().icon }}</span><span class="level-number">0{{ difficulty().level }}</span></span>
  <span class="label">{{ difficulty().label }}</span>
  <span class="description">{{ difficulty().description }}</span>
  <span class="card-bottom"><span>{{ difficulty().num / 2 }} pairs <span class="separator">\xB7</span> {{ difficulty().num }} cards</span><span class="play-arrow" aria-hidden="true">\u2197</span></span>
</button>
`, styles: ["/* src/app/modules/game/components/top-button.component.css */\n:host {\n  display: block;\n}\n.start-button {\n  display: flex;\n  inline-size: 100%;\n  block-size: 100%;\n  padding: 21px;\n  border: 1.5px solid #c7bedb;\n  border-radius: 19px;\n  flex-direction: column;\n  text-align: start;\n  color: var(--ink);\n  background: #eae0fc;\n  box-shadow: 0 4px 0 #d9cdef;\n  transition: transform calc(180ms * var(--motion-factor)), box-shadow calc(180ms * var(--motion-factor));\n}\n.level-2 {\n  border-color: #b5cfc3;\n  background: #e1f0e7;\n  box-shadow: 0 4px 0 #cbded2;\n}\n.level-3 {\n  border-color: #ddc59b;\n  background: #fff0cc;\n  box-shadow: 0 4px 0 #eeddb6;\n}\n.level-4 {\n  border-color: #e3b9a7;\n  background: #ffe2d6;\n  box-shadow: 0 4px 0 #f0ccbc;\n}\n.card-top {\n  display: flex;\n  margin-block-end: 20px;\n  align-items: center;\n  justify-content: space-between;\n}\n.icon {\n  display: grid;\n  inline-size: 48px;\n  block-size: 48px;\n  border: 1px solid rgb(41 35 60 / 10%);\n  border-radius: 14px;\n  place-items: center;\n  font-size: 2.8rem;\n  background: rgb(255 255 255 / 50%);\n}\n.level-number {\n  font-size: 1.1rem;\n  font-weight: 800;\n  opacity: 0.55;\n}\n.label {\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n}\n.description {\n  margin-block-start: 4px;\n  font-size: 1.2rem;\n}\n.card-bottom {\n  display: flex;\n  margin-block-start: 25px;\n  padding-block-start: 14px;\n  border-block-start: 1px solid rgb(41 35 60 / 14%);\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.separator {\n  padding-inline: 3px;\n}\n.play-arrow {\n  font-size: 2rem;\n  line-height: 1;\n}\n@media (hover: hover) {\n  .start-button:hover {\n    box-shadow: 0 8px 0 rgb(41 35 60 / 15%);\n    transform: translateY(-5px);\n  }\n}\n.start-button:active {\n  transform: translateY(2px);\n}\n@media (width <= 600px) {\n  .start-button {\n    padding: 16px;\n  }\n  .label {\n    font-size: 1.8rem;\n  }\n  .card-bottom {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=top-button.component.css.map */\n"] }]
  }], null, { difficulty: [{ type: Input, args: [{ isSignal: true, alias: "difficulty", required: true }] }], start: [{ type: Output, args: ["start"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopButtonComponent, { className: "TopButtonComponent", filePath: "src/app/modules/game/components/top-button.component.ts", lineNumber: 9 });
})();

// src/app/modules/game/components/top-title.component.ts
var TopTitleComponent = class _TopTitleComponent {
  static \u0275fac = function TopTitleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopTitleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopTitleComponent, selectors: [["app-top-title"]], decls: 20, vars: 0, consts: [[1, "eyebrow", "intro"], ["aria-hidden", "true"], ["id", "game-title"], ["lang", "ja", 1, "japanese"], ["lang", "en"], [1, "description"], [1, "desktop-break"]], template: function TopTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p", 0)(1, "span", 1);
      \u0275\u0275text(2, "\u2726");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(3, " YOUR DAILY DOSE OF PLAY");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h1", 2);
      \u0275\u0275text(5, "Little cards.");
      \u0275\u0275domElement(6, "br");
      \u0275\u0275text(7, "Big ");
      \u0275\u0275domElementStart(8, "span");
      \u0275\u0275text(9, "brain energy.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "p", 3);
      \u0275\u0275text(11, "\u795E\u7D4C\u8870\u5F31 ");
      \u0275\u0275domElementStart(12, "span", 1);
      \u0275\u0275text(13, "/");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "span", 4);
      \u0275\u0275text(15, "Concentration");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(16, "p", 5);
      \u0275\u0275text(17, "Flip a card. Find its friend. Give your memory");
      \u0275\u0275domElement(18, "br", 6);
      \u0275\u0275text(19, " a little workout and your day a little joy.");
      \u0275\u0275domElementEnd();
    }
  }, styles: ["\nh1[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--%NS%purple);\n}\n.intro[_ngcontent-%COMP%] {\n  display: flex;\n  margin-block-end: 19px;\n  align-items: center;\n  gap: 8px;\n  color: var(--%NS%purple);\n}\n.intro[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: clamp(3.8rem, 4.8vw, 5.8rem);\n  font-weight: 900;\n  letter-spacing: -2.5px;\n  line-height: 1.08;\n}\n.japanese[_ngcontent-%COMP%] {\n  margin-block: 18px 12px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.japanese[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  padding-inline: 9px;\n  color: #b5ad9e;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  line-height: 1.8;\n  color: var(--%NS%muted);\n}\n@media (width <= 700px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: clamp(3.8rem, 8vw, 5.8rem);\n  }\n  .desktop-break[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=top-title.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopTitleComponent, [{
    type: Component,
    args: [{ selector: "app-top-title", template: '<p class="eyebrow intro"><span aria-hidden="true">\u2726</span> YOUR DAILY DOSE OF PLAY</p>\n<h1 id="game-title">Little cards.<br>Big <span>brain energy.</span></h1>\n<p class="japanese" lang="ja">\u795E\u7D4C\u8870\u5F31 <span aria-hidden="true">/</span> <span lang="en">Concentration</span></p>\n<p class="description">Flip a card. Find its friend. Give your memory<br class="desktop-break"> a little workout and your day a little joy.</p>\n', styles: ["/* src/app/modules/game/components/top-title.component.css */\nh1 > span {\n  color: var(--purple);\n}\n.intro {\n  display: flex;\n  margin-block-end: 19px;\n  align-items: center;\n  gap: 8px;\n  color: var(--purple);\n}\n.intro > span {\n  font-size: 1.8rem;\n}\nh1 {\n  font-size: clamp(3.8rem, 4.8vw, 5.8rem);\n  font-weight: 900;\n  letter-spacing: -2.5px;\n  line-height: 1.08;\n}\n.japanese {\n  margin-block: 18px 12px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.japanese > span:first-child {\n  padding-inline: 9px;\n  color: #b5ad9e;\n}\n.description {\n  font-size: 1.4rem;\n  line-height: 1.8;\n  color: var(--muted);\n}\n@media (width <= 700px) {\n  h1 {\n    font-size: clamp(3.8rem, 8vw, 5.8rem);\n  }\n  .desktop-break {\n    display: none;\n  }\n}\n/*# sourceMappingURL=top-title.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopTitleComponent, { className: "TopTitleComponent", filePath: "src/app/modules/game/components/top-title.component.ts", lineNumber: 8 });
})();

// src/app/modules/game/components/top.component.ts
var _forTrack0 = ($index, $item) => $item.level;
function TopComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-top-button", 19);
    \u0275\u0275listener("start", function TopComponent_For_26_Template_app_top_button_start_0_listener() {
      const diff_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.start(diff_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const diff_r2 = ctx.$implicit;
    \u0275\u0275property("difficulty", diff_r2);
  }
}
var TopComponent = class _TopComponent {
  router = inject(Router);
  /** List of difficulties that user can select from */
  difficulties = GAME_DIFFICULTY;
  /** Number of cards selected by a user */
  numOfCard = 0;
  /**
   * Notify parent component that starting the game.
   */
  start(diff) {
    this.router.navigate(["game", diff.level]);
  }
  static \u0275fac = function TopComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopComponent, selectors: [["app-top"]], decls: 53, vars: 0, consts: [[1, "arcade-shell"], [1, "masthead"], ["href", "#/", "aria-label", "Concentration home", 1, "brand"], ["aria-hidden", "true", 1, "brand-mark"], [1, "quiet"], [1, "eyebrow", "quiet"], ["aria-labelledby", "game-title", 1, "hero"], ["aria-labelledby", "level-title", 1, "levels"], [1, "section-heading"], ["id", "level-title"], [1, "level-note"], [1, "button-container"], [3, "difficulty"], ["aria-label", "How to play", 1, "how-to"], [1, "eyebrow"], [1, "step"], ["aria-hidden", "true", 1, "step-arrow"], ["aria-hidden", "true"], [1, "arcade-footer"], [3, "start", "difficulty"]], template: function TopComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "a", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u2733");
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " concentration");
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, ".");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9, "A little play. A sharper mind.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "section", 6);
      \u0275\u0275element(11, "app-top-title")(12, "app-card-art");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "section", 7)(14, "div", 8)(15, "div")(16, "p", 5);
      \u0275\u0275text(17, "LET'S PLAY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "h2", 9);
      \u0275\u0275text(19, "Pick your challenge");
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, ".");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "span", 10);
      \u0275\u0275text(23, "Small warm-up or a big brain workout?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 11);
      \u0275\u0275repeaterCreate(25, TopComponent_For_26_Template, 1, 1, "app-top-button", 12, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "aside", 13)(28, "span", 14);
      \u0275\u0275text(29, "THE LITTLE HOW-TO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p")(31, "span", 15);
      \u0275\u0275text(32, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(33, " Flip two cards");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 16);
      \u0275\u0275text(35, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p")(37, "span", 15);
      \u0275\u0275text(38, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(39, " Find their match");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 16);
      \u0275\u0275text(41, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p")(43, "span", 15);
      \u0275\u0275text(44, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, " Collect them all ");
      \u0275\u0275elementStart(46, "span", 17);
      \u0275\u0275text(47, "\u2727");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "footer", 18)(49, "span");
      \u0275\u0275text(50, "\u795E\u7D4C\u8870\u5F31 \xB7 The classic memory game, with a little joy.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52, "No rush. Just one more pair.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(25);
      \u0275\u0275repeater(ctx.difficulties);
    }
  }, dependencies: [TopTitleComponent, TopButtonComponent, CardArtComponent], styles: ["\nh2[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--%NS%purple);\n}\n.hero[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-inline-size: 0;\n}\n.hero[_ngcontent-%COMP%] {\n  display: grid;\n  min-block-size: 355px;\n  padding-block: 45px;\n  grid-template-columns: 1.15fr 1fr;\n  align-items: center;\n  gap: 30px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  margin-block-end: 22px;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n}\nh2[_ngcontent-%COMP%] {\n  margin-block-start: 6px;\n  font-size: 2.8rem;\n  font-weight: 800;\n  letter-spacing: -1px;\n}\n.level-note[_ngcontent-%COMP%] {\n  padding-block-end: 4px;\n  font-size: 1.2rem;\n  color: var(--%NS%muted);\n}\n.button-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.how-to[_ngcontent-%COMP%] {\n  display: flex;\n  margin-block: 35px;\n  padding-inline: 25px;\n  padding-block: 23px;\n  border: 1px dashed #ccc4b6;\n  border-radius: 16px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.how-to[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.2rem;\n}\n.step[_ngcontent-%COMP%] {\n  display: grid;\n  inline-size: 24px;\n  block-size: 24px;\n  border-radius: 50%;\n  place-items: center;\n  font-size: 1rem;\n  font-weight: 800;\n  background: #eae4db;\n}\n.step-arrow[_ngcontent-%COMP%] {\n  color: #a8a08f;\n}\n@media (width <= 950px) {\n  .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 0.85fr;\n  }\n  .how-to[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .how-to[_ngcontent-%COMP%]    > .eyebrow[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n  .level-note[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (width <= 700px) {\n  .hero[_ngcontent-%COMP%] {\n    padding-block: 35px 20px;\n    grid-template-columns: minmax(0, 1fr);\n    gap: 10px;\n  }\n  .button-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .how-to[_ngcontent-%COMP%] {\n    padding: 20px;\n    align-items: start;\n    gap: 14px;\n  }\n  .how-to[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n  .step-arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=top.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopComponent, [{
    type: Component,
    args: [{ selector: "app-top", imports: [TopTitleComponent, TopButtonComponent, CardArtComponent], template: `<div class="arcade-shell">
  <header class="masthead">
    <a class="brand" href="#/" aria-label="Concentration home"><span class="brand-mark" aria-hidden="true">\u2733</span> concentration<span class="quiet">.</span></a>
    <span class="eyebrow quiet">A little play. A sharper mind.</span>
  </header>
  <section class="hero" aria-labelledby="game-title">
    <app-top-title></app-top-title>
    <app-card-art></app-card-art>
  </section>
  <section class="levels" aria-labelledby="level-title">
    <div class="section-heading"><div><p class="eyebrow quiet">LET'S PLAY</p><h2 id="level-title">Pick your challenge<span>.</span></h2></div><span class="level-note">Small warm-up or a big brain workout?</span></div>
    <div class="button-container">
      @for (diff of difficulties; track diff.level) {
        <app-top-button [difficulty]="diff" (start)="start(diff)"></app-top-button>
      }
    </div>
  </section>
  <aside class="how-to" aria-label="How to play">
    <span class="eyebrow">THE LITTLE HOW-TO</span>
    <p><span class="step">1</span> Flip two cards</p><span class="step-arrow" aria-hidden="true">\u2192</span>
    <p><span class="step">2</span> Find their match</p><span class="step-arrow" aria-hidden="true">\u2192</span>
    <p><span class="step">3</span> Collect them all <span aria-hidden="true">\u2727</span></p>
  </aside>
  <footer class="arcade-footer"><span>\u795E\u7D4C\u8870\u5F31 \xB7 The classic memory game, with a little joy.</span><span>No rush. Just one more pair.</span></footer>
</div>
`, styles: ["/* src/app/modules/game/components/top.component.css */\nh2 > span {\n  color: var(--purple);\n}\n.hero > * {\n  min-inline-size: 0;\n}\n.hero {\n  display: grid;\n  min-block-size: 355px;\n  padding-block: 45px;\n  grid-template-columns: 1.15fr 1fr;\n  align-items: center;\n  gap: 30px;\n}\n.section-heading {\n  display: flex;\n  margin-block-end: 22px;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n}\nh2 {\n  margin-block-start: 6px;\n  font-size: 2.8rem;\n  font-weight: 800;\n  letter-spacing: -1px;\n}\n.level-note {\n  padding-block-end: 4px;\n  font-size: 1.2rem;\n  color: var(--muted);\n}\n.button-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.how-to {\n  display: flex;\n  margin-block: 35px;\n  padding-inline: 25px;\n  padding-block: 23px;\n  border: 1px dashed #ccc4b6;\n  border-radius: 16px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.how-to p {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.2rem;\n}\n.step {\n  display: grid;\n  inline-size: 24px;\n  block-size: 24px;\n  border-radius: 50%;\n  place-items: center;\n  font-size: 1rem;\n  font-weight: 800;\n  background: #eae4db;\n}\n.step-arrow {\n  color: #a8a08f;\n}\n@media (width <= 950px) {\n  .hero {\n    grid-template-columns: 1fr 0.85fr;\n  }\n  .how-to {\n    flex-wrap: wrap;\n  }\n  .how-to > .eyebrow {\n    flex-basis: 100%;\n  }\n  .level-note {\n    display: none;\n  }\n}\n@media (width <= 700px) {\n  .hero {\n    padding-block: 35px 20px;\n    grid-template-columns: minmax(0, 1fr);\n    gap: 10px;\n  }\n  .button-container {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .how-to {\n    padding: 20px;\n    align-items: start;\n    gap: 14px;\n  }\n  .how-to p {\n    flex-basis: 100%;\n  }\n  .step-arrow {\n    display: none;\n  }\n  h2 {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=top.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopComponent, { className: "TopComponent", filePath: "src/app/modules/game/components/top.component.ts", lineNumber: 15 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: TopComponent
  },
  {
    path: "game/:level",
    loadComponent: () => import("./game.component-HIM7AJJE.js").then((m) => m.GameComponent),
    providers: [GameService]
  },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withHashLocation(), withComponentInputBinding(), withInMemoryScrolling({ scrollPositionRestoration: "top" }))
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# debugId=47a40171-98f3-5dce-a136-7fcb696f8e94
//# sourceMappingURL=main.js.map
