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
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
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
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2GQ2P2DH.js";

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
  }, dependencies: [RouterOutlet], styles: ["\n.app-component[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: '<main class="app-component">\n  <router-outlet></router-outlet>\n</main>', styles: ["/* src/app/app.component.css */\n.app-component {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopButtonComponent, selectors: [["app-top-button"]], inputs: { difficulty: [1, "difficulty"] }, outputs: { start: "start" }, decls: 5, vars: 2, consts: [[1, "start-button", 3, "click"], [1, "label"], [1, "icon"]], template: function TopButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function TopButtonComponent_Template_button_click_0_listener() {
        return ctx.start.emit(ctx.difficulty());
      });
      \u0275\u0275domElementStart(1, "span", 1);
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "span", 2);
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.difficulty().label);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.difficulty().icon);
    }
  }, styles: ["\n.start-button[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  padding: var(--%NS%size-2);\n  border: none;\n  border-radius: var(--%NS%size-4);\n  overflow: hidden;\n  font-family: var(--%NS%font-sans);\n  font-size: var(--%NS%font-size-8);\n  font-weight: var(--%NS%font-weight-7);\n  color: var(--%NS%gray-8);\n  background-color: var(--%NS%gray-1);\n  box-shadow: 1px 1px 3px 0 hsl(0deg 99% 0% / 50%);\n  transition: scale 0.2s;\n  cursor: pointer;\n  --%NS%button-transition: all 0.3s var(--%NS%ease-in-out-3);\n}\n.start-button[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  transition: var(--%NS%button-transition);\n}\n.start-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: var(--%NS%button-transition);\n}\n.start-button[_ngcontent-%COMP%]:hover {\n  scale: 1.05, 1.05;\n}\n.start-button[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  rotate: 20deg;\n}\n@media only screen and (width >= 768px) {\n  .start-button[_ngcontent-%COMP%] {\n    aspect-ratio: 1 / 1;\n    font-size: var(--%NS%font-size-8);\n    box-shadow: 1px 1px 5px 0 hsl(0deg 99% 0% / 50%);\n  }\n  .start-button[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    display: block;\n    translate: 0 2em;\n  }\n  .start-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 10rem;\n    translate: 0 calc(var(--%NS%button-size) / 2 + 3rem);\n  }\n  .start-button[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%] {\n    translate: 0 0;\n  }\n  .start-button[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n    translate: 0 0;\n    rotate: 0;\n  }\n}\n/*# sourceMappingURL=top-button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopButtonComponent, [{
    type: Component,
    args: [{ selector: "app-top-button", template: '<button class="start-button" (click)="start.emit(difficulty())">\n  <span class="label">{{ difficulty().label }}</span>\n  <span class="icon">{{ difficulty().icon }}</span>\n</button>\n', styles: ["/* src/app/modules/game/components/top-button.component.css */\n.start-button {\n  inline-size: 100%;\n  padding: var(--size-2);\n  border: none;\n  border-radius: var(--size-4);\n  overflow: hidden;\n  font-family: var(--font-sans);\n  font-size: var(--font-size-8);\n  font-weight: var(--font-weight-7);\n  color: var(--gray-8);\n  background-color: var(--gray-1);\n  box-shadow: 1px 1px 3px 0 hsl(0deg 99% 0% / 50%);\n  transition: scale 0.2s;\n  cursor: pointer;\n  --button-transition: all 0.3s var(--ease-in-out-3);\n}\n.start-button .label {\n  transition: var(--button-transition);\n}\n.start-button .icon {\n  display: inline-block;\n  transition: var(--button-transition);\n}\n.start-button:hover {\n  scale: 1.05, 1.05;\n}\n.start-button:hover .icon {\n  rotate: 20deg;\n}\n@media only screen and (width >= 768px) {\n  .start-button {\n    aspect-ratio: 1 / 1;\n    font-size: var(--font-size-8);\n    box-shadow: 1px 1px 5px 0 hsl(0deg 99% 0% / 50%);\n  }\n  .start-button .label {\n    display: block;\n    translate: 0 2em;\n  }\n  .start-button .icon {\n    display: block;\n    font-size: 10rem;\n    translate: 0 calc(var(--button-size) / 2 + 3rem);\n  }\n  .start-button:hover .label {\n    translate: 0 0;\n  }\n  .start-button:hover .icon {\n    translate: 0 0;\n    rotate: 0;\n  }\n}\n/*# sourceMappingURL=top-button.component.css.map */\n"] }]
  }], null, { difficulty: [{ type: Input, args: [{ isSignal: true, alias: "difficulty", required: true }] }], start: [{ type: Output, args: ["start"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopButtonComponent, { className: "TopButtonComponent", filePath: "src/app/modules/game/components/top-button.component.ts", lineNumber: 9 });
})();

// src/app/modules/game/components/top-title.component.ts
function TopTitleComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1);
  }
}
function TopTitleComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2);
  }
}
var TopTitleComponent = class _TopTitleComponent {
  static \u0275fac = function TopTitleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopTitleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopTitleComponent, selectors: [["app-top-title"]], decls: 15, vars: 0, consts: [[1, "title"], [1, "main"], [1, "rotate"], [1, "sub"]], template: function TopTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "\u{1F914}");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(4, TopTitleComponent_For_5_Template, 2, 1, "span", 2, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275domElementStart(6, "span", 2);
      \u0275\u0275text(7, "\u{1F914}");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(8, "div", 3)(9, "span", 2);
      \u0275\u0275text(10, "\u{1F914}");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(11, TopTitleComponent_For_12_Template, 2, 1, "span", 2, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275domElementStart(13, "span", 2);
      \u0275\u0275text(14, "\u{1F914}");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater("\u795E\u7D4C\u8870\u5F31".split(""));
      \u0275\u0275advance(7);
      \u0275\u0275repeater("Concentration".split(""));
    }
  }, styles: ["\n.title[_ngcontent-%COMP%] {\n  margin-block-end: 2rem;\n  font-family:\n    Roboto,\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 2.5rem;\n  font-weight: bold;\n}\n.title[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n@keyframes _ngcontent-%COMP%_rotate-anime {\n  0% {\n    transform: rotate(-15deg);\n  }\n  100% {\n    transform: rotate(15deg);\n  }\n}\n.rotate[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-inline: 3px;\n}\n.rotate[_ngcontent-%COMP%]:nth-child(even) {\n  animation: _ngcontent-%COMP%_rotate-anime 1.5s ease-in-out infinite alternate-reverse forwards;\n}\n.rotate[_ngcontent-%COMP%]:nth-child(odd) {\n  animation: _ngcontent-%COMP%_rotate-anime 1.5s ease-in-out infinite alternate forwards;\n}\n@media only screen and (width >= 768px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 5rem;\n  }\n}\n@media only screen and (width >= 992px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 6rem;\n  }\n}\n/*# sourceMappingURL=top-title.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopTitleComponent, [{
    type: Component,
    args: [{ selector: "app-top-title", template: `<div class="title">
  <div class="main">
    <span class="rotate">\u{1F914}</span>
    @for (c of '\u795E\u7D4C\u8870\u5F31'.split(''); track $index) {<span class="rotate">{{ c }}</span>}<span class="rotate">\u{1F914}</span>
  </div>
  <div class="sub">
    <span class="rotate">\u{1F914}</span>
    @for (c of 'Concentration'.split(''); track $index) {<span class="rotate">{{ c }}</span>}
    <span class="rotate">\u{1F914}</span>
  </div>
</div>
`, styles: ["/* src/app/modules/game/components/top-title.component.css */\n.title {\n  margin-block-end: 2rem;\n  font-family:\n    Roboto,\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 2.5rem;\n  font-weight: bold;\n}\n.title .main {\n  font-size: 1.3em;\n}\n@keyframes rotate-anime {\n  0% {\n    transform: rotate(-15deg);\n  }\n  100% {\n    transform: rotate(15deg);\n  }\n}\n.rotate {\n  display: inline-block;\n  padding-inline: 3px;\n}\n.rotate:nth-child(even) {\n  animation: rotate-anime 1.5s ease-in-out infinite alternate-reverse forwards;\n}\n.rotate:nth-child(odd) {\n  animation: rotate-anime 1.5s ease-in-out infinite alternate forwards;\n}\n@media only screen and (width >= 768px) {\n  .title {\n    font-size: 5rem;\n  }\n}\n@media only screen and (width >= 992px) {\n  .title {\n    font-size: 6rem;\n  }\n}\n/*# sourceMappingURL=top-title.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopTitleComponent, { className: "TopTitleComponent", filePath: "src/app/modules/game/components/top-title.component.ts", lineNumber: 8 });
})();

// src/app/modules/game/components/top.component.ts
var _forTrack0 = ($index, $item) => $item.level;
function TopComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-top-button", 4);
    \u0275\u0275listener("start", function TopComponent_For_5_Template_app_top_button_start_0_listener() {
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopComponent, selectors: [["app-top"]], decls: 6, vars: 0, consts: [[1, "container"], [1, "inner-container"], [1, "button-container"], [3, "difficulty"], [3, "start", "difficulty"]], template: function TopComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-top-title");
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275repeaterCreate(4, TopComponent_For_5_Template, 1, 1, "app-top-button", 3, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.difficulties);
    }
  }, dependencies: [TopTitleComponent, TopButtonComponent], styles: ["\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  block-size: 100dvh;\n  align-items: center;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%] {\n  inline-size: clamp(280px, calc(100vw - 32px), 680px);\n  text-align: center;\n}\n.button-container[_ngcontent-%COMP%] {\n  --%NS%button-gap: var(--%NS%size-6);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(4, 1fr);\n  justify-items: stretch;\n  gap: var(--%NS%button-gap) var(--%NS%button-gap);\n}\n@media only screen and (width >= 768px) {\n  .button-container[_ngcontent-%COMP%] {\n    --%NS%button-size: 29rem;\n    --%NS%button-gap: var(--%NS%size-8);\n    inline-size: calc(var(--%NS%button-size) * 2 + var(--%NS%button-gap));\n    margin-inline: auto;\n    margin-block: 0;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    justify-items: stretch;\n  }\n}\n/*# sourceMappingURL=top.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopComponent, [{
    type: Component,
    args: [{ selector: "app-top", imports: [TopTitleComponent, TopButtonComponent], template: '<section class="container">\n  <div class="inner-container">\n    <app-top-title></app-top-title>\n    <div class="button-container">\n      @for (diff of difficulties; track diff.level) {\n        <app-top-button [difficulty]="diff" (start)="start(diff)"></app-top-button>\n      }\n    </div>\n  </div>\n</section>\n', styles: ["/* src/app/modules/game/components/top.component.css */\n.container {\n  display: flex;\n  block-size: 100dvh;\n  align-items: center;\n  justify-content: center;\n}\n.container .inner-container {\n  inline-size: clamp(280px, calc(100vw - 32px), 680px);\n  text-align: center;\n}\n.button-container {\n  --button-gap: var(--size-6);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(4, 1fr);\n  justify-items: stretch;\n  gap: var(--button-gap) var(--button-gap);\n}\n@media only screen and (width >= 768px) {\n  .button-container {\n    --button-size: 29rem;\n    --button-gap: var(--size-8);\n    inline-size: calc(var(--button-size) * 2 + var(--button-gap));\n    margin-inline: auto;\n    margin-block: 0;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    justify-items: stretch;\n  }\n}\n/*# sourceMappingURL=top.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopComponent, { className: "TopComponent", filePath: "src/app/modules/game/components/top.component.ts", lineNumber: 14 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: TopComponent
  },
  {
    path: "game/:level",
    loadComponent: () => import("./game.component-XZHQPFPH.js").then((m) => m.GameComponent),
    providers: [GameService]
  },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withHashLocation(), withComponentInputBinding())
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# debugId=88f59ba0-1553-59c5-a45f-6b275e9f59db
//# sourceMappingURL=main.js.map
