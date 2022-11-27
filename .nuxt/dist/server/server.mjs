
// --------------------
// Request: D:/projects/blog-netlify-nuxt/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/paths.mjs ($id_4a5f3ced)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/css.mjs ($id_f687528d)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/plugins/server.mjs ($id_d4d5b3ac)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/root-component.mjs ($id_99264b6e)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/app-component.mjs ($id_1218fc03)
// --------------------
const $id_f25e1aa5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - D:/projects/blog-netlify-nuxt/node_modules/nuxt/dist/app/entry ($id_f25e1aa5)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_8f3d0953)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_9fab5abb)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_d2da4ccd)
// - /node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.mjs ($id_a8f97a50)
// - /node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.mjs ($id_9071c70d)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_558bf79f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_01e2b479)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_fab9e310)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_840411f2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_b479ada6)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_9c1df7ff)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_f86082f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_7f627a67)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_caec80eb)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_26303ae9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_6f4fac0c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_f72b4351)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_1b78ec5d)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_2e24a6f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_0990778f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_6d4c23c7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_10f5aef2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_faffa2d8)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_b51a8b09)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_07608f57)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_17b6f147)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_16f58501)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_7728c86d)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /pages/[...slug].vue?macro=true ($id_eab8124e)
// - /pages/[...slug].vue ($id_02b80d49)
// - /node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs ($id_a217e6ae)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/@nuxt/ui/dist/components/NLink.vue ($id_55598167)
// - /node_modules/@nuxt/ui/dist/components/NIcon.vue ($id_defac4b3)
// - /node_modules/@nuxt/ui/dist/components/NButton.vue ($id_297ec944)
// - /node_modules/nuxt/dist/app/components/client-only.mjs ($id_1ec78319)
// - /node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue ($id_45c4a629)
// - /node_modules/@nuxt/ui/dist/components/nuxt/NDarkToggle.vue ($id_fd053068)
// - /node_modules/@nuxt/ui/dist/components/NCard.vue ($id_ab9d25ca)
// - /node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue ($id_d8118121)
// - /node_modules/@nuxt/ui/dist/components/NuxtLogo.vue ($id_31f8fda1)
// - /node_modules/@nuxt/ui/dist/components/NuxtContentLogo.vue ($id_9252eb4f)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - D:/projects/blog-netlify-nuxt/node_modules/nuxt/dist/app/entry ($id_f25e1aa5)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/paths.mjs
// Parents: 
// - D:/projects/blog-netlify-nuxt/node_modules/nuxt/dist/app/entry ($id_f25e1aa5)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// --------------------
const $id_4a5f3ced = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/paths.mjs ($id_4a5f3ced)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_614de060 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - D:/projects/blog-netlify-nuxt/node_modules/nuxt/dist/app/entry ($id_f25e1aa5)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_e209d000)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs ($id_575fe152)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// --------------------
const $id_36927477 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/unctx/dist/index.mjs ($id_a569ca2d)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// --------------------
const $id_e069d411 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/legacy-app.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_3__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.use();
  if (!nuxtAppInstance) {
    const vm = __vite_ssr_import_0__.getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a569ca2d = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// --------------------
const $id_a48341bc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/unenv/runtime/mock/proxy.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/unenv/runtime/mock/proxy.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// --------------------
const $id_b067a79a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_53345950 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_d5b6a221 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_df511336 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_0063df1b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_7d872108 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_6fe050f1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error);
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_41f5ae4e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, opts = {}) {
  if (true && opts.transform && !opts.key) {
    console.warn("[nuxt] You should provide a key for `useFetch` when using a custom transform function.");
  }
  const key = "$f_" + (opts.key || __vite_ssr_import_0__.hash([request, { ...opts, transform: null }]));
  const _request = __vite_ssr_import_1__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_1__.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = __vite_ssr_import_2__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, opts = {}) {
  return useFetch(request, {
    ...opts,
    lazy: true
  });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/ohash/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_e209d000)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_d2da4ccd)
// Dependencies: 

// --------------------
const $id_b1b82cf3 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/ohash/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/ohash/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_511b441d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_c4866ba7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_db4d90a8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_2__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_2__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_1__.joinURL(__vite_ssr_import_2__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_0__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// --------------------
const $id_161bfe9f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_558bf79f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_9c1df7ff)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_f86082f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_7f627a67)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_ffac87b5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b7351483 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_04ea9504 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/css.mjs
// Parents: 
// - D:/projects/blog-netlify-nuxt/node_modules/nuxt/dist/app/entry ($id_f25e1aa5)
// Dependencies: 
// - /node_modules/@nuxt/ui/dist/assets/styles.css ($id_3e441a39)
// --------------------
const $id_f687528d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui/dist/assets/styles.css");
;
}


// --------------------
// Request: /node_modules/@nuxt/ui/dist/assets/styles.css
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/css.mjs ($id_f687528d)
// Dependencies: 

// --------------------
const $id_3e441a39 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ":root {\n  --nui-c-context: 125,125,125;\n}\n\nhtml {\n  background-color: white;\n}\n\nhtml.dark {\n  color-scheme: dark;\n  background-color: #222;\n  color: white;\n}\n\n";
}


// --------------------
// Request: /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/plugins/server.mjs
// Parents: 
// - D:/projects/blog-netlify-nuxt/node_modules/nuxt/dist/app/entry ($id_f25e1aa5)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs ($id_a217e6ae)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/unocss.mjs ($id_24724909)
// - /node_modules/@nuxt/content/dist/runtime/plugins/ws.mjs ($id_272b3f95)
// --------------------
const $id_d4d5b3ac = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/unocss.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/plugins/ws.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default,
  __vite_ssr_import_6__.default,
  __vite_ssr_import_7__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/plugins/server.mjs ($id_d4d5b3ac)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_9871bba0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/plugins/server.mjs ($id_d4d5b3ac)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_9fab5abb)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_d2da4ccd)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_8f3d0953)
// - /node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.mjs ($id_a8f97a50)
// - /node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.mjs ($id_9071c70d)
// - /node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs ($id_f4cbbc2c)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_558bf79f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_01e2b479)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_fab9e310)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_840411f2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_b479ada6)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_9c1df7ff)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_f86082f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_7f627a67)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_caec80eb)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_26303ae9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_6f4fac0c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_f72b4351)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_1b78ec5d)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_2e24a6f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_0990778f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_6d4c23c7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_10f5aef2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_faffa2d8)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_b51a8b09)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_07608f57)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_17b6f147)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_16f58501)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_7728c86d)
// --------------------
const $id_0a3203f7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {
  ContentDoc: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs' /* webpackChunkName: "components/content-doc" */).then(c => c.default || c)),
  ContentList: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs' /* webpackChunkName: "components/content-list" */).then(c => c.default || c)),
  ContentNavigation: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs' /* webpackChunkName: "components/content-navigation" */).then(c => c.default || c)),
  ContentQuery: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs' /* webpackChunkName: "components/content-query" */).then(c => c.default || c)),
  ContentRenderer: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs' /* webpackChunkName: "components/content-renderer" */).then(c => c.default || c)),
  DocumentDrivenEmpty: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.mjs' /* webpackChunkName: "components/document-driven-empty" */).then(c => c.default || c)),
  DocumentDrivenNotFound: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.mjs' /* webpackChunkName: "components/document-driven-not-found" */).then(c => c.default || c)),
  Markdown: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs' /* webpackChunkName: "components/markdown" */).then(c => c.default || c)),
  MarkdownRenderer: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs' /* webpackChunkName: "components/markdown-renderer" */).then(c => c.default || c)),
  ProseA: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue' /* webpackChunkName: "components/prose-a" */).then(c => c.default || c)),
  ProseBlockquote: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue' /* webpackChunkName: "components/prose-blockquote" */).then(c => c.default || c)),
  ProseCode: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue' /* webpackChunkName: "components/prose-code" */).then(c => c.default || c)),
  ProseCodeInline: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue' /* webpackChunkName: "components/prose-code-inline" */).then(c => c.default || c)),
  ProseEm: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue' /* webpackChunkName: "components/prose-em" */).then(c => c.default || c)),
  ProseH1: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue' /* webpackChunkName: "components/prose-h1" */).then(c => c.default || c)),
  ProseH2: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue' /* webpackChunkName: "components/prose-h2" */).then(c => c.default || c)),
  ProseH3: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue' /* webpackChunkName: "components/prose-h3" */).then(c => c.default || c)),
  ProseH4: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue' /* webpackChunkName: "components/prose-h4" */).then(c => c.default || c)),
  ProseH5: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue' /* webpackChunkName: "components/prose-h5" */).then(c => c.default || c)),
  ProseH6: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue' /* webpackChunkName: "components/prose-h6" */).then(c => c.default || c)),
  ProseHr: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue' /* webpackChunkName: "components/prose-hr" */).then(c => c.default || c)),
  ProseImg: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue' /* webpackChunkName: "components/prose-img" */).then(c => c.default || c)),
  ProseLi: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue' /* webpackChunkName: "components/prose-li" */).then(c => c.default || c)),
  ProseOl: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue' /* webpackChunkName: "components/prose-ol" */).then(c => c.default || c)),
  ProseP: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue' /* webpackChunkName: "components/prose-p" */).then(c => c.default || c)),
  ProseStrong: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue' /* webpackChunkName: "components/prose-strong" */).then(c => c.default || c)),
  ProseTable: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue' /* webpackChunkName: "components/prose-table" */).then(c => c.default || c)),
  ProseTbody: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue' /* webpackChunkName: "components/prose-tbody" */).then(c => c.default || c)),
  ProseTd: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue' /* webpackChunkName: "components/prose-td" */).then(c => c.default || c)),
  ProseTh: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue' /* webpackChunkName: "components/prose-th" */).then(c => c.default || c)),
  ProseThead: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue' /* webpackChunkName: "components/prose-thead" */).then(c => c.default || c)),
  ProseTr: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue' /* webpackChunkName: "components/prose-tr" */).then(c => c.default || c)),
  ProseUl: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue' /* webpackChunkName: "components/prose-ul" */).then(c => c.default || c))
}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// - /pages/[...slug].vue?macro=true ($id_eab8124e)
// - /pages/[...slug].vue ($id_02b80d49)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_8f3d0953)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// --------------------
const $id_12ce52f3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    tag: {
      type: String,
      required: false,
      default: "div"
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      required: false,
      default: () => __vite_ssr_import_3__.useRoute().path
    },
    query: {
      type: Object,
      required: false,
      default: void 0
    },
    head: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  render(ctx) {
    const slots = __vite_ssr_import_0__.useSlots();
    const { tag, excerpt, path, query, head } = ctx;
    const contentQueryProps = Object.assign(query || {}, { path, find: "one" });
    const emptyNode = (slot, data) => __vite_ssr_import_0__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentDoc>", slot, data }, null, 2));
    return __vite_ssr_import_0__.h(__vite_ssr_import_2__.default, contentQueryProps, {
      default: slots?.default ? ({ data, refresh, isPartial }) => {
        if (head) {
          __vite_ssr_import_3__.useContentHead(data);
        }
        return slots.default?.({ doc: data, refresh, isPartial, excerpt, ...this.$attrs });
      } : ({ data }) => {
        if (head) {
          __vite_ssr_import_3__.useContentHead(data);
        }
        return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default, { value: data, excerpt, tag, ...this.$attrs }, { empty: (bindings) => slots?.empty ? slots.empty(bindings) : emptyNode("default", data) });
      },
      empty: (bindings) => slots?.empty?.(bindings) || __vite_ssr_import_0__.h("p", null, "Document is empty, overwrite this content with #empty slot in <ContentDoc>."),
      "not-found": (bindings) => slots?.["not-found"]?.(bindings) || __vite_ssr_import_0__.h("p", null, "Document not found, overwrite this content with #not-found slot in <ContentDoc>.")
    });
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// --------------------
const $id_8f3d0953 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({})
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    __vite_ssr_import_0__.watch(() => props.excerpt, (newExcerpt) => {
      if (newExcerpt && !props.value?.excerpt) {
        console.warn(`No excerpt found for document content/${props?.value?._path}.${props?.value?._extension}!`);
        console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature.");
      }
    }, {
      immediate: true
    });
  },
  render(ctx) {
    const slots = __vite_ssr_import_0__.useSlots();
    const { value, excerpt, tag } = ctx;
    if (value && value?._type === "markdown" && value?.body?.children?.length) {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default, {
        value,
        excerpt,
        tag,
        ...this.$attrs
      });
    }
    if (value && slots?.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    } else if (slots?.empty) {
      return slots.empty({ value, excerpt, tag, ...this.$attrs });
    } else if (slots?.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    }
    return __vite_ssr_import_0__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentRenderer>", value, excerpt, tag }, null, 2));
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_8f3d0953)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/scule/dist/index.mjs ($id_ff332d11)
// - /node_modules/property-information/index.js ($id_882dd793)
// - /node_modules/html-tags/index.js ($id_4503b399)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_4c793316 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/scule/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/property-information/index.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/html-tags/index.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "ContentRendererMarkdown",
  props: {
    value: {
      type: Object,
      required: true
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    const { content: { tags = {} } } = __vite_ssr_import_5__.useRuntimeConfig().public;
    const { tag: _t, value: _d, ...contentProps } = __vite_ssr_import_0__.toRefs(props);
    return {
      tags,
      contentProps
    };
  },
  render(ctx) {
    const { tags, tag, value, contentProps } = ctx;
    if (!value) {
      return null;
    }
    let body = value.body || value;
    if (this.excerpt && value.excerpt) {
      body = value.excerpt;
    }
    const meta = {
      ...value,
      tags: {
        ...tags,
        ...value?.tags || {}
      }
    };
    let component = meta.component || tag;
    if (typeof meta.component === "object") {
      component = meta.component.name;
    }
    component = resolveVueComponent(component);
    const children = (body.children || []).map((child) => renderNode(child, __vite_ssr_import_0__.h, meta));
    return __vite_ssr_import_0__.h(component, {
      ...contentProps,
      ...meta.component?.props,
      ...this.$attrs
    }, {
      default: createSlotFunction(children)
    });
  }
});
function renderNode(node, h2, documentMeta, parentScope = {}) {
  if (node.type === "text") {
    return h2(__vite_ssr_import_0__.Text, node.value);
  }
  const originalTag = node.tag;
  const renderTag = typeof node.props?.__ignoreMap === "undefined" && documentMeta.tags[originalTag] || originalTag;
  if (node.tag === "binding") {
    return renderBinding(node, h2, documentMeta, parentScope);
  }
  const component = resolveVueComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  const props = propsToData(node, documentMeta);
  return h2(component, props, renderSlots(node, h2, documentMeta, { ...parentScope, ...props }));
}
function renderBinding(node, h2, documentMeta, parentScope = {}) {
  const data = {
    ...parentScope,
    $route: () => __vite_ssr_import_5__.useRoute(),
    $document: documentMeta,
    $doc: documentMeta
  };
  const splitter = /\.|\[(\d+)\]/;
  const keys = node.props?.value.trim().split(splitter).filter(Boolean);
  const value = keys.reduce((data2, key) => {
    if (key in data2) {
      if (typeof data2[key] === "function") {
        return data2[key]();
      } else {
        return data2[key];
      }
    }
    return {};
  }, data);
  return h2(__vite_ssr_import_0__.Text, value);
}
function renderSlots(node, h2, documentMeta, parentProps) {
  const children = node.children || [];
  const slots = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].push(renderNode(node2, h2, documentMeta, parentProps));
      return data;
    }
    if (isDefaultTemplate(node2)) {
      data[DEFAULT_SLOT].push(...(node2.children || []).map((child) => renderNode(child, h2, documentMeta, parentProps)));
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = (node2.children || []).map((child) => renderNode(child, h2, documentMeta, parentProps));
    return data;
  }, {
    [DEFAULT_SLOT]: []
  });
  const slotEntries = Object.entries(slots).map(([name, vDom]) => [name, createSlotFunction(vDom)]);
  return Object.fromEntries(slotEntries);
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key) && !nativeInputs.includes(tag)) {
      return propsToDataRxModel(key, value, data, documentMeta);
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = __vite_ssr_import_3__.find(__vite_ssr_import_3__.html, key);
    if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta) {
  const number = (d) => +d;
  const trim = (d) => d.trim();
  const noop = (d) => d;
  const mods = key.replace(rxModel, "").split(".").filter((d) => d).reduce((d, k) => {
    d[k] = true;
    return d;
  }, {});
  const field = "value";
  const event = mods.lazy ? "change" : "input";
  const processor = mods.number ? number : mods.trim ? trim : noop;
  data[field] = evalInContext(value, documentMeta);
  data.on = data.on || {};
  data.on[event] = (e) => documentMeta[value] = processor(e);
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveVueComponent = (component) => {
  if (!__vite_ssr_import_4__.default.includes(component)) {
    const componentFn = __vite_ssr_import_0__.resolveComponent(__vite_ssr_import_2__.pascalCase(component), false);
    if (typeof componentFn === "object") {
      return componentFn;
    }
  }
  return component;
};
function evalInContext(code, context) {
  const result = code.split(".").reduce((o, k) => typeof o === "object" ? o[k] : void 0, context);
  return typeof result === "undefined" ? __vite_ssr_import_1__.default(code) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function createSlotFunction(nodes) {
  return nodes.length ? () => nodes : void 0;
}
function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
;
}


// --------------------
// Request: /node_modules/scule/dist/index.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// Dependencies: 

// --------------------
const $id_ff332d11 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/scule/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/scule/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/property-information/index.js
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// Dependencies: 

// --------------------
const $id_882dd793 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/property-information/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/property-information/index.js\".")
  })


// --------------------
// Request: /node_modules/html-tags/index.js
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// Dependencies: 

// --------------------
const $id_4503b399 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/html-tags/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/html-tags/index.js\".")
  })


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_9fab5abb)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// --------------------
const $id_3f801a38 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_1__.defineComponent({
  props: {
    path: {
      type: String,
      required: false,
      default: void 0
    },
    only: {
      type: Array,
      required: false,
      default: void 0
    },
    without: {
      type: Array,
      required: false,
      default: void 0
    },
    where: {
      type: Object,
      required: false,
      default: void 0
    },
    sort: {
      type: Object,
      required: false,
      default: void 0
    },
    limit: {
      type: Number,
      required: false,
      default: void 0
    },
    skip: {
      type: Number,
      required: false,
      default: void 0
    },
    locale: {
      type: String,
      required: false,
      default: void 0
    },
    find: {
      type: String,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = __vite_ssr_import_1__.toRefs(props);
    const isPartial = __vite_ssr_import_2__.computed(() => path.value?.includes("/_"));
    const { data, refresh } = await __vite_ssr_import_2__.useAsyncData(`content-query-${__vite_ssr_import_0__.hash(props)}`, () => {
      let queryBuilder;
      if (path.value) {
        queryBuilder = __vite_ssr_import_2__.queryContent(path.value);
      } else {
        queryBuilder = __vite_ssr_import_2__.queryContent();
      }
      if (only.value) {
        queryBuilder = queryBuilder.only(only.value);
      }
      if (without.value) {
        queryBuilder = queryBuilder.without(without.value);
      }
      if (where.value) {
        queryBuilder = queryBuilder.where(where.value);
      }
      if (sort.value) {
        queryBuilder = queryBuilder.sort(sort.value);
      }
      if (limit.value) {
        queryBuilder = queryBuilder.limit(limit.value);
      }
      if (skip.value) {
        queryBuilder = queryBuilder.skip(skip.value);
      }
      if (locale.value) {
        queryBuilder = queryBuilder.where({ _locale: locale.value });
      }
      if (find.value === "one") {
        return queryBuilder.findOne();
      }
      if (find.value === "surround") {
        if (!path.value) {
          console.warn("[Content] Surround queries requires `path` prop to be set.");
          console.warn("[Content] Query without `path` will return regular `find()` results.");
          return queryBuilder.find();
        }
        return queryBuilder.findSurround(path);
      }
      return queryBuilder.find();
    });
    return {
      isPartial,
      data,
      refresh
    };
  },
  render(ctx) {
    const slots = __vite_ssr_import_1__.useSlots();
    const {
      data,
      refresh,
      isPartial,
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = ctx;
    const props = {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    };
    if (props.find === "one") {
      if (!data && slots?.["not-found"]) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
      if (data?._type === "markdown" && !data?.body?.children.length) {
        return slots.empty({ props, ...this.$attrs });
      }
    } else if (!data || !data.length) {
      if (slots?.["not-found"]) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
    }
    if (slots?.default) {
      return slots.default({ data, refresh, isPartial, props, ...this.$attrs });
    }
    const emptyNode = (slot, data2) => __vite_ssr_import_1__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentQuery>!", slot, data: data2 }, null, 2));
    return emptyNode("default", { data, props, isPartial });
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// - /node_modules/@nuxt/content/dist/runtime/composables/head.mjs ($id_4ed5e8c1)
// - /node_modules/@nuxtjs/color-mode/dist/runtime/composables.mjs ($id_9d5ba8e3)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_d2da4ccd)
// - /node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs ($id_f4cbbc2c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// - /node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs ($id_a217e6ae)
// - /node_modules/@nuxt/content/dist/runtime/plugins/ws.mjs ($id_272b3f95)
// - /node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs ($id_575fe152)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/@nuxt/ui/dist/components/nuxt/NDarkToggle.vue ($id_fd053068)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@vueuse/core/index.mjs ($id_e8934cdc)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@nuxt/content/dist/runtime/composables/helpers.mjs ($id_ec377465)
// - /node_modules/@nuxt/content/dist/runtime/composables/head.mjs ($id_4ed5e8c1)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_e209d000)
// - /node_modules/@nuxtjs/color-mode/dist/runtime/composables.mjs ($id_9d5ba8e3)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// --------------------
const $id_20555f3d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@vueuse/core/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/query.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/helpers.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/head.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/@nuxtjs/color-mode/dist/runtime/composables.mjs");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_12__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_12__.useMeta }});
const __vite_ssr_import_13__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.isVue2 }});
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.isVue3 }});
const __vite_ssr_import_14__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.refreshNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.defineNuxtComponent }});
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useNuxtApp }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.defineNuxtPlugin }});
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useRuntimeConfig }});
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useState }});
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useLazyFetch }});
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useCookie }});
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useRouter }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useError }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.defineNuxtLink }});
const __vite_ssr_import_15__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "withCtx", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.withCtx }});
Object.defineProperty(__vite_ssr_exports__, "withDirectives", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.withDirectives }});
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.withKeys }});
Object.defineProperty(__vite_ssr_exports__, "withMemo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.withMemo }});
Object.defineProperty(__vite_ssr_exports__, "withModifiers", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.withModifiers }});
Object.defineProperty(__vite_ssr_exports__, "withScopeId", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.withScopeId }});
Object.defineProperty(__vite_ssr_exports__, "onActivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.onActivated }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.onBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.onBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUpdate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.onBeforeUpdate }});
Object.defineProperty(__vite_ssr_exports__, "onDeactivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.onDeactivated }});
Object.defineProperty(__vite_ssr_exports__, "onErrorCaptured", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.onErrorCaptured }});
Object.defineProperty(__vite_ssr_exports__, "onMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.onMounted }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTracked", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.onRenderTracked }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTriggered", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.onRenderTriggered }});
Object.defineProperty(__vite_ssr_exports__, "onServerPrefetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.onServerPrefetch }});
Object.defineProperty(__vite_ssr_exports__, "onUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.onUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "onUpdated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.onUpdated }});
Object.defineProperty(__vite_ssr_exports__, "computed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.computed }});
Object.defineProperty(__vite_ssr_exports__, "customRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.customRef }});
Object.defineProperty(__vite_ssr_exports__, "isProxy", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.isProxy }});
Object.defineProperty(__vite_ssr_exports__, "isReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.isReactive }});
Object.defineProperty(__vite_ssr_exports__, "isReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.isReadonly }});
Object.defineProperty(__vite_ssr_exports__, "isRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.isRef }});
Object.defineProperty(__vite_ssr_exports__, "markRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.markRaw }});
Object.defineProperty(__vite_ssr_exports__, "proxyRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.proxyRefs }});
Object.defineProperty(__vite_ssr_exports__, "reactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.reactive }});
Object.defineProperty(__vite_ssr_exports__, "readonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.readonly }});
Object.defineProperty(__vite_ssr_exports__, "ref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.ref }});
Object.defineProperty(__vite_ssr_exports__, "shallowReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.shallowReactive }});
Object.defineProperty(__vite_ssr_exports__, "shallowReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.shallowReadonly }});
Object.defineProperty(__vite_ssr_exports__, "shallowRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.shallowRef }});
Object.defineProperty(__vite_ssr_exports__, "toRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.toRaw }});
Object.defineProperty(__vite_ssr_exports__, "toRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.toRef }});
Object.defineProperty(__vite_ssr_exports__, "toRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.toRefs }});
Object.defineProperty(__vite_ssr_exports__, "triggerRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.triggerRef }});
Object.defineProperty(__vite_ssr_exports__, "unref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.unref }});
Object.defineProperty(__vite_ssr_exports__, "watch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.watch }});
Object.defineProperty(__vite_ssr_exports__, "watchEffect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.watchEffect }});
Object.defineProperty(__vite_ssr_exports__, "isShallow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.isShallow }});
Object.defineProperty(__vite_ssr_exports__, "effect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.effect }});
Object.defineProperty(__vite_ssr_exports__, "effectScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.effectScope }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.getCurrentScope }});
Object.defineProperty(__vite_ssr_exports__, "onScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.onScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "defineComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.defineComponent }});
Object.defineProperty(__vite_ssr_exports__, "defineAsyncComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.defineAsyncComponent }});
Object.defineProperty(__vite_ssr_exports__, "resolveComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.resolveComponent }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentInstance", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.getCurrentInstance }});
Object.defineProperty(__vite_ssr_exports__, "h", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.h }});
Object.defineProperty(__vite_ssr_exports__, "inject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.inject }});
Object.defineProperty(__vite_ssr_exports__, "nextTick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.nextTick }});
Object.defineProperty(__vite_ssr_exports__, "provide", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.provide }});
Object.defineProperty(__vite_ssr_exports__, "useAttrs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.useAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useCssModule", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.useCssModule }});
Object.defineProperty(__vite_ssr_exports__, "useCssVars", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.useCssVars }});
Object.defineProperty(__vite_ssr_exports__, "useSlots", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.useSlots }});
Object.defineProperty(__vite_ssr_exports__, "useTransitionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.useTransitionState }});
const __vite_ssr_import_16__ = await __vite_ssr_import__("/node_modules/@vueuse/core/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "computedAsync", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.computedAsync }});
Object.defineProperty(__vite_ssr_exports__, "asyncComputed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.asyncComputed }});
Object.defineProperty(__vite_ssr_exports__, "computedEager", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.computedEager }});
Object.defineProperty(__vite_ssr_exports__, "eagerComputed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.eagerComputed }});
Object.defineProperty(__vite_ssr_exports__, "computedInject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.computedInject }});
Object.defineProperty(__vite_ssr_exports__, "computedWithControl", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.computedWithControl }});
Object.defineProperty(__vite_ssr_exports__, "controlledComputed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.controlledComputed }});
Object.defineProperty(__vite_ssr_exports__, "createEventHook", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.createEventHook }});
Object.defineProperty(__vite_ssr_exports__, "createGlobalState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.createGlobalState }});
Object.defineProperty(__vite_ssr_exports__, "createInjectionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.createInjectionState }});
Object.defineProperty(__vite_ssr_exports__, "createSharedComposable", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.createSharedComposable }});
Object.defineProperty(__vite_ssr_exports__, "createUnrefFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.createUnrefFn }});
Object.defineProperty(__vite_ssr_exports__, "extendRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.extendRef }});
Object.defineProperty(__vite_ssr_exports__, "isDefined", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.isDefined }});
Object.defineProperty(__vite_ssr_exports__, "logicAnd", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.logicAnd }});
Object.defineProperty(__vite_ssr_exports__, "logicNot", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.logicNot }});
Object.defineProperty(__vite_ssr_exports__, "logicOr", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.logicOr }});
Object.defineProperty(__vite_ssr_exports__, "makeDestructurable", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.makeDestructurable }});
Object.defineProperty(__vite_ssr_exports__, "onClickOutside", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.onClickOutside }});
Object.defineProperty(__vite_ssr_exports__, "onKeyStroke", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.onKeyStroke }});
Object.defineProperty(__vite_ssr_exports__, "onLongPress", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.onLongPress }});
Object.defineProperty(__vite_ssr_exports__, "onStartTyping", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.onStartTyping }});
Object.defineProperty(__vite_ssr_exports__, "reactify", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.reactify }});
Object.defineProperty(__vite_ssr_exports__, "createReactiveFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.createReactiveFn }});
Object.defineProperty(__vite_ssr_exports__, "reactifyObject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.reactifyObject }});
Object.defineProperty(__vite_ssr_exports__, "reactiveComputed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.reactiveComputed }});
Object.defineProperty(__vite_ssr_exports__, "reactiveOmit", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.reactiveOmit }});
Object.defineProperty(__vite_ssr_exports__, "reactivePick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.reactivePick }});
Object.defineProperty(__vite_ssr_exports__, "refAutoReset", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.refAutoReset }});
Object.defineProperty(__vite_ssr_exports__, "autoResetRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.autoResetRef }});
Object.defineProperty(__vite_ssr_exports__, "refDebounced", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.refDebounced }});
Object.defineProperty(__vite_ssr_exports__, "useDebounce", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useDebounce }});
Object.defineProperty(__vite_ssr_exports__, "debouncedRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.debouncedRef }});
Object.defineProperty(__vite_ssr_exports__, "refDefault", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.refDefault }});
Object.defineProperty(__vite_ssr_exports__, "refThrottled", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.refThrottled }});
Object.defineProperty(__vite_ssr_exports__, "useThrottle", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useThrottle }});
Object.defineProperty(__vite_ssr_exports__, "throttledRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.throttledRef }});
Object.defineProperty(__vite_ssr_exports__, "refWithControl", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.refWithControl }});
Object.defineProperty(__vite_ssr_exports__, "controlledRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.controlledRef }});
Object.defineProperty(__vite_ssr_exports__, "syncRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.syncRef }});
Object.defineProperty(__vite_ssr_exports__, "syncRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.syncRefs }});
Object.defineProperty(__vite_ssr_exports__, "templateRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.templateRef }});
Object.defineProperty(__vite_ssr_exports__, "toReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.toReactive }});
Object.defineProperty(__vite_ssr_exports__, "tryOnBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.tryOnBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "tryOnBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.tryOnBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "tryOnMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.tryOnMounted }});
Object.defineProperty(__vite_ssr_exports__, "tryOnScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.tryOnScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "tryOnUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.tryOnUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "unrefElement", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.unrefElement }});
Object.defineProperty(__vite_ssr_exports__, "until", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.until }});
Object.defineProperty(__vite_ssr_exports__, "useActiveElement", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useActiveElement }});
Object.defineProperty(__vite_ssr_exports__, "useAsyncQueue", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useAsyncQueue }});
Object.defineProperty(__vite_ssr_exports__, "useAsyncState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useAsyncState }});
Object.defineProperty(__vite_ssr_exports__, "useBase64", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useBase64 }});
Object.defineProperty(__vite_ssr_exports__, "useBattery", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useBattery }});
Object.defineProperty(__vite_ssr_exports__, "useBluetooth", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useBluetooth }});
Object.defineProperty(__vite_ssr_exports__, "useBreakpoints", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useBreakpoints }});
Object.defineProperty(__vite_ssr_exports__, "useBroadcastChannel", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useBroadcastChannel }});
Object.defineProperty(__vite_ssr_exports__, "useBrowserLocation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useBrowserLocation }});
Object.defineProperty(__vite_ssr_exports__, "useCached", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useCached }});
Object.defineProperty(__vite_ssr_exports__, "useClamp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useClamp }});
Object.defineProperty(__vite_ssr_exports__, "useClipboard", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useClipboard }});
Object.defineProperty(__vite_ssr_exports__, "useConfirmDialog", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useConfirmDialog }});
Object.defineProperty(__vite_ssr_exports__, "useCounter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useCounter }});
Object.defineProperty(__vite_ssr_exports__, "useCssVar", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useCssVar }});
Object.defineProperty(__vite_ssr_exports__, "useCurrentElement", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useCurrentElement }});
Object.defineProperty(__vite_ssr_exports__, "useCycleList", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useCycleList }});
Object.defineProperty(__vite_ssr_exports__, "useDark", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useDark }});
Object.defineProperty(__vite_ssr_exports__, "useDateFormat", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useDateFormat }});
Object.defineProperty(__vite_ssr_exports__, "useDebouncedRefHistory", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useDebouncedRefHistory }});
Object.defineProperty(__vite_ssr_exports__, "useDebounceFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useDebounceFn }});
Object.defineProperty(__vite_ssr_exports__, "useDeviceMotion", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useDeviceMotion }});
Object.defineProperty(__vite_ssr_exports__, "useDeviceOrientation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useDeviceOrientation }});
Object.defineProperty(__vite_ssr_exports__, "useDevicePixelRatio", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useDevicePixelRatio }});
Object.defineProperty(__vite_ssr_exports__, "useDevicesList", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useDevicesList }});
Object.defineProperty(__vite_ssr_exports__, "useDisplayMedia", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useDisplayMedia }});
Object.defineProperty(__vite_ssr_exports__, "useDocumentVisibility", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useDocumentVisibility }});
Object.defineProperty(__vite_ssr_exports__, "useDraggable", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useDraggable }});
Object.defineProperty(__vite_ssr_exports__, "useDropZone", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useDropZone }});
Object.defineProperty(__vite_ssr_exports__, "useElementBounding", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useElementBounding }});
Object.defineProperty(__vite_ssr_exports__, "useElementByPoint", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useElementByPoint }});
Object.defineProperty(__vite_ssr_exports__, "useElementHover", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useElementHover }});
Object.defineProperty(__vite_ssr_exports__, "useElementSize", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useElementSize }});
Object.defineProperty(__vite_ssr_exports__, "useElementVisibility", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useElementVisibility }});
Object.defineProperty(__vite_ssr_exports__, "useEventBus", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useEventBus }});
Object.defineProperty(__vite_ssr_exports__, "useEventListener", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useEventListener }});
Object.defineProperty(__vite_ssr_exports__, "useEventSource", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useEventSource }});
Object.defineProperty(__vite_ssr_exports__, "useEyeDropper", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useEyeDropper }});
Object.defineProperty(__vite_ssr_exports__, "useFavicon", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useFavicon }});
Object.defineProperty(__vite_ssr_exports__, "useFileSystemAccess", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useFileSystemAccess }});
Object.defineProperty(__vite_ssr_exports__, "useFocus", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useFocus }});
Object.defineProperty(__vite_ssr_exports__, "useFocusWithin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useFocusWithin }});
Object.defineProperty(__vite_ssr_exports__, "useFps", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useFps }});
Object.defineProperty(__vite_ssr_exports__, "useFullscreen", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useFullscreen }});
Object.defineProperty(__vite_ssr_exports__, "useGamepad", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useGamepad }});
Object.defineProperty(__vite_ssr_exports__, "useGeolocation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useGeolocation }});
Object.defineProperty(__vite_ssr_exports__, "useIdle", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useIdle }});
Object.defineProperty(__vite_ssr_exports__, "useImage", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useImage }});
Object.defineProperty(__vite_ssr_exports__, "useInfiniteScroll", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useInfiniteScroll }});
Object.defineProperty(__vite_ssr_exports__, "useIntersectionObserver", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useIntersectionObserver }});
Object.defineProperty(__vite_ssr_exports__, "useInterval", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useInterval }});
Object.defineProperty(__vite_ssr_exports__, "useIntervalFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useIntervalFn }});
Object.defineProperty(__vite_ssr_exports__, "useKeyModifier", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useKeyModifier }});
Object.defineProperty(__vite_ssr_exports__, "useLastChanged", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useLastChanged }});
Object.defineProperty(__vite_ssr_exports__, "useLocalStorage", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useLocalStorage }});
Object.defineProperty(__vite_ssr_exports__, "useMagicKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useMagicKeys }});
Object.defineProperty(__vite_ssr_exports__, "useManualRefHistory", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useManualRefHistory }});
Object.defineProperty(__vite_ssr_exports__, "useMediaControls", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useMediaControls }});
Object.defineProperty(__vite_ssr_exports__, "useMediaQuery", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useMediaQuery }});
Object.defineProperty(__vite_ssr_exports__, "useMemoize", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useMemoize }});
Object.defineProperty(__vite_ssr_exports__, "useMemory", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useMemory }});
Object.defineProperty(__vite_ssr_exports__, "useMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useMounted }});
Object.defineProperty(__vite_ssr_exports__, "useMouse", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useMouse }});
Object.defineProperty(__vite_ssr_exports__, "useMouseInElement", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useMouseInElement }});
Object.defineProperty(__vite_ssr_exports__, "useMousePressed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useMousePressed }});
Object.defineProperty(__vite_ssr_exports__, "useMutationObserver", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useMutationObserver }});
Object.defineProperty(__vite_ssr_exports__, "useNavigatorLanguage", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useNavigatorLanguage }});
Object.defineProperty(__vite_ssr_exports__, "useNetwork", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useNetwork }});
Object.defineProperty(__vite_ssr_exports__, "useNow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useNow }});
Object.defineProperty(__vite_ssr_exports__, "useOffsetPagination", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useOffsetPagination }});
Object.defineProperty(__vite_ssr_exports__, "useOnline", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useOnline }});
Object.defineProperty(__vite_ssr_exports__, "usePageLeave", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.usePageLeave }});
Object.defineProperty(__vite_ssr_exports__, "useParallax", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useParallax }});
Object.defineProperty(__vite_ssr_exports__, "usePermission", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.usePermission }});
Object.defineProperty(__vite_ssr_exports__, "usePointer", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.usePointer }});
Object.defineProperty(__vite_ssr_exports__, "usePointerSwipe", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.usePointerSwipe }});
Object.defineProperty(__vite_ssr_exports__, "usePreferredColorScheme", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.usePreferredColorScheme }});
Object.defineProperty(__vite_ssr_exports__, "usePreferredDark", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.usePreferredDark }});
Object.defineProperty(__vite_ssr_exports__, "usePreferredLanguages", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.usePreferredLanguages }});
Object.defineProperty(__vite_ssr_exports__, "useRafFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useRafFn }});
Object.defineProperty(__vite_ssr_exports__, "useRefHistory", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useRefHistory }});
Object.defineProperty(__vite_ssr_exports__, "useResizeObserver", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useResizeObserver }});
Object.defineProperty(__vite_ssr_exports__, "useScreenOrientation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useScreenOrientation }});
Object.defineProperty(__vite_ssr_exports__, "useScreenSafeArea", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useScreenSafeArea }});
Object.defineProperty(__vite_ssr_exports__, "useScriptTag", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useScriptTag }});
Object.defineProperty(__vite_ssr_exports__, "useScroll", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useScroll }});
Object.defineProperty(__vite_ssr_exports__, "useScrollLock", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useScrollLock }});
Object.defineProperty(__vite_ssr_exports__, "useSessionStorage", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useSessionStorage }});
Object.defineProperty(__vite_ssr_exports__, "useShare", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useShare }});
Object.defineProperty(__vite_ssr_exports__, "useSpeechRecognition", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useSpeechRecognition }});
Object.defineProperty(__vite_ssr_exports__, "useSpeechSynthesis", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useSpeechSynthesis }});
Object.defineProperty(__vite_ssr_exports__, "useStorageAsync", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useStorageAsync }});
Object.defineProperty(__vite_ssr_exports__, "useStyleTag", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useStyleTag }});
Object.defineProperty(__vite_ssr_exports__, "useSwipe", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useSwipe }});
Object.defineProperty(__vite_ssr_exports__, "useTemplateRefsList", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useTemplateRefsList }});
Object.defineProperty(__vite_ssr_exports__, "useTextSelection", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useTextSelection }});
Object.defineProperty(__vite_ssr_exports__, "useThrottledRefHistory", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useThrottledRefHistory }});
Object.defineProperty(__vite_ssr_exports__, "useThrottleFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useThrottleFn }});
Object.defineProperty(__vite_ssr_exports__, "useTimeAgo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useTimeAgo }});
Object.defineProperty(__vite_ssr_exports__, "useTimeout", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useTimeout }});
Object.defineProperty(__vite_ssr_exports__, "useTimeoutFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useTimeoutFn }});
Object.defineProperty(__vite_ssr_exports__, "useTimeoutPoll", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useTimeoutPoll }});
Object.defineProperty(__vite_ssr_exports__, "useTimestamp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useTimestamp }});
Object.defineProperty(__vite_ssr_exports__, "useToggle", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useToggle }});
Object.defineProperty(__vite_ssr_exports__, "useTransition", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useTransition }});
Object.defineProperty(__vite_ssr_exports__, "useUrlSearchParams", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useUrlSearchParams }});
Object.defineProperty(__vite_ssr_exports__, "useUserMedia", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useUserMedia }});
Object.defineProperty(__vite_ssr_exports__, "useVibrate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useVibrate }});
Object.defineProperty(__vite_ssr_exports__, "useVirtualList", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useVirtualList }});
Object.defineProperty(__vite_ssr_exports__, "useVModel", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useVModel }});
Object.defineProperty(__vite_ssr_exports__, "useVModels", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useVModels }});
Object.defineProperty(__vite_ssr_exports__, "useWakeLock", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useWakeLock }});
Object.defineProperty(__vite_ssr_exports__, "useWebNotification", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useWebNotification }});
Object.defineProperty(__vite_ssr_exports__, "useWebSocket", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useWebSocket }});
Object.defineProperty(__vite_ssr_exports__, "useWebWorker", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useWebWorker }});
Object.defineProperty(__vite_ssr_exports__, "useWebWorkerFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useWebWorkerFn }});
Object.defineProperty(__vite_ssr_exports__, "useWindowFocus", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useWindowFocus }});
Object.defineProperty(__vite_ssr_exports__, "useWindowScroll", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useWindowScroll }});
Object.defineProperty(__vite_ssr_exports__, "useWindowSize", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.useWindowSize }});
Object.defineProperty(__vite_ssr_exports__, "watchAtMost", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.watchAtMost }});
Object.defineProperty(__vite_ssr_exports__, "watchDebounced", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.watchDebounced }});
Object.defineProperty(__vite_ssr_exports__, "debouncedWatch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.debouncedWatch }});
Object.defineProperty(__vite_ssr_exports__, "watchIgnorable", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.watchIgnorable }});
Object.defineProperty(__vite_ssr_exports__, "ignorableWatch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.ignorableWatch }});
Object.defineProperty(__vite_ssr_exports__, "watchOnce", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.watchOnce }});
Object.defineProperty(__vite_ssr_exports__, "watchPausable", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.watchPausable }});
Object.defineProperty(__vite_ssr_exports__, "pausableWatch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.pausableWatch }});
Object.defineProperty(__vite_ssr_exports__, "watchThrottled", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.watchThrottled }});
Object.defineProperty(__vite_ssr_exports__, "throttledWatch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.throttledWatch }});
Object.defineProperty(__vite_ssr_exports__, "watchWithFilter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.watchWithFilter }});
Object.defineProperty(__vite_ssr_exports__, "whenever", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.whenever }});
const __vite_ssr_import_17__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/query.mjs");

Object.defineProperty(__vite_ssr_exports__, "queryContent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_17__.queryContent }});
const __vite_ssr_import_18__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/helpers.mjs");

Object.defineProperty(__vite_ssr_exports__, "useContentHelpers", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_18__.useContentHelpers }});
const __vite_ssr_import_19__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/head.mjs");

Object.defineProperty(__vite_ssr_exports__, "useContentHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_19__.useContentHead }});
const __vite_ssr_import_20__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs");

Object.defineProperty(__vite_ssr_exports__, "withContentBase", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_20__.withContentBase }});
Object.defineProperty(__vite_ssr_exports__, "useUnwrap", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_20__.useUnwrap }});
Object.defineProperty(__vite_ssr_exports__, "useContentState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_20__.useContentDisabled }});
Object.defineProperty(__vite_ssr_exports__, "useContent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_20__.useContentDisabled }});
const __vite_ssr_import_21__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs");

Object.defineProperty(__vite_ssr_exports__, "fetchContentNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_21__.fetchContentNavigation }});
const __vite_ssr_import_22__ = await __vite_ssr_import__("/node_modules/@nuxtjs/color-mode/dist/runtime/composables.mjs");

Object.defineProperty(__vite_ssr_exports__, "useColorMode", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_22__.useColorMode }});
const __vite_ssr_import_23__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_23__.definePageMeta }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// - /node_modules/@vueuse/shared/index.mjs ($id_d77aacc8)
// - /node_modules/@vueuse/core/index.mjs ($id_e8934cdc)
// Dependencies: 
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// --------------------
const $id_a8110be7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_0c5717a4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /node_modules/@vueuse/core/index.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// - /node_modules/@nuxt/ui/dist/components/nuxt/NDarkToggle.vue ($id_fd053068)
// Dependencies: 
// - /node_modules/@vueuse/shared/index.mjs ($id_d77aacc8)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// --------------------
const $id_e8934cdc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/shared/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@vueuse/shared/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");


function computedAsync(evaluationCallback, initialState, optionsOrRef) {
  let options;
  if (__vite_ssr_import_1__.isRef(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef
    };
  } else {
    options = optionsOrRef || {};
  }
  const {
    lazy = false,
    evaluating = void 0,
    onError = __vite_ssr_import_0__.noop
  } = options;
  const started = __vite_ssr_import_1__.ref(!lazy);
  const current = __vite_ssr_import_1__.ref(initialState);
  let counter = 0;
  __vite_ssr_import_1__.watchEffect(async (onInvalidate) => {
    if (!started.value)
      return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    if (evaluating) {
      Promise.resolve().then(() => {
        evaluating.value = true;
      });
    }
    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating)
            evaluating.value = false;
          if (!hasFinished)
            cancelCallback();
        });
      });
      if (counterAtBeginning === counter)
        current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating && counterAtBeginning === counter)
        evaluating.value = false;
      hasFinished = true;
    }
  });
  if (lazy) {
    return __vite_ssr_import_1__.computed(() => {
      started.value = true;
      return current.value;
    });
  } else {
    return current;
  }
}

function computedInject(key, options, defaultSource, treatDefaultAsFactory) {
  let source = __vite_ssr_import_1__.inject(key);
  if (defaultSource)
    source = __vite_ssr_import_1__.inject(key, defaultSource);
  if (treatDefaultAsFactory)
    source = __vite_ssr_import_1__.inject(key, defaultSource, treatDefaultAsFactory);
  if (typeof options === "function") {
    return __vite_ssr_import_1__.computed((ctx) => options(source, ctx));
  } else {
    return __vite_ssr_import_1__.computed({
      get: (ctx) => options.get(source, ctx),
      set: options.set
    });
  }
}

const createUnrefFn = (fn) => {
  return function(...args) {
    return fn.apply(this, args.map((i) => __vite_ssr_import_1__.unref(i)));
  };
};

function unrefElement(elRef) {
  var _a;
  const plain = __vite_ssr_import_1__.unref(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

const defaultWindow = __vite_ssr_import_0__.isClient ? window : void 0;
const defaultDocument = __vite_ssr_import_0__.isClient ? window.document : void 0;
const defaultNavigator = __vite_ssr_import_0__.isClient ? window.navigator : void 0;
const defaultLocation = __vite_ssr_import_0__.isClient ? window.location : void 0;

function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (__vite_ssr_import_0__.isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return __vite_ssr_import_0__.noop;
  let cleanup = __vite_ssr_import_0__.noop;
  const stopWatch = __vite_ssr_import_1__.watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = __vite_ssr_import_0__.noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  __vite_ssr_import_0__.tryOnScopeDispose(stop);
  return stop;
}

function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow, ignore, capture = true } = options;
  if (!window)
    return;
  const shouldListen = __vite_ssr_import_1__.ref(true);
  let fallback;
  const listener = (event) => {
    window.clearTimeout(fallback);
    const el = unrefElement(target);
    const composedPath = event.composedPath();
    if (!el || el === event.target || composedPath.includes(el) || !shouldListen.value)
      return;
    if (ignore && ignore.length > 0) {
      if (ignore.some((target2) => {
        const el2 = unrefElement(target2);
        return el2 && (event.target === el2 || composedPath.includes(el2));
      }))
        return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window, "click", listener, { passive: true, capture }),
    useEventListener(window, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e.composedPath().includes(el);
    }, { passive: true }),
    useEventListener(window, "pointerup", (e) => {
      if (e.button === 0) {
        const path = e.composedPath();
        e.composedPath = () => path;
        fallback = window.setTimeout(() => listener(e), 50);
      }
    }, { passive: true })
  ];
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}

var __defProp$i = Object.defineProperty;
var __defProps$8 = Object.defineProperties;
var __getOwnPropDescs$8 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$k = Object.getOwnPropertySymbols;
var __hasOwnProp$k = Object.prototype.hasOwnProperty;
var __propIsEnum$k = Object.prototype.propertyIsEnumerable;
var __defNormalProp$i = (obj, key, value) => key in obj ? __defProp$i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$i = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$k.call(b, prop))
      __defNormalProp$i(a, prop, b[prop]);
  if (__getOwnPropSymbols$k)
    for (var prop of __getOwnPropSymbols$k(b)) {
      if (__propIsEnum$k.call(b, prop))
        __defNormalProp$i(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$8 = (a, b) => __defProps$8(a, __getOwnPropDescs$8(b));
const createKeyPredicate = (keyFilter) => {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  else if (keyFilter)
    return () => true;
  else
    return () => false;
};
function onKeyStroke(key, handler, options = {}) {
  const { target = defaultWindow, eventName = "keydown", passive = false } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function onKeyDown(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$8(__spreadValues$i({}, options), { eventName: "keydown" }));
}
function onKeyPressed(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$8(__spreadValues$i({}, options), { eventName: "keypress" }));
}
function onKeyUp(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$8(__spreadValues$i({}, options), { eventName: "keyup" }));
}

const DEFAULT_DELAY = 500;
function onLongPress(target, handler, options) {
  const elementRef = __vite_ssr_import_1__.computed(() => unrefElement(target));
  let timeout = null;
  function clear() {
    if (timeout != null) {
      clearTimeout(timeout);
      timeout = null;
    }
  }
  function onDown(ev) {
    var _a;
    clear();
    timeout = setTimeout(() => handler(ev), (_a = options == null ? void 0 : options.delay) != null ? _a : DEFAULT_DELAY);
  }
  useEventListener(elementRef, "pointerdown", onDown);
  useEventListener(elementRef, "pointerup", clear);
  useEventListener(elementRef, "pointerleave", clear);
}

const isFocusedElementEditable = () => {
  const { activeElement, body } = document;
  if (!activeElement)
    return false;
  if (activeElement === body)
    return false;
  switch (activeElement.tagName) {
    case "INPUT":
    case "TEXTAREA":
      return true;
  }
  return activeElement.hasAttribute("contenteditable");
};
const isTypedCharValid = ({
  keyCode,
  metaKey,
  ctrlKey,
  altKey
}) => {
  if (metaKey || ctrlKey || altKey)
    return false;
  if (keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105)
    return true;
  if (keyCode >= 65 && keyCode <= 90)
    return true;
  return false;
};
function onStartTyping(callback, options = {}) {
  const { document: document2 = defaultDocument } = options;
  const keydown = (event) => {
    !isFocusedElementEditable() && isTypedCharValid(event) && callback(event);
  };
  if (document2)
    useEventListener(document2, "keydown", keydown, { passive: true });
}

function templateRef(key, initialValue = null) {
  const instance = __vite_ssr_import_1__.getCurrentInstance();
  let _trigger = () => {
  };
  const element = __vite_ssr_import_1__.customRef((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        var _a, _b;
        track();
        return (_b = (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$refs[key]) != null ? _b : initialValue;
      },
      set() {
      }
    };
  });
  __vite_ssr_import_0__.tryOnMounted(_trigger);
  __vite_ssr_import_1__.onUpdated(_trigger);
  return element;
}

function useActiveElement(options = {}) {
  const { window = defaultWindow } = options;
  const counter = __vite_ssr_import_1__.ref(0);
  if (window) {
    useEventListener(window, "blur", () => counter.value += 1, true);
    useEventListener(window, "focus", () => counter.value += 1, true);
  }
  return __vite_ssr_import_1__.computed(() => {
    counter.value;
    return window == null ? void 0 : window.document.activeElement;
  });
}

function useAsyncQueue(tasks, options = {}) {
  const {
    interrupt = true,
    onError = __vite_ssr_import_0__.noop,
    onFinished = __vite_ssr_import_0__.noop
  } = options;
  const promiseState = {
    pending: "pending",
    rejected: "rejected",
    fulfilled: "fulfilled"
  };
  const initialResult = Array.from(new Array(tasks.length), () => ({ state: promiseState.pending, data: null }));
  const result = __vite_ssr_import_1__.reactive(initialResult);
  const activeIndex = __vite_ssr_import_1__.ref(-1);
  if (!tasks || tasks.length === 0) {
    onFinished();
    return {
      activeIndex,
      result
    };
  }
  function updateResult(state, res) {
    activeIndex.value++;
    result[activeIndex.value].data = res;
    result[activeIndex.value].state = state;
  }
  tasks.reduce((prev, curr) => {
    return prev.then((prevRes) => {
      var _a;
      if (((_a = result[activeIndex.value]) == null ? void 0 : _a.state) === promiseState.rejected && interrupt) {
        onFinished();
        return;
      }
      return curr(prevRes).then((currentRes) => {
        updateResult(promiseState.fulfilled, currentRes);
        activeIndex.value === tasks.length - 1 && onFinished();
        return currentRes;
      });
    }).catch((e) => {
      updateResult(promiseState.rejected, e);
      onError();
      return e;
    });
  }, Promise.resolve());
  return {
    activeIndex,
    result
  };
}

function useAsyncState(promise, initialState, options) {
  const {
    immediate = true,
    delay = 0,
    onError = __vite_ssr_import_0__.noop,
    resetOnExecute = true,
    shallow = true
  } = options != null ? options : {};
  const state = shallow ? __vite_ssr_import_1__.shallowRef(initialState) : __vite_ssr_import_1__.ref(initialState);
  const isReady = __vite_ssr_import_1__.ref(false);
  const isLoading = __vite_ssr_import_1__.ref(false);
  const error = __vite_ssr_import_1__.ref(void 0);
  async function execute(delay2 = 0, ...args) {
    if (resetOnExecute)
      state.value = initialState;
    error.value = void 0;
    isReady.value = false;
    isLoading.value = true;
    if (delay2 > 0)
      await __vite_ssr_import_0__.promiseTimeout(delay2);
    const _promise = typeof promise === "function" ? promise(...args) : promise;
    try {
      const data = await _promise;
      state.value = data;
      isReady.value = true;
    } catch (e) {
      error.value = e;
      onError(e);
    } finally {
      isLoading.value = false;
    }
    return state.value;
  }
  if (immediate)
    execute(delay);
  return {
    state,
    isReady,
    isLoading,
    error,
    execute
  };
}

function useBase64(target, options) {
  const base64 = __vite_ssr_import_1__.ref("");
  const promise = __vite_ssr_import_1__.ref();
  function execute() {
    if (!__vite_ssr_import_0__.isClient)
      return;
    promise.value = new Promise((resolve, reject) => {
      try {
        const _target = __vite_ssr_import_1__.unref(target);
        if (_target === void 0 || _target === null) {
          resolve("");
        } else if (typeof _target === "string") {
          resolve(blobToBase64(new Blob([_target], { type: "text/plain" })));
        } else if (_target instanceof Blob) {
          resolve(blobToBase64(_target));
        } else if (_target instanceof ArrayBuffer) {
          resolve(window.btoa(String.fromCharCode(...new Uint8Array(_target))));
        } else if (_target instanceof HTMLCanvasElement) {
          resolve(_target.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
        } else if (_target instanceof HTMLImageElement) {
          const img = _target.cloneNode(false);
          img.crossOrigin = "Anonymous";
          imgLoaded(img).then(() => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
          }).catch(reject);
        } else {
          reject(new Error("target is unsupported types"));
        }
      } catch (error) {
        reject(error);
      }
    });
    promise.value.then((res) => base64.value = res);
    return promise.value;
  }
  __vite_ssr_import_1__.watch(target, execute, { immediate: true });
  return {
    base64,
    promise,
    execute
  };
}
function imgLoaded(img) {
  return new Promise((resolve, reject) => {
    if (!img.complete) {
      img.onload = () => {
        resolve();
      };
      img.onerror = reject;
    } else {
      resolve();
    }
  });
}
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = (e) => {
      resolve(e.target.result);
    };
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

function useBattery({ navigator = defaultNavigator } = {}) {
  const events = ["chargingchange", "chargingtimechange", "dischargingtimechange", "levelchange"];
  const isSupported = navigator && "getBattery" in navigator;
  const charging = __vite_ssr_import_1__.ref(false);
  const chargingTime = __vite_ssr_import_1__.ref(0);
  const dischargingTime = __vite_ssr_import_1__.ref(0);
  const level = __vite_ssr_import_1__.ref(1);
  let battery;
  function updateBatteryInfo() {
    charging.value = this.charging;
    chargingTime.value = this.chargingTime || 0;
    dischargingTime.value = this.dischargingTime || 0;
    level.value = this.level;
  }
  if (isSupported) {
    navigator.getBattery().then((_battery) => {
      battery = _battery;
      updateBatteryInfo.call(battery);
      for (const event of events)
        useEventListener(battery, event, updateBatteryInfo, { passive: true });
    });
  }
  return {
    isSupported,
    charging,
    chargingTime,
    dischargingTime,
    level
  };
}

function useBluetooth(options) {
  let {
    acceptAllDevices = false
  } = options || {};
  const {
    filters = void 0,
    optionalServices = void 0,
    navigator = defaultNavigator
  } = options || {};
  const isSupported = navigator && "bluetooth" in navigator;
  const device = __vite_ssr_import_1__.ref(void 0);
  const error = __vite_ssr_import_1__.ref(null);
  __vite_ssr_import_1__.watch(device, () => {
    connectToBluetoothGATTServer();
  });
  async function requestDevice() {
    if (!isSupported)
      return;
    error.value = null;
    if (filters && filters.length > 0)
      acceptAllDevices = false;
    try {
      device.value = await (navigator == null ? void 0 : navigator.bluetooth.requestDevice({
        acceptAllDevices,
        filters,
        optionalServices
      }));
    } catch (err) {
      error.value = err;
    }
  }
  const server = __vite_ssr_import_1__.ref();
  const isConnected = __vite_ssr_import_1__.computed(() => {
    var _a;
    return ((_a = server.value) == null ? void 0 : _a.connected) || false;
  });
  async function connectToBluetoothGATTServer() {
    error.value = null;
    if (device.value && device.value.gatt) {
      device.value.addEventListener("gattserverdisconnected", () => {
      });
      try {
        server.value = await device.value.gatt.connect();
      } catch (err) {
        error.value = err;
      }
    }
  }
  __vite_ssr_import_0__.tryOnMounted(() => {
    var _a;
    if (device.value)
      (_a = device.value.gatt) == null ? void 0 : _a.connect();
  });
  __vite_ssr_import_0__.tryOnScopeDispose(() => {
    var _a;
    if (device.value)
      (_a = device.value.gatt) == null ? void 0 : _a.disconnect();
  });
  return {
    isSupported,
    isConnected,
    device,
    requestDevice,
    server,
    error
  };
}

function useMediaQuery(query, options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = Boolean(window && "matchMedia" in window);
  let mediaQuery;
  const matches = __vite_ssr_import_1__.ref(false);
  const update = () => {
    if (!isSupported)
      return;
    if (!mediaQuery)
      mediaQuery = window.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  __vite_ssr_import_0__.tryOnBeforeMount(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    __vite_ssr_import_0__.tryOnScopeDispose(() => {
      if ("removeEventListener" in mediaQuery)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches;
}

const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
const breakpointsBootstrapV5 = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
const breakpointsVuetify = {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904
};
const breakpointsAntDesign = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
const breakpointsQuasar = {
  xs: 600,
  sm: 1024,
  md: 1440,
  lg: 1920
};
const breakpointsSematic = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop4K: 2560
};

var __defProp$h = Object.defineProperty;
var __getOwnPropSymbols$j = Object.getOwnPropertySymbols;
var __hasOwnProp$j = Object.prototype.hasOwnProperty;
var __propIsEnum$j = Object.prototype.propertyIsEnumerable;
var __defNormalProp$h = (obj, key, value) => key in obj ? __defProp$h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$h = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$j.call(b, prop))
      __defNormalProp$h(a, prop, b[prop]);
  if (__getOwnPropSymbols$j)
    for (var prop of __getOwnPropSymbols$j(b)) {
      if (__propIsEnum$j.call(b, prop))
        __defNormalProp$h(a, prop, b[prop]);
    }
  return a;
};
function useBreakpoints(breakpoints, options = {}) {
  function getValue(k, delta) {
    let v = breakpoints[k];
    if (delta != null)
      v = __vite_ssr_import_0__.increaseWithUnit(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window = defaultWindow } = options;
  function match(query) {
    if (!window)
      return false;
    return window.matchMedia(query).matches;
  }
  const greater = (k) => {
    return useMediaQuery(`(min-width: ${getValue(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => greater(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  return __spreadValues$h({
    greater,
    smaller(k) {
      return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options);
    },
    between(a, b) {
      return useMediaQuery(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`, options);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue(k, -0.1)})`);
    },
    isInBetween(a, b) {
      return match(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
    }
  }, shortcutMethods);
}

const useBroadcastChannel = (options) => {
  const {
    name,
    window = defaultWindow
  } = options;
  const isSupported = window && "BroadcastChannel" in window;
  const isClosed = __vite_ssr_import_1__.ref(false);
  const channel = __vite_ssr_import_1__.ref();
  const data = __vite_ssr_import_1__.ref();
  const error = __vite_ssr_import_1__.ref(null);
  const post = (data2) => {
    if (channel.value)
      channel.value.postMessage(data2);
  };
  const close = () => {
    if (channel.value)
      channel.value.close();
    isClosed.value = true;
  };
  if (isSupported) {
    __vite_ssr_import_0__.tryOnMounted(() => {
      error.value = null;
      channel.value = new BroadcastChannel(name);
      channel.value.addEventListener("message", (e) => {
        data.value = e.data;
      }, { passive: true });
      channel.value.addEventListener("messageerror", (e) => {
        error.value = e;
      }, { passive: true });
      channel.value.addEventListener("close", () => {
        isClosed.value = true;
      });
    });
  }
  __vite_ssr_import_0__.tryOnScopeDispose(() => {
    close();
  });
  return {
    isSupported,
    channel,
    data,
    post,
    close,
    error,
    isClosed
  };
};

function useBrowserLocation({ window = defaultWindow } = {}) {
  const buildState = (trigger) => {
    const { state: state2, length } = (window == null ? void 0 : window.history) || {};
    const { hash, host, hostname, href, origin, pathname, port, protocol, search } = (window == null ? void 0 : window.location) || {};
    return {
      trigger,
      state: state2,
      length,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    };
  };
  const state = __vite_ssr_import_1__.ref(buildState("load"));
  if (window) {
    useEventListener(window, "popstate", () => state.value = buildState("popstate"), { passive: true });
    useEventListener(window, "hashchange", () => state.value = buildState("hashchange"), { passive: true });
  }
  return state;
}

function useCached(refValue, comparator = (a, b) => a === b, watchOptions) {
  const cachedValue = __vite_ssr_import_1__.ref(refValue.value);
  __vite_ssr_import_1__.watch(() => refValue.value, (value) => {
    if (!comparator(value, cachedValue.value))
      cachedValue.value = value;
  }, watchOptions);
  return cachedValue;
}

function useClamp(value, min, max) {
  const _value = __vite_ssr_import_1__.ref(value);
  return __vite_ssr_import_1__.computed({
    get() {
      return _value.value = __vite_ssr_import_0__.clamp(_value.value, __vite_ssr_import_1__.unref(min), __vite_ssr_import_1__.unref(max));
    },
    set(value2) {
      _value.value = __vite_ssr_import_0__.clamp(value2, __vite_ssr_import_1__.unref(min), __vite_ssr_import_1__.unref(max));
    }
  });
}

function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500
  } = options;
  const events = ["copy", "cut"];
  const isSupported = Boolean(navigator && "clipboard" in navigator);
  const text = __vite_ssr_import_1__.ref("");
  const copied = __vite_ssr_import_1__.ref(false);
  const timeout = __vite_ssr_import_0__.useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    navigator.clipboard.readText().then((value) => {
      text.value = value;
    });
  }
  if (isSupported && read) {
    for (const event of events)
      useEventListener(event, updateText);
  }
  async function copy(value = __vite_ssr_import_1__.unref(source)) {
    if (isSupported && value != null) {
      await navigator.clipboard.writeText(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}

const _global = typeof globalThis !== "undefined" ? globalThis : "undefined" !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function setSSRHandler(key, fn) {
  handlers[key] = fn;
}

function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : Array.isArray(rawInit) ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}

const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
function useStorage(key, initialValue, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? __vite_ssr_import_1__.shallowRef : __vite_ssr_import_1__.ref)(initialValue);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = __vite_ssr_import_1__.unref(initialValue);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = __vite_ssr_import_0__.pausableWatch(data, () => write(data.value), { flush, deep, eventFilter });
  if (window && listenToStorageChanges)
    useEventListener(window, "storage", update);
  update();
  return data;
  function write(v) {
    try {
      if (v == null)
        storage.removeItem(key);
      else
        storage.setItem(key, serializer.write(v));
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        if (writeDefaults && rawInit !== null)
          storage.setItem(key, serializer.write(rawInit));
        return rawInit;
      } else if (typeof rawValue !== "string") {
        return rawValue;
      } else {
        return serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    } finally {
      resumeWatch();
    }
  }
  function update(event) {
    if (event && event.key !== key)
      return;
    data.value = read(event);
  }
}

function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}

var __defProp$g = Object.defineProperty;
var __getOwnPropSymbols$i = Object.getOwnPropertySymbols;
var __hasOwnProp$i = Object.prototype.hasOwnProperty;
var __propIsEnum$i = Object.prototype.propertyIsEnumerable;
var __defNormalProp$g = (obj, key, value) => key in obj ? __defProp$g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$g = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$i.call(b, prop))
      __defNormalProp$g(a, prop, b[prop]);
  if (__getOwnPropSymbols$i)
    for (var prop of __getOwnPropSymbols$i(b)) {
      if (__propIsEnum$i.call(b, prop))
        __defNormalProp$g(a, prop, b[prop]);
    }
  return a;
};
function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    window = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef
  } = options;
  const modes = __spreadValues$g({
    auto: "",
    light: "light",
    dark: "dark"
  }, options.modes || {});
  const preferredDark = usePreferredDark({ window });
  const preferredMode = __vite_ssr_import_1__.computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? __vite_ssr_import_1__.ref("auto") : useStorage(storageKey, "auto", storage, { window, listenToStorageChanges }));
  const state = __vite_ssr_import_1__.computed({
    get() {
      return store.value === "auto" ? preferredMode.value : store.value;
    },
    set(v) {
      store.value = v;
    }
  });
  const updateHTMLAttrs = getSSRHandler("updateHTMLAttrs", (selector2, attribute2, value) => {
    const el = window == null ? void 0 : window.document.querySelector(selector2);
    if (!el)
      return;
    if (attribute2 === "class") {
      const current = value.split(/\s/g);
      Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
        if (current.includes(v))
          el.classList.add(v);
        else
          el.classList.remove(v);
      });
    } else {
      el.setAttribute(attribute2, value);
    }
  });
  function defaultOnChanged(mode) {
    var _a;
    updateHTMLAttrs(selector, attribute, (_a = modes[mode]) != null ? _a : mode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  __vite_ssr_import_1__.watch(state, onChanged, { flush: "post", immediate: true });
  __vite_ssr_import_0__.tryOnMounted(() => onChanged(state.value));
  return state;
}

function useConfirmDialog(revealed = __vite_ssr_import_1__.ref(false)) {
  const confirmHook = __vite_ssr_import_0__.createEventHook();
  const cancelHook = __vite_ssr_import_0__.createEventHook();
  const revealHook = __vite_ssr_import_0__.createEventHook();
  let _resolve = __vite_ssr_import_0__.noop;
  const reveal = (data) => {
    revealHook.trigger(data);
    revealed.value = true;
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  };
  const confirm = (data) => {
    revealed.value = false;
    confirmHook.trigger(data);
    _resolve({ data, isCanceled: false });
  };
  const cancel = (data) => {
    revealed.value = false;
    cancelHook.trigger(data);
    _resolve({ data, isCanceled: true });
  };
  return {
    isRevealed: __vite_ssr_import_1__.computed(() => revealed.value),
    reveal,
    confirm,
    cancel,
    onReveal: revealHook.on,
    onConfirm: confirmHook.on,
    onCancel: cancelHook.on
  };
}

function useCssVar(prop, target, { window = defaultWindow, initialValue = "" } = {}) {
  const variable = __vite_ssr_import_1__.ref(initialValue);
  const elRef = __vite_ssr_import_1__.computed(() => {
    var _a;
    return unrefElement(target) || ((_a = window == null ? void 0 : window.document) == null ? void 0 : _a.documentElement);
  });
  __vite_ssr_import_1__.watch([elRef, () => __vite_ssr_import_1__.unref(prop)], ([el, prop2]) => {
    if (el && window) {
      const value = window.getComputedStyle(el).getPropertyValue(prop2);
      variable.value = value || initialValue;
    }
  }, { immediate: true });
  __vite_ssr_import_1__.watch(variable, (val) => {
    var _a;
    if ((_a = elRef.value) == null ? void 0 : _a.style)
      elRef.value.style.setProperty(__vite_ssr_import_1__.unref(prop), val);
  });
  return variable;
}

function useCurrentElement() {
  const vm = __vite_ssr_import_1__.getCurrentInstance();
  const count = __vite_ssr_import_1__.ref(0);
  __vite_ssr_import_1__.onUpdated(() => {
    count.value += 1;
  });
  __vite_ssr_import_1__.onMounted(() => {
    count.value += 1;
  });
  return __vite_ssr_import_1__.computed(() => {
    count.value;
    return vm.proxy.$el;
  });
}

function useCycleList(list, options) {
  var _a;
  const state = __vite_ssr_import_1__.shallowRef((_a = options == null ? void 0 : options.initialValue) != null ? _a : list[0]);
  const index = __vite_ssr_import_1__.computed({
    get() {
      var _a2;
      let index2 = (options == null ? void 0 : options.getIndexOf) ? options.getIndexOf(state.value, list) : list.indexOf(state.value);
      if (index2 < 0)
        index2 = (_a2 = options == null ? void 0 : options.fallbackIndex) != null ? _a2 : 0;
      return index2;
    },
    set(v) {
      set(v);
    }
  });
  function set(i) {
    const length = list.length;
    const index2 = (i % length + length) % length;
    const value = list[index2];
    state.value = value;
    return value;
  }
  function shift(delta = 1) {
    return set(index.value + delta);
  }
  function next(n = 1) {
    return shift(n);
  }
  function prev(n = 1) {
    return shift(-n);
  }
  return {
    state,
    index,
    next,
    prev
  };
}

var __defProp$f = Object.defineProperty;
var __defProps$7 = Object.defineProperties;
var __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$h = Object.getOwnPropertySymbols;
var __hasOwnProp$h = Object.prototype.hasOwnProperty;
var __propIsEnum$h = Object.prototype.propertyIsEnumerable;
var __defNormalProp$f = (obj, key, value) => key in obj ? __defProp$f(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$f = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$h.call(b, prop))
      __defNormalProp$f(a, prop, b[prop]);
  if (__getOwnPropSymbols$h)
    for (var prop of __getOwnPropSymbols$h(b)) {
      if (__propIsEnum$h.call(b, prop))
        __defNormalProp$f(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$7 = (a, b) => __defProps$7(a, __getOwnPropDescs$7(b));
function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = "",
    window = defaultWindow
  } = options;
  const mode = useColorMode(__spreadProps$7(__spreadValues$f({}, options), {
    onChanged: (mode2, defaultHandler) => {
      var _a;
      if (options.onChanged)
        (_a = options.onChanged) == null ? void 0 : _a.call(options, mode2 === "dark");
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  }));
  const preferredDark = usePreferredDark({ window });
  const isDark = __vite_ssr_import_1__.computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      if (v === preferredDark.value)
        mode.value = "auto";
      else
        mode.value = v ? "dark" : "light";
    }
  });
  return isDark;
}

const fnClone = (v) => JSON.parse(JSON.stringify(v));
const fnBypass = (v) => v;
const fnSetSource = (source, value) => source.value = value;
function defaultDump(clone) {
  return clone ? __vite_ssr_import_0__.isFunction(clone) ? clone : fnClone : fnBypass;
}
function defaultParse(clone) {
  return clone ? __vite_ssr_import_0__.isFunction(clone) ? clone : fnClone : fnBypass;
}
function useManualRefHistory(source, options = {}) {
  const {
    clone = false,
    dump = defaultDump(clone),
    parse = defaultParse(clone),
    setSource = fnSetSource
  } = options;
  function _createHistoryRecord() {
    return __vite_ssr_import_1__.markRaw({
      snapshot: dump(source.value),
      timestamp: __vite_ssr_import_0__.timestamp()
    });
  }
  const last = __vite_ssr_import_1__.ref(_createHistoryRecord());
  const undoStack = __vite_ssr_import_1__.ref([]);
  const redoStack = __vite_ssr_import_1__.ref([]);
  const _setSource = (record) => {
    setSource(source, parse(record.snapshot));
    last.value = record;
  };
  const commit = () => {
    undoStack.value.unshift(last.value);
    last.value = _createHistoryRecord();
    if (options.capacity && undoStack.value.length > options.capacity)
      undoStack.value.splice(options.capacity, Infinity);
    if (redoStack.value.length)
      redoStack.value.splice(0, redoStack.value.length);
  };
  const clear = () => {
    undoStack.value.splice(0, undoStack.value.length);
    redoStack.value.splice(0, redoStack.value.length);
  };
  const undo = () => {
    const state = undoStack.value.shift();
    if (state) {
      redoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const redo = () => {
    const state = redoStack.value.shift();
    if (state) {
      undoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const reset = () => {
    _setSource(last.value);
  };
  const history = __vite_ssr_import_1__.computed(() => [last.value, ...undoStack.value]);
  const canUndo = __vite_ssr_import_1__.computed(() => undoStack.value.length > 0);
  const canRedo = __vite_ssr_import_1__.computed(() => redoStack.value.length > 0);
  return {
    source,
    undoStack,
    redoStack,
    last,
    history,
    canUndo,
    canRedo,
    clear,
    commit,
    reset,
    undo,
    redo
  };
}

var __defProp$e = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __defNormalProp$e = (obj, key, value) => key in obj ? __defProp$e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$e = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$g.call(b, prop))
      __defNormalProp$e(a, prop, b[prop]);
  if (__getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(b)) {
      if (__propIsEnum$g.call(b, prop))
        __defNormalProp$e(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
function useRefHistory(source, options = {}) {
  const {
    deep = false,
    flush = "pre",
    eventFilter
  } = options;
  const {
    eventFilter: composedFilter,
    pause,
    resume: resumeTracking,
    isActive: isTracking
  } = __vite_ssr_import_0__.pausableFilter(eventFilter);
  const {
    ignoreUpdates,
    ignorePrevAsyncUpdates,
    stop
  } = __vite_ssr_import_0__.watchIgnorable(source, commit, { deep, flush, eventFilter: composedFilter });
  function setSource(source2, value) {
    ignorePrevAsyncUpdates();
    ignoreUpdates(() => {
      source2.value = value;
    });
  }
  const manualHistory = useManualRefHistory(source, __spreadProps$6(__spreadValues$e({}, options), { clone: options.clone || deep, setSource }));
  const { clear, commit: manualCommit } = manualHistory;
  function commit() {
    ignorePrevAsyncUpdates();
    manualCommit();
  }
  function resume(commitNow) {
    resumeTracking();
    if (commitNow)
      commit();
  }
  function batch(fn) {
    let canceled = false;
    const cancel = () => canceled = true;
    ignoreUpdates(() => {
      fn(cancel);
    });
    if (!canceled)
      commit();
  }
  function dispose() {
    stop();
    clear();
  }
  return __spreadProps$6(__spreadValues$e({}, manualHistory), {
    isTracking,
    pause,
    resume,
    commit,
    batch,
    dispose
  });
}

var __defProp$d = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$f = Object.getOwnPropertySymbols;
var __hasOwnProp$f = Object.prototype.hasOwnProperty;
var __propIsEnum$f = Object.prototype.propertyIsEnumerable;
var __defNormalProp$d = (obj, key, value) => key in obj ? __defProp$d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$d = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$f.call(b, prop))
      __defNormalProp$d(a, prop, b[prop]);
  if (__getOwnPropSymbols$f)
    for (var prop of __getOwnPropSymbols$f(b)) {
      if (__propIsEnum$f.call(b, prop))
        __defNormalProp$d(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
function useDebouncedRefHistory(source, options = {}) {
  const filter = options.debounce ? __vite_ssr_import_0__.debounceFilter(options.debounce) : void 0;
  const history = useRefHistory(source, __spreadProps$5(__spreadValues$d({}, options), { eventFilter: filter }));
  return __spreadValues$d({}, history);
}

function useDeviceMotion(options = {}) {
  const {
    window = defaultWindow,
    eventFilter = __vite_ssr_import_0__.bypassFilter
  } = options;
  const acceleration = __vite_ssr_import_1__.ref({ x: null, y: null, z: null });
  const rotationRate = __vite_ssr_import_1__.ref({ alpha: null, beta: null, gamma: null });
  const interval = __vite_ssr_import_1__.ref(0);
  const accelerationIncludingGravity = __vite_ssr_import_1__.ref({
    x: null,
    y: null,
    z: null
  });
  if (window) {
    const onDeviceMotion = __vite_ssr_import_0__.createFilterWrapper(eventFilter, (event) => {
      acceleration.value = event.acceleration;
      accelerationIncludingGravity.value = event.accelerationIncludingGravity;
      rotationRate.value = event.rotationRate;
      interval.value = event.interval;
    });
    useEventListener(window, "devicemotion", onDeviceMotion);
  }
  return {
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    interval
  };
}

function useDeviceOrientation(options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = Boolean(window && "DeviceOrientationEvent" in window);
  const isAbsolute = __vite_ssr_import_1__.ref(false);
  const alpha = __vite_ssr_import_1__.ref(null);
  const beta = __vite_ssr_import_1__.ref(null);
  const gamma = __vite_ssr_import_1__.ref(null);
  if (window && isSupported) {
    useEventListener(window, "deviceorientation", (event) => {
      isAbsolute.value = event.absolute;
      alpha.value = event.alpha;
      beta.value = event.beta;
      gamma.value = event.gamma;
    });
  }
  return {
    isSupported,
    isAbsolute,
    alpha,
    beta,
    gamma
  };
}

const DEVICE_PIXEL_RATIO_SCALES = [
  1,
  1.325,
  1.4,
  1.5,
  1.8,
  2,
  2.4,
  2.5,
  2.75,
  3,
  3.5,
  4
];
function useDevicePixelRatio({
  window = defaultWindow
} = {}) {
  if (!window) {
    return {
      pixelRatio: __vite_ssr_import_1__.ref(1)
    };
  }
  const pixelRatio = __vite_ssr_import_1__.ref(window.devicePixelRatio);
  const handleDevicePixelRatio = () => {
    pixelRatio.value = window.devicePixelRatio;
  };
  useEventListener(window, "resize", handleDevicePixelRatio, { passive: true });
  DEVICE_PIXEL_RATIO_SCALES.forEach((dppx) => {
    const mqlMin = useMediaQuery(`screen and (min-resolution: ${dppx}dppx)`);
    const mqlMax = useMediaQuery(`screen and (max-resolution: ${dppx}dppx)`);
    __vite_ssr_import_1__.watch([mqlMin, mqlMax], handleDevicePixelRatio);
  });
  return { pixelRatio };
}

function usePermission(permissionDesc, options = {}) {
  const {
    controls = false,
    navigator = defaultNavigator
  } = options;
  const isSupported = Boolean(navigator && "permissions" in navigator);
  let permissionStatus;
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = __vite_ssr_import_1__.ref();
  const onChange = () => {
    if (permissionStatus)
      state.value = permissionStatus.state;
  };
  const query = __vite_ssr_import_0__.createSingletonPromise(async () => {
    if (!isSupported)
      return;
    if (!permissionStatus) {
      try {
        permissionStatus = await navigator.permissions.query(desc);
        useEventListener(permissionStatus, "change", onChange);
        onChange();
      } catch (e) {
        state.value = "prompt";
      }
    }
    return permissionStatus;
  });
  query();
  if (controls) {
    return {
      state,
      isSupported,
      query
    };
  } else {
    return state;
  }
}

function useDevicesList(options = {}) {
  const {
    navigator = defaultNavigator,
    requestPermissions = false,
    constraints = { audio: true, video: true },
    onUpdated
  } = options;
  const devices = __vite_ssr_import_1__.ref([]);
  const videoInputs = __vite_ssr_import_1__.computed(() => devices.value.filter((i) => i.kind === "videoinput"));
  const audioInputs = __vite_ssr_import_1__.computed(() => devices.value.filter((i) => i.kind === "audioinput"));
  const audioOutputs = __vite_ssr_import_1__.computed(() => devices.value.filter((i) => i.kind === "audiooutput"));
  let isSupported = false;
  const permissionGranted = __vite_ssr_import_1__.ref(false);
  async function update() {
    if (!isSupported)
      return;
    devices.value = await navigator.mediaDevices.enumerateDevices();
    onUpdated == null ? void 0 : onUpdated(devices.value);
  }
  async function ensurePermissions() {
    if (!isSupported)
      return false;
    if (permissionGranted.value)
      return true;
    const { state, query } = usePermission("camera", { controls: true });
    await query();
    if (state.value !== "granted") {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      stream.getTracks().forEach((t) => t.stop());
      update();
      permissionGranted.value = true;
    } else {
      permissionGranted.value = true;
    }
    return permissionGranted.value;
  }
  if (navigator) {
    isSupported = Boolean(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
    if (isSupported) {
      if (requestPermissions)
        ensurePermissions();
      useEventListener(navigator.mediaDevices, "devicechange", update);
      update();
    }
  }
  return {
    devices,
    ensurePermissions,
    permissionGranted,
    videoInputs,
    audioInputs,
    audioOutputs,
    isSupported
  };
}

function useDisplayMedia(options = {}) {
  var _a, _b;
  const enabled = __vite_ssr_import_1__.ref((_a = options.enabled) != null ? _a : false);
  const video = options.video;
  const audio = options.audio;
  const { navigator = defaultNavigator } = options;
  const isSupported = Boolean((_b = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _b.getDisplayMedia);
  const constraint = { audio, video };
  const stream = __vite_ssr_import_1__.shallowRef();
  async function _start() {
    if (!isSupported || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getDisplayMedia(constraint);
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  __vite_ssr_import_1__.watch(enabled, (v) => {
    if (v)
      _start();
    else
      _stop();
  }, { immediate: true });
  return {
    isSupported,
    stream,
    start,
    stop,
    enabled
  };
}

function useDocumentVisibility({ document = defaultDocument } = {}) {
  if (!document)
    return __vite_ssr_import_1__.ref("visible");
  const visibility = __vite_ssr_import_1__.ref(document.visibilityState);
  useEventListener(document, "visibilitychange", () => {
    visibility.value = document.visibilityState;
  });
  return visibility;
}

var __defProp$c = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
var __hasOwnProp$e = Object.prototype.hasOwnProperty;
var __propIsEnum$e = Object.prototype.propertyIsEnumerable;
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$e.call(b, prop))
      __defNormalProp$c(a, prop, b[prop]);
  if (__getOwnPropSymbols$e)
    for (var prop of __getOwnPropSymbols$e(b)) {
      if (__propIsEnum$e.call(b, prop))
        __defNormalProp$c(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
function useDraggable(target, options = {}) {
  var _a, _b;
  const draggingElement = (_a = options.draggingElement) != null ? _a : defaultWindow;
  const position = __vite_ssr_import_1__.ref((_b = options.initialValue) != null ? _b : { x: 0, y: 0 });
  const pressedDelta = __vite_ssr_import_1__.ref();
  const filterEvent = (e) => {
    if (options.pointerTypes)
      return options.pointerTypes.includes(e.pointerType);
    return true;
  };
  const handleEvent = (e) => {
    if (__vite_ssr_import_1__.unref(options.preventDefault))
      e.preventDefault();
    if (__vite_ssr_import_1__.unref(options.stopPropagation))
      e.stopPropagation();
  };
  const start = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (__vite_ssr_import_1__.unref(options.exact) && e.target !== __vite_ssr_import_1__.unref(target))
      return;
    const rect = __vite_ssr_import_1__.unref(target).getBoundingClientRect();
    const pos = {
      x: e.pageX - rect.left,
      y: e.pageY - rect.top
    };
    if (((_a2 = options.onStart) == null ? void 0 : _a2.call(options, pos, e)) === false)
      return;
    pressedDelta.value = pos;
    handleEvent(e);
  };
  const move = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    position.value = {
      x: e.pageX - pressedDelta.value.x,
      y: e.pageY - pressedDelta.value.y
    };
    (_a2 = options.onMove) == null ? void 0 : _a2.call(options, position.value, e);
    handleEvent(e);
  };
  const end = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    pressedDelta.value = void 0;
    (_a2 = options.onEnd) == null ? void 0 : _a2.call(options, position.value, e);
    handleEvent(e);
  };
  if (__vite_ssr_import_0__.isClient) {
    useEventListener(target, "pointerdown", start, true);
    useEventListener(draggingElement, "pointermove", move, true);
    useEventListener(draggingElement, "pointerup", end, true);
  }
  return __spreadProps$4(__spreadValues$c({}, __vite_ssr_import_0__.toRefs(position)), {
    position,
    isDragging: __vite_ssr_import_1__.computed(() => !!pressedDelta.value),
    style: __vite_ssr_import_1__.computed(() => `left:${position.value.x}px;top:${position.value.y}px;`)
  });
}

function useDropZone(target, onDrop) {
  const isOverDropZone = __vite_ssr_import_1__.ref(false);
  let counter = 0;
  if (__vite_ssr_import_0__.isClient) {
    useEventListener(target, "dragenter", (event) => {
      event.preventDefault();
      counter += 1;
      isOverDropZone.value = true;
    });
    useEventListener(target, "dragover", (event) => {
      event.preventDefault();
    });
    useEventListener(target, "dragleave", (event) => {
      event.preventDefault();
      counter -= 1;
      if (counter === 0)
        isOverDropZone.value = false;
    });
    useEventListener(target, "drop", (event) => {
      var _a, _b;
      event.preventDefault();
      counter = 0;
      isOverDropZone.value = false;
      const files = Array.from((_b = (_a = event.dataTransfer) == null ? void 0 : _a.files) != null ? _b : []);
      if (files.length === 0) {
        onDrop(null);
        return;
      }
      onDrop(files);
    });
  }
  return {
    isOverDropZone
  };
}

var __getOwnPropSymbols$d = Object.getOwnPropertySymbols;
var __hasOwnProp$d = Object.prototype.hasOwnProperty;
var __propIsEnum$d = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$d.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$d)
    for (var prop of __getOwnPropSymbols$d(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$d.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, observerOptions = __objRest$2(_a, ["window"]);
  let observer;
  const isSupported = window && "ResizeObserver" in window;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = __vite_ssr_import_1__.watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  __vite_ssr_import_0__.tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

function useElementBounding(target, options = {}) {
  const {
    reset = true,
    windowResize = true,
    windowScroll = true,
    immediate = true
  } = options;
  const height = __vite_ssr_import_1__.ref(0);
  const bottom = __vite_ssr_import_1__.ref(0);
  const left = __vite_ssr_import_1__.ref(0);
  const right = __vite_ssr_import_1__.ref(0);
  const top = __vite_ssr_import_1__.ref(0);
  const width = __vite_ssr_import_1__.ref(0);
  const x = __vite_ssr_import_1__.ref(0);
  const y = __vite_ssr_import_1__.ref(0);
  function update() {
    const el = unrefElement(target);
    if (!el) {
      if (reset) {
        height.value = 0;
        bottom.value = 0;
        left.value = 0;
        right.value = 0;
        top.value = 0;
        width.value = 0;
        x.value = 0;
        y.value = 0;
      }
      return;
    }
    const rect = el.getBoundingClientRect();
    height.value = rect.height;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    width.value = rect.width;
    x.value = rect.x;
    y.value = rect.y;
  }
  useResizeObserver(target, update);
  __vite_ssr_import_1__.watch(() => unrefElement(target), (ele) => !ele && update());
  if (windowScroll)
    useEventListener("scroll", update, { passive: true });
  if (windowResize)
    useEventListener("resize", update, { passive: true });
  __vite_ssr_import_0__.tryOnMounted(() => {
    if (immediate)
      update();
  });
  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y,
    update
  };
}

function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    window = defaultWindow
  } = options;
  const isActive = __vite_ssr_import_1__.ref(false);
  let rafId = null;
  function loop() {
    if (!isActive.value || !window)
      return;
    fn();
    rafId = window.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window) {
      isActive.value = true;
      loop();
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  __vite_ssr_import_0__.tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp$b = Object.defineProperty;
var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$c.call(b, prop))
      __defNormalProp$b(a, prop, b[prop]);
  if (__getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(b)) {
      if (__propIsEnum$c.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    }
  return a;
};
function useElementByPoint(options) {
  const element = __vite_ssr_import_1__.ref(null);
  const { x, y } = options;
  const controls = useRafFn(() => {
    element.value = document.elementFromPoint(__vite_ssr_import_1__.unref(x), __vite_ssr_import_1__.unref(y));
  });
  return __spreadValues$b({
    element
  }, controls);
}

function useElementHover(el) {
  const isHovered = __vite_ssr_import_1__.ref(false);
  useEventListener(el, "mouseenter", () => isHovered.value = true);
  useEventListener(el, "mouseleave", () => isHovered.value = false);
  return isHovered;
}

function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const width = __vite_ssr_import_1__.ref(initialSize.width);
  const height = __vite_ssr_import_1__.ref(initialSize.height);
  useResizeObserver(target, ([entry]) => {
    width.value = entry.contentRect.width;
    height.value = entry.contentRect.height;
  }, options);
  __vite_ssr_import_1__.watch(() => unrefElement(target), (ele) => {
    width.value = ele ? initialSize.width : 0;
    height.value = ele ? initialSize.height : 0;
  });
  return {
    width,
    height
  };
}

function useElementVisibility(element, { window = defaultWindow, scrollTarget } = {}) {
  const elementIsVisible = __vite_ssr_import_1__.ref(false);
  const testBounding = () => {
    if (!window)
      return;
    const document = window.document;
    if (!__vite_ssr_import_1__.unref(element)) {
      elementIsVisible.value = false;
    } else {
      const rect = __vite_ssr_import_1__.unref(element).getBoundingClientRect();
      elementIsVisible.value = rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth) && rect.bottom >= 0 && rect.right >= 0;
    }
  };
  __vite_ssr_import_0__.tryOnMounted(testBounding);
  if (window)
    __vite_ssr_import_0__.tryOnMounted(() => useEventListener(__vite_ssr_import_1__.unref(scrollTarget) || window, "scroll", testBounding, { capture: false, passive: true }));
  return elementIsVisible;
}

const events = new Map();

function useEventBus(key) {
  const scope = __vite_ssr_import_1__.getCurrentScope();
  function on(listener) {
    var _a;
    const listeners = events.get(key) || [];
    listeners.push(listener);
    events.set(key, listeners);
    const _off = () => off(listener);
    (_a = scope == null ? void 0 : scope.cleanups) == null ? void 0 : _a.push(_off);
    return _off;
  }
  function once(listener) {
    function _listener(...args) {
      off(_listener);
      listener(...args);
    }
    return on(_listener);
  }
  function off(listener) {
    const listeners = events.get(key);
    if (!listeners)
      return;
    const index = listeners.indexOf(listener);
    if (index > -1)
      listeners.splice(index, 1);
    if (!listeners.length)
      events.delete(key);
  }
  function reset() {
    events.delete(key);
  }
  function emit(event, payload) {
    var _a;
    (_a = events.get(key)) == null ? void 0 : _a.forEach((v) => v(event, payload));
  }
  return { on, once, off, emit, reset };
}

function useEventSource(url, events = [], options = {}) {
  const event = __vite_ssr_import_1__.ref(null);
  const data = __vite_ssr_import_1__.ref(null);
  const status = __vite_ssr_import_1__.ref("CONNECTING");
  const eventSource = __vite_ssr_import_1__.ref(null);
  const error = __vite_ssr_import_1__.ref(null);
  const {
    withCredentials = false
  } = options;
  const close = () => {
    if (eventSource.value) {
      eventSource.value.close();
      eventSource.value = null;
      status.value = "CLOSED";
    }
  };
  const es = new EventSource(url, { withCredentials });
  eventSource.value = es;
  es.onopen = () => {
    status.value = "OPEN";
    error.value = null;
  };
  es.onerror = (e) => {
    status.value = "CLOSED";
    error.value = e;
  };
  es.onmessage = (e) => {
    event.value = null;
    data.value = e.data;
  };
  for (const event_name of events) {
    useEventListener(es, event_name, (e) => {
      event.value = event_name;
      data.value = e.data || null;
    });
  }
  __vite_ssr_import_0__.tryOnScopeDispose(() => {
    close();
  });
  return {
    eventSource,
    event,
    data,
    status,
    error,
    close
  };
}

function useEyeDropper(options = {}) {
  const { initialValue = "" } = options;
  const isSupported = Boolean("undefined" !== "undefined" && "EyeDropper" in window);
  const sRGBHex = __vite_ssr_import_1__.ref(initialValue);
  async function open(openOptions) {
    if (!isSupported)
      return;
    const eyeDropper = new window.EyeDropper();
    const result = await eyeDropper.open(openOptions);
    sRGBHex.value = result.sRGBHex;
    return result;
  }
  return { isSupported, sRGBHex, open };
}

function useFavicon(newIcon = null, options = {}) {
  const {
    baseUrl = "",
    rel = "icon",
    document = defaultDocument
  } = options;
  const favicon = __vite_ssr_import_1__.isRef(newIcon) ? newIcon : __vite_ssr_import_1__.ref(newIcon);
  const applyIcon = (icon) => {
    document == null ? void 0 : document.head.querySelectorAll(`link[rel*="${rel}"]`).forEach((el) => el.href = `${baseUrl}${icon}`);
  };
  __vite_ssr_import_1__.watch(favicon, (i, o) => {
    if (__vite_ssr_import_0__.isString(i) && i !== o)
      applyIcon(i);
  }, { immediate: true });
  return favicon;
}

var __defProp$a = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$a(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$a(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
const payloadMapping = {
  json: "application/json",
  text: "text/plain",
  formData: "multipart/form-data"
};
function isFetchOptions(obj) {
  return __vite_ssr_import_0__.containsProp(obj, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch");
}
function headersToObject(headers) {
  if (typeof Headers !== "undefined" && headers instanceof Headers)
    return Object.fromEntries([...headers.entries()]);
  return headers;
}
function createFetch(config = {}) {
  const _options = config.options || {};
  const _fetchOptions = config.fetchOptions || {};
  function useFactoryFetch(url, ...args) {
    const computedUrl = __vite_ssr_import_1__.computed(() => config.baseUrl ? joinPaths(__vite_ssr_import_1__.unref(config.baseUrl), __vite_ssr_import_1__.unref(url)) : __vite_ssr_import_1__.unref(url));
    let options = _options;
    let fetchOptions = _fetchOptions;
    if (args.length > 0) {
      if (isFetchOptions(args[0])) {
        options = __spreadValues$a(__spreadValues$a({}, options), args[0]);
      } else {
        fetchOptions = __spreadProps$3(__spreadValues$a(__spreadValues$a({}, fetchOptions), args[0]), {
          headers: __spreadValues$a(__spreadValues$a({}, headersToObject(fetchOptions.headers) || {}), headersToObject(args[0].headers) || {})
        });
      }
    }
    if (args.length > 1 && isFetchOptions(args[1]))
      options = __spreadValues$a(__spreadValues$a({}, options), args[1]);
    return useFetch(computedUrl, fetchOptions, options);
  }
  return useFactoryFetch;
}
function useFetch(url, ...args) {
  var _a;
  const supportsAbort = typeof AbortController === "function";
  let fetchOptions = {};
  let options = { immediate: true, refetch: false, timeout: 0 };
  const config = {
    method: "GET",
    type: "text",
    payload: void 0
  };
  if (args.length > 0) {
    if (isFetchOptions(args[0]))
      options = __spreadValues$a(__spreadValues$a({}, options), args[0]);
    else
      fetchOptions = args[0];
  }
  if (args.length > 1) {
    if (isFetchOptions(args[1]))
      options = __spreadValues$a(__spreadValues$a({}, options), args[1]);
  }
  const {
    fetch = (_a = defaultWindow) == null ? void 0 : _a.fetch,
    initialData,
    timeout
  } = options;
  const responseEvent = __vite_ssr_import_0__.createEventHook();
  const errorEvent = __vite_ssr_import_0__.createEventHook();
  const finallyEvent = __vite_ssr_import_0__.createEventHook();
  const isFinished = __vite_ssr_import_1__.ref(false);
  const isFetching = __vite_ssr_import_1__.ref(false);
  const aborted = __vite_ssr_import_1__.ref(false);
  const statusCode = __vite_ssr_import_1__.ref(null);
  const response = __vite_ssr_import_1__.shallowRef(null);
  const error = __vite_ssr_import_1__.shallowRef(null);
  const data = __vite_ssr_import_1__.shallowRef(initialData);
  const canAbort = __vite_ssr_import_1__.computed(() => supportsAbort && isFetching.value);
  let controller;
  let timer;
  const abort = () => {
    if (supportsAbort && controller)
      controller.abort();
  };
  const loading = (isLoading) => {
    isFetching.value = isLoading;
    isFinished.value = !isLoading;
  };
  if (timeout)
    timer = __vite_ssr_import_0__.useTimeoutFn(abort, timeout, { immediate: false });
  const execute = async (throwOnFailed = false) => {
    var _a2;
    loading(true);
    error.value = null;
    statusCode.value = null;
    aborted.value = false;
    controller = void 0;
    if (supportsAbort) {
      controller = new AbortController();
      controller.signal.onabort = () => aborted.value = true;
      fetchOptions = __spreadProps$3(__spreadValues$a({}, fetchOptions), {
        signal: controller.signal
      });
    }
    const defaultFetchOptions = {
      method: config.method,
      headers: {}
    };
    if (config.payload) {
      const headers = headersToObject(defaultFetchOptions.headers);
      if (config.payloadType)
        headers["Content-Type"] = (_a2 = payloadMapping[config.payloadType]) != null ? _a2 : config.payloadType;
      defaultFetchOptions.body = config.payloadType === "json" ? JSON.stringify(__vite_ssr_import_1__.unref(config.payload)) : __vite_ssr_import_1__.unref(config.payload);
    }
    let isCanceled = false;
    const context = { url: __vite_ssr_import_1__.unref(url), options: __spreadValues$a(__spreadValues$a({}, defaultFetchOptions), fetchOptions), cancel: () => {
      isCanceled = true;
    } };
    if (options.beforeFetch)
      Object.assign(context, await options.beforeFetch(context));
    if (isCanceled || !fetch) {
      loading(false);
      return Promise.resolve(null);
    }
    let responseData = null;
    if (timer)
      timer.start();
    return new Promise((resolve, reject) => {
      var _a3;
      fetch(context.url, __spreadProps$3(__spreadValues$a(__spreadValues$a({}, defaultFetchOptions), context.options), {
        headers: __spreadValues$a(__spreadValues$a({}, headersToObject(defaultFetchOptions.headers)), headersToObject((_a3 = context.options) == null ? void 0 : _a3.headers))
      })).then(async (fetchResponse) => {
        response.value = fetchResponse;
        statusCode.value = fetchResponse.status;
        responseData = await fetchResponse[config.type]();
        if (options.afterFetch && statusCode.value >= 200 && statusCode.value < 300)
          ({ data: responseData } = await options.afterFetch({ data: responseData, response: fetchResponse }));
        data.value = responseData;
        if (!fetchResponse.ok)
          throw new Error(fetchResponse.statusText);
        responseEvent.trigger(fetchResponse);
        return resolve(fetchResponse);
      }).catch(async (fetchError) => {
        let errorData = fetchError.message || fetchError.name;
        if (options.onFetchError)
          ({ data: responseData, error: errorData } = await options.onFetchError({ data: responseData, error: fetchError, response: response.value }));
        data.value = responseData;
        error.value = errorData;
        errorEvent.trigger(fetchError);
        if (throwOnFailed)
          return reject(fetchError);
        return resolve(null);
      }).finally(() => {
        loading(false);
        if (timer)
          timer.stop();
        finallyEvent.trigger(null);
      });
    });
  };
  __vite_ssr_import_1__.watch(() => [
    __vite_ssr_import_1__.unref(url),
    __vite_ssr_import_1__.unref(options.refetch)
  ], () => __vite_ssr_import_1__.unref(options.refetch) && execute(), { deep: true });
  const shell = {
    isFinished,
    statusCode,
    response,
    error,
    data,
    isFetching,
    canAbort,
    aborted,
    abort,
    execute,
    onFetchResponse: responseEvent.on,
    onFetchError: errorEvent.on,
    onFetchFinally: finallyEvent.on,
    get: setMethod("GET"),
    put: setMethod("PUT"),
    post: setMethod("POST"),
    delete: setMethod("DELETE"),
    patch: setMethod("PATCH"),
    head: setMethod("HEAD"),
    options: setMethod("OPTIONS"),
    json: setType("json"),
    text: setType("text"),
    blob: setType("blob"),
    arrayBuffer: setType("arrayBuffer"),
    formData: setType("formData")
  };
  function setMethod(method) {
    return (payload, payloadType) => {
      if (!isFetching.value) {
        config.method = method;
        config.payload = payload;
        config.payloadType = payloadType;
        if (__vite_ssr_import_1__.isRef(config.payload)) {
          __vite_ssr_import_1__.watch(() => [
            __vite_ssr_import_1__.unref(config.payload),
            __vite_ssr_import_1__.unref(options.refetch)
          ], () => __vite_ssr_import_1__.unref(options.refetch) && execute(), { deep: true });
        }
        if (!payloadType && __vite_ssr_import_1__.unref(payload) && Object.getPrototypeOf(__vite_ssr_import_1__.unref(payload)) === Object.prototype)
          config.payloadType = "json";
        return __spreadProps$3(__spreadValues$a({}, shell), {
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        });
      }
      return void 0;
    };
  }
  function waitUntilFinished() {
    return new Promise((resolve, reject) => {
      __vite_ssr_import_0__.until(isFinished).toBe(true).then(() => resolve(shell)).catch((error2) => reject(error2));
    });
  }
  function setType(type) {
    return () => {
      if (!isFetching.value) {
        config.type = type;
        return __spreadProps$3(__spreadValues$a({}, shell), {
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        });
      }
      return void 0;
    };
  }
  if (options.immediate)
    setTimeout(execute, 0);
  return __spreadProps$3(__spreadValues$a({}, shell), {
    then(onFulfilled, onRejected) {
      return waitUntilFinished().then(onFulfilled, onRejected);
    }
  });
}
function joinPaths(start, end) {
  if (!start.endsWith("/") && !end.startsWith("/"))
    return `${start}/${end}`;
  return `${start}${end}`;
}

var __defProp$9 = Object.defineProperty;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
function useFileSystemAccess(options = {}) {
  const {
    window: _window = defaultWindow,
    dataType = "Text"
  } = __vite_ssr_import_1__.unref(options);
  const window = _window;
  const isSupported = Boolean(window && "showSaveFilePicker" in window && "showOpenFilePicker" in window);
  const fileHandle = __vite_ssr_import_1__.ref();
  const data = __vite_ssr_import_1__.ref();
  const file = __vite_ssr_import_1__.ref();
  const fileName = __vite_ssr_import_1__.computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.name) != null ? _b : "";
  });
  const fileMIME = __vite_ssr_import_1__.computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.type) != null ? _b : "";
  });
  const fileSize = __vite_ssr_import_1__.computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.size) != null ? _b : 0;
  });
  const fileLastModified = __vite_ssr_import_1__.computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.lastModified) != null ? _b : 0;
  });
  async function open(_options = {}) {
    if (!isSupported)
      return;
    const [handle] = await window.showOpenFilePicker(__spreadValues$9(__spreadValues$9({}, __vite_ssr_import_1__.unref(options)), _options));
    fileHandle.value = handle;
    await updateFile();
    await updateData();
  }
  async function create(_options = {}) {
    if (!isSupported)
      return;
    fileHandle.value = await window.showSaveFilePicker(__spreadValues$9(__spreadValues$9({}, __vite_ssr_import_1__.unref(options)), _options));
    data.value = void 0;
    await updateFile();
    await updateData();
  }
  async function save(_options = {}) {
    if (!isSupported)
      return;
    if (!fileHandle.value)
      return saveAs(_options);
    if (data.value) {
      const writableStream = await fileHandle.value.createWritable();
      await writableStream.write(data.value);
      await writableStream.close();
    }
    await updateFile();
  }
  async function saveAs(_options = {}) {
    if (!isSupported)
      return;
    fileHandle.value = await window.showSaveFilePicker(__spreadValues$9(__spreadValues$9({}, __vite_ssr_import_1__.unref(options)), _options));
    if (data.value) {
      const writableStream = await fileHandle.value.createWritable();
      await writableStream.write(data.value);
      await writableStream.close();
    }
    await updateFile();
  }
  async function updateFile() {
    var _a;
    file.value = await ((_a = fileHandle.value) == null ? void 0 : _a.getFile());
  }
  async function updateData() {
    var _a, _b;
    if (__vite_ssr_import_1__.unref(dataType) === "Text")
      data.value = await ((_a = file.value) == null ? void 0 : _a.text());
    if (__vite_ssr_import_1__.unref(dataType) === "ArrayBuffer")
      data.value = await ((_b = file.value) == null ? void 0 : _b.arrayBuffer());
    if (__vite_ssr_import_1__.unref(dataType) === "Blob")
      data.value = file.value;
  }
  __vite_ssr_import_1__.watch(() => __vite_ssr_import_1__.unref(dataType), updateData);
  return {
    isSupported,
    data,
    file,
    fileName,
    fileMIME,
    fileSize,
    fileLastModified,
    open,
    create,
    save,
    saveAs,
    updateData
  };
}

function useFocus(target, options = {}) {
  const { initialValue = false } = options;
  const activeElement = useActiveElement(options);
  const targetElement = __vite_ssr_import_1__.computed(() => unrefElement(target));
  const focused = __vite_ssr_import_1__.computed({
    get() {
      return __vite_ssr_import_0__.isDef(activeElement.value) && __vite_ssr_import_0__.isDef(targetElement.value) && activeElement.value === targetElement.value;
    },
    set(value) {
      var _a, _b;
      if (!value && focused.value)
        (_a = targetElement.value) == null ? void 0 : _a.blur();
      if (value && !focused.value)
        (_b = targetElement.value) == null ? void 0 : _b.focus();
    }
  });
  __vite_ssr_import_1__.watch(targetElement, () => {
    focused.value = initialValue;
  }, { immediate: true, flush: "post" });
  return { focused };
}

function useFocusWithin(target, options = {}) {
  const activeElement = useActiveElement(options);
  const targetElement = __vite_ssr_import_1__.computed(() => unrefElement(target));
  const focused = __vite_ssr_import_1__.computed(() => targetElement.value && activeElement.value ? targetElement.value.contains(activeElement.value) : false);
  return { focused };
}

function useFps(options) {
  var _a;
  const fps = __vite_ssr_import_1__.ref(0);
  if (typeof performance === "undefined")
    return fps;
  const every = (_a = options == null ? void 0 : options.every) != null ? _a : 10;
  let last = performance.now();
  let ticks = 0;
  useRafFn(() => {
    ticks += 1;
    if (ticks >= every) {
      const now = performance.now();
      const diff = now - last;
      fps.value = Math.round(1e3 / (diff / ticks));
      last = now;
      ticks = 0;
    }
  });
  return fps;
}

const functionsMap = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
function useFullscreen(target, options = {}) {
  const { document = defaultDocument, autoExit = false } = options;
  const targetRef = target || (document == null ? void 0 : document.querySelector("html"));
  const isFullscreen = __vite_ssr_import_1__.ref(false);
  let isSupported = false;
  let map = functionsMap[0];
  if (!document) {
    isSupported = false;
  } else {
    for (const m of functionsMap) {
      if (m[1] in document) {
        map = m;
        isSupported = true;
        break;
      }
    }
  }
  const [REQUEST, EXIT, ELEMENT, , EVENT] = map;
  async function exit() {
    if (!isSupported)
      return;
    if (document == null ? void 0 : document[ELEMENT])
      await document[EXIT]();
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported)
      return;
    await exit();
    const target2 = unrefElement(targetRef);
    if (target2) {
      await target2[REQUEST]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    if (isFullscreen.value)
      await exit();
    else
      await enter();
  }
  if (document) {
    useEventListener(document, EVENT, () => {
      isFullscreen.value = !!(document == null ? void 0 : document[ELEMENT]);
    }, false);
  }
  if (autoExit)
    __vite_ssr_import_0__.tryOnScopeDispose(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}

function mapGamepadToXbox360Controller(gamepad) {
  return __vite_ssr_import_1__.computed(() => {
    if (gamepad.value) {
      return {
        buttons: {
          a: gamepad.value.buttons[0],
          b: gamepad.value.buttons[1],
          x: gamepad.value.buttons[2],
          y: gamepad.value.buttons[3]
        },
        bumper: {
          left: gamepad.value.buttons[4],
          right: gamepad.value.buttons[5]
        },
        triggers: {
          left: gamepad.value.buttons[6],
          right: gamepad.value.buttons[7]
        },
        stick: {
          left: {
            horizontal: gamepad.value.axes[0],
            vertical: gamepad.value.axes[1],
            button: gamepad.value.buttons[10]
          },
          right: {
            horizontal: gamepad.value.axes[2],
            vertical: gamepad.value.axes[3],
            button: gamepad.value.buttons[11]
          }
        },
        dpad: {
          up: gamepad.value.buttons[12],
          down: gamepad.value.buttons[13],
          left: gamepad.value.buttons[14],
          right: gamepad.value.buttons[15]
        },
        back: gamepad.value.buttons[8],
        start: gamepad.value.buttons[9]
      };
    }
    return null;
  });
}
function useGamepad(options = {}) {
  const {
    navigator = defaultNavigator
  } = options;
  const isSupported = navigator && "getGamepads" in navigator;
  const gamepads = __vite_ssr_import_1__.ref([]);
  const onConnectedHook = __vite_ssr_import_0__.createEventHook();
  const onDisconnectedHook = __vite_ssr_import_0__.createEventHook();
  const stateFromGamepad = (gamepad) => {
    const hapticActuators = [];
    const vibrationActuator = "vibrationActuator" in gamepad ? gamepad.vibrationActuator : null;
    if (vibrationActuator)
      hapticActuators.push(vibrationActuator);
    if (gamepad.hapticActuators)
      hapticActuators.push(...gamepad.hapticActuators);
    return {
      id: gamepad.id,
      hapticActuators,
      index: gamepad.index,
      mapping: gamepad.mapping,
      connected: gamepad.connected,
      timestamp: gamepad.timestamp,
      axes: gamepad.axes.map((axes) => axes),
      buttons: gamepad.buttons.map((button) => ({ pressed: button.pressed, touched: button.touched, value: button.value }))
    };
  };
  const updateGamepadState = () => {
    const _gamepads = (navigator == null ? void 0 : navigator.getGamepads()) || [];
    for (let i = 0; i < _gamepads.length; ++i) {
      const gamepad = _gamepads[i];
      if (gamepad) {
        const index = gamepads.value.findIndex(({ index: index2 }) => index2 === gamepad.index);
        if (index > -1)
          gamepads.value[index] = stateFromGamepad(gamepad);
      }
    }
  };
  const { isActive, pause, resume } = useRafFn(updateGamepadState);
  const onGamepadConnected = (gamepad) => {
    if (!gamepads.value.some(({ index }) => index === gamepad.index)) {
      gamepads.value.push(stateFromGamepad(gamepad));
      onConnectedHook.trigger(gamepad.index);
    }
    resume();
  };
  const onGamepadDisconnected = (gamepad) => {
    gamepads.value = gamepads.value.filter((x) => x.index !== gamepad.index);
    onDisconnectedHook.trigger(gamepad.index);
  };
  useEventListener("gamepadconnected", (e) => onGamepadConnected(e.gamepad));
  useEventListener("gamepaddisconnected", (e) => onGamepadDisconnected(e.gamepad));
  __vite_ssr_import_0__.tryOnMounted(() => {
    const _gamepads = (navigator == null ? void 0 : navigator.getGamepads()) || [];
    if (_gamepads) {
      for (let i = 0; i < _gamepads.length; ++i) {
        const gamepad = _gamepads[i];
        if (gamepad)
          onGamepadConnected(gamepad);
      }
    }
  });
  pause();
  return {
    isSupported,
    onConnected: onConnectedHook.on,
    onDisconnected: onDisconnectedHook.on,
    gamepads,
    pause,
    resume,
    isActive
  };
}

function useGeolocation(options = {}) {
  const {
    enableHighAccuracy = true,
    maximumAge = 3e4,
    timeout = 27e3,
    navigator = defaultNavigator
  } = options;
  const isSupported = navigator && "geolocation" in navigator;
  const locatedAt = __vite_ssr_import_1__.ref(null);
  const error = __vite_ssr_import_1__.ref(null);
  const coords = __vite_ssr_import_1__.ref({
    accuracy: 0,
    latitude: Infinity,
    longitude: Infinity,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  });
  function updatePosition(position) {
    locatedAt.value = position.timestamp;
    coords.value = position.coords;
    error.value = null;
  }
  let watcher;
  if (isSupported) {
    watcher = navigator.geolocation.watchPosition(updatePosition, (err) => error.value = err, {
      enableHighAccuracy,
      maximumAge,
      timeout
    });
  }
  __vite_ssr_import_0__.tryOnScopeDispose(() => {
    if (watcher && navigator)
      navigator.geolocation.clearWatch(watcher);
  });
  return {
    isSupported,
    coords,
    locatedAt,
    error
  };
}

const defaultEvents$1 = ["mousemove", "mousedown", "resize", "keydown", "touchstart", "wheel"];
const oneMinute = 6e4;
function useIdle(timeout = oneMinute, options = {}) {
  const {
    initialState = false,
    listenForVisibilityChange = true,
    events = defaultEvents$1,
    window = defaultWindow,
    eventFilter = __vite_ssr_import_0__.throttleFilter(50)
  } = options;
  const idle = __vite_ssr_import_1__.ref(initialState);
  const lastActive = __vite_ssr_import_1__.ref(__vite_ssr_import_0__.timestamp());
  let timer;
  const onEvent = __vite_ssr_import_0__.createFilterWrapper(eventFilter, () => {
    idle.value = false;
    lastActive.value = __vite_ssr_import_0__.timestamp();
    clearTimeout(timer);
    timer = setTimeout(() => idle.value = true, timeout);
  });
  if (window) {
    const document = window.document;
    for (const event of events)
      useEventListener(window, event, onEvent, { passive: true });
    if (listenForVisibilityChange) {
      useEventListener(document, "visibilitychange", () => {
        if (!document.hidden)
          onEvent();
      });
    }
  }
  timer = setTimeout(() => idle.value = true, timeout);
  return { idle, lastActive };
}

var __defProp$8 = Object.defineProperty;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
async function loadImage(options) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const { src, srcset, sizes } = options;
    img.src = src;
    if (srcset)
      img.srcset = srcset;
    if (sizes)
      img.sizes = sizes;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}
const useImage = (options, asyncStateOptions = {}) => {
  const state = useAsyncState(() => loadImage(__vite_ssr_import_1__.unref(options)), void 0, __spreadValues$8({
    resetOnExecute: true
  }, asyncStateOptions));
  __vite_ssr_import_1__.watch(() => __vite_ssr_import_1__.unref(options), () => state.execute(asyncStateOptions.delay), { deep: true });
  return state;
};

function useScroll(element, options = {}) {
  const {
    throttle = 0,
    idle = 200,
    onStop = __vite_ssr_import_0__.noop,
    onScroll = __vite_ssr_import_0__.noop,
    offset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions = {
      capture: false,
      passive: true
    }
  } = options;
  const x = __vite_ssr_import_1__.ref(0);
  const y = __vite_ssr_import_1__.ref(0);
  const isScrolling = __vite_ssr_import_1__.ref(false);
  const arrivedState = __vite_ssr_import_1__.reactive({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  const directions = __vite_ssr_import_1__.reactive({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  if (element) {
    const onScrollEnd = __vite_ssr_import_0__.useDebounceFn((e) => {
      isScrolling.value = false;
      directions.left = false;
      directions.right = false;
      directions.top = false;
      directions.bottom = false;
      onStop(e);
    }, throttle + idle);
    const onScrollHandler = (e) => {
      const eventTarget = e.target === document ? e.target.documentElement : e.target;
      const scrollLeft = eventTarget.scrollLeft;
      directions.left = scrollLeft < x.value;
      directions.right = scrollLeft > x.value;
      arrivedState.left = scrollLeft <= 0 + (offset.left || 0);
      arrivedState.right = scrollLeft + eventTarget.clientWidth >= eventTarget.scrollWidth - (offset.right || 0);
      x.value = scrollLeft;
      let scrollTop = eventTarget.scrollTop;
      if (e.target === document && !scrollTop)
        scrollTop = document.body.scrollTop;
      directions.top = scrollTop < y.value;
      directions.bottom = scrollTop > y.value;
      arrivedState.top = scrollTop <= 0 + (offset.top || 0);
      arrivedState.bottom = scrollTop + eventTarget.clientHeight >= eventTarget.scrollHeight - (offset.bottom || 0);
      y.value = scrollTop;
      isScrolling.value = true;
      onScrollEnd(e);
      onScroll(e);
    };
    useEventListener(element, "scroll", throttle ? __vite_ssr_import_0__.useThrottleFn(onScrollHandler, throttle) : onScrollHandler, eventListenerOptions);
  }
  return {
    x,
    y,
    isScrolling,
    arrivedState,
    directions
  };
}

var __defProp$7 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
function useInfiniteScroll(element, onLoadMore, options = {}) {
  var _a, _b;
  const direction = (_a = options.direction) != null ? _a : "bottom";
  const state = __vite_ssr_import_1__.reactive(useScroll(element, __spreadProps$2(__spreadValues$7({}, options), {
    offset: __spreadValues$7({
      [direction]: (_b = options.distance) != null ? _b : 0
    }, options.offset)
  })));
  __vite_ssr_import_1__.watch(() => state.arrivedState[direction], async (v) => {
    var _a2, _b2;
    if (v) {
      const elem = __vite_ssr_import_1__.unref(element);
      const previous = {
        height: (_a2 = elem == null ? void 0 : elem.scrollHeight) != null ? _a2 : 0,
        width: (_b2 = elem == null ? void 0 : elem.scrollWidth) != null ? _b2 : 0
      };
      await onLoadMore(state);
      if (options.preserveScrollPosition && elem) {
        __vite_ssr_import_1__.nextTick(() => {
          elem.scrollTo({
            top: elem.scrollHeight - previous.height,
            left: elem.scrollWidth - previous.width
          });
        });
      }
    }
  });
}

function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window = defaultWindow
  } = options;
  const isSupported = window && "IntersectionObserver" in window;
  let cleanup = __vite_ssr_import_0__.noop;
  const stopWatch = isSupported ? __vite_ssr_import_1__.watch(() => ({
    el: unrefElement(target),
    root: unrefElement(root)
  }), ({ el, root: root2 }) => {
    cleanup();
    if (!el)
      return;
    const observer = new IntersectionObserver(callback, {
      root: root2,
      rootMargin,
      threshold
    });
    observer.observe(el);
    cleanup = () => {
      observer.disconnect();
      cleanup = __vite_ssr_import_0__.noop;
    };
  }, { immediate: true, flush: "post" }) : __vite_ssr_import_0__.noop;
  const stop = () => {
    cleanup();
    stopWatch();
  };
  __vite_ssr_import_0__.tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

const defaultEvents = ["mousedown", "mouseup", "keydown", "keyup"];
function useKeyModifier(modifier, options = {}) {
  const {
    events = defaultEvents,
    document = defaultDocument,
    initial = null
  } = options;
  const state = __vite_ssr_import_1__.ref(initial);
  if (document) {
    events.forEach((listenerEvent) => {
      useEventListener(document, listenerEvent, (evt) => {
        if (typeof evt.getModifierState === "function")
          state.value = evt.getModifierState(modifier);
      });
    });
  }
  return state;
}

function useLocalStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.localStorage, options);
}

const DefaultMagicKeysAliasMap = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};

function useMagicKeys(options = {}) {
  const {
    reactive: useReactive = false,
    target = defaultWindow,
    aliasMap = DefaultMagicKeysAliasMap,
    passive = true,
    onEventFired = __vite_ssr_import_0__.noop
  } = options;
  const current = __vite_ssr_import_1__.reactive(new Set());
  const obj = { toJSON() {
    return {};
  }, current };
  const refs = useReactive ? __vite_ssr_import_1__.reactive(obj) : obj;
  const metaDeps = new Set();
  function setRefs(key, value) {
    if (key in refs) {
      if (useReactive)
        refs[key] = value;
      else
        refs[key].value = value;
    }
  }
  function updateRefs(e, value) {
    var _a, _b;
    const key = (_a = e.key) == null ? void 0 : _a.toLowerCase();
    const code = (_b = e.code) == null ? void 0 : _b.toLowerCase();
    const values = [code, key].filter(Boolean);
    if (code) {
      if (value)
        current.add(e.code);
      else
        current.delete(e.code);
    }
    for (const key2 of values)
      setRefs(key2, value);
    if (key === "meta" && !value) {
      metaDeps.forEach((key2) => {
        current.delete(key2);
        setRefs(key2, false);
      });
      metaDeps.clear();
    } else if (typeof e.getModifierState === "function" && e.getModifierState("Meta") && value) {
      [...current, ...values].forEach((key2) => metaDeps.add(key2));
    }
  }
  if (target) {
    useEventListener(target, "keydown", (e) => {
      updateRefs(e, true);
      return onEventFired(e);
    }, { passive });
    useEventListener(target, "keyup", (e) => {
      updateRefs(e, false);
      return onEventFired(e);
    }, { passive });
  }
  const proxy = new Proxy(refs, {
    get(target2, prop, rec) {
      if (typeof prop !== "string")
        return Reflect.get(target2, prop, rec);
      prop = prop.toLowerCase();
      if (prop in aliasMap)
        prop = aliasMap[prop];
      if (!(prop in refs)) {
        if (/[+_-]/.test(prop)) {
          const keys = prop.split(/[+_-]/g).map((i) => i.trim());
          refs[prop] = __vite_ssr_import_1__.computed(() => keys.every((key) => __vite_ssr_import_1__.unref(proxy[key])));
        } else {
          refs[prop] = __vite_ssr_import_1__.ref(false);
        }
      }
      const r = Reflect.get(target2, prop, rec);
      return useReactive ? __vite_ssr_import_1__.unref(r) : r;
    }
  });
  return proxy;
}

var __defProp$6 = Object.defineProperty;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
function usingElRef(source, cb) {
  if (__vite_ssr_import_1__.unref(source))
    cb(__vite_ssr_import_1__.unref(source));
}
function timeRangeToArray(timeRanges) {
  let ranges = [];
  for (let i = 0; i < timeRanges.length; ++i)
    ranges = [...ranges, [timeRanges.start(i), timeRanges.end(i)]];
  return ranges;
}
function tracksToArray(tracks) {
  return Array.from(tracks).map(({ label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }, id) => ({ id, label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }));
}
const defaultOptions = {
  src: "",
  tracks: []
};
function useMediaControls(target, options = {}) {
  options = __spreadValues$6(__spreadValues$6({}, defaultOptions), options);
  const {
    document = defaultDocument
  } = options;
  const currentTime = __vite_ssr_import_1__.ref(0);
  const duration = __vite_ssr_import_1__.ref(0);
  const seeking = __vite_ssr_import_1__.ref(false);
  const volume = __vite_ssr_import_1__.ref(1);
  const waiting = __vite_ssr_import_1__.ref(false);
  const ended = __vite_ssr_import_1__.ref(false);
  const playing = __vite_ssr_import_1__.ref(false);
  const rate = __vite_ssr_import_1__.ref(1);
  const stalled = __vite_ssr_import_1__.ref(false);
  const buffered = __vite_ssr_import_1__.ref([]);
  const tracks = __vite_ssr_import_1__.ref([]);
  const selectedTrack = __vite_ssr_import_1__.ref(-1);
  const isPictureInPicture = __vite_ssr_import_1__.ref(false);
  const muted = __vite_ssr_import_1__.ref(false);
  const supportsPictureInPicture = document && "pictureInPictureEnabled" in document;
  const sourceErrorEvent = __vite_ssr_import_0__.createEventHook();
  const disableTrack = (track) => {
    usingElRef(target, (el) => {
      if (track) {
        const id = __vite_ssr_import_0__.isNumber(track) ? track : track.id;
        el.textTracks[id].mode = "disabled";
      } else {
        for (let i = 0; i < el.textTracks.length; ++i)
          el.textTracks[i].mode = "disabled";
      }
      selectedTrack.value = -1;
    });
  };
  const enableTrack = (track, disableTracks = true) => {
    usingElRef(target, (el) => {
      const id = __vite_ssr_import_0__.isNumber(track) ? track : track.id;
      if (disableTracks)
        disableTrack();
      el.textTracks[id].mode = "showing";
      selectedTrack.value = id;
    });
  };
  const togglePictureInPicture = () => {
    return new Promise((resolve, reject) => {
      usingElRef(target, async (el) => {
        if (supportsPictureInPicture) {
          if (!isPictureInPicture.value) {
            el.requestPictureInPicture().then(resolve).catch(reject);
          } else {
            document.exitPictureInPicture().then(resolve).catch(reject);
          }
        }
      });
    });
  };
  __vite_ssr_import_1__.watchEffect(() => {
    if (!document)
      return;
    const el = __vite_ssr_import_1__.unref(target);
    if (!el)
      return;
    const src = __vite_ssr_import_1__.unref(options.src);
    let sources = [];
    if (!src)
      return;
    if (__vite_ssr_import_0__.isString(src))
      sources = [{ src }];
    else if (Array.isArray(src))
      sources = src;
    else if (__vite_ssr_import_0__.isObject(src))
      sources = [src];
    el.querySelectorAll("source").forEach((e) => {
      e.removeEventListener("error", sourceErrorEvent.trigger);
      e.remove();
    });
    sources.forEach(({ src: src2, type }) => {
      const source = document.createElement("source");
      source.setAttribute("src", src2);
      source.setAttribute("type", type || "");
      source.addEventListener("error", sourceErrorEvent.trigger);
      el.appendChild(source);
    });
    el.load();
  });
  __vite_ssr_import_0__.tryOnScopeDispose(() => {
    const el = __vite_ssr_import_1__.unref(target);
    if (!el)
      return;
    el.querySelectorAll("source").forEach((e) => e.removeEventListener("error", sourceErrorEvent.trigger));
  });
  __vite_ssr_import_1__.watch(volume, (vol) => {
    const el = __vite_ssr_import_1__.unref(target);
    if (!el)
      return;
    el.volume = vol;
  });
  __vite_ssr_import_1__.watch(muted, (mute) => {
    const el = __vite_ssr_import_1__.unref(target);
    if (!el)
      return;
    el.muted = mute;
  });
  __vite_ssr_import_1__.watch(rate, (rate2) => {
    const el = __vite_ssr_import_1__.unref(target);
    if (!el)
      return;
    el.playbackRate = rate2;
  });
  __vite_ssr_import_1__.watchEffect(() => {
    if (!document)
      return;
    const textTracks = __vite_ssr_import_1__.unref(options.tracks);
    const el = __vite_ssr_import_1__.unref(target);
    if (!textTracks || !textTracks.length || !el)
      return;
    el.querySelectorAll("track").forEach((e) => e.remove());
    textTracks.forEach(({ default: isDefault, kind, label, src, srcLang }, i) => {
      const track = document.createElement("track");
      track.default = isDefault || false;
      track.kind = kind;
      track.label = label;
      track.src = src;
      track.srclang = srcLang;
      if (track.default)
        selectedTrack.value = i;
      el.appendChild(track);
    });
  });
  const { ignoreUpdates: ignoreCurrentTimeUpdates } = __vite_ssr_import_0__.watchIgnorable(currentTime, (time) => {
    const el = __vite_ssr_import_1__.unref(target);
    if (!el)
      return;
    el.currentTime = time;
  });
  const { ignoreUpdates: ignorePlayingUpdates } = __vite_ssr_import_0__.watchIgnorable(playing, (isPlaying) => {
    const el = __vite_ssr_import_1__.unref(target);
    if (!el)
      return;
    isPlaying ? el.play() : el.pause();
  });
  useEventListener(target, "timeupdate", () => ignoreCurrentTimeUpdates(() => currentTime.value = __vite_ssr_import_1__.unref(target).currentTime));
  useEventListener(target, "durationchange", () => duration.value = __vite_ssr_import_1__.unref(target).duration);
  useEventListener(target, "progress", () => buffered.value = timeRangeToArray(__vite_ssr_import_1__.unref(target).buffered));
  useEventListener(target, "seeking", () => seeking.value = true);
  useEventListener(target, "seeked", () => seeking.value = false);
  useEventListener(target, "waiting", () => waiting.value = true);
  useEventListener(target, "playing", () => waiting.value = false);
  useEventListener(target, "ratechange", () => rate.value = __vite_ssr_import_1__.unref(target).playbackRate);
  useEventListener(target, "stalled", () => stalled.value = true);
  useEventListener(target, "ended", () => ended.value = true);
  useEventListener(target, "pause", () => ignorePlayingUpdates(() => playing.value = false));
  useEventListener(target, "play", () => ignorePlayingUpdates(() => playing.value = true));
  useEventListener(target, "enterpictureinpicture", () => isPictureInPicture.value = true);
  useEventListener(target, "leavepictureinpicture", () => isPictureInPicture.value = false);
  useEventListener(target, "volumechange", () => {
    const el = __vite_ssr_import_1__.unref(target);
    if (!el)
      return;
    volume.value = el.volume;
    muted.value = el.muted;
  });
  const listeners = [];
  const stop = __vite_ssr_import_1__.watch([target], () => {
    const el = __vite_ssr_import_1__.unref(target);
    if (!el)
      return;
    stop();
    listeners[0] = useEventListener(el.textTracks, "addtrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[1] = useEventListener(el.textTracks, "removetrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[2] = useEventListener(el.textTracks, "change", () => tracks.value = tracksToArray(el.textTracks));
  });
  __vite_ssr_import_0__.tryOnScopeDispose(() => listeners.forEach((listener) => listener()));
  return {
    currentTime,
    duration,
    waiting,
    seeking,
    ended,
    stalled,
    buffered,
    playing,
    rate,
    volume,
    muted,
    tracks,
    selectedTrack,
    enableTrack,
    disableTrack,
    supportsPictureInPicture,
    togglePictureInPicture,
    isPictureInPicture,
    onSourceError: sourceErrorEvent.on
  };
}

const getMapVue2Compat = () => {
  const data = __vite_ssr_import_1__.reactive({});
  return {
    get: (key) => data[key],
    set: (key, value) => __vite_ssr_import_1__.set(data, key, value),
    has: (key) => Object.prototype.hasOwnProperty.call(data, key),
    delete: (key) => __vite_ssr_import_1__.del(data, key),
    clear: () => {
      Object.keys(data).forEach((key) => {
        __vite_ssr_import_1__.del(data, key);
      });
    }
  };
};
function useMemoize(resolver, options) {
  const initCache = () => {
    if (options == null ? void 0 : options.cache)
      return __vite_ssr_import_1__.reactive(options.cache);
    if (__vite_ssr_import_1__.isVue2)
      return getMapVue2Compat();
    return __vite_ssr_import_1__.reactive(new Map());
  };
  const cache = initCache();
  const generateKey = (...args) => (options == null ? void 0 : options.getKey) ? options.getKey(...args) : JSON.stringify(args);
  const _loadData = (key, ...args) => {
    cache.set(key, resolver(...args));
    return cache.get(key);
  };
  const loadData = (...args) => _loadData(generateKey(...args), ...args);
  const deleteData = (...args) => {
    cache.delete(generateKey(...args));
  };
  const clearData = () => {
    cache.clear();
  };
  const memoized = (...args) => {
    const key = generateKey(...args);
    if (cache.has(key))
      return cache.get(key);
    return _loadData(key, ...args);
  };
  memoized.load = loadData;
  memoized.delete = deleteData;
  memoized.clear = clearData;
  memoized.generateKey = generateKey;
  memoized.cache = cache;
  return memoized;
}

function useMemory(options = {}) {
  const memory = __vite_ssr_import_1__.ref();
  const isSupported = typeof performance !== "undefined" && "memory" in performance;
  if (isSupported) {
    const { interval = 1e3 } = options;
    __vite_ssr_import_0__.useIntervalFn(() => {
      memory.value = performance.memory;
    }, interval, { immediate: options.immediate, immediateCallback: options.immediateCallback });
  }
  return { isSupported, memory };
}

function useMounted() {
  const isMounted = __vite_ssr_import_1__.ref(false);
  __vite_ssr_import_1__.onMounted(() => {
    isMounted.value = true;
  });
  return isMounted;
}

function useMouse(options = {}) {
  const {
    type = "page",
    touch = true,
    resetOnTouchEnds = false,
    initialValue = { x: 0, y: 0 },
    window = defaultWindow,
    eventFilter
  } = options;
  const x = __vite_ssr_import_1__.ref(initialValue.x);
  const y = __vite_ssr_import_1__.ref(initialValue.y);
  const sourceType = __vite_ssr_import_1__.ref(null);
  const mouseHandler = (event) => {
    if (type === "page") {
      x.value = event.pageX;
      y.value = event.pageY;
    } else if (type === "client") {
      x.value = event.clientX;
      y.value = event.clientY;
    }
    sourceType.value = "mouse";
  };
  const reset = () => {
    x.value = initialValue.x;
    y.value = initialValue.y;
  };
  const touchHandler = (event) => {
    if (event.touches.length > 0) {
      const touch2 = event.touches[0];
      if (type === "page") {
        x.value = touch2.pageX;
        y.value = touch2.pageY;
      } else if (type === "client") {
        x.value = touch2.clientX;
        y.value = touch2.clientY;
      }
      sourceType.value = "touch";
    }
  };
  const mouseHandlerWrapper = (event) => {
    return eventFilter === void 0 ? mouseHandler(event) : eventFilter(() => mouseHandler(event), {});
  };
  const touchHandlerWrapper = (event) => {
    return eventFilter === void 0 ? touchHandler(event) : eventFilter(() => touchHandler(event), {});
  };
  if (window) {
    useEventListener(window, "mousemove", mouseHandlerWrapper, { passive: true });
    useEventListener(window, "dragover", mouseHandlerWrapper, { passive: true });
    if (touch) {
      useEventListener(window, "touchstart", touchHandlerWrapper, { passive: true });
      useEventListener(window, "touchmove", touchHandlerWrapper, { passive: true });
      if (resetOnTouchEnds)
        useEventListener(window, "touchend", reset, { passive: true });
    }
  }
  return {
    x,
    y,
    sourceType
  };
}

function useMouseInElement(target, options = {}) {
  const {
    handleOutside = true,
    window = defaultWindow
  } = options;
  const { x, y, sourceType } = useMouse(options);
  const targetRef = __vite_ssr_import_1__.ref(target != null ? target : window == null ? void 0 : window.document.body);
  const elementX = __vite_ssr_import_1__.ref(0);
  const elementY = __vite_ssr_import_1__.ref(0);
  const elementPositionX = __vite_ssr_import_1__.ref(0);
  const elementPositionY = __vite_ssr_import_1__.ref(0);
  const elementHeight = __vite_ssr_import_1__.ref(0);
  const elementWidth = __vite_ssr_import_1__.ref(0);
  const isOutside = __vite_ssr_import_1__.ref(true);
  let stop = () => {
  };
  if (window) {
    stop = __vite_ssr_import_1__.watch([targetRef, x, y], () => {
      const el = unrefElement(targetRef);
      if (!el)
        return;
      const {
        left,
        top,
        width,
        height
      } = el.getBoundingClientRect();
      elementPositionX.value = left + window.pageXOffset;
      elementPositionY.value = top + window.pageYOffset;
      elementHeight.value = height;
      elementWidth.value = width;
      const elX = x.value - elementPositionX.value;
      const elY = y.value - elementPositionY.value;
      isOutside.value = width === 0 || height === 0 || elX < 0 || elY < 0 || elX > width || elY > height;
      if (handleOutside || !isOutside.value) {
        elementX.value = elX;
        elementY.value = elY;
      }
    }, { immediate: true });
  }
  return {
    x,
    y,
    sourceType,
    elementX,
    elementY,
    elementPositionX,
    elementPositionY,
    elementHeight,
    elementWidth,
    isOutside,
    stop
  };
}

function useMousePressed(options = {}) {
  const {
    touch = true,
    drag = true,
    initialValue = false,
    window = defaultWindow
  } = options;
  const pressed = __vite_ssr_import_1__.ref(initialValue);
  const sourceType = __vite_ssr_import_1__.ref(null);
  if (!window) {
    return {
      pressed,
      sourceType
    };
  }
  const onPressed = (srcType) => () => {
    pressed.value = true;
    sourceType.value = srcType;
  };
  const onReleased = () => {
    pressed.value = false;
    sourceType.value = null;
  };
  const target = __vite_ssr_import_1__.computed(() => unrefElement(options.target) || window);
  useEventListener(target, "mousedown", onPressed("mouse"), { passive: true });
  useEventListener(window, "mouseleave", onReleased, { passive: true });
  useEventListener(window, "mouseup", onReleased, { passive: true });
  if (drag) {
    useEventListener(target, "dragstart", onPressed("mouse"), { passive: true });
    useEventListener(window, "drop", onReleased, { passive: true });
    useEventListener(window, "dragend", onReleased, { passive: true });
  }
  if (touch) {
    useEventListener(target, "touchstart", onPressed("touch"), { passive: true });
    useEventListener(window, "touchend", onReleased, { passive: true });
    useEventListener(window, "touchcancel", onReleased, { passive: true });
  }
  return {
    pressed,
    sourceType
  };
}

var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useMutationObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, mutationOptions = __objRest$1(_a, ["window"]);
  let observer;
  const isSupported = window && "MutationObserver" in window;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = __vite_ssr_import_1__.watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window && el) {
      observer = new MutationObserver(callback);
      observer.observe(el, mutationOptions);
    }
  }, { immediate: true });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  __vite_ssr_import_0__.tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

const useNavigatorLanguage = (options = {}) => {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = Boolean(navigator && "language" in navigator);
  const language = __vite_ssr_import_1__.ref(navigator == null ? void 0 : navigator.language);
  useEventListener(window, "languagechange", () => {
    if (navigator)
      language.value = navigator.language;
  });
  return {
    isSupported,
    language
  };
};

function useNetwork(options = {}) {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = Boolean(navigator && "connection" in navigator);
  const isOnline = __vite_ssr_import_1__.ref(true);
  const saveData = __vite_ssr_import_1__.ref(false);
  const offlineAt = __vite_ssr_import_1__.ref(void 0);
  const onlineAt = __vite_ssr_import_1__.ref(void 0);
  const downlink = __vite_ssr_import_1__.ref(void 0);
  const downlinkMax = __vite_ssr_import_1__.ref(void 0);
  const rtt = __vite_ssr_import_1__.ref(void 0);
  const effectiveType = __vite_ssr_import_1__.ref(void 0);
  const type = __vite_ssr_import_1__.ref("unknown");
  const connection = isSupported && navigator.connection;
  function updateNetworkInformation() {
    if (!navigator)
      return;
    isOnline.value = navigator.onLine;
    offlineAt.value = isOnline.value ? void 0 : Date.now();
    onlineAt.value = isOnline.value ? Date.now() : void 0;
    if (connection) {
      downlink.value = connection.downlink;
      downlinkMax.value = connection.downlinkMax;
      effectiveType.value = connection.effectiveType;
      rtt.value = connection.rtt;
      saveData.value = connection.saveData;
      type.value = connection.type;
    }
  }
  if (window) {
    useEventListener(window, "offline", () => {
      isOnline.value = false;
      offlineAt.value = Date.now();
    });
    useEventListener(window, "online", () => {
      isOnline.value = true;
      onlineAt.value = Date.now();
    });
  }
  if (connection)
    useEventListener(connection, "change", updateNetworkInformation, false);
  updateNetworkInformation();
  return {
    isSupported,
    isOnline,
    saveData,
    offlineAt,
    onlineAt,
    downlink,
    downlinkMax,
    effectiveType,
    rtt,
    type
  };
}

var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame"
  } = options;
  const now = __vite_ssr_import_1__.ref(new Date());
  const update = () => now.value = new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate: true }) : __vite_ssr_import_0__.useIntervalFn(update, interval, { immediate: true });
  if (exposeControls) {
    return __spreadValues$5({
      now
    }, controls);
  } else {
    return now;
  }
}

function useOffsetPagination(options) {
  const {
    total = Infinity,
    pageSize = 10,
    page = 1,
    onPageChange = __vite_ssr_import_0__.noop,
    onPageSizeChange = __vite_ssr_import_0__.noop,
    onPageCountChange = __vite_ssr_import_0__.noop
  } = options;
  const currentPageSize = useClamp(pageSize, 1, Infinity);
  const pageCount = __vite_ssr_import_1__.computed(() => Math.ceil(__vite_ssr_import_1__.unref(total) / __vite_ssr_import_1__.unref(currentPageSize)));
  const currentPage = useClamp(page, 1, pageCount);
  const isFirstPage = __vite_ssr_import_1__.computed(() => currentPage.value === 1);
  const isLastPage = __vite_ssr_import_1__.computed(() => currentPage.value === pageCount.value);
  if (__vite_ssr_import_1__.isRef(page))
    __vite_ssr_import_0__.syncRef(page, currentPage);
  if (__vite_ssr_import_1__.isRef(pageSize))
    __vite_ssr_import_0__.syncRef(pageSize, currentPageSize);
  function prev() {
    currentPage.value--;
  }
  function next() {
    currentPage.value++;
  }
  const returnValue = {
    currentPage,
    currentPageSize,
    pageCount,
    isFirstPage,
    isLastPage,
    prev,
    next
  };
  __vite_ssr_import_1__.watch(currentPage, () => {
    onPageChange(__vite_ssr_import_1__.reactive(returnValue));
  });
  __vite_ssr_import_1__.watch(currentPageSize, () => {
    onPageSizeChange(__vite_ssr_import_1__.reactive(returnValue));
  });
  __vite_ssr_import_1__.watch(pageCount, () => {
    onPageCountChange(__vite_ssr_import_1__.reactive(returnValue));
  });
  return returnValue;
}

function useOnline(options = {}) {
  const { isOnline } = useNetwork(options);
  return isOnline;
}

function usePageLeave(options = {}) {
  const { window = defaultWindow } = options;
  const isLeft = __vite_ssr_import_1__.ref(false);
  const handler = (event) => {
    if (!window)
      return;
    event = event || window.event;
    const from = event.relatedTarget || event.toElement;
    isLeft.value = !from;
  };
  if (window) {
    useEventListener(window, "mouseout", handler, { passive: true });
    useEventListener(window.document, "mouseleave", handler, { passive: true });
    useEventListener(window.document, "mouseenter", handler, { passive: true });
  }
  return isLeft;
}

function useParallax(target, options = {}) {
  const {
    deviceOrientationTiltAdjust = (i) => i,
    deviceOrientationRollAdjust = (i) => i,
    mouseTiltAdjust = (i) => i,
    mouseRollAdjust = (i) => i,
    window = defaultWindow
  } = options;
  const orientation = __vite_ssr_import_1__.reactive(useDeviceOrientation({ window }));
  const {
    elementX: x,
    elementY: y,
    elementWidth: width,
    elementHeight: height
  } = useMouseInElement(target, { handleOutside: false, window });
  const source = __vite_ssr_import_1__.computed(() => {
    if (orientation.isSupported && (orientation.alpha != null && orientation.alpha !== 0 || orientation.gamma != null && orientation.gamma !== 0))
      return "deviceOrientation";
    return "mouse";
  });
  const roll = __vite_ssr_import_1__.computed(() => {
    if (source.value === "deviceOrientation") {
      const value = -orientation.beta / 90;
      return deviceOrientationRollAdjust(value);
    } else {
      const value = -(y.value - height.value / 2) / height.value;
      return mouseRollAdjust(value);
    }
  });
  const tilt = __vite_ssr_import_1__.computed(() => {
    if (source.value === "deviceOrientation") {
      const value = orientation.gamma / 90;
      return deviceOrientationTiltAdjust(value);
    } else {
      const value = (x.value - width.value / 2) / width.value;
      return mouseTiltAdjust(value);
    }
  });
  return { roll, tilt, source };
}

var __defProp$4 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
const keys = /* @__PURE__ */ Object.keys(defaultState);
function usePointer(options = {}) {
  const {
    target = defaultWindow
  } = options;
  const isInside = __vite_ssr_import_1__.ref(false);
  const state = __vite_ssr_import_1__.ref(options.initialValue || {});
  Object.assign(state.value, defaultState, state.value);
  const handler = (event) => {
    isInside.value = true;
    if (options.pointerTypes && !options.pointerTypes.includes(event.pointerType))
      return;
    state.value = __vite_ssr_import_0__.objectPick(event, keys, false);
  };
  if (target) {
    useEventListener(target, "pointerdown", handler, { passive: true });
    useEventListener(target, "pointermove", handler, { passive: true });
    useEventListener(target, "pointerleave", () => isInside.value = false, { passive: true });
  }
  return __spreadProps$1(__spreadValues$4({}, __vite_ssr_import_0__.toRefs(state)), {
    isInside
  });
}

var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
function useSwipe(target, options = {}) {
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart,
    passive = true,
    window = defaultWindow
  } = options;
  const coordsStart = __vite_ssr_import_1__.reactive({ x: 0, y: 0 });
  const coordsEnd = __vite_ssr_import_1__.reactive({ x: 0, y: 0 });
  const diffX = __vite_ssr_import_1__.computed(() => coordsStart.x - coordsEnd.x);
  const diffY = __vite_ssr_import_1__.computed(() => coordsStart.y - coordsEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = __vite_ssr_import_1__.computed(() => max(abs(diffX.value), abs(diffY.value)) >= threshold);
  const isSwiping = __vite_ssr_import_1__.ref(false);
  const direction = __vite_ssr_import_1__.computed(() => {
    if (!isThresholdExceeded.value)
      return SwipeDirection.NONE;
    if (abs(diffX.value) > abs(diffY.value)) {
      return diffX.value > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT;
    } else {
      return diffY.value > 0 ? SwipeDirection.UP : SwipeDirection.DOWN;
    }
  });
  const getTouchEventCoords = (e) => [e.touches[0].clientX, e.touches[0].clientY];
  const updateCoordsStart = (x, y) => {
    coordsStart.x = x;
    coordsStart.y = y;
  };
  const updateCoordsEnd = (x, y) => {
    coordsEnd.x = x;
    coordsEnd.y = y;
  };
  let listenerOptions;
  const isPassiveEventSupported = checkPassiveEventSupport(window == null ? void 0 : window.document);
  if (!passive)
    listenerOptions = isPassiveEventSupported ? { passive: false, capture: true } : { capture: true };
  else
    listenerOptions = isPassiveEventSupported ? { passive: true } : { capture: false };
  const onTouchEnd = (e) => {
    if (isSwiping.value)
      onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
    isSwiping.value = false;
  };
  const stops = [
    useEventListener(target, "touchstart", (e) => {
      if (listenerOptions.capture && !listenerOptions.passive)
        e.preventDefault();
      const [x, y] = getTouchEventCoords(e);
      updateCoordsStart(x, y);
      updateCoordsEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }, listenerOptions),
    useEventListener(target, "touchmove", (e) => {
      const [x, y] = getTouchEventCoords(e);
      updateCoordsEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }, listenerOptions),
    useEventListener(target, "touchend", onTouchEnd, listenerOptions),
    useEventListener(target, "touchcancel", onTouchEnd, listenerOptions)
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isPassiveEventSupported,
    isSwiping,
    direction,
    coordsStart,
    coordsEnd,
    lengthX: diffX,
    lengthY: diffY,
    stop
  };
}
function checkPassiveEventSupport(document) {
  if (!document)
    return false;
  let supportsPassive = false;
  const optionsBlock = {
    get passive() {
      supportsPassive = true;
      return false;
    }
  };
  document.addEventListener("x", __vite_ssr_import_0__.noop, optionsBlock);
  document.removeEventListener("x", __vite_ssr_import_0__.noop);
  return supportsPassive;
}

function usePointerSwipe(target, options = {}) {
  const targetRef = __vite_ssr_import_1__.ref(target);
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart
  } = options;
  const posStart = __vite_ssr_import_1__.reactive({ x: 0, y: 0 });
  const updatePosStart = (x, y) => {
    posStart.x = x;
    posStart.y = y;
  };
  const posEnd = __vite_ssr_import_1__.reactive({ x: 0, y: 0 });
  const updatePosEnd = (x, y) => {
    posEnd.x = x;
    posEnd.y = y;
  };
  const distanceX = __vite_ssr_import_1__.computed(() => posStart.x - posEnd.x);
  const distanceY = __vite_ssr_import_1__.computed(() => posStart.y - posEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = __vite_ssr_import_1__.computed(() => max(abs(distanceX.value), abs(distanceY.value)) >= threshold);
  const isSwiping = __vite_ssr_import_1__.ref(false);
  const isPointerDown = __vite_ssr_import_1__.ref(false);
  const direction = __vite_ssr_import_1__.computed(() => {
    if (!isThresholdExceeded.value)
      return SwipeDirection.NONE;
    if (abs(distanceX.value) > abs(distanceY.value)) {
      return distanceX.value > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT;
    } else {
      return distanceY.value > 0 ? SwipeDirection.UP : SwipeDirection.DOWN;
    }
  });
  const filterEvent = (e) => {
    if (options.pointerTypes)
      return options.pointerTypes.includes(e.pointerType);
    return true;
  };
  const stops = [
    useEventListener(target, "pointerdown", (e) => {
      var _a, _b;
      if (!filterEvent(e))
        return;
      isPointerDown.value = true;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "none");
      const eventTarget = e.target;
      eventTarget == null ? void 0 : eventTarget.setPointerCapture(e.pointerId);
      const { clientX: x, clientY: y } = e;
      updatePosStart(x, y);
      updatePosEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }),
    useEventListener(target, "pointermove", (e) => {
      if (!filterEvent(e))
        return;
      if (!isPointerDown.value)
        return;
      const { clientX: x, clientY: y } = e;
      updatePosEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }),
    useEventListener(target, "pointerup", (e) => {
      var _a, _b;
      if (!filterEvent(e))
        return;
      if (isSwiping.value)
        onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
      isPointerDown.value = false;
      isSwiping.value = false;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "initial");
    })
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isSwiping: __vite_ssr_import_1__.readonly(isSwiping),
    direction: __vite_ssr_import_1__.readonly(direction),
    posStart: __vite_ssr_import_1__.readonly(posStart),
    posEnd: __vite_ssr_import_1__.readonly(posEnd),
    distanceX,
    distanceY,
    stop
  };
}

function usePreferredColorScheme(options) {
  const isLight = useMediaQuery("(prefers-color-scheme: light)", options);
  const isDark = useMediaQuery("(prefers-color-scheme: dark)", options);
  return __vite_ssr_import_1__.computed(() => {
    if (isDark.value)
      return "dark";
    if (isLight.value)
      return "light";
    return "no-preference";
  });
}

function usePreferredLanguages(options = {}) {
  const { window = defaultWindow } = options;
  if (!window)
    return __vite_ssr_import_1__.ref(["en"]);
  const navigator = window.navigator;
  const value = __vite_ssr_import_1__.ref(navigator.languages);
  useEventListener(window, "languagechange", () => {
    value.value = navigator.languages;
  });
  return value;
}

const useScreenOrientation = (options = {}) => {
  const {
    window = defaultWindow
  } = options;
  const isSupported = !!(window && "screen" in window && "orientation" in window.screen);
  const screenOrientation = isSupported ? window.screen.orientation : {};
  const orientation = __vite_ssr_import_1__.ref(screenOrientation.type);
  const angle = __vite_ssr_import_1__.ref(screenOrientation.angle || 0);
  if (isSupported) {
    useEventListener(window, "orientationchange", () => {
      orientation.value = screenOrientation.type;
      angle.value = screenOrientation.angle;
    });
  }
  const lockOrientation = (type) => {
    if (!isSupported)
      return Promise.reject(new Error("Not supported"));
    return screenOrientation.lock(type);
  };
  const unlockOrientation = () => {
    if (isSupported)
      screenOrientation.unlock();
  };
  return {
    isSupported,
    orientation,
    angle,
    lockOrientation,
    unlockOrientation
  };
};

const topVarName = "--vueuse-safe-area-top";
const rightVarName = "--vueuse-safe-area-right";
const bottomVarName = "--vueuse-safe-area-bottom";
const leftVarName = "--vueuse-safe-area-left";
function useScreenSafeArea() {
  const top = __vite_ssr_import_1__.ref("");
  const right = __vite_ssr_import_1__.ref("");
  const bottom = __vite_ssr_import_1__.ref("");
  const left = __vite_ssr_import_1__.ref("");
  if (__vite_ssr_import_0__.isClient) {
    const topCssVar = useCssVar(topVarName);
    const rightCssVar = useCssVar(rightVarName);
    const bottomCssVar = useCssVar(bottomVarName);
    const leftCssVar = useCssVar(leftVarName);
    topCssVar.value = "env(safe-area-inset-top, 0px)";
    rightCssVar.value = "env(safe-area-inset-right, 0px)";
    bottomCssVar.value = "env(safe-area-inset-bottom, 0px)";
    leftCssVar.value = "env(safe-area-inset-left, 0px)";
    update();
    useEventListener("resize", __vite_ssr_import_0__.useDebounceFn(update));
  }
  function update() {
    top.value = getValue(topVarName);
    right.value = getValue(rightVarName);
    bottom.value = getValue(bottomVarName);
    left.value = getValue(leftVarName);
  }
  return {
    top,
    right,
    bottom,
    left,
    update
  };
}
function getValue(position) {
  return getComputedStyle(document.documentElement).getPropertyValue(position);
}

function useScriptTag(src, onLoaded = __vite_ssr_import_0__.noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document = defaultDocument,
    attrs = {}
  } = options;
  const scriptTag = __vite_ssr_import_1__.ref(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el2) => {
      scriptTag.value = el2;
      resolve(el2);
      return el2;
    };
    if (!document) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document.querySelector(`script[src="${src}"]`);
    if (!el) {
      el = document.createElement("script");
      el.type = type;
      el.async = async;
      el.src = __vite_ssr_import_1__.unref(src);
      if (defer)
        el.defer = defer;
      if (crossOrigin)
        el.crossOrigin = crossOrigin;
      if (noModule)
        el.noModule = noModule;
      if (referrerPolicy)
        el.referrerPolicy = referrerPolicy;
      Object.entries(attrs).forEach(([name, value]) => el == null ? void 0 : el.setAttribute(name, value));
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) {
      resolveWithElement(el);
    }
    el.addEventListener("error", (event) => reject(event));
    el.addEventListener("abort", (event) => reject(event));
    el.addEventListener("load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    });
    if (shouldAppend)
      el = document.head.appendChild(el);
    if (!waitForScriptLoad)
      resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document)
      return;
    _promise = null;
    if (scriptTag.value)
      scriptTag.value = null;
    const el = document.querySelector(`script[src="${src}"]`);
    if (el)
      document.head.removeChild(el);
  };
  if (immediate && !manual)
    __vite_ssr_import_0__.tryOnMounted(load);
  if (!manual)
    __vite_ssr_import_0__.tryOnUnmounted(unload);
  return { scriptTag, load, unload };
}

function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
}
function useScrollLock(element, initialState = false) {
  const isLocked = __vite_ssr_import_1__.ref(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow;
  __vite_ssr_import_1__.watch(() => __vite_ssr_import_1__.unref(element), (el) => {
    if (el) {
      const ele = el;
      initialOverflow = ele.style.overflow;
      if (isLocked.value)
        ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const ele = __vite_ssr_import_1__.unref(element);
    if (!ele || isLocked.value)
      return;
    if (__vite_ssr_import_0__.isIOS) {
      stopTouchMoveListener = useEventListener(ele, "touchmove", preventDefault, { passive: false });
    }
    ele.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const ele = __vite_ssr_import_1__.unref(element);
    if (!ele || !isLocked.value)
      return;
    __vite_ssr_import_0__.isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    ele.style.overflow = initialOverflow;
    isLocked.value = false;
  };
  __vite_ssr_import_0__.tryOnScopeDispose(unlock);
  return __vite_ssr_import_1__.computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else
        unlock();
    }
  });
}

function useSessionStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.sessionStorage, options);
}

var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
function useShare(shareOptions = {}, options = {}) {
  const { navigator = defaultNavigator } = options;
  const _navigator = navigator;
  const isSupported = _navigator && "canShare" in _navigator;
  const share = async (overrideOptions = {}) => {
    if (isSupported) {
      const data = __spreadValues$3(__spreadValues$3({}, __vite_ssr_import_1__.unref(shareOptions)), __vite_ssr_import_1__.unref(overrideOptions));
      let granted = true;
      if (data.files && _navigator.canShare)
        granted = _navigator.canShare({ files: data.files });
      if (granted)
        return _navigator.share(data);
    }
  };
  return {
    isSupported,
    share
  };
}

function useSpeechRecognition(options = {}) {
  const {
    interimResults = true,
    continuous = true,
    window = defaultWindow
  } = options;
  const lang = __vite_ssr_import_1__.ref(options.lang || "en-US");
  const isListening = __vite_ssr_import_1__.ref(false);
  const isFinal = __vite_ssr_import_1__.ref(false);
  const result = __vite_ssr_import_1__.ref("");
  const error = __vite_ssr_import_1__.shallowRef(void 0);
  const toggle = (value = !isListening.value) => {
    isListening.value = value;
  };
  const start = () => {
    isListening.value = true;
  };
  const stop = () => {
    isListening.value = false;
  };
  const SpeechRecognition = window && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const isSupported = Boolean(SpeechRecognition);
  let recognition;
  if (isSupported) {
    recognition = new SpeechRecognition();
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.lang = __vite_ssr_import_1__.unref(lang);
    recognition.onstart = () => {
      isFinal.value = false;
    };
    __vite_ssr_import_1__.watch(lang, (lang2) => {
      if (recognition && !isListening.value)
        recognition.lang = lang2;
    });
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results).map((result2) => {
        isFinal.value = result2.isFinal;
        return result2[0];
      }).map((result2) => result2.transcript).join("");
      result.value = transcript;
      error.value = void 0;
    };
    recognition.onerror = (event) => {
      error.value = event;
    };
    recognition.onend = () => {
      isListening.value = false;
      recognition.lang = __vite_ssr_import_1__.unref(lang);
    };
    __vite_ssr_import_1__.watch(isListening, () => {
      if (isListening.value)
        recognition.start();
      else
        recognition.stop();
    });
  }
  __vite_ssr_import_0__.tryOnScopeDispose(() => {
    isListening.value = false;
  });
  return {
    isSupported,
    isListening,
    isFinal,
    recognition,
    result,
    error,
    toggle,
    start,
    stop
  };
}

function useSpeechSynthesis(text, options = {}) {
  var _a, _b;
  const {
    pitch = 1,
    rate = 1,
    volume = 1,
    window = defaultWindow
  } = options;
  const synth = window && window.speechSynthesis;
  const isSupported = Boolean(synth);
  const isPlaying = __vite_ssr_import_1__.ref(false);
  const status = __vite_ssr_import_1__.ref("init");
  const voiceInfo = {
    lang: ((_a = options.voice) == null ? void 0 : _a.lang) || "default",
    name: ((_b = options.voice) == null ? void 0 : _b.name) || ""
  };
  const spokenText = __vite_ssr_import_1__.ref(text || "");
  const lang = __vite_ssr_import_1__.ref(options.lang || "en-US");
  const error = __vite_ssr_import_1__.shallowRef(void 0);
  const toggle = (value = !isPlaying.value) => {
    isPlaying.value = value;
  };
  const bindEventsForUtterance = (utterance2) => {
    utterance2.lang = __vite_ssr_import_1__.unref(lang);
    options.voice && (utterance2.voice = options.voice);
    utterance2.pitch = pitch;
    utterance2.rate = rate;
    utterance2.volume = volume;
    utterance2.onstart = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onpause = () => {
      isPlaying.value = false;
      status.value = "pause";
    };
    utterance2.onresume = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onend = () => {
      isPlaying.value = false;
      status.value = "end";
    };
    utterance2.onerror = (event) => {
      error.value = event;
    };
    utterance2.onend = () => {
      isPlaying.value = false;
      utterance2.lang = __vite_ssr_import_1__.unref(lang);
    };
  };
  const utterance = __vite_ssr_import_1__.computed(() => {
    isPlaying.value = false;
    status.value = "init";
    const newUtterance = new SpeechSynthesisUtterance(spokenText.value);
    bindEventsForUtterance(newUtterance);
    return newUtterance;
  });
  const speak = () => {
    synth.cancel();
    utterance && synth.speak(utterance.value);
  };
  if (isSupported) {
    bindEventsForUtterance(utterance.value);
    __vite_ssr_import_1__.watch(lang, (lang2) => {
      if (utterance.value && !isPlaying.value)
        utterance.value.lang = lang2;
    });
    __vite_ssr_import_1__.watch(isPlaying, () => {
      if (isPlaying.value)
        synth.resume();
      else
        synth.pause();
    });
  }
  __vite_ssr_import_0__.tryOnScopeDispose(() => {
    isPlaying.value = false;
  });
  return {
    isSupported,
    isPlaying,
    status,
    voiceInfo,
    utterance,
    error,
    toggle,
    speak
  };
}

function useStorageAsync(key, initialValue, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const rawInit = __vite_ssr_import_1__.unref(initialValue);
  const type = guessSerializerType(rawInit);
  const data = (shallow ? __vite_ssr_import_1__.shallowRef : __vite_ssr_import_1__.ref)(initialValue);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  async function read(event) {
    if (!storage || event && event.key !== key)
      return;
    try {
      const rawValue = event ? event.newValue : await storage.getItem(key);
      if (rawValue == null) {
        data.value = rawInit;
        if (writeDefaults && rawInit !== null)
          await storage.setItem(key, await serializer.write(rawInit));
      } else {
        data.value = await serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    }
  }
  read();
  if (window && listenToStorageChanges)
    useEventListener(window, "storage", (e) => setTimeout(() => read(e), 0));
  if (storage) {
    __vite_ssr_import_0__.watchWithFilter(data, async () => {
      try {
        if (data.value == null)
          await storage.removeItem(key);
        else
          await storage.setItem(key, await serializer.write(data.value));
      } catch (e) {
        onError(e);
      }
    }, {
      flush,
      deep,
      eventFilter
    });
  }
  return data;
}

let _id = 0;
function useStyleTag(css, options = {}) {
  const isLoaded = __vite_ssr_import_1__.ref(false);
  const {
    document = defaultDocument,
    immediate = true,
    manual = false,
    id = `vueuse_styletag_${++_id}`
  } = options;
  const cssRef = __vite_ssr_import_1__.ref(css);
  let stop = () => {
  };
  const load = () => {
    if (!document)
      return;
    const el = document.getElementById(id) || document.createElement("style");
    el.type = "text/css";
    el.id = id;
    if (options.media)
      el.media = options.media;
    document.head.appendChild(el);
    if (isLoaded.value)
      return;
    stop = __vite_ssr_import_1__.watch(cssRef, (value) => {
      el.innerText = value;
    }, { immediate: true });
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document || !isLoaded.value)
      return;
    stop();
    document.head.removeChild(document.getElementById(id));
    isLoaded.value = false;
  };
  if (immediate && !manual)
    load();
  if (!manual)
    __vite_ssr_import_0__.tryOnScopeDispose(unload);
  return {
    id,
    css: cssRef,
    unload,
    load,
    isLoaded: __vite_ssr_import_1__.readonly(isLoaded)
  };
}

function useTemplateRefsList() {
  const refs = __vite_ssr_import_1__.ref([]);
  refs.value.set = (el) => {
    if (el)
      refs.value.push(el);
  };
  __vite_ssr_import_1__.onBeforeUpdate(() => {
    refs.value.length = 0;
  });
  return refs;
}

function getRangesFromSelection(selection) {
  var _a;
  const rangeCount = (_a = selection.rangeCount) != null ? _a : 0;
  const ranges = new Array(rangeCount);
  for (let i = 0; i < rangeCount; i++) {
    const range = selection.getRangeAt(i);
    ranges[i] = range;
  }
  return ranges;
}
function useTextSelection(options = {}) {
  const {
    window = defaultWindow
  } = options;
  const selection = __vite_ssr_import_1__.ref(null);
  const text = __vite_ssr_import_1__.computed(() => {
    var _a, _b;
    return (_b = (_a = selection.value) == null ? void 0 : _a.toString()) != null ? _b : "";
  });
  const ranges = __vite_ssr_import_1__.computed(() => selection.value ? getRangesFromSelection(selection.value) : []);
  const rects = __vite_ssr_import_1__.computed(() => ranges.value.map((range) => range.getBoundingClientRect()));
  function onSelectionChange() {
    selection.value = null;
    if (window)
      selection.value = window.getSelection();
  }
  if (window)
    useEventListener(window.document, "selectionchange", onSelectionChange);
  return {
    text,
    rects,
    ranges,
    selection
  };
}

var __defProp$2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function useThrottledRefHistory(source, options = {}) {
  const { throttle = 200, trailing = true } = options;
  const filter = __vite_ssr_import_0__.throttleFilter(throttle, trailing);
  const history = useRefHistory(source, __spreadProps(__spreadValues$2({}, options), { eventFilter: filter }));
  return __spreadValues$2({}, history);
}

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Infinity, value: 31536e6, name: "year" }
];
const DEFAULT_MESSAGES = {
  justNow: "just now",
  past: (n) => n.match(/\d/) ? `${n} ago` : n,
  future: (n) => n.match(/\d/) ? `in ${n}` : n,
  month: (n, past) => n === 1 ? past ? "last month" : "next month" : `${n} month${n > 1 ? "s" : ""}`,
  year: (n, past) => n === 1 ? past ? "last year" : "next year" : `${n} year${n > 1 ? "s" : ""}`,
  day: (n, past) => n === 1 ? past ? "yesterday" : "tomorrow" : `${n} day${n > 1 ? "s" : ""}`,
  week: (n, past) => n === 1 ? past ? "last week" : "next week" : `${n} week${n > 1 ? "s" : ""}`,
  hour: (n) => `${n} hour${n > 1 ? "s" : ""}`,
  minute: (n) => `${n} minute${n > 1 ? "s" : ""}`,
  second: (n) => `${n} second${n > 1 ? "s" : ""}`
};
const DEFAULT_FORMATTER = (date) => date.toISOString().slice(0, 10);
function useTimeAgo(time, options = {}) {
  const {
    controls: exposeControls = false,
    max,
    updateInterval = 3e4,
    messages = DEFAULT_MESSAGES,
    fullDateFormatter = DEFAULT_FORMATTER
  } = options;
  const { abs, round } = Math;
  const _a = useNow({ interval: updateInterval, controls: true }), { now } = _a, controls = __objRest(_a, ["now"]);
  function getTimeago(from, now2) {
    var _a2;
    const diff = +now2 - +from;
    const absDiff = abs(diff);
    if (absDiff < 6e4)
      return messages.justNow;
    if (typeof max === "number" && absDiff > max)
      return fullDateFormatter(new Date(from));
    if (typeof max === "string") {
      const unitMax = (_a2 = UNITS.find((i) => i.name === max)) == null ? void 0 : _a2.max;
      if (unitMax && absDiff > unitMax)
        return fullDateFormatter(new Date(from));
    }
    for (const unit of UNITS) {
      if (absDiff < unit.max)
        return format(diff, unit);
    }
  }
  function applyFormat(name, val, isPast) {
    const formatter = messages[name];
    if (typeof formatter === "function")
      return formatter(val, isPast);
    return formatter.replace("{0}", val.toString());
  }
  function format(diff, unit) {
    const val = round(abs(diff) / unit.value);
    const past = diff > 0;
    const str = applyFormat(unit.name, val, past);
    return applyFormat(past ? "past" : "future", str, past);
  }
  const timeAgo = __vite_ssr_import_1__.computed(() => getTimeago(new Date(__vite_ssr_import_1__.unref(time)), __vite_ssr_import_1__.unref(now.value)));
  if (exposeControls) {
    return __spreadValues$1({
      timeAgo
    }, controls);
  } else {
    return timeAgo;
  }
}

function useTimeoutPoll(fn, interval, timeoutPollOptions) {
  const { start } = __vite_ssr_import_0__.useTimeoutFn(loop, interval);
  const isActive = __vite_ssr_import_1__.ref(false);
  async function loop() {
    if (!isActive.value)
      return;
    await fn();
    start();
  }
  function resume() {
    if (!isActive.value) {
      isActive.value = true;
      loop();
    }
  }
  function pause() {
    isActive.value = false;
  }
  if (timeoutPollOptions == null ? void 0 : timeoutPollOptions.immediate)
    resume();
  __vite_ssr_import_0__.tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function useTimestamp(options = {}) {
  const {
    controls: exposeControls = false,
    offset = 0,
    immediate = true,
    interval = "requestAnimationFrame"
  } = options;
  const ts = __vite_ssr_import_1__.ref(__vite_ssr_import_0__.timestamp() + offset);
  const update = () => ts.value = __vite_ssr_import_0__.timestamp() + offset;
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate }) : __vite_ssr_import_0__.useIntervalFn(update, interval, { immediate });
  if (exposeControls) {
    return __spreadValues({
      timestamp: ts
    }, controls);
  } else {
    return ts;
  }
}

function useTitle(newTitle = null, options = {}) {
  var _a, _b;
  const {
    document = defaultDocument,
    observe = false,
    titleTemplate = "%s"
  } = options;
  const title = __vite_ssr_import_1__.ref((_a = newTitle != null ? newTitle : document == null ? void 0 : document.title) != null ? _a : null);
  __vite_ssr_import_1__.watch(title, (t, o) => {
    if (__vite_ssr_import_0__.isString(t) && t !== o && document)
      document.title = titleTemplate.replace("%s", t);
  }, { immediate: true });
  if (observe && document) {
    useMutationObserver((_b = document.head) == null ? void 0 : _b.querySelector("title"), () => {
      if (document && document.title !== title.value)
        title.value = titleTemplate.replace("%s", document.title);
    }, { childList: true });
  }
  return title;
}

const TransitionPresets = {
  linear: __vite_ssr_import_0__.identity,
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
function createEasingFunction([p0, p1, p2, p3]) {
  const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
  const b = (a1, a2) => 3 * a2 - 6 * a1;
  const c = (a1) => 3 * a1;
  const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
  const getTforX = (x) => {
    let aGuessT = x;
    for (let i = 0; i < 4; ++i) {
      const currentSlope = getSlope(aGuessT, p0, p2);
      if (currentSlope === 0)
        return aGuessT;
      const currentX = calcBezier(aGuessT, p0, p2) - x;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  };
  return (x) => p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}
function useTransition(source, options = {}) {
  const {
    delay = 0,
    disabled = false,
    duration = 1e3,
    onFinished = __vite_ssr_import_0__.noop,
    onStarted = __vite_ssr_import_0__.noop,
    transition = __vite_ssr_import_0__.identity
  } = options;
  const currentTransition = __vite_ssr_import_1__.computed(() => {
    const t = __vite_ssr_import_1__.unref(transition);
    return __vite_ssr_import_0__.isFunction(t) ? t : createEasingFunction(t);
  });
  const sourceValue = __vite_ssr_import_1__.computed(() => {
    const s = __vite_ssr_import_1__.unref(source);
    return __vite_ssr_import_0__.isNumber(s) ? s : s.map(__vite_ssr_import_1__.unref);
  });
  const sourceVector = __vite_ssr_import_1__.computed(() => __vite_ssr_import_0__.isNumber(sourceValue.value) ? [sourceValue.value] : sourceValue.value);
  const outputVector = __vite_ssr_import_1__.ref(sourceVector.value.slice(0));
  let currentDuration;
  let diffVector;
  let endAt;
  let startAt;
  let startVector;
  const { resume, pause } = useRafFn(() => {
    const now = Date.now();
    const progress = __vite_ssr_import_0__.clamp(1 - (endAt - now) / currentDuration, 0, 1);
    outputVector.value = startVector.map((val, i) => {
      var _a;
      return val + ((_a = diffVector[i]) != null ? _a : 0) * currentTransition.value(progress);
    });
    if (progress >= 1) {
      pause();
      onFinished();
    }
  }, { immediate: false });
  const start = () => {
    pause();
    currentDuration = __vite_ssr_import_1__.unref(duration);
    diffVector = outputVector.value.map((n, i) => {
      var _a, _b;
      return ((_a = sourceVector.value[i]) != null ? _a : 0) - ((_b = outputVector.value[i]) != null ? _b : 0);
    });
    startVector = outputVector.value.slice(0);
    startAt = Date.now();
    endAt = startAt + currentDuration;
    resume();
    onStarted();
  };
  const timeout = __vite_ssr_import_0__.useTimeoutFn(start, delay, { immediate: false });
  __vite_ssr_import_1__.watch(sourceVector, () => {
    if (__vite_ssr_import_1__.unref(disabled)) {
      outputVector.value = sourceVector.value.slice(0);
    } else {
      if (__vite_ssr_import_1__.unref(delay) <= 0)
        start();
      else
        timeout.start();
    }
  }, { deep: true });
  return __vite_ssr_import_1__.computed(() => {
    const targetVector = __vite_ssr_import_1__.unref(disabled) ? sourceVector : outputVector;
    return __vite_ssr_import_0__.isNumber(sourceValue.value) ? targetVector.value[0] : targetVector.value;
  });
}

function useUrlSearchParams(mode = "history", options = {}) {
  const {
    initialValue = {},
    removeNullishValues = true,
    removeFalsyValues = false,
    window = defaultWindow
  } = options;
  if (!window)
    return __vite_ssr_import_1__.reactive(initialValue);
  const state = __vite_ssr_import_1__.reactive({});
  function getRawParams() {
    if (mode === "history") {
      return window.location.search || "";
    } else if (mode === "hash") {
      const hash = window.location.hash || "";
      const index = hash.indexOf("?");
      return index > 0 ? hash.slice(index) : "";
    } else {
      return (window.location.hash || "").replace(/^#/, "");
    }
  }
  function constructQuery(params) {
    const stringified = params.toString();
    if (mode === "history")
      return `${stringified ? `?${stringified}` : ""}${location.hash || ""}`;
    if (mode === "hash-params")
      return `${location.search || ""}${stringified ? `#${stringified}` : ""}`;
    const hash = window.location.hash || "#";
    const index = hash.indexOf("?");
    if (index > 0)
      return `${hash.slice(0, index)}${stringified ? `?${stringified}` : ""}`;
    return `${hash}${stringified ? `?${stringified}` : ""}`;
  }
  function read() {
    return new URLSearchParams(getRawParams());
  }
  function updateState(params) {
    const unusedKeys = new Set(Object.keys(state));
    for (const key of params.keys()) {
      const paramsForKey = params.getAll(key);
      state[key] = paramsForKey.length > 1 ? paramsForKey : params.get(key) || "";
      unusedKeys.delete(key);
    }
    Array.from(unusedKeys).forEach((key) => delete state[key]);
  }
  const { pause, resume } = __vite_ssr_import_0__.pausableWatch(state, () => {
    const params = new URLSearchParams("");
    Object.keys(state).forEach((key) => {
      const mapEntry = state[key];
      if (Array.isArray(mapEntry))
        mapEntry.forEach((value) => params.append(key, value));
      else if (removeNullishValues && mapEntry == null)
        params.delete(key);
      else if (removeFalsyValues && !mapEntry)
        params.delete(key);
      else
        params.set(key, mapEntry);
    });
    write(params);
  }, { deep: true });
  function write(params, shouldUpdate) {
    pause();
    if (shouldUpdate)
      updateState(params);
    window.history.replaceState(window.history.state, window.document.title, window.location.pathname + constructQuery(params));
    resume();
  }
  function onChanged() {
    write(read(), true);
  }
  useEventListener(window, "popstate", onChanged, false);
  if (mode !== "history")
    useEventListener(window, "hashchange", onChanged, false);
  const initial = read();
  if (initial.keys().next().value)
    updateState(initial);
  else
    Object.assign(state, initialValue);
  return state;
}

function useUserMedia(options = {}) {
  var _a, _b, _c;
  const enabled = __vite_ssr_import_1__.ref((_a = options.enabled) != null ? _a : false);
  const autoSwitch = __vite_ssr_import_1__.ref((_b = options.autoSwitch) != null ? _b : true);
  const videoDeviceId = __vite_ssr_import_1__.ref(options.videoDeviceId);
  const audioDeviceId = __vite_ssr_import_1__.ref(options.audioDeviceId);
  const { navigator = defaultNavigator } = options;
  const isSupported = Boolean((_c = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _c.getUserMedia);
  const stream = __vite_ssr_import_1__.shallowRef();
  function getDeviceOptions(device) {
    if (device.value === "none" || device.value === false)
      return false;
    if (device.value == null)
      return true;
    return {
      deviceId: device.value
    };
  }
  async function _start() {
    if (!isSupported || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getUserMedia({
      video: getDeviceOptions(videoDeviceId),
      audio: getDeviceOptions(audioDeviceId)
    });
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  async function restart() {
    _stop();
    return await start();
  }
  __vite_ssr_import_1__.watch(enabled, (v) => {
    if (v)
      _start();
    else
      _stop();
  }, { immediate: true });
  __vite_ssr_import_1__.watch([videoDeviceId, audioDeviceId], () => {
    if (autoSwitch.value && stream.value)
      restart();
  }, { immediate: true });
  return {
    isSupported,
    stream,
    start,
    stop,
    restart,
    videoDeviceId,
    audioDeviceId,
    enabled,
    autoSwitch
  };
}

function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c;
  const {
    passive = false,
    eventName,
    deep = false,
    defaultValue
  } = options;
  const vm = __vite_ssr_import_1__.getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm));
  let event = eventName;
  if (!key) {
    if (__vite_ssr_import_1__.isVue2) {
      const modelOptions = (_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$options) == null ? void 0 : _c.model;
      key = (modelOptions == null ? void 0 : modelOptions.value) || "value";
      if (!eventName)
        event = (modelOptions == null ? void 0 : modelOptions.event) || "input";
    } else {
      key = "modelValue";
    }
  }
  event = eventName || event || `update:${key.toString()}`;
  const getValue = () => __vite_ssr_import_0__.isDef(props[key]) ? props[key] : defaultValue;
  if (passive) {
    const proxy = __vite_ssr_import_1__.ref(getValue());
    __vite_ssr_import_1__.watch(() => props[key], (v) => proxy.value = v);
    __vite_ssr_import_1__.watch(proxy, (v) => {
      if (v !== props[key] || deep)
        _emit(event, v);
    }, {
      deep
    });
    return proxy;
  } else {
    return __vite_ssr_import_1__.computed({
      get() {
        return getValue();
      },
      set(value) {
        _emit(event, value);
      }
    });
  }
}

function useVModels(props, emit, options = {}) {
  const ret = {};
  for (const key in props)
    ret[key] = useVModel(props, key, emit, options);
  return ret;
}

function useVibrate(options) {
  const {
    pattern = [],
    interval = 0,
    navigator = defaultNavigator
  } = options || {};
  const isSupported = "undefined" !== "undefined" && "vibrate" in navigator;
  const patternRef = __vite_ssr_import_1__.ref(pattern);
  let intervalControls;
  const vibrate = (pattern2 = patternRef.value) => {
    if (isSupported)
      navigator.vibrate(pattern2);
  };
  const stop = () => {
    if (isSupported)
      navigator.vibrate(0);
    intervalControls == null ? void 0 : intervalControls.pause();
  };
  if (interval > 0) {
    intervalControls = __vite_ssr_import_0__.useIntervalFn(vibrate, interval, {
      immediate: false,
      immediateCallback: false
    });
  }
  return {
    isSupported,
    pattern,
    intervalControls,
    vibrate,
    stop
  };
}

function useVirtualList(list, options) {
  const containerRef = __vite_ssr_import_1__.ref();
  const size = useElementSize(containerRef);
  const currentList = __vite_ssr_import_1__.ref([]);
  const source = __vite_ssr_import_1__.shallowRef(list);
  const state = __vite_ssr_import_1__.ref({ start: 0, end: 10 });
  const { itemHeight, overscan = 5 } = options;
  const getViewCapacity = (containerHeight) => {
    if (typeof itemHeight === "number")
      return Math.ceil(containerHeight / itemHeight);
    const { start = 0 } = state.value;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= containerHeight) {
        capacity = i;
        break;
      }
    }
    return capacity - start;
  };
  const getOffset = (scrollTop) => {
    if (typeof itemHeight === "number")
      return Math.floor(scrollTop / itemHeight) + 1;
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= scrollTop) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };
  const calculateRange = () => {
    const element = containerRef.value;
    if (element) {
      const offset = getOffset(element.scrollTop);
      const viewCapacity = getViewCapacity(element.clientHeight);
      const from = offset - overscan;
      const to = offset + viewCapacity + overscan;
      state.value = {
        start: from < 0 ? 0 : from,
        end: to > source.value.length ? source.value.length : to
      };
      currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => ({
        data: ele,
        index: index + state.value.start
      }));
    }
  };
  __vite_ssr_import_1__.watch([size.width, size.height, list], () => {
    calculateRange();
  });
  const totalHeight = __vite_ssr_import_1__.computed(() => {
    if (typeof itemHeight === "number")
      return source.value.length * itemHeight;
    return source.value.reduce((sum, _, index) => sum + itemHeight(index), 0);
  });
  const getDistanceTop = (index) => {
    if (typeof itemHeight === "number") {
      const height2 = index * itemHeight;
      return height2;
    }
    const height = source.value.slice(0, index).reduce((sum, _, i) => sum + itemHeight(i), 0);
    return height;
  };
  const scrollTo = (index) => {
    if (containerRef.value) {
      containerRef.value.scrollTop = getDistanceTop(index);
      calculateRange();
    }
  };
  const offsetTop = __vite_ssr_import_1__.computed(() => getDistanceTop(state.value.start));
  const wrapperProps = __vite_ssr_import_1__.computed(() => {
    return {
      style: {
        width: "100%",
        height: `${totalHeight.value - offsetTop.value}px`,
        marginTop: `${offsetTop.value}px`
      }
    };
  });
  const containerStyle = { overflowY: "auto" };
  return {
    list: currentList,
    scrollTo,
    containerProps: {
      ref: containerRef,
      onScroll: () => {
        calculateRange();
      },
      style: containerStyle
    },
    wrapperProps
  };
}

const useWakeLock = (options = {}) => {
  const {
    navigator = defaultNavigator,
    document = defaultDocument
  } = options;
  let wakeLock;
  const isSupported = navigator && "wakeLock" in navigator;
  const isActive = __vite_ssr_import_1__.ref(false);
  async function onVisibilityChange() {
    if (!isSupported || !wakeLock)
      return;
    if (document && document.visibilityState === "visible")
      wakeLock = await navigator.wakeLock.request("screen");
    isActive.value = !wakeLock.released;
  }
  if (document)
    useEventListener(document, "visibilitychange", onVisibilityChange, { passive: true });
  async function request(type) {
    if (!isSupported)
      return;
    wakeLock = await navigator.wakeLock.request(type);
    isActive.value = !wakeLock.released;
  }
  async function release() {
    if (!isSupported || !wakeLock)
      return;
    await wakeLock.release();
    isActive.value = !wakeLock.released;
    wakeLock = null;
  }
  return {
    isSupported,
    isActive,
    request,
    release
  };
};

const useWebNotification = (defaultOptions = {}) => {
  const {
    window = defaultWindow
  } = defaultOptions;
  const isSupported = !!window && "Notification" in window;
  const notification = __vite_ssr_import_1__.ref(null);
  const requestPermission = async () => {
    if (!isSupported)
      return;
    if ("permission" in Notification && Notification.permission !== "denied")
      await Notification.requestPermission();
  };
  const onClick = __vite_ssr_import_0__.createEventHook();
  const onShow = __vite_ssr_import_0__.createEventHook();
  const onError = __vite_ssr_import_0__.createEventHook();
  const onClose = __vite_ssr_import_0__.createEventHook();
  const show = async (overrides) => {
    if (!isSupported)
      return;
    await requestPermission();
    const options = Object.assign({}, defaultOptions, overrides);
    notification.value = new Notification(options.title || "", options);
    notification.value.onclick = (event) => onClick.trigger(event);
    notification.value.onshow = (event) => onShow.trigger(event);
    notification.value.onerror = (event) => onError.trigger(event);
    notification.value.onclose = (event) => onClose.trigger(event);
    return notification.value;
  };
  const close = () => {
    if (notification.value)
      notification.value.close();
    notification.value = null;
  };
  __vite_ssr_import_0__.tryOnMounted(async () => {
    if (isSupported)
      await requestPermission();
  });
  __vite_ssr_import_0__.tryOnScopeDispose(close);
  if (isSupported && window) {
    const document = window.document;
    useEventListener(document, "visibilitychange", (e) => {
      e.preventDefault();
      if (document.visibilityState === "visible") {
        close();
      }
    });
  }
  return {
    isSupported,
    notification,
    show,
    close,
    onClick,
    onShow,
    onError,
    onClose
  };
};

function resolveNestedOptions(options) {
  if (options === true)
    return {};
  return options;
}
function useWebSocket(url, options = {}) {
  const {
    onConnected,
    onDisconnected,
    onError,
    onMessage,
    immediate = true,
    autoClose = true,
    protocols = []
  } = options;
  const data = __vite_ssr_import_1__.ref(null);
  const status = __vite_ssr_import_1__.ref("CONNECTING");
  const wsRef = __vite_ssr_import_1__.ref();
  let heartbeatPause;
  let heartbeatResume;
  let explicitlyClosed = false;
  let retried = 0;
  let bufferedData = [];
  const close = (code = 1e3, reason) => {
    if (!wsRef.value)
      return;
    explicitlyClosed = true;
    heartbeatPause == null ? void 0 : heartbeatPause();
    wsRef.value.close(code, reason);
  };
  const _sendBuffer = () => {
    if (bufferedData.length && wsRef.value && status.value === "OPEN") {
      for (const buffer of bufferedData)
        wsRef.value.send(buffer);
      bufferedData = [];
    }
  };
  const send = (data2, useBuffer = true) => {
    if (!wsRef.value || status.value !== "OPEN") {
      if (useBuffer)
        bufferedData.push(data2);
      return false;
    }
    _sendBuffer();
    wsRef.value.send(data2);
    return true;
  };
  const _init = () => {
    const ws = new WebSocket(url, protocols);
    wsRef.value = ws;
    status.value = "CONNECTING";
    explicitlyClosed = false;
    ws.onopen = () => {
      status.value = "OPEN";
      onConnected == null ? void 0 : onConnected(ws);
      heartbeatResume == null ? void 0 : heartbeatResume();
      _sendBuffer();
    };
    ws.onclose = (ev) => {
      status.value = "CLOSED";
      wsRef.value = void 0;
      onDisconnected == null ? void 0 : onDisconnected(ws, ev);
      if (!explicitlyClosed && options.autoReconnect) {
        const {
          retries = -1,
          delay = 1e3,
          onFailed
        } = resolveNestedOptions(options.autoReconnect);
        retried += 1;
        if (typeof retries === "number" && (retries < 0 || retried < retries))
          setTimeout(_init, delay);
        else if (typeof retries === "function" && retries())
          setTimeout(_init, delay);
        else
          onFailed == null ? void 0 : onFailed();
      }
    };
    ws.onerror = (e) => {
      onError == null ? void 0 : onError(ws, e);
    };
    ws.onmessage = (e) => {
      data.value = e.data;
      onMessage == null ? void 0 : onMessage(ws, e);
    };
  };
  if (options.heartbeat) {
    const {
      message = "ping",
      interval = 1e3
    } = resolveNestedOptions(options.heartbeat);
    const { pause, resume } = __vite_ssr_import_0__.useIntervalFn(() => send(message, false), interval, { immediate: false });
    heartbeatPause = pause;
    heartbeatResume = resume;
  }
  if (immediate)
    _init();
  if (autoClose) {
    useEventListener(window, "beforeunload", () => close());
    __vite_ssr_import_0__.tryOnScopeDispose(close);
  }
  const open = () => {
    close();
    retried = 0;
    _init();
  };
  return {
    data,
    status,
    close,
    send,
    open,
    ws: wsRef
  };
}

function useWebWorker(url, workerOptions, options = {}) {
  const {
    window = defaultWindow
  } = options;
  const data = __vite_ssr_import_1__.ref(null);
  const worker = __vite_ssr_import_1__.shallowRef();
  const post = function post2(val) {
    if (!worker.value)
      return;
    worker.value.postMessage(val);
  };
  const terminate = function terminate2() {
    if (!worker.value)
      return;
    worker.value.terminate();
  };
  if (window) {
    worker.value = new Worker(url, workerOptions);
    worker.value.onmessage = (e) => {
      data.value = e.data;
    };
    __vite_ssr_import_0__.tryOnScopeDispose(() => {
      if (worker.value)
        worker.value.terminate();
    });
  }
  return {
    data,
    post,
    terminate,
    worker
  };
}

const jobRunner = (userFunc) => (e) => {
  const userFuncArgs = e.data[0];
  return Promise.resolve(userFunc.apply(void 0, userFuncArgs)).then((result) => {
    postMessage(["SUCCESS", result]);
  }).catch((error) => {
    postMessage(["ERROR", error]);
  });
};

const depsParser = (deps) => {
  if (deps.length === 0)
    return "";
  const depsString = deps.map((dep) => `'${dep}'`).toString();
  return `importScripts(${depsString})`;
};

const createWorkerBlobUrl = (fn, deps) => {
  const blobCode = `${depsParser(deps)}; onmessage=(${jobRunner})(${fn})`;
  const blob = new Blob([blobCode], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  return url;
};

const useWebWorkerFn = (fn, options = {}) => {
  const {
    dependencies = [],
    timeout,
    window = defaultWindow
  } = options;
  const worker = __vite_ssr_import_1__.ref();
  const workerStatus = __vite_ssr_import_1__.ref("PENDING");
  const promise = __vite_ssr_import_1__.ref({});
  const timeoutId = __vite_ssr_import_1__.ref();
  const workerTerminate = (status = "PENDING") => {
    if (worker.value && worker.value._url && window) {
      worker.value.terminate();
      URL.revokeObjectURL(worker.value._url);
      promise.value = {};
      worker.value = void 0;
      window.clearTimeout(timeoutId.value);
      workerStatus.value = status;
    }
  };
  workerTerminate();
  __vite_ssr_import_0__.tryOnScopeDispose(workerTerminate);
  const generateWorker = () => {
    const blobUrl = createWorkerBlobUrl(fn, dependencies);
    const newWorker = new Worker(blobUrl);
    newWorker._url = blobUrl;
    newWorker.onmessage = (e) => {
      const { resolve = () => {
      }, reject = () => {
      } } = promise.value;
      const [status, result] = e.data;
      switch (status) {
        case "SUCCESS":
          resolve(result);
          workerTerminate(status);
          break;
        default:
          reject(result);
          workerTerminate("ERROR");
          break;
      }
    };
    newWorker.onerror = (e) => {
      const { reject = () => {
      } } = promise.value;
      reject(e);
      workerTerminate("ERROR");
    };
    if (timeout) {
      timeoutId.value = setTimeout(() => workerTerminate("TIMEOUT_EXPIRED"), timeout);
    }
    return newWorker;
  };
  const callWorker = (...fnArgs) => new Promise((resolve, reject) => {
    promise.value = {
      resolve,
      reject
    };
    worker.value && worker.value.postMessage([[...fnArgs]]);
    workerStatus.value = "RUNNING";
  });
  const workerFn = (...fnArgs) => {
    if (workerStatus.value === "RUNNING") {
      console.error("[useWebWorkerFn] You can only run one instance of the worker at a time.");
      return Promise.reject();
    }
    worker.value = generateWorker();
    return callWorker(...fnArgs);
  };
  return {
    workerFn,
    workerStatus,
    workerTerminate
  };
};

function useWindowFocus({ window = defaultWindow } = {}) {
  if (!window)
    return __vite_ssr_import_1__.ref(false);
  const focused = __vite_ssr_import_1__.ref(window.document.hasFocus());
  useEventListener(window, "blur", () => {
    focused.value = false;
  });
  useEventListener(window, "focus", () => {
    focused.value = true;
  });
  return focused;
}

function useWindowScroll({ window = defaultWindow } = {}) {
  if (!window) {
    return {
      x: __vite_ssr_import_1__.ref(0),
      y: __vite_ssr_import_1__.ref(0)
    };
  }
  const x = __vite_ssr_import_1__.ref(window.pageXOffset);
  const y = __vite_ssr_import_1__.ref(window.pageYOffset);
  useEventListener("scroll", () => {
    x.value = window.pageXOffset;
    y.value = window.pageYOffset;
  }, {
    capture: false,
    passive: true
  });
  return { x, y };
}

function useWindowSize({ window = defaultWindow, initialWidth = Infinity, initialHeight = Infinity } = {}) {
  const width = __vite_ssr_import_1__.ref(initialWidth);
  const height = __vite_ssr_import_1__.ref(initialHeight);
  const update = () => {
    if (window) {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    }
  };
  update();
  __vite_ssr_import_0__.tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  return { width, height };
}


Object.defineProperty(__vite_ssr_exports__, "DefaultMagicKeysAliasMap", { enumerable: true, configurable: true, get(){ return DefaultMagicKeysAliasMap }});
Object.defineProperty(__vite_ssr_exports__, "StorageSerializers", { enumerable: true, configurable: true, get(){ return StorageSerializers }});
Object.defineProperty(__vite_ssr_exports__, "SwipeDirection", { enumerable: true, configurable: true, get(){ return SwipeDirection }});
Object.defineProperty(__vite_ssr_exports__, "TransitionPresets", { enumerable: true, configurable: true, get(){ return TransitionPresets }});
Object.defineProperty(__vite_ssr_exports__, "asyncComputed", { enumerable: true, configurable: true, get(){ return computedAsync }});
Object.defineProperty(__vite_ssr_exports__, "breakpointsAntDesign", { enumerable: true, configurable: true, get(){ return breakpointsAntDesign }});
Object.defineProperty(__vite_ssr_exports__, "breakpointsBootstrapV5", { enumerable: true, configurable: true, get(){ return breakpointsBootstrapV5 }});
Object.defineProperty(__vite_ssr_exports__, "breakpointsQuasar", { enumerable: true, configurable: true, get(){ return breakpointsQuasar }});
Object.defineProperty(__vite_ssr_exports__, "breakpointsSematic", { enumerable: true, configurable: true, get(){ return breakpointsSematic }});
Object.defineProperty(__vite_ssr_exports__, "breakpointsTailwind", { enumerable: true, configurable: true, get(){ return breakpointsTailwind }});
Object.defineProperty(__vite_ssr_exports__, "breakpointsVuetify", { enumerable: true, configurable: true, get(){ return breakpointsVuetify }});
Object.defineProperty(__vite_ssr_exports__, "computedAsync", { enumerable: true, configurable: true, get(){ return computedAsync }});
Object.defineProperty(__vite_ssr_exports__, "computedInject", { enumerable: true, configurable: true, get(){ return computedInject }});
Object.defineProperty(__vite_ssr_exports__, "createFetch", { enumerable: true, configurable: true, get(){ return createFetch }});
Object.defineProperty(__vite_ssr_exports__, "createUnrefFn", { enumerable: true, configurable: true, get(){ return createUnrefFn }});
Object.defineProperty(__vite_ssr_exports__, "defaultDocument", { enumerable: true, configurable: true, get(){ return defaultDocument }});
Object.defineProperty(__vite_ssr_exports__, "defaultLocation", { enumerable: true, configurable: true, get(){ return defaultLocation }});
Object.defineProperty(__vite_ssr_exports__, "defaultNavigator", { enumerable: true, configurable: true, get(){ return defaultNavigator }});
Object.defineProperty(__vite_ssr_exports__, "defaultWindow", { enumerable: true, configurable: true, get(){ return defaultWindow }});
Object.defineProperty(__vite_ssr_exports__, "getSSRHandler", { enumerable: true, configurable: true, get(){ return getSSRHandler }});
Object.defineProperty(__vite_ssr_exports__, "mapGamepadToXbox360Controller", { enumerable: true, configurable: true, get(){ return mapGamepadToXbox360Controller }});
Object.defineProperty(__vite_ssr_exports__, "onClickOutside", { enumerable: true, configurable: true, get(){ return onClickOutside }});
Object.defineProperty(__vite_ssr_exports__, "onKeyDown", { enumerable: true, configurable: true, get(){ return onKeyDown }});
Object.defineProperty(__vite_ssr_exports__, "onKeyPressed", { enumerable: true, configurable: true, get(){ return onKeyPressed }});
Object.defineProperty(__vite_ssr_exports__, "onKeyStroke", { enumerable: true, configurable: true, get(){ return onKeyStroke }});
Object.defineProperty(__vite_ssr_exports__, "onKeyUp", { enumerable: true, configurable: true, get(){ return onKeyUp }});
Object.defineProperty(__vite_ssr_exports__, "onLongPress", { enumerable: true, configurable: true, get(){ return onLongPress }});
Object.defineProperty(__vite_ssr_exports__, "onStartTyping", { enumerable: true, configurable: true, get(){ return onStartTyping }});
Object.defineProperty(__vite_ssr_exports__, "setSSRHandler", { enumerable: true, configurable: true, get(){ return setSSRHandler }});
Object.defineProperty(__vite_ssr_exports__, "templateRef", { enumerable: true, configurable: true, get(){ return templateRef }});
Object.defineProperty(__vite_ssr_exports__, "unrefElement", { enumerable: true, configurable: true, get(){ return unrefElement }});
Object.defineProperty(__vite_ssr_exports__, "useActiveElement", { enumerable: true, configurable: true, get(){ return useActiveElement }});
Object.defineProperty(__vite_ssr_exports__, "useAsyncQueue", { enumerable: true, configurable: true, get(){ return useAsyncQueue }});
Object.defineProperty(__vite_ssr_exports__, "useAsyncState", { enumerable: true, configurable: true, get(){ return useAsyncState }});
Object.defineProperty(__vite_ssr_exports__, "useBase64", { enumerable: true, configurable: true, get(){ return useBase64 }});
Object.defineProperty(__vite_ssr_exports__, "useBattery", { enumerable: true, configurable: true, get(){ return useBattery }});
Object.defineProperty(__vite_ssr_exports__, "useBluetooth", { enumerable: true, configurable: true, get(){ return useBluetooth }});
Object.defineProperty(__vite_ssr_exports__, "useBreakpoints", { enumerable: true, configurable: true, get(){ return useBreakpoints }});
Object.defineProperty(__vite_ssr_exports__, "useBroadcastChannel", { enumerable: true, configurable: true, get(){ return useBroadcastChannel }});
Object.defineProperty(__vite_ssr_exports__, "useBrowserLocation", { enumerable: true, configurable: true, get(){ return useBrowserLocation }});
Object.defineProperty(__vite_ssr_exports__, "useCached", { enumerable: true, configurable: true, get(){ return useCached }});
Object.defineProperty(__vite_ssr_exports__, "useClamp", { enumerable: true, configurable: true, get(){ return useClamp }});
Object.defineProperty(__vite_ssr_exports__, "useClipboard", { enumerable: true, configurable: true, get(){ return useClipboard }});
Object.defineProperty(__vite_ssr_exports__, "useColorMode", { enumerable: true, configurable: true, get(){ return useColorMode }});
Object.defineProperty(__vite_ssr_exports__, "useConfirmDialog", { enumerable: true, configurable: true, get(){ return useConfirmDialog }});
Object.defineProperty(__vite_ssr_exports__, "useCssVar", { enumerable: true, configurable: true, get(){ return useCssVar }});
Object.defineProperty(__vite_ssr_exports__, "useCurrentElement", { enumerable: true, configurable: true, get(){ return useCurrentElement }});
Object.defineProperty(__vite_ssr_exports__, "useCycleList", { enumerable: true, configurable: true, get(){ return useCycleList }});
Object.defineProperty(__vite_ssr_exports__, "useDark", { enumerable: true, configurable: true, get(){ return useDark }});
Object.defineProperty(__vite_ssr_exports__, "useDebouncedRefHistory", { enumerable: true, configurable: true, get(){ return useDebouncedRefHistory }});
Object.defineProperty(__vite_ssr_exports__, "useDeviceMotion", { enumerable: true, configurable: true, get(){ return useDeviceMotion }});
Object.defineProperty(__vite_ssr_exports__, "useDeviceOrientation", { enumerable: true, configurable: true, get(){ return useDeviceOrientation }});
Object.defineProperty(__vite_ssr_exports__, "useDevicePixelRatio", { enumerable: true, configurable: true, get(){ return useDevicePixelRatio }});
Object.defineProperty(__vite_ssr_exports__, "useDevicesList", { enumerable: true, configurable: true, get(){ return useDevicesList }});
Object.defineProperty(__vite_ssr_exports__, "useDisplayMedia", { enumerable: true, configurable: true, get(){ return useDisplayMedia }});
Object.defineProperty(__vite_ssr_exports__, "useDocumentVisibility", { enumerable: true, configurable: true, get(){ return useDocumentVisibility }});
Object.defineProperty(__vite_ssr_exports__, "useDraggable", { enumerable: true, configurable: true, get(){ return useDraggable }});
Object.defineProperty(__vite_ssr_exports__, "useDropZone", { enumerable: true, configurable: true, get(){ return useDropZone }});
Object.defineProperty(__vite_ssr_exports__, "useElementBounding", { enumerable: true, configurable: true, get(){ return useElementBounding }});
Object.defineProperty(__vite_ssr_exports__, "useElementByPoint", { enumerable: true, configurable: true, get(){ return useElementByPoint }});
Object.defineProperty(__vite_ssr_exports__, "useElementHover", { enumerable: true, configurable: true, get(){ return useElementHover }});
Object.defineProperty(__vite_ssr_exports__, "useElementSize", { enumerable: true, configurable: true, get(){ return useElementSize }});
Object.defineProperty(__vite_ssr_exports__, "useElementVisibility", { enumerable: true, configurable: true, get(){ return useElementVisibility }});
Object.defineProperty(__vite_ssr_exports__, "useEventBus", { enumerable: true, configurable: true, get(){ return useEventBus }});
Object.defineProperty(__vite_ssr_exports__, "useEventListener", { enumerable: true, configurable: true, get(){ return useEventListener }});
Object.defineProperty(__vite_ssr_exports__, "useEventSource", { enumerable: true, configurable: true, get(){ return useEventSource }});
Object.defineProperty(__vite_ssr_exports__, "useEyeDropper", { enumerable: true, configurable: true, get(){ return useEyeDropper }});
Object.defineProperty(__vite_ssr_exports__, "useFavicon", { enumerable: true, configurable: true, get(){ return useFavicon }});
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useFileSystemAccess", { enumerable: true, configurable: true, get(){ return useFileSystemAccess }});
Object.defineProperty(__vite_ssr_exports__, "useFocus", { enumerable: true, configurable: true, get(){ return useFocus }});
Object.defineProperty(__vite_ssr_exports__, "useFocusWithin", { enumerable: true, configurable: true, get(){ return useFocusWithin }});
Object.defineProperty(__vite_ssr_exports__, "useFps", { enumerable: true, configurable: true, get(){ return useFps }});
Object.defineProperty(__vite_ssr_exports__, "useFullscreen", { enumerable: true, configurable: true, get(){ return useFullscreen }});
Object.defineProperty(__vite_ssr_exports__, "useGamepad", { enumerable: true, configurable: true, get(){ return useGamepad }});
Object.defineProperty(__vite_ssr_exports__, "useGeolocation", { enumerable: true, configurable: true, get(){ return useGeolocation }});
Object.defineProperty(__vite_ssr_exports__, "useIdle", { enumerable: true, configurable: true, get(){ return useIdle }});
Object.defineProperty(__vite_ssr_exports__, "useImage", { enumerable: true, configurable: true, get(){ return useImage }});
Object.defineProperty(__vite_ssr_exports__, "useInfiniteScroll", { enumerable: true, configurable: true, get(){ return useInfiniteScroll }});
Object.defineProperty(__vite_ssr_exports__, "useIntersectionObserver", { enumerable: true, configurable: true, get(){ return useIntersectionObserver }});
Object.defineProperty(__vite_ssr_exports__, "useKeyModifier", { enumerable: true, configurable: true, get(){ return useKeyModifier }});
Object.defineProperty(__vite_ssr_exports__, "useLocalStorage", { enumerable: true, configurable: true, get(){ return useLocalStorage }});
Object.defineProperty(__vite_ssr_exports__, "useMagicKeys", { enumerable: true, configurable: true, get(){ return useMagicKeys }});
Object.defineProperty(__vite_ssr_exports__, "useManualRefHistory", { enumerable: true, configurable: true, get(){ return useManualRefHistory }});
Object.defineProperty(__vite_ssr_exports__, "useMediaControls", { enumerable: true, configurable: true, get(){ return useMediaControls }});
Object.defineProperty(__vite_ssr_exports__, "useMediaQuery", { enumerable: true, configurable: true, get(){ return useMediaQuery }});
Object.defineProperty(__vite_ssr_exports__, "useMemoize", { enumerable: true, configurable: true, get(){ return useMemoize }});
Object.defineProperty(__vite_ssr_exports__, "useMemory", { enumerable: true, configurable: true, get(){ return useMemory }});
Object.defineProperty(__vite_ssr_exports__, "useMounted", { enumerable: true, configurable: true, get(){ return useMounted }});
Object.defineProperty(__vite_ssr_exports__, "useMouse", { enumerable: true, configurable: true, get(){ return useMouse }});
Object.defineProperty(__vite_ssr_exports__, "useMouseInElement", { enumerable: true, configurable: true, get(){ return useMouseInElement }});
Object.defineProperty(__vite_ssr_exports__, "useMousePressed", { enumerable: true, configurable: true, get(){ return useMousePressed }});
Object.defineProperty(__vite_ssr_exports__, "useMutationObserver", { enumerable: true, configurable: true, get(){ return useMutationObserver }});
Object.defineProperty(__vite_ssr_exports__, "useNavigatorLanguage", { enumerable: true, configurable: true, get(){ return useNavigatorLanguage }});
Object.defineProperty(__vite_ssr_exports__, "useNetwork", { enumerable: true, configurable: true, get(){ return useNetwork }});
Object.defineProperty(__vite_ssr_exports__, "useNow", { enumerable: true, configurable: true, get(){ return useNow }});
Object.defineProperty(__vite_ssr_exports__, "useOffsetPagination", { enumerable: true, configurable: true, get(){ return useOffsetPagination }});
Object.defineProperty(__vite_ssr_exports__, "useOnline", { enumerable: true, configurable: true, get(){ return useOnline }});
Object.defineProperty(__vite_ssr_exports__, "usePageLeave", { enumerable: true, configurable: true, get(){ return usePageLeave }});
Object.defineProperty(__vite_ssr_exports__, "useParallax", { enumerable: true, configurable: true, get(){ return useParallax }});
Object.defineProperty(__vite_ssr_exports__, "usePermission", { enumerable: true, configurable: true, get(){ return usePermission }});
Object.defineProperty(__vite_ssr_exports__, "usePointer", { enumerable: true, configurable: true, get(){ return usePointer }});
Object.defineProperty(__vite_ssr_exports__, "usePointerSwipe", { enumerable: true, configurable: true, get(){ return usePointerSwipe }});
Object.defineProperty(__vite_ssr_exports__, "usePreferredColorScheme", { enumerable: true, configurable: true, get(){ return usePreferredColorScheme }});
Object.defineProperty(__vite_ssr_exports__, "usePreferredDark", { enumerable: true, configurable: true, get(){ return usePreferredDark }});
Object.defineProperty(__vite_ssr_exports__, "usePreferredLanguages", { enumerable: true, configurable: true, get(){ return usePreferredLanguages }});
Object.defineProperty(__vite_ssr_exports__, "useRafFn", { enumerable: true, configurable: true, get(){ return useRafFn }});
Object.defineProperty(__vite_ssr_exports__, "useRefHistory", { enumerable: true, configurable: true, get(){ return useRefHistory }});
Object.defineProperty(__vite_ssr_exports__, "useResizeObserver", { enumerable: true, configurable: true, get(){ return useResizeObserver }});
Object.defineProperty(__vite_ssr_exports__, "useScreenOrientation", { enumerable: true, configurable: true, get(){ return useScreenOrientation }});
Object.defineProperty(__vite_ssr_exports__, "useScreenSafeArea", { enumerable: true, configurable: true, get(){ return useScreenSafeArea }});
Object.defineProperty(__vite_ssr_exports__, "useScriptTag", { enumerable: true, configurable: true, get(){ return useScriptTag }});
Object.defineProperty(__vite_ssr_exports__, "useScroll", { enumerable: true, configurable: true, get(){ return useScroll }});
Object.defineProperty(__vite_ssr_exports__, "useScrollLock", { enumerable: true, configurable: true, get(){ return useScrollLock }});
Object.defineProperty(__vite_ssr_exports__, "useSessionStorage", { enumerable: true, configurable: true, get(){ return useSessionStorage }});
Object.defineProperty(__vite_ssr_exports__, "useShare", { enumerable: true, configurable: true, get(){ return useShare }});
Object.defineProperty(__vite_ssr_exports__, "useSpeechRecognition", { enumerable: true, configurable: true, get(){ return useSpeechRecognition }});
Object.defineProperty(__vite_ssr_exports__, "useSpeechSynthesis", { enumerable: true, configurable: true, get(){ return useSpeechSynthesis }});
Object.defineProperty(__vite_ssr_exports__, "useStorage", { enumerable: true, configurable: true, get(){ return useStorage }});
Object.defineProperty(__vite_ssr_exports__, "useStorageAsync", { enumerable: true, configurable: true, get(){ return useStorageAsync }});
Object.defineProperty(__vite_ssr_exports__, "useStyleTag", { enumerable: true, configurable: true, get(){ return useStyleTag }});
Object.defineProperty(__vite_ssr_exports__, "useSwipe", { enumerable: true, configurable: true, get(){ return useSwipe }});
Object.defineProperty(__vite_ssr_exports__, "useTemplateRefsList", { enumerable: true, configurable: true, get(){ return useTemplateRefsList }});
Object.defineProperty(__vite_ssr_exports__, "useTextSelection", { enumerable: true, configurable: true, get(){ return useTextSelection }});
Object.defineProperty(__vite_ssr_exports__, "useThrottledRefHistory", { enumerable: true, configurable: true, get(){ return useThrottledRefHistory }});
Object.defineProperty(__vite_ssr_exports__, "useTimeAgo", { enumerable: true, configurable: true, get(){ return useTimeAgo }});
Object.defineProperty(__vite_ssr_exports__, "useTimeoutPoll", { enumerable: true, configurable: true, get(){ return useTimeoutPoll }});
Object.defineProperty(__vite_ssr_exports__, "useTimestamp", { enumerable: true, configurable: true, get(){ return useTimestamp }});
Object.defineProperty(__vite_ssr_exports__, "useTitle", { enumerable: true, configurable: true, get(){ return useTitle }});
Object.defineProperty(__vite_ssr_exports__, "useTransition", { enumerable: true, configurable: true, get(){ return useTransition }});
Object.defineProperty(__vite_ssr_exports__, "useUrlSearchParams", { enumerable: true, configurable: true, get(){ return useUrlSearchParams }});
Object.defineProperty(__vite_ssr_exports__, "useUserMedia", { enumerable: true, configurable: true, get(){ return useUserMedia }});
Object.defineProperty(__vite_ssr_exports__, "useVModel", { enumerable: true, configurable: true, get(){ return useVModel }});
Object.defineProperty(__vite_ssr_exports__, "useVModels", { enumerable: true, configurable: true, get(){ return useVModels }});
Object.defineProperty(__vite_ssr_exports__, "useVibrate", { enumerable: true, configurable: true, get(){ return useVibrate }});
Object.defineProperty(__vite_ssr_exports__, "useVirtualList", { enumerable: true, configurable: true, get(){ return useVirtualList }});
Object.defineProperty(__vite_ssr_exports__, "useWakeLock", { enumerable: true, configurable: true, get(){ return useWakeLock }});
Object.defineProperty(__vite_ssr_exports__, "useWebNotification", { enumerable: true, configurable: true, get(){ return useWebNotification }});
Object.defineProperty(__vite_ssr_exports__, "useWebSocket", { enumerable: true, configurable: true, get(){ return useWebSocket }});
Object.defineProperty(__vite_ssr_exports__, "useWebWorker", { enumerable: true, configurable: true, get(){ return useWebWorker }});
Object.defineProperty(__vite_ssr_exports__, "useWebWorkerFn", { enumerable: true, configurable: true, get(){ return useWebWorkerFn }});
Object.defineProperty(__vite_ssr_exports__, "useWindowFocus", { enumerable: true, configurable: true, get(){ return useWindowFocus }});
Object.defineProperty(__vite_ssr_exports__, "useWindowScroll", { enumerable: true, configurable: true, get(){ return useWindowScroll }});
Object.defineProperty(__vite_ssr_exports__, "useWindowSize", { enumerable: true, configurable: true, get(){ return useWindowSize }});
;
}


// --------------------
// Request: /node_modules/@vueuse/shared/index.mjs
// Parents: 
// - /node_modules/@vueuse/core/index.mjs ($id_e8934cdc)
// Dependencies: 
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// --------------------
const $id_d77aacc8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");


var __defProp$8 = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
function computedEager(fn, options) {
  var _a;
  const result = __vite_ssr_import_0__.shallowRef();
  __vite_ssr_import_0__.watchEffect(() => {
    result.value = fn();
  }, __spreadProps$5(__spreadValues$8({}, options), {
    flush: (_a = options == null ? void 0 : options.flush) != null ? _a : "sync"
  }));
  return __vite_ssr_import_0__.readonly(result);
}

function computedWithControl(source, fn) {
  let v = void 0;
  let track;
  let trigger;
  const dirty = __vite_ssr_import_0__.ref(true);
  __vite_ssr_import_0__.watch(source, () => {
    dirty.value = true;
    trigger();
  }, { flush: "sync" });
  return __vite_ssr_import_0__.customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        if (dirty.value) {
          v = fn();
          dirty.value = false;
        }
        track();
        return v;
      },
      set() {
      }
    };
  });
}

function createEventHook() {
  const fns = [];
  const off = (fn) => {
    const index = fns.indexOf(fn);
    if (index !== -1)
      fns.splice(index, 1);
  };
  const on = (fn) => {
    fns.push(fn);
    return {
      off: () => off(fn)
    };
  };
  const trigger = (param) => {
    fns.forEach((fn) => fn(param));
  };
  return {
    on,
    off,
    trigger
  };
}

function createGlobalState(stateFactory) {
  let initialized = false;
  let state;
  const scope = __vite_ssr_import_0__.effectScope(true);
  return () => {
    if (!initialized) {
      state = scope.run(stateFactory);
      initialized = true;
    }
    return state;
  };
}

function createInjectionState(composable) {
  const key = Symbol("InjectionState");
  const useProvidingState = (...args) => {
    __vite_ssr_import_0__.provide(key, composable(...args));
  };
  const useInjectedState = () => __vite_ssr_import_0__.inject(key);
  return [useProvidingState, useInjectedState];
}

function tryOnScopeDispose(fn) {
  if (__vite_ssr_import_0__.getCurrentScope()) {
    __vite_ssr_import_0__.onScopeDispose(fn);
    return true;
  }
  return false;
}

function createSharedComposable(composable) {
  let subscribers = 0;
  let state;
  let scope;
  const dispose = () => {
    subscribers -= 1;
    if (scope && subscribers <= 0) {
      scope.stop();
      state = void 0;
      scope = void 0;
    }
  };
  return (...args) => {
    subscribers += 1;
    if (!state) {
      scope = __vite_ssr_import_0__.effectScope(true);
      state = scope.run(() => composable(...args));
    }
    tryOnScopeDispose(dispose);
    return state;
  };
}

function __onlyVue3(name = "this function") {
  if (__vite_ssr_import_0__.isVue3)
    return;
  throw new Error(`[VueUse] ${name} is only works on Vue 3.`);
}
const directiveHooks = {
  mounted: __vite_ssr_import_0__.isVue3 ? "mounted" : "inserted",
  updated: __vite_ssr_import_0__.isVue3 ? "updated" : "componentUpdated",
  unmounted: __vite_ssr_import_0__.isVue3 ? "unmounted" : "unbind"
};

function extendRef(ref, extend, { enumerable = false, unwrap = true } = {}) {
  __onlyVue3();
  for (const [key, value] of Object.entries(extend)) {
    if (key === "value")
      continue;
    if (__vite_ssr_import_0__.isRef(value) && unwrap) {
      Object.defineProperty(ref, key, {
        get() {
          return value.value;
        },
        set(v) {
          value.value = v;
        },
        enumerable
      });
    } else {
      Object.defineProperty(ref, key, { value, enumerable });
    }
  }
  return ref;
}

function get(obj, key) {
  if (key == null)
    return __vite_ssr_import_0__.unref(obj);
  return __vite_ssr_import_0__.unref(obj)[key];
}

function isDefined(v) {
  return __vite_ssr_import_0__.unref(v) != null;
}

function logicAnd(...args) {
  return __vite_ssr_import_0__.computed(() => args.every((i) => __vite_ssr_import_0__.unref(i)));
}

function logicNot(v) {
  return __vite_ssr_import_0__.computed(() => !__vite_ssr_import_0__.unref(v));
}

function logicOr(...args) {
  return __vite_ssr_import_0__.computed(() => args.some((i) => __vite_ssr_import_0__.unref(i)));
}

var __defProp$7 = Object.defineProperty;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
function makeDestructurable(obj, arr) {
  if (typeof Symbol !== "undefined") {
    const clone = __spreadValues$7({}, obj);
    Object.defineProperty(clone, Symbol.iterator, {
      enumerable: false,
      value() {
        let index = 0;
        return {
          next: () => ({
            value: arr[index++],
            done: index > arr.length
          })
        };
      }
    });
    return clone;
  } else {
    return Object.assign([...arr], obj);
  }
}

function reactify(fn) {
  return function(...args) {
    return __vite_ssr_import_0__.computed(() => fn.apply(this, args.map((i) => __vite_ssr_import_0__.unref(i))));
  };
}

function reactifyObject(obj, optionsOrKeys = {}) {
  let keys = [];
  if (Array.isArray(optionsOrKeys)) {
    keys = optionsOrKeys;
  } else {
    const { includeOwnProperties = true } = optionsOrKeys;
    keys.push(...Object.keys(obj));
    if (includeOwnProperties)
      keys.push(...Object.getOwnPropertyNames(obj));
  }
  return Object.fromEntries(keys.map((key) => {
    const value = obj[key];
    return [
      key,
      typeof value === "function" ? reactify(value.bind(obj)) : value
    ];
  }));
}

function toReactive(objectRef) {
  if (!__vite_ssr_import_0__.isRef(objectRef))
    return __vite_ssr_import_0__.reactive(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return __vite_ssr_import_0__.unref(Reflect.get(objectRef.value, p, receiver));
    },
    set(_, p, value) {
      if (__vite_ssr_import_0__.isRef(objectRef.value[p]) && !__vite_ssr_import_0__.isRef(value))
        objectRef.value[p].value = value;
      else
        objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return __vite_ssr_import_0__.reactive(proxy);
}

function reactiveComputed(fn) {
  return toReactive(__vite_ssr_import_0__.computed(fn));
}

function reactiveOmit(obj, ...keys) {
  return reactiveComputed(() => Object.fromEntries(Object.entries(__vite_ssr_import_0__.toRefs(obj)).filter((e) => !keys.includes(e[0]))));
}

function reactivePick(obj, ...keys) {
  return __vite_ssr_import_0__.reactive(Object.fromEntries(keys.map((k) => [k, __vite_ssr_import_0__.toRef(obj, k)])));
}

function refAutoReset(defaultValue, afterMs = 1e4) {
  return __vite_ssr_import_0__.customRef((track, trigger) => {
    let value = defaultValue;
    let timer;
    const resetAfter = () => setTimeout(() => {
      value = defaultValue;
      trigger();
    }, __vite_ssr_import_0__.unref(afterMs));
    tryOnScopeDispose(() => {
      clearTimeout(timer);
    });
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
        clearTimeout(timer);
        timer = resetAfter();
      }
    };
  });
}

var _a;
const isClient = "undefined" !== "undefined";
const isDef = (val) => typeof val !== "undefined";
const assert = (condition, ...infos) => {
  if (!condition)
    console.warn(...infos);
};
const toString = Object.prototype.toString;
const isBoolean = (val) => typeof val === "boolean";
const isFunction = (val) => typeof val === "function";
const isNumber = (val) => typeof val === "number";
const isString = (val) => typeof val === "string";
const isObject = (val) => toString.call(val) === "[object Object]";
const isWindow = (val) => "undefined" !== "undefined" && toString.call(val) === "[object Window]";
const now = () => Date.now();
const timestamp = () => +Date.now();
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const noop = () => {
};
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);

function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  const filter = (invoke) => {
    const duration = __vite_ssr_import_0__.unref(ms);
    const maxDuration = __vite_ssr_import_0__.unref(options.maxWait);
    if (timer)
      clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        clearTimeout(maxTimer);
        maxTimer = null;
      }
      return invoke();
    }
    if (maxDuration && !maxTimer) {
      maxTimer = setTimeout(() => {
        if (timer)
          clearTimeout(timer);
        maxTimer = null;
        invoke();
      }, maxDuration);
    }
    timer = setTimeout(() => {
      if (maxTimer)
        clearTimeout(maxTimer);
      maxTimer = null;
      invoke();
    }, duration);
  };
  return filter;
}
function throttleFilter(ms, trailing = true, leading = true) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  };
  const filter = (invoke) => {
    const duration = __vite_ssr_import_0__.unref(ms);
    const elapsed = Date.now() - lastExec;
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      timer = setTimeout(() => {
        lastExec = Date.now();
        isLeading = true;
        clear();
        invoke();
      }, duration);
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = __vite_ssr_import_0__.ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive, pause, resume, eventFilter };
}

function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
function identity(arg) {
  return arg;
}
function createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function invoke(fn) {
  return fn();
}
function containsProp(obj, ...props) {
  return props.some((k) => k in obj);
}
function increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function objectPick(obj, keys, omitUndefined = false) {
  return keys.reduce((n, k) => {
    if (k in obj) {
      if (!omitUndefined || obj[k] !== void 0)
        n[k] = obj[k];
    }
    return n;
  }, {});
}

function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}

function refDebounced(value, ms = 200, options = {}) {
  if (ms <= 0)
    return value;
  const debounced = __vite_ssr_import_0__.ref(value.value);
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  __vite_ssr_import_0__.watch(value, () => updater());
  return debounced;
}

function refDefault(source, defaultValue) {
  return __vite_ssr_import_0__.computed({
    get() {
      var _a;
      return (_a = source.value) != null ? _a : defaultValue;
    },
    set(value) {
      source.value = value;
    }
  });
}

function useThrottleFn(fn, ms = 200, trailing = true, leading = true) {
  return createFilterWrapper(throttleFilter(ms, trailing, leading), fn);
}

function refThrottled(value, delay = 200, trailing = true, leading = true) {
  if (delay <= 0)
    return value;
  const throttled = __vite_ssr_import_0__.ref(value.value);
  const updater = useThrottleFn(() => {
    throttled.value = value.value;
  }, delay, trailing, leading);
  __vite_ssr_import_0__.watch(value, () => updater());
  return throttled;
}

function refWithControl(initial, options = {}) {
  let source = initial;
  let track;
  let trigger;
  const ref = __vite_ssr_import_0__.customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        return get();
      },
      set(v) {
        set(v);
      }
    };
  });
  function get(tracking = true) {
    if (tracking)
      track();
    return source;
  }
  function set(value, triggering = true) {
    var _a, _b;
    if (value === source)
      return;
    const old = source;
    if (((_a = options.onBeforeChange) == null ? void 0 : _a.call(options, value, old)) === false)
      return;
    source = value;
    (_b = options.onChanged) == null ? void 0 : _b.call(options, value, old);
    if (triggering)
      trigger();
  }
  const untrackedGet = () => get(false);
  const silentSet = (v) => set(v, false);
  const peek = () => get(false);
  const lay = (v) => set(v, false);
  return extendRef(ref, {
    get,
    set,
    untrackedGet,
    silentSet,
    peek,
    lay
  }, { enumerable: true });
}
const controlledRef = refWithControl;

function set(...args) {
  if (args.length === 2) {
    const [ref, value] = args;
    ref.value = value;
  }
  if (args.length === 3) {
    if (__vite_ssr_import_0__.isVue2) {
      __vite_ssr_import_0__.set(...args);
    } else {
      const [target, key, value] = args;
      target[key] = value;
    }
  }
}

function syncRef(left, right, options = {}) {
  const {
    flush = "sync",
    deep = false,
    immediate = true,
    direction = "both"
  } = options;
  let stop1, stop2;
  if (direction === "both" || direction === "ltr") {
    stop1 = __vite_ssr_import_0__.watch(left, (newValue) => right.value = newValue, { flush, deep, immediate });
  }
  if (direction === "both" || direction === "rtl") {
    stop2 = __vite_ssr_import_0__.watch(right, (newValue) => left.value = newValue, { flush, deep, immediate });
  }
  return () => {
    stop1 == null ? void 0 : stop1();
    stop2 == null ? void 0 : stop2();
  };
}

function syncRefs(source, targets, options = {}) {
  const {
    flush = "sync",
    deep = false,
    immediate = true
  } = options;
  if (!Array.isArray(targets))
    targets = [targets];
  return __vite_ssr_import_0__.watch(source, (newValue) => targets.forEach((target) => target.value = newValue), { flush, deep, immediate });
}

var __defProp$6 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
function toRefs(objectRef) {
  if (!__vite_ssr_import_0__.isRef(objectRef))
    return __vite_ssr_import_0__.toRefs(objectRef);
  const result = Array.isArray(objectRef.value) ? new Array(objectRef.value.length) : {};
  for (const key in objectRef.value) {
    result[key] = __vite_ssr_import_0__.customRef(() => ({
      get() {
        return objectRef.value[key];
      },
      set(v) {
        if (Array.isArray(objectRef.value)) {
          const copy = [...objectRef.value];
          copy[key] = v;
          objectRef.value = copy;
        } else {
          const newObject = __spreadProps$4(__spreadValues$6({}, objectRef.value), { [key]: v });
          Object.setPrototypeOf(newObject, objectRef.value);
          objectRef.value = newObject;
        }
      }
    }));
  }
  return result;
}

function tryOnBeforeMount(fn, sync = true) {
  if (__vite_ssr_import_0__.getCurrentInstance())
    __vite_ssr_import_0__.onBeforeMount(fn);
  else if (sync)
    fn();
  else
    __vite_ssr_import_0__.nextTick(fn);
}

function tryOnBeforeUnmount(fn) {
  if (__vite_ssr_import_0__.getCurrentInstance())
    __vite_ssr_import_0__.onBeforeUnmount(fn);
}

function tryOnMounted(fn, sync = true) {
  if (__vite_ssr_import_0__.getCurrentInstance())
    __vite_ssr_import_0__.onMounted(fn);
  else if (sync)
    fn();
  else
    __vite_ssr_import_0__.nextTick(fn);
}

function tryOnUnmounted(fn) {
  if (__vite_ssr_import_0__.getCurrentInstance())
    __vite_ssr_import_0__.onUnmounted(fn);
}

function until(r) {
  let isNot = false;
  function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = __vite_ssr_import_0__.watch(r, (v) => {
        if (condition(v) !== isNot) {
          stop == null ? void 0 : stop();
          resolve(v);
        }
      }, {
        flush,
        deep,
        immediate: true
      });
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(promiseTimeout(timeout, throwOnTimeout).then(() => __vite_ssr_import_0__.unref(r)).finally(() => stop == null ? void 0 : stop()));
    }
    return Promise.race(promises);
  }
  function toBe(value, options) {
    if (!__vite_ssr_import_0__.isRef(value))
      return toMatch((v) => v === value, options);
    const { flush = "sync", deep = false, timeout, throwOnTimeout } = options != null ? options : {};
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = __vite_ssr_import_0__.watch([r, value], ([v1, v2]) => {
        if (isNot !== (v1 === v2)) {
          stop == null ? void 0 : stop();
          resolve(v1);
        }
      }, {
        flush,
        deep,
        immediate: true
      });
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(promiseTimeout(timeout, throwOnTimeout).then(() => __vite_ssr_import_0__.unref(r)).finally(() => {
        stop == null ? void 0 : stop();
        return __vite_ssr_import_0__.unref(r);
      }));
    }
    return Promise.race(promises);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array = Array.from(v);
      return array.includes(value) || array.includes(__vite_ssr_import_0__.unref(value));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count = -1;
    return toMatch(() => {
      count += 1;
      return count >= n;
    }, options);
  }
  if (Array.isArray(__vite_ssr_import_0__.unref(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot;
        return this;
      }
    };
    return instance;
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot;
        return this;
      }
    };
    return instance;
  }
}

function useCounter(initialValue = 0, options = {}) {
  const count = __vite_ssr_import_0__.ref(initialValue);
  const {
    max = Infinity,
    min = -Infinity
  } = options;
  const inc = (delta = 1) => count.value = Math.min(max, count.value + delta);
  const dec = (delta = 1) => count.value = Math.max(min, count.value - delta);
  const get = () => count.value;
  const set = (val) => count.value = val;
  const reset = (val = initialValue) => {
    initialValue = val;
    return set(val);
  };
  return { count, inc, dec, get, set, reset };
}

const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const formatDate = (date, formatStr) => {
  const years = date.getFullYear();
  const month = date.getMonth();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  const day = date.getDay();
  const matches = {
    YY: String(years).slice(-2),
    YYYY: years,
    M: month + 1,
    MM: `${month + 1}`.padStart(2, "0"),
    D: String(days),
    DD: `${days}`.padStart(2, "0"),
    H: String(hours),
    HH: `${hours}`.padStart(2, "0"),
    h: `${hours % 12 || 12}`.padStart(1, "0"),
    hh: `${hours % 12 || 12}`.padStart(2, "0"),
    m: String(minutes),
    mm: `${minutes}`.padStart(2, "0"),
    s: String(seconds),
    ss: `${seconds}`.padStart(2, "0"),
    SSS: `${milliseconds}`.padStart(3, "0"),
    d: day
  };
  return formatStr.replace(REGEX_FORMAT, (match, $1) => $1 || matches[match]);
};
const normalizeDate = (date) => {
  if (date === null)
    return new Date(NaN);
  if (date === void 0)
    return new Date();
  if (date instanceof Date)
    return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    const d = date.match(REGEX_PARSE);
    if (d) {
      const m = d[2] - 1 || 0;
      const ms = (d[7] || "0").substring(0, 3);
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }
  return new Date(date);
};
function useDateFormat(date, formatStr = "HH:mm:ss") {
  return __vite_ssr_import_0__.computed(() => formatDate(normalizeDate(__vite_ssr_import_0__.unref(date)), __vite_ssr_import_0__.unref(formatStr)));
}

function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = __vite_ssr_import_0__.ref(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    if (__vite_ssr_import_0__.unref(interval) <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    timer = setInterval(cb, __vite_ssr_import_0__.unref(interval));
  }
  if (immediate && isClient)
    resume();
  if (__vite_ssr_import_0__.isRef(interval)) {
    const stopWatch = __vite_ssr_import_0__.watch(interval, () => {
      if (isActive.value && isClient)
        resume();
    });
    tryOnScopeDispose(stopWatch);
  }
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
function useInterval(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false,
    immediate = true
  } = options;
  const counter = __vite_ssr_import_0__.ref(0);
  const controls = useIntervalFn(() => counter.value += 1, interval, { immediate });
  if (exposeControls) {
    return __spreadValues$5({
      counter
    }, controls);
  } else {
    return counter;
  }
}

function useLastChanged(source, options = {}) {
  var _a;
  const ms = __vite_ssr_import_0__.ref((_a = options.initialValue) != null ? _a : null);
  __vite_ssr_import_0__.watch(source, () => ms.value = timestamp(), options);
  return ms;
}

function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = __vite_ssr_import_0__.ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, __vite_ssr_import_0__.unref(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}

var __defProp$4 = Object.defineProperty;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
function useTimeout(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false
  } = options;
  const controls = useTimeoutFn(noop, interval, options);
  const ready = __vite_ssr_import_0__.computed(() => !controls.isPending.value);
  if (exposeControls) {
    return __spreadValues$4({
      ready
    }, controls);
  } else {
    return ready;
  }
}

function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = __vite_ssr_import_0__.isRef(initialValue);
  const innerValue = __vite_ssr_import_0__.ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      innerValue.value = value;
      return innerValue.value;
    } else {
      innerValue.value = innerValue.value === __vite_ssr_import_0__.unref(truthyValue) ? __vite_ssr_import_0__.unref(falsyValue) : __vite_ssr_import_0__.unref(truthyValue);
      return innerValue.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [innerValue, toggle];
}

var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a = options, {
    eventFilter = bypassFilter
  } = _a, watchOptions = __objRest$5(_a, [
    "eventFilter"
  ]);
  return __vite_ssr_import_0__.watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}

var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __objRest$4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchAtMost(source, cb, options) {
  const _a = options, {
    count
  } = _a, watchOptions = __objRest$4(_a, [
    "count"
  ]);
  const current = __vite_ssr_import_0__.ref(0);
  const stop = watchWithFilter(source, (...args) => {
    current.value += 1;
    if (current.value >= __vite_ssr_import_0__.unref(count))
      __vite_ssr_import_0__.nextTick(() => stop());
    cb(...args);
  }, watchOptions);
  return { count: current, stop };
}

var __defProp$3 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
var __objRest$3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchDebounced(source, cb, options = {}) {
  const _a = options, {
    debounce = 0,
    maxWait = void 0
  } = _a, watchOptions = __objRest$3(_a, [
    "debounce",
    "maxWait"
  ]);
  return watchWithFilter(source, cb, __spreadProps$3(__spreadValues$3({}, watchOptions), {
    eventFilter: debounceFilter(debounce, { maxWait })
  }));
}

var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchIgnorable(source, cb, options = {}) {
  const _a = options, {
    eventFilter = bypassFilter
  } = _a, watchOptions = __objRest$2(_a, [
    "eventFilter"
  ]);
  const filteredCb = createFilterWrapper(eventFilter, cb);
  let ignoreUpdates;
  let ignorePrevAsyncUpdates;
  let stop;
  if (watchOptions.flush === "sync") {
    const ignore = __vite_ssr_import_0__.ref(false);
    ignorePrevAsyncUpdates = () => {
    };
    ignoreUpdates = (updater) => {
      ignore.value = true;
      updater();
      ignore.value = false;
    };
    stop = __vite_ssr_import_0__.watch(source, (...args) => {
      if (!ignore.value)
        filteredCb(...args);
    }, watchOptions);
  } else {
    const disposables = [];
    const ignoreCounter = __vite_ssr_import_0__.ref(0);
    const syncCounter = __vite_ssr_import_0__.ref(0);
    ignorePrevAsyncUpdates = () => {
      ignoreCounter.value = syncCounter.value;
    };
    disposables.push(__vite_ssr_import_0__.watch(source, () => {
      syncCounter.value++;
    }, __spreadProps$2(__spreadValues$2({}, watchOptions), { flush: "sync" })));
    ignoreUpdates = (updater) => {
      const syncCounterPrev = syncCounter.value;
      updater();
      ignoreCounter.value += syncCounter.value - syncCounterPrev;
    };
    disposables.push(__vite_ssr_import_0__.watch(source, (...args) => {
      const ignore = ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value;
      ignoreCounter.value = 0;
      syncCounter.value = 0;
      if (ignore)
        return;
      filteredCb(...args);
    }, watchOptions));
    stop = () => {
      disposables.forEach((fn) => fn());
    };
  }
  return { stop, ignoreUpdates, ignorePrevAsyncUpdates };
}

function watchOnce(source, cb, options) {
  const stop = __vite_ssr_import_0__.watch(source, (...args) => {
    __vite_ssr_import_0__.nextTick(() => stop());
    return cb(...args);
  }, options);
}

var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a = options, {
    eventFilter: filter
  } = _a, watchOptions = __objRest$1(_a, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(source, cb, __spreadProps$1(__spreadValues$1({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchThrottled(source, cb, options = {}) {
  const _a = options, {
    throttle = 0,
    trailing = true,
    leading = true
  } = _a, watchOptions = __objRest(_a, [
    "throttle",
    "trailing",
    "leading"
  ]);
  return watchWithFilter(source, cb, __spreadProps(__spreadValues({}, watchOptions), {
    eventFilter: throttleFilter(throttle, trailing, leading)
  }));
}

function whenever(source, cb, options) {
  return __vite_ssr_import_0__.watch(source, (v, ov, onInvalidate) => {
    if (v)
      cb(v, ov, onInvalidate);
  }, options);
}


Object.defineProperty(__vite_ssr_exports__, "__onlyVue3", { enumerable: true, configurable: true, get(){ return __onlyVue3 }});
Object.defineProperty(__vite_ssr_exports__, "and", { enumerable: true, configurable: true, get(){ return logicAnd }});
Object.defineProperty(__vite_ssr_exports__, "assert", { enumerable: true, configurable: true, get(){ return assert }});
Object.defineProperty(__vite_ssr_exports__, "autoResetRef", { enumerable: true, configurable: true, get(){ return refAutoReset }});
Object.defineProperty(__vite_ssr_exports__, "bypassFilter", { enumerable: true, configurable: true, get(){ return bypassFilter }});
Object.defineProperty(__vite_ssr_exports__, "clamp", { enumerable: true, configurable: true, get(){ return clamp }});
Object.defineProperty(__vite_ssr_exports__, "computedEager", { enumerable: true, configurable: true, get(){ return computedEager }});
Object.defineProperty(__vite_ssr_exports__, "computedWithControl", { enumerable: true, configurable: true, get(){ return computedWithControl }});
Object.defineProperty(__vite_ssr_exports__, "containsProp", { enumerable: true, configurable: true, get(){ return containsProp }});
Object.defineProperty(__vite_ssr_exports__, "controlledComputed", { enumerable: true, configurable: true, get(){ return computedWithControl }});
Object.defineProperty(__vite_ssr_exports__, "controlledRef", { enumerable: true, configurable: true, get(){ return controlledRef }});
Object.defineProperty(__vite_ssr_exports__, "createEventHook", { enumerable: true, configurable: true, get(){ return createEventHook }});
Object.defineProperty(__vite_ssr_exports__, "createFilterWrapper", { enumerable: true, configurable: true, get(){ return createFilterWrapper }});
Object.defineProperty(__vite_ssr_exports__, "createGlobalState", { enumerable: true, configurable: true, get(){ return createGlobalState }});
Object.defineProperty(__vite_ssr_exports__, "createInjectionState", { enumerable: true, configurable: true, get(){ return createInjectionState }});
Object.defineProperty(__vite_ssr_exports__, "createReactiveFn", { enumerable: true, configurable: true, get(){ return reactify }});
Object.defineProperty(__vite_ssr_exports__, "createSharedComposable", { enumerable: true, configurable: true, get(){ return createSharedComposable }});
Object.defineProperty(__vite_ssr_exports__, "createSingletonPromise", { enumerable: true, configurable: true, get(){ return createSingletonPromise }});
Object.defineProperty(__vite_ssr_exports__, "debounceFilter", { enumerable: true, configurable: true, get(){ return debounceFilter }});
Object.defineProperty(__vite_ssr_exports__, "debouncedRef", { enumerable: true, configurable: true, get(){ return refDebounced }});
Object.defineProperty(__vite_ssr_exports__, "debouncedWatch", { enumerable: true, configurable: true, get(){ return watchDebounced }});
Object.defineProperty(__vite_ssr_exports__, "directiveHooks", { enumerable: true, configurable: true, get(){ return directiveHooks }});
Object.defineProperty(__vite_ssr_exports__, "eagerComputed", { enumerable: true, configurable: true, get(){ return computedEager }});
Object.defineProperty(__vite_ssr_exports__, "extendRef", { enumerable: true, configurable: true, get(){ return extendRef }});
Object.defineProperty(__vite_ssr_exports__, "formatDate", { enumerable: true, configurable: true, get(){ return formatDate }});
Object.defineProperty(__vite_ssr_exports__, "get", { enumerable: true, configurable: true, get(){ return get }});
Object.defineProperty(__vite_ssr_exports__, "identity", { enumerable: true, configurable: true, get(){ return identity }});
Object.defineProperty(__vite_ssr_exports__, "ignorableWatch", { enumerable: true, configurable: true, get(){ return watchIgnorable }});
Object.defineProperty(__vite_ssr_exports__, "increaseWithUnit", { enumerable: true, configurable: true, get(){ return increaseWithUnit }});
Object.defineProperty(__vite_ssr_exports__, "invoke", { enumerable: true, configurable: true, get(){ return invoke }});
Object.defineProperty(__vite_ssr_exports__, "isBoolean", { enumerable: true, configurable: true, get(){ return isBoolean }});
Object.defineProperty(__vite_ssr_exports__, "isClient", { enumerable: true, configurable: true, get(){ return isClient }});
Object.defineProperty(__vite_ssr_exports__, "isDef", { enumerable: true, configurable: true, get(){ return isDef }});
Object.defineProperty(__vite_ssr_exports__, "isDefined", { enumerable: true, configurable: true, get(){ return isDefined }});
Object.defineProperty(__vite_ssr_exports__, "isFunction", { enumerable: true, configurable: true, get(){ return isFunction }});
Object.defineProperty(__vite_ssr_exports__, "isIOS", { enumerable: true, configurable: true, get(){ return isIOS }});
Object.defineProperty(__vite_ssr_exports__, "isNumber", { enumerable: true, configurable: true, get(){ return isNumber }});
Object.defineProperty(__vite_ssr_exports__, "isObject", { enumerable: true, configurable: true, get(){ return isObject }});
Object.defineProperty(__vite_ssr_exports__, "isString", { enumerable: true, configurable: true, get(){ return isString }});
Object.defineProperty(__vite_ssr_exports__, "isWindow", { enumerable: true, configurable: true, get(){ return isWindow }});
Object.defineProperty(__vite_ssr_exports__, "logicAnd", { enumerable: true, configurable: true, get(){ return logicAnd }});
Object.defineProperty(__vite_ssr_exports__, "logicNot", { enumerable: true, configurable: true, get(){ return logicNot }});
Object.defineProperty(__vite_ssr_exports__, "logicOr", { enumerable: true, configurable: true, get(){ return logicOr }});
Object.defineProperty(__vite_ssr_exports__, "makeDestructurable", { enumerable: true, configurable: true, get(){ return makeDestructurable }});
Object.defineProperty(__vite_ssr_exports__, "noop", { enumerable: true, configurable: true, get(){ return noop }});
Object.defineProperty(__vite_ssr_exports__, "normalizeDate", { enumerable: true, configurable: true, get(){ return normalizeDate }});
Object.defineProperty(__vite_ssr_exports__, "not", { enumerable: true, configurable: true, get(){ return logicNot }});
Object.defineProperty(__vite_ssr_exports__, "now", { enumerable: true, configurable: true, get(){ return now }});
Object.defineProperty(__vite_ssr_exports__, "objectPick", { enumerable: true, configurable: true, get(){ return objectPick }});
Object.defineProperty(__vite_ssr_exports__, "or", { enumerable: true, configurable: true, get(){ return logicOr }});
Object.defineProperty(__vite_ssr_exports__, "pausableFilter", { enumerable: true, configurable: true, get(){ return pausableFilter }});
Object.defineProperty(__vite_ssr_exports__, "pausableWatch", { enumerable: true, configurable: true, get(){ return watchPausable }});
Object.defineProperty(__vite_ssr_exports__, "promiseTimeout", { enumerable: true, configurable: true, get(){ return promiseTimeout }});
Object.defineProperty(__vite_ssr_exports__, "rand", { enumerable: true, configurable: true, get(){ return rand }});
Object.defineProperty(__vite_ssr_exports__, "reactify", { enumerable: true, configurable: true, get(){ return reactify }});
Object.defineProperty(__vite_ssr_exports__, "reactifyObject", { enumerable: true, configurable: true, get(){ return reactifyObject }});
Object.defineProperty(__vite_ssr_exports__, "reactiveComputed", { enumerable: true, configurable: true, get(){ return reactiveComputed }});
Object.defineProperty(__vite_ssr_exports__, "reactiveOmit", { enumerable: true, configurable: true, get(){ return reactiveOmit }});
Object.defineProperty(__vite_ssr_exports__, "reactivePick", { enumerable: true, configurable: true, get(){ return reactivePick }});
Object.defineProperty(__vite_ssr_exports__, "refAutoReset", { enumerable: true, configurable: true, get(){ return refAutoReset }});
Object.defineProperty(__vite_ssr_exports__, "refDebounced", { enumerable: true, configurable: true, get(){ return refDebounced }});
Object.defineProperty(__vite_ssr_exports__, "refDefault", { enumerable: true, configurable: true, get(){ return refDefault }});
Object.defineProperty(__vite_ssr_exports__, "refThrottled", { enumerable: true, configurable: true, get(){ return refThrottled }});
Object.defineProperty(__vite_ssr_exports__, "refWithControl", { enumerable: true, configurable: true, get(){ return refWithControl }});
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
Object.defineProperty(__vite_ssr_exports__, "syncRef", { enumerable: true, configurable: true, get(){ return syncRef }});
Object.defineProperty(__vite_ssr_exports__, "syncRefs", { enumerable: true, configurable: true, get(){ return syncRefs }});
Object.defineProperty(__vite_ssr_exports__, "throttleFilter", { enumerable: true, configurable: true, get(){ return throttleFilter }});
Object.defineProperty(__vite_ssr_exports__, "throttledRef", { enumerable: true, configurable: true, get(){ return refThrottled }});
Object.defineProperty(__vite_ssr_exports__, "throttledWatch", { enumerable: true, configurable: true, get(){ return watchThrottled }});
Object.defineProperty(__vite_ssr_exports__, "timestamp", { enumerable: true, configurable: true, get(){ return timestamp }});
Object.defineProperty(__vite_ssr_exports__, "toReactive", { enumerable: true, configurable: true, get(){ return toReactive }});
Object.defineProperty(__vite_ssr_exports__, "toRefs", { enumerable: true, configurable: true, get(){ return toRefs }});
Object.defineProperty(__vite_ssr_exports__, "tryOnBeforeMount", { enumerable: true, configurable: true, get(){ return tryOnBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "tryOnBeforeUnmount", { enumerable: true, configurable: true, get(){ return tryOnBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "tryOnMounted", { enumerable: true, configurable: true, get(){ return tryOnMounted }});
Object.defineProperty(__vite_ssr_exports__, "tryOnScopeDispose", { enumerable: true, configurable: true, get(){ return tryOnScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "tryOnUnmounted", { enumerable: true, configurable: true, get(){ return tryOnUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "until", { enumerable: true, configurable: true, get(){ return until }});
Object.defineProperty(__vite_ssr_exports__, "useCounter", { enumerable: true, configurable: true, get(){ return useCounter }});
Object.defineProperty(__vite_ssr_exports__, "useDateFormat", { enumerable: true, configurable: true, get(){ return useDateFormat }});
Object.defineProperty(__vite_ssr_exports__, "useDebounce", { enumerable: true, configurable: true, get(){ return refDebounced }});
Object.defineProperty(__vite_ssr_exports__, "useDebounceFn", { enumerable: true, configurable: true, get(){ return useDebounceFn }});
Object.defineProperty(__vite_ssr_exports__, "useInterval", { enumerable: true, configurable: true, get(){ return useInterval }});
Object.defineProperty(__vite_ssr_exports__, "useIntervalFn", { enumerable: true, configurable: true, get(){ return useIntervalFn }});
Object.defineProperty(__vite_ssr_exports__, "useLastChanged", { enumerable: true, configurable: true, get(){ return useLastChanged }});
Object.defineProperty(__vite_ssr_exports__, "useThrottle", { enumerable: true, configurable: true, get(){ return refThrottled }});
Object.defineProperty(__vite_ssr_exports__, "useThrottleFn", { enumerable: true, configurable: true, get(){ return useThrottleFn }});
Object.defineProperty(__vite_ssr_exports__, "useTimeout", { enumerable: true, configurable: true, get(){ return useTimeout }});
Object.defineProperty(__vite_ssr_exports__, "useTimeoutFn", { enumerable: true, configurable: true, get(){ return useTimeoutFn }});
Object.defineProperty(__vite_ssr_exports__, "useToggle", { enumerable: true, configurable: true, get(){ return useToggle }});
Object.defineProperty(__vite_ssr_exports__, "watchAtMost", { enumerable: true, configurable: true, get(){ return watchAtMost }});
Object.defineProperty(__vite_ssr_exports__, "watchDebounced", { enumerable: true, configurable: true, get(){ return watchDebounced }});
Object.defineProperty(__vite_ssr_exports__, "watchIgnorable", { enumerable: true, configurable: true, get(){ return watchIgnorable }});
Object.defineProperty(__vite_ssr_exports__, "watchOnce", { enumerable: true, configurable: true, get(){ return watchOnce }});
Object.defineProperty(__vite_ssr_exports__, "watchPausable", { enumerable: true, configurable: true, get(){ return watchPausable }});
Object.defineProperty(__vite_ssr_exports__, "watchThrottled", { enumerable: true, configurable: true, get(){ return watchThrottled }});
Object.defineProperty(__vite_ssr_exports__, "watchWithFilter", { enumerable: true, configurable: true, get(){ return watchWithFilter }});
Object.defineProperty(__vite_ssr_exports__, "whenever", { enumerable: true, configurable: true, get(){ return whenever }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/query.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/query/query.mjs ($id_7961d5dc)
// - /node_modules/@nuxt/content/dist/runtime/utils/json.mjs ($id_45454526)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// --------------------
const $id_47535763 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/query/query.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/utils/json.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs");

const createQueryFetch = (path) => (query) => {
  if (path) {
    if (query.params().first) {
      query.where({ _path: __vite_ssr_import_0__.withoutTrailingSlash(path) });
    } else {
      query.where({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
    }
  }
  if (!query.params().sort?.length) {
    query.sort({ _file: 1, $numeric: true });
  }
  const params = query.params();
  const apiPath = __vite_ssr_import_5__.withContentBase(true ? "/query" : `/query/${__vite_ssr_import_1__.hash(params)}`);
  if (!true && true) {
    __vite_ssr_import_2__.useHead({
      link: [
        { rel: "prefetch", href: apiPath }
      ]
    });
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: __vite_ssr_import_4__.jsonStringify(params),
      previewToken: __vite_ssr_import_2__.useCookie("previewToken").value
    }
  });
};
Object.defineProperty(__vite_ssr_exports__, "createQueryFetch", { enumerable: true, configurable: true, get(){ return createQueryFetch }});
function queryContent(query, ...pathParts) {
  if (typeof query === "string") {
    return __vite_ssr_import_3__.createQuery(createQueryFetch(__vite_ssr_import_0__.withLeadingSlash(__vite_ssr_import_0__.joinURL(query, ...pathParts))));
  }
  return __vite_ssr_import_3__.createQuery(createQueryFetch(), query);
}
Object.defineProperty(__vite_ssr_exports__, "queryContent", { enumerable: true, configurable: true, get(){ return queryContent }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/query/query.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// Dependencies: 
// - /node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs ($id_e943acfb)
// --------------------
const $id_7961d5dc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs");

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = __vite_ssr_import_0__.ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => queryParams,
    only: $set("only", __vite_ssr_import_0__.ensureArray),
    without: $set("without", __vite_ssr_import_0__.ensureArray),
    where: $set("where", (q) => [...__vite_ssr_import_0__.ensureArray(queryParams.where), q]),
    sort: $set("sort", (sort) => [...__vite_ssr_import_0__.ensureArray(queryParams.sort), ...__vite_ssr_import_0__.ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};
Object.defineProperty(__vite_ssr_exports__, "createQuery", { enumerable: true, configurable: true, get(){ return createQuery }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/query/query.mjs ($id_7961d5dc)
// Dependencies: 

// --------------------
const $id_e943acfb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
Object.defineProperty(__vite_ssr_exports__, "get", { enumerable: true, configurable: true, get(){ return get }});
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const pick = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => keys.includes(key)) : obj;
Object.defineProperty(__vite_ssr_exports__, "pick", { enumerable: true, configurable: true, get(){ return pick }});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
Object.defineProperty(__vite_ssr_exports__, "omit", { enumerable: true, configurable: true, get(){ return omit }});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
Object.defineProperty(__vite_ssr_exports__, "apply", { enumerable: true, configurable: true, get(){ return apply }});
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
Object.defineProperty(__vite_ssr_exports__, "detectProperties", { enumerable: true, configurable: true, get(){ return detectProperties }});
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
Object.defineProperty(__vite_ssr_exports__, "withoutKeys", { enumerable: true, configurable: true, get(){ return withoutKeys }});
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return withKeys }});
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
Object.defineProperty(__vite_ssr_exports__, "sortList", { enumerable: true, configurable: true, get(){ return sortList }});
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
Object.defineProperty(__vite_ssr_exports__, "assertArray", { enumerable: true, configurable: true, get(){ return assertArray }});
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
Object.defineProperty(__vite_ssr_exports__, "ensureArray", { enumerable: true, configurable: true, get(){ return ensureArray }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/utils/json.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_e209d000)
// Dependencies: 

// --------------------
const $id_45454526 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer);
}
Object.defineProperty(__vite_ssr_exports__, "jsonStringify", { enumerable: true, configurable: true, get(){ return jsonStringify }});
function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
Object.defineProperty(__vite_ssr_exports__, "jsonParse", { enumerable: true, configurable: true, get(){ return jsonParse }});
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`;
  }
  return value;
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_e209d000)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs ($id_eacbabc5)
// --------------------
const $id_3db3e041 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs");

const withContentBase = (url) => __vite_ssr_import_0__.withBase(url, "/api/" + __vite_ssr_import_1__.useRuntimeConfig().public.content.base);
Object.defineProperty(__vite_ssr_exports__, "withContentBase", { enumerable: true, configurable: true, get(){ return withContentBase }});
const useUnwrap = () => ({
  unwrap: __vite_ssr_import_2__.unwrap,
  flatUnwrap: __vite_ssr_import_2__.flatUnwrap
});
Object.defineProperty(__vite_ssr_exports__, "useUnwrap", { enumerable: true, configurable: true, get(){ return useUnwrap }});
const useContentDisabled = () => {
  console.warn("useContent is only accessible when you are using `documentDriven` mode.");
  console.warn("Learn more by visiting: https://content.nuxtjs.org/guide/writing/document-driven");
  throw new Error("useContent is only accessible when you are using `documentDriven` mode.");
};
Object.defineProperty(__vite_ssr_exports__, "useContentDisabled", { enumerable: true, configurable: true, get(){ return useContentDisabled }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// Dependencies: 

// --------------------
const $id_eacbabc5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const TEXT_TAGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
Object.defineProperty(__vite_ssr_exports__, "TEXT_TAGS", { enumerable: true, configurable: true, get(){ return TEXT_TAGS }});
function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
Object.defineProperty(__vite_ssr_exports__, "isTag", { enumerable: true, configurable: true, get(){ return isTag }});
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
Object.defineProperty(__vite_ssr_exports__, "isText", { enumerable: true, configurable: true, get(){ return isText }});
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
Object.defineProperty(__vite_ssr_exports__, "nodeChildren", { enumerable: true, configurable: true, get(){ return nodeChildren }});
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}
Object.defineProperty(__vite_ssr_exports__, "nodeTextContent", { enumerable: true, configurable: true, get(){ return nodeTextContent }});
function unwrap(vnode, tags = ["p"]) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags));
  }
  let result = vnode;
  if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode;
    if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
Object.defineProperty(__vite_ssr_exports__, "unwrap", { enumerable: true, configurable: true, get(){ return unwrap }});
function flatUnwrap(vnodes, tags = ["p"]) {
  vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
  if (!tags.length) {
    return vnodes;
  }
  return vnodes.flatMap((vnode) => flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))).filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ""));
}
Object.defineProperty(__vite_ssr_exports__, "flatUnwrap", { enumerable: true, configurable: true, get(){ return flatUnwrap }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/helpers.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// Dependencies: 

// --------------------
const $id_ec377465 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const navBottomLink = (link) => {
  if (!link.children) {
    return link._path;
  }
  for (const child of link?.children || []) {
    const result = navBottomLink(child);
    if (result) {
      return result;
    }
  }
};
const navDirFromPath = (path, tree) => {
  for (const file of tree) {
    if (file._path === path && !file._id) {
      return file.children;
    }
    if (file.children) {
      const result = navDirFromPath(path, file.children);
      if (result) {
        return result;
      }
    }
  }
};
const navPageFromPath = (path, tree) => {
  for (const file of tree) {
    if (file._path === path) {
      return file;
    }
    if (file.children) {
      const result = navPageFromPath(path, file.children);
      if (result) {
        return result;
      }
    }
  }
};
const navKeyFromPath = (path, key, tree) => {
  let value;
  const goDeep = (path2, tree2) => {
    for (const file of tree2) {
      if (path2.startsWith(file._path) && file[key]) {
        value = file[key];
      }
      if (file._path === path2) {
        return;
      }
      if (file.children) {
        goDeep(path2, file.children);
      }
    }
  };
  goDeep(path, tree);
  return value;
};
const useContentHelpers = () => {
  return {
    navBottomLink,
    navDirFromPath,
    navPageFromPath,
    navKeyFromPath
  };
};
Object.defineProperty(__vite_ssr_exports__, "useContentHelpers", { enumerable: true, configurable: true, get(){ return useContentHelpers }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/head.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// Dependencies: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// --------------------
const $id_4ed5e8c1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs");

const useContentHead = (_content, to = __vite_ssr_import_0__.useRoute()) => {
  const content = __vite_ssr_import_0__.unref(_content);
  const refreshHead = (data = content) => {
    if (!to.path || !data) {
      return;
    }
    const head = Object.assign({}, data?.head || {});
    head.title = head.title || data?.title;
    head.meta = head.meta || [];
    const description = head?.description || data?.description;
    if (description && head.meta.filter((m) => m.name === "description").length === 0) {
      head.meta.push({
        name: "description",
        content: description
      });
    }
    const image = head?.image || data?.image;
    if (image && head.meta.filter((m) => m.property === "og:image").length === 0) {
      if (typeof image === "string") {
        head.meta.push({
          property: "og:image",
          content: head.image
        });
      }
      if (typeof image === "object") {
        const imageKeys = [
          "src",
          "secure_url",
          "type",
          "width",
          "height",
          "alt"
        ];
        for (const key of imageKeys) {
          if (key === "src" && image.src) {
            head.meta.push({
              property: "og:image",
              content: image[key]
            });
          } else if (image[key]) {
            head.meta.push({
              property: `og:${key}`,
              content: image[key]
            });
          }
        }
      }
    }
    if (false) {
      __vite_ssr_import_0__.nextTick(() => __vite_ssr_import_0__.useHead(head));
    } else {
      __vite_ssr_import_0__.useHead(head);
    }
  };
  __vite_ssr_import_0__.watch(() => __vite_ssr_import_0__.unref(_content), refreshHead, { immediate: true });
};
Object.defineProperty(__vite_ssr_exports__, "useContentHead", { enumerable: true, configurable: true, get(){ return useContentHead }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/utils/json.mjs ($id_45454526)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// --------------------
const $id_e209d000 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/utils/json.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs");

const fetchContentNavigation = (queryBuilder) => {
  let params = queryBuilder;
  if (typeof params?.params === "function") {
    params = params.params();
  }
  const apiPath = __vite_ssr_import_3__.withContentBase(params ? `/navigation/${__vite_ssr_import_0__.hash(params)}` : "/navigation");
  if (!true && true) {
    __vite_ssr_import_1__.useHead({
      link: [
        { rel: "prefetch", href: apiPath }
      ]
    });
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: __vite_ssr_import_2__.jsonStringify(params || {}),
      previewToken: __vite_ssr_import_1__.useCookie("previewToken").value
    }
  });
};
Object.defineProperty(__vite_ssr_exports__, "fetchContentNavigation", { enumerable: true, configurable: true, get(){ return fetchContentNavigation }});
;
}


// --------------------
// Request: /node_modules/@nuxtjs/color-mode/dist/runtime/composables.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// Dependencies: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// --------------------
const $id_9d5ba8e3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs");

const useColorMode = () => {
  return __vite_ssr_import_0__.useState("color-mode").value;
};
Object.defineProperty(__vite_ssr_exports__, "useColorMode", { enumerable: true, configurable: true, get(){ return useColorMode }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/composables.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// Dependencies: 

// --------------------
const $id_ff6ed455 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const warnRuntimeUsage = (method) => console.warn(`${method}() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// --------------------
const $id_9fab5abb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    path: {
      type: String,
      required: false,
      default: "/"
    },
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  render(ctx) {
    const slots = __vite_ssr_import_0__.useSlots();
    const { path, query } = ctx;
    const contentQueryProps = Object.assign(query || {}, { path });
    const emptyNode = (slot, data) => __vite_ssr_import_0__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentList>", slot, data }, null, 2));
    return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default, contentQueryProps, {
      default: slots?.default ? ({ data, refresh, isPartial }) => slots?.default({ list: data, refresh, isPartial, ...this.$attrs }) : ({ data }) => emptyNode("default", data),
      empty: (bindings) => slots?.empty ? slots.empty(bindings) : ({ data }) => emptyNode("default", data),
      "not-found": (bindings) => slots?.["not-found"] ? slots?.["not-found"]?.(bindings) : ({ data }) => emptyNode("not-found", data)
    });
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// --------------------
const $id_d2da4ccd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = __vite_ssr_import_0__.toRefs(props);
    const queryBuilder = __vite_ssr_import_0__.computed(() => {
      if (typeof query.value?.params === "function") {
        return query.value.params();
      }
      return query.value;
    });
    const { data, refresh } = await __vite_ssr_import_2__.useAsyncData(`content-navigation-${__vite_ssr_import_1__.hash(queryBuilder.value)}`, () => __vite_ssr_import_2__.fetchContentNavigation(queryBuilder.value));
    return {
      data,
      refresh
    };
  },
  render(ctx) {
    const slots = __vite_ssr_import_0__.useSlots();
    const {
      query,
      data,
      refresh
    } = ctx;
    const emptyNode = (slot, data2) => __vite_ssr_import_0__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentNavigation>", slot, data: data2 }, null, 2));
    if (slots?.empty && (!data || !data?.length)) {
      return slots?.empty?.({ query, ...this.$attrs }) || emptyNode("empty", { query, data });
    }
    return slots?.default ? slots.default({ navigation: data, refresh, ...this.$attrs }) : emptyNode("default", data);
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_a8f97a50 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  render({ value }) {
    return __vite_ssr_import_0__.h("div", void 0, [
      __vite_ssr_import_0__.h("p", "Document is empty"),
      __vite_ssr_import_0__.h("p", `Add content to it by opening ${value._source}/${value._file} file.`)
    ]);
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_9071c70d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  render() {
    return __vite_ssr_import_0__.h("div", "Document not found");
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// --------------------
const $id_f4cbbc2c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "Markdown",
  functional: true,
  props: {
    use: {
      type: [String, Function],
      default: "default"
    },
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(props) {
    const { parent } = __vite_ssr_import_0__.getCurrentInstance();
    const { between } = __vite_ssr_import_0__.useSlots();
    const tags = __vite_ssr_import_0__.computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      tags,
      between,
      parent
    };
  },
  render({ use, unwrap, between, tags, parent }) {
    try {
      const slot = typeof use === "string" ? parent?.slots[use] || parent?.parent?.slots[use] : use;
      if (!slot) {
        return __vite_ssr_import_0__.h("div");
      }
      if (!unwrap) {
        return [slot()];
      }
      const { flatUnwrap } = __vite_ssr_import_0__.useUnwrap();
      const unwrapped = flatUnwrap(slot(), tags);
      if (between) {
        return unwrapped.flatMap((vnode, index) => index === 0 ? [vnode] : [between(), vnode]);
      }
      return unwrapped.reduce((acc, item) => {
        if (typeof item.children === "string") {
          if (typeof acc[acc.length - 1] === "string") {
            acc[acc.length - 1] += item.children;
          } else {
            acc.push(item.children);
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    } catch (e) {
      return __vite_ssr_import_0__.h("div");
    }
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_558bf79f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "ProseA",
  props: {
    href: {
      type: String,
      default: ""
    },
    blank: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, __vite_ssr_import_2__.mergeProps({ href: $props.href }, _attrs), {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue"]]);
;
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_558bf79f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_01e2b479)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_fab9e310)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_840411f2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_b479ada6)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_9c1df7ff)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_f86082f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_7f627a67)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_caec80eb)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_26303ae9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_6f4fac0c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_f72b4351)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_1b78ec5d)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_2e24a6f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_0990778f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_6d4c23c7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_10f5aef2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_faffa2d8)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_b51a8b09)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_07608f57)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_17b6f147)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_16f58501)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_7728c86d)
// - /pages/[...slug].vue?macro=true ($id_eab8124e)
// - /pages/[...slug].vue ($id_02b80d49)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/@nuxt/ui/dist/components/NLink.vue ($id_55598167)
// - /node_modules/@nuxt/ui/dist/components/NIcon.vue ($id_defac4b3)
// - /node_modules/@nuxt/ui/dist/components/NButton.vue ($id_297ec944)
// - /node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue ($id_45c4a629)
// - /node_modules/@nuxt/ui/dist/components/nuxt/NDarkToggle.vue ($id_fd053068)
// - /node_modules/@nuxt/ui/dist/components/NCard.vue ($id_ab9d25ca)
// - /node_modules/@nuxt/ui/dist/components/NuxtLogo.vue ($id_31f8fda1)
// - /node_modules/@nuxt/ui/dist/components/NuxtContentLogo.vue ($id_9252eb4f)
// - /node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue ($id_d8118121)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_558bf79f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_01e2b479)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_fab9e310)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_840411f2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_b479ada6)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_9c1df7ff)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_f86082f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_7f627a67)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_caec80eb)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_26303ae9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_6f4fac0c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_f72b4351)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_1b78ec5d)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_2e24a6f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_0990778f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_6d4c23c7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_10f5aef2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_faffa2d8)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_b51a8b09)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_07608f57)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_17b6f147)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_16f58501)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_7728c86d)
// - /pages/[...slug].vue?macro=true ($id_eab8124e)
// - /pages/[...slug].vue ($id_02b80d49)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/@nuxt/ui/dist/components/NLink.vue ($id_55598167)
// - /node_modules/@nuxt/ui/dist/components/NIcon.vue ($id_defac4b3)
// - /node_modules/@nuxt/ui/dist/components/NButton.vue ($id_297ec944)
// - /node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue ($id_45c4a629)
// - /node_modules/@nuxt/ui/dist/components/nuxt/NDarkToggle.vue ($id_fd053068)
// - /node_modules/@nuxt/ui/dist/components/NCard.vue ($id_ab9d25ca)
// - /node_modules/@nuxt/ui/dist/components/NuxtLogo.vue ($id_31f8fda1)
// - /node_modules/@nuxt/ui/dist/components/NuxtContentLogo.vue ($id_9252eb4f)
// - /node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue ($id_d8118121)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_01e2b479 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<blockquote${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</blockquote>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css ($id_d7e7fe44)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_19429b58 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs");

const _sfc_main = __vite_ssr_import_0__.defineComponent({
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    }
  }
});

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// Dependencies: 

// --------------------
const $id_d7e7fe44 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\npre code .line {\n  display: block;\n  min-height: 1rem;\n}\n";
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_fab9e310 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<code${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</code>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_840411f2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<em${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</em>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b479ada6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</h1>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9c1df7ff = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "ProseH2",
  props: {
    id: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<h2${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ id: $props.id }, _attrs))}>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    href: `#${$props.id}`
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</h2>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f86082f5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "ProseH3",
  props: {
    id: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<h3${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ id: $props.id }, _attrs))}>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    href: `#${$props.id}`
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</h3>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7f627a67 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "ProseH4",
  props: {
    id: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<h4${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ id: $props.id }, _attrs))}>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    href: `#${$props.id}`
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</h4>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_caec80eb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h5${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</h5>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_26303ae9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h6${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</h6>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6f4fac0c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<hr${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f72b4351 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "ProseImg",
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<img${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
    src: $props.src,
    alt: $props.alt,
    width: $props.width,
    height: $props.height
  }, _attrs))}>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1b78ec5d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<li${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</li>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2e24a6f5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<ol${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</ol>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0990778f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<p${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</p>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6d4c23c7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<strong${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</strong>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_10f5aef2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<table${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</table>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_faffa2d8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<tbody${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</tbody>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b51a8b09 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<td${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</td>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_07608f57 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<th${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</th>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_17b6f147 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<thead${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</thead>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_16f58501 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<tr${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</tr>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs ($id_0a3203f7)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7728c86d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<ul${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</ul>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/plugins/server.mjs ($id_d4d5b3ac)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/defu/dist/defu.mjs ($id_d7afab65)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_e6f12003 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 

// --------------------
const $id_d7afab65 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/projects/blog-netlify-nuxt/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/projects/blog-netlify-nuxt/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/plugins/server.mjs ($id_d4d5b3ac)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/meta.config.mjs ($id_1d054283)
// --------------------
const $id_a2650341 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b2a29d6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 

// --------------------
const $id_1d054283 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/plugins/server.mjs ($id_d4d5b3ac)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/routes.mjs ($id_f9ff4b69)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/router.options.mjs ($id_fec20b37)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/middleware.mjs ($id_ac0b3777)
// --------------------
const $id_a090977b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/router.options.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_3__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_3__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_4__.default);
  const baseURL = __vite_ssr_import_5__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_7__.default,
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = __vite_ssr_import_0__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = __vite_ssr_import_0__.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._activeRoute = __vite_ssr_import_0__.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_5__.useError();
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_8__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [__vite_ssr_import_2__.createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_3__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// --------------------
const $id_5fc14cdc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_80f433aa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_69c52686 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /pages/[...slug].vue?macro=true ($id_eab8124e)
// - /pages/[...slug].vue ($id_02b80d49)
// --------------------
const $id_f9ff4b69 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/[...slug].vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "slug",
    path: "/:slug(.*)*",
    file: "D:/projects/blog-netlify-nuxt/pages/[...slug].vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/[...slug].vue')
  }
];
}


// --------------------
// Request: /pages/[...slug].vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/routes.mjs ($id_f9ff4b69)
// Dependencies: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_eab8124e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = __vite_ssr_import_0__.default

  _push(`<main${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "prose" }, _attrs))}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_ContentDoc, null, null, _parent))
  _push(`</main>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/[...slug].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/pages/[...slug].vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/[...slug].vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/routes.mjs ($id_f9ff4b69)
// Dependencies: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_02b80d49 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = __vite_ssr_import_0__.default

  _push(`<main${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "prose" }, _attrs))}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_ContentDoc, null, null, _parent))
  _push(`</main>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/[...slug].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/pages/[...slug].vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_fec20b37 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_ac0b3777 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/plugins/server.mjs ($id_d4d5b3ac)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/color-mode-options.mjs ($id_3507b3e6)
// --------------------
const $id_a217e6ae = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/color-mode-options.mjs");

const addScript = (head) => {
  head.script = head.script || [];
  head.script.push({
    hid: __vite_ssr_import_2__.hid,
    innerHTML: __vite_ssr_import_2__.script
  });
  const serializeProp = "__dangerouslyDisableSanitizersByTagID";
  head[serializeProp] = head[serializeProp] || {};
  head[serializeProp][__vite_ssr_import_2__.hid] = ["innerHTML"];
};
__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtPlugin((nuxtApp) => {
  const colorMode = __vite_ssr_import_1__.useState("color-mode", () => __vite_ssr_import_0__.reactive({
    preference: __vite_ssr_import_2__.preference,
    value: __vite_ssr_import_2__.preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  if (__vite_ssr_import_1__.isVue2) {
    const app = nuxtApp.nuxt2Context.app;
    if (typeof app.head === "function") {
      const originalHead = app.head;
      app.head = function() {
        const head = originalHead.call(this) || {};
        addScript(head);
        head.htmlAttrs = htmlAttrs;
        return head;
      };
    } else {
      addScript(app.head);
      app.head.htmlAttrs = htmlAttrs;
    }
  }
  if (__vite_ssr_import_1__.isVue3) {
    __vite_ssr_import_1__.useHead({
      htmlAttrs,
      script: [{ children: __vite_ssr_import_2__.script }]
    });
  }
  __vite_ssr_import_1__.useRouter().afterEach((to) => {
    const forcedColorMode = __vite_ssr_import_1__.isVue2 ? to.matched[0]?.components.default?.options.colorMode : to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      if (__vite_ssr_import_2__.dataValue) {
        htmlAttrs[`data-${__vite_ssr_import_2__.dataValue}`] = colorMode.value;
      }
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/color-mode-options.mjs
// Parents: 
// - /node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs ($id_a217e6ae)
// - /node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue ($id_45c4a629)
// Dependencies: 

// --------------------
const $id_3507b3e6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const preference = "system"
Object.defineProperty(__vite_ssr_exports__, "preference", { enumerable: true, configurable: true, get(){ return preference }});
      
const fallback = "light"
Object.defineProperty(__vite_ssr_exports__, "fallback", { enumerable: true, configurable: true, get(){ return fallback }});
      
const hid = "nuxt-color-mode-script"
Object.defineProperty(__vite_ssr_exports__, "hid", { enumerable: true, configurable: true, get(){ return hid }});
      
const globalName = "__NUXT_COLOR_MODE__"
Object.defineProperty(__vite_ssr_exports__, "globalName", { enumerable: true, configurable: true, get(){ return globalName }});
      
const componentName = "ColorScheme"
Object.defineProperty(__vite_ssr_exports__, "componentName", { enumerable: true, configurable: true, get(){ return componentName }});
      
const classPrefix = ""
Object.defineProperty(__vite_ssr_exports__, "classPrefix", { enumerable: true, configurable: true, get(){ return classPrefix }});
      
const classSuffix = ""
Object.defineProperty(__vite_ssr_exports__, "classSuffix", { enumerable: true, configurable: true, get(){ return classSuffix }});
      
const dataValue = ""
Object.defineProperty(__vite_ssr_exports__, "dataValue", { enumerable: true, configurable: true, get(){ return dataValue }});
      
const storageKey = "nuxt-color-mode"
Object.defineProperty(__vite_ssr_exports__, "storageKey", { enumerable: true, configurable: true, get(){ return storageKey }});
      
const script = "const w=window,de=document.documentElement,knownColorSchemes=[\"dark\",\"light\"],preference=window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let value=preference===\"system\"?getColorScheme():preference;const forcedColorMode=de.getAttribute(\"data-color-mode-forced\");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w[\"__NUXT_COLOR_MODE__\"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.add(o):de.className+=\" \"+o,de.setAttribute(\"data-\"+t,e)}function removeColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,\"g\"),\"\"),de.removeAttribute(\"data-\"+t)}function prefersColorScheme(e){return w.matchMedia(\"(prefers-color-scheme\"+e+\")\")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme(\"\").media!==\"not all\"){for(const e of knownColorSchemes)if(prefersColorScheme(\":\"+e).matches)return e}return\"light\"}\n"
Object.defineProperty(__vite_ssr_exports__, "script", { enumerable: true, configurable: true, get(){ return script }});
      ;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/unocss.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/plugins/server.mjs ($id_d4d5b3ac)
// Dependencies: 
// - /node_modules/@unocss/reset/tailwind.css ($id_c2c43311)
// - /__uno.css ($id_7174fecb)
// --------------------
const $id_24724909 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@unocss/reset/tailwind.css");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/__uno.css");

__vite_ssr_exports__.default = () => {};;
}


// --------------------
// Request: /node_modules/@unocss/reset/tailwind.css
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/unocss.mjs ($id_24724909)
// Dependencies: 

// --------------------
const $id_c2c43311 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n";
}


// --------------------
// Request: /__uno.css
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/unocss.mjs ($id_24724909)
// Dependencies: 

// --------------------
const $id_7174fecb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/* layer: preflights */\n*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x:var(--un-empty,/*!*/ /*!*/);--un-pan-y:var(--un-empty,/*!*/ /*!*/);--un-pinch-zoom:var(--un-empty,/*!*/ /*!*/);--un-scroll-snap-strictness:proximity;--un-ordinal:var(--un-empty,/*!*/ /*!*/);--un-slashed-zero:var(--un-empty,/*!*/ /*!*/);--un-numeric-figure:var(--un-empty,/*!*/ /*!*/);--un-numeric-spacing:var(--un-empty,/*!*/ /*!*/);--un-numeric-fraction:var(--un-empty,/*!*/ /*!*/);--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 #0000;--un-ring-shadow:0 0 #0000;--un-shadow-inset:var(--un-empty,/*!*/ /*!*/);--un-shadow:0 0 #0000;--un-ring-inset:var(--un-empty,/*!*/ /*!*/);--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur:var(--un-empty,/*!*/ /*!*/);--un-brightness:var(--un-empty,/*!*/ /*!*/);--un-contrast:var(--un-empty,/*!*/ /*!*/);--un-drop-shadow:var(--un-empty,/*!*/ /*!*/);--un-grayscale:var(--un-empty,/*!*/ /*!*/);--un-hue-rotate:var(--un-empty,/*!*/ /*!*/);--un-invert:var(--un-empty,/*!*/ /*!*/);--un-saturate:var(--un-empty,/*!*/ /*!*/);--un-sepia:var(--un-empty,/*!*/ /*!*/);--un-backdrop-blur:var(--un-empty,/*!*/ /*!*/);--un-backdrop-brightness:var(--un-empty,/*!*/ /*!*/);--un-backdrop-contrast:var(--un-empty,/*!*/ /*!*/);--un-backdrop-grayscale:var(--un-empty,/*!*/ /*!*/);--un-backdrop-hue-rotate:var(--un-empty,/*!*/ /*!*/);--un-backdrop-invert:var(--un-empty,/*!*/ /*!*/);--un-backdrop-opacity:var(--un-empty,/*!*/ /*!*/);--un-backdrop-saturate:var(--un-empty,/*!*/ /*!*/);--un-backdrop-sepia:var(--un-empty,/*!*/ /*!*/);}\n::-webkit-backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x:var(--un-empty,/*!*/ /*!*/);--un-pan-y:var(--un-empty,/*!*/ /*!*/);--un-pinch-zoom:var(--un-empty,/*!*/ /*!*/);--un-scroll-snap-strictness:proximity;--un-ordinal:var(--un-empty,/*!*/ /*!*/);--un-slashed-zero:var(--un-empty,/*!*/ /*!*/);--un-numeric-figure:var(--un-empty,/*!*/ /*!*/);--un-numeric-spacing:var(--un-empty,/*!*/ /*!*/);--un-numeric-fraction:var(--un-empty,/*!*/ /*!*/);--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 #0000;--un-ring-shadow:0 0 #0000;--un-shadow-inset:var(--un-empty,/*!*/ /*!*/);--un-shadow:0 0 #0000;--un-ring-inset:var(--un-empty,/*!*/ /*!*/);--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur:var(--un-empty,/*!*/ /*!*/);--un-brightness:var(--un-empty,/*!*/ /*!*/);--un-contrast:var(--un-empty,/*!*/ /*!*/);--un-drop-shadow:var(--un-empty,/*!*/ /*!*/);--un-grayscale:var(--un-empty,/*!*/ /*!*/);--un-hue-rotate:var(--un-empty,/*!*/ /*!*/);--un-invert:var(--un-empty,/*!*/ /*!*/);--un-saturate:var(--un-empty,/*!*/ /*!*/);--un-sepia:var(--un-empty,/*!*/ /*!*/);--un-backdrop-blur:var(--un-empty,/*!*/ /*!*/);--un-backdrop-brightness:var(--un-empty,/*!*/ /*!*/);--un-backdrop-contrast:var(--un-empty,/*!*/ /*!*/);--un-backdrop-grayscale:var(--un-empty,/*!*/ /*!*/);--un-backdrop-hue-rotate:var(--un-empty,/*!*/ /*!*/);--un-backdrop-invert:var(--un-empty,/*!*/ /*!*/);--un-backdrop-opacity:var(--un-empty,/*!*/ /*!*/);--un-backdrop-saturate:var(--un-empty,/*!*/ /*!*/);--un-backdrop-sepia:var(--un-empty,/*!*/ /*!*/);}\n::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x:var(--un-empty,/*!*/ /*!*/);--un-pan-y:var(--un-empty,/*!*/ /*!*/);--un-pinch-zoom:var(--un-empty,/*!*/ /*!*/);--un-scroll-snap-strictness:proximity;--un-ordinal:var(--un-empty,/*!*/ /*!*/);--un-slashed-zero:var(--un-empty,/*!*/ /*!*/);--un-numeric-figure:var(--un-empty,/*!*/ /*!*/);--un-numeric-spacing:var(--un-empty,/*!*/ /*!*/);--un-numeric-fraction:var(--un-empty,/*!*/ /*!*/);--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 #0000;--un-ring-shadow:0 0 #0000;--un-shadow-inset:var(--un-empty,/*!*/ /*!*/);--un-shadow:0 0 #0000;--un-ring-inset:var(--un-empty,/*!*/ /*!*/);--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur:var(--un-empty,/*!*/ /*!*/);--un-brightness:var(--un-empty,/*!*/ /*!*/);--un-contrast:var(--un-empty,/*!*/ /*!*/);--un-drop-shadow:var(--un-empty,/*!*/ /*!*/);--un-grayscale:var(--un-empty,/*!*/ /*!*/);--un-hue-rotate:var(--un-empty,/*!*/ /*!*/);--un-invert:var(--un-empty,/*!*/ /*!*/);--un-saturate:var(--un-empty,/*!*/ /*!*/);--un-sepia:var(--un-empty,/*!*/ /*!*/);--un-backdrop-blur:var(--un-empty,/*!*/ /*!*/);--un-backdrop-brightness:var(--un-empty,/*!*/ /*!*/);--un-backdrop-contrast:var(--un-empty,/*!*/ /*!*/);--un-backdrop-grayscale:var(--un-empty,/*!*/ /*!*/);--un-backdrop-hue-rotate:var(--un-empty,/*!*/ /*!*/);--un-backdrop-invert:var(--un-empty,/*!*/ /*!*/);--un-backdrop-opacity:var(--un-empty,/*!*/ /*!*/);--un-backdrop-saturate:var(--un-empty,/*!*/ /*!*/);--un-backdrop-sepia:var(--un-empty,/*!*/ /*!*/);}\n/* layer: icons */\n.carbon-code{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32' display='inline-block' vertical-align='middle' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9l7 7zM1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23l-7-7zm11.42 9.484L17.64 6l1.932.517L14.352 26z'/%3E%3C/svg%3E\");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;display:inline-block;vertical-align:middle;width:1.2em;height:1.2em;}\n.carbon-edit{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32' display='inline-block' vertical-align='middle' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z'/%3E%3C/svg%3E\");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;display:inline-block;vertical-align:middle;width:1.2em;height:1.2em;}\n.carbon-idea{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32' display='inline-block' vertical-align='middle' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M11 24h10v2H11zm2 4h6v2h-6zm3-26A10 10 0 0 0 6 12a9.19 9.19 0 0 0 3.46 7.62c1 .93 1.54 1.46 1.54 2.38h2c0-1.84-1.11-2.87-2.19-3.86A7.2 7.2 0 0 1 8 12a8 8 0 0 1 16 0a7.2 7.2 0 0 1-2.82 6.14c-1.07 1-2.18 2-2.18 3.86h2c0-.92.53-1.45 1.54-2.39A9.18 9.18 0 0 0 26 12A10 10 0 0 0 16 2z'/%3E%3C/svg%3E\");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;display:inline-block;vertical-align:middle;width:1.2em;height:1.2em;}\n.carbon-sun{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32' display='inline-block' vertical-align='middle' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z'/%3E%3C/svg%3E\");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;display:inline-block;vertical-align:middle;width:1.2em;height:1.2em;}\n.dark .dark\\:carbon-moon{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32' display='inline-block' vertical-align='middle' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z'/%3E%3C/svg%3E\");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;display:inline-block;vertical-align:middle;width:1.2em;height:1.2em;}\n/* layer: typography */\n.prose :where(h1,h2,h3,h4,h5,h6):not(.not-prose){color:var(--un-prose-headings);font-weight:600;line-height:1.25;}\n.prose :where(a):not(.not-prose){color:var(--un-prose-links);text-decoration:underline;font-weight:500;}\n.prose :where(a code):not(.not-prose){color:var(--un-prose-links);}\n.prose :where(p,ul,ol,pre):not(.not-prose){margin:1em 0;line-height:1.75;}\n.prose :where(blockquote):not(.not-prose){margin:1em 0;padding-left:1em;font-style:italic;border-left:.25em solid var(--un-prose-borders);}\n.prose :where(h1):not(.not-prose){margin:1rem 0;font-size:2.25em;}\n.prose :where(h2):not(.not-prose){margin:1.75em 0 .5em;font-size:1.75em;}\n.prose :where(h3):not(.not-prose){margin:1.5em 0 .5em;font-size:1.375em;}\n.prose :where(h4):not(.not-prose){margin:1em 0;font-size:1.125em;}\n.prose :where(img,video):not(.not-prose){max-width:100%;}\n.prose :where(figure,picture):not(.not-prose){margin:1em 0;}\n.prose :where(figcaption):not(.not-prose){color:var(--un-prose-captions);font-size:.875em;}\n.prose :where(code):not(.not-prose){color:var(--un-prose-code);font-size:.875em;font-weight:600;font-family:var(--un-prose-font-mono);}\n.prose :where(:not(pre) > code):not(.not-prose)::before,.prose :where(:not(pre) > code):not(.not-prose)::after{content:\"`\";}\n.prose :where(pre):not(.not-prose){padding:1.25rem 1.5rem;overflow-x:auto;border-radius:.375rem;}\n.prose :where(pre,code):not(.not-prose){white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;hyphens:none;background:transparent;}\n.prose :where(pre code):not(.not-prose){font-weight:inherit;}\n.prose :where(ol,ul):not(.not-prose){padding-left:1.25em;}\n.prose :where(ol):not(.not-prose){list-style-type:decimal;}\n.prose :where(ol[type=\"A\"]):not(.not-prose){list-style-type:upper-alpha;}\n.prose :where(ol[type=\"a\"]):not(.not-prose){list-style-type:lower-alpha;}\n.prose :where(ol[type=\"A\" s]):not(.not-prose){list-style-type:upper-alpha;}\n.prose :where(ol[type=\"a\" s]):not(.not-prose){list-style-type:lower-alpha;}\n.prose :where(ol[type=\"I\"]):not(.not-prose){list-style-type:upper-roman;}\n.prose :where(ol[type=\"i\"]):not(.not-prose){list-style-type:lower-roman;}\n.prose :where(ol[type=\"I\" s]):not(.not-prose){list-style-type:upper-roman;}\n.prose :where(ol[type=\"i\" s]):not(.not-prose){list-style-type:lower-roman;}\n.prose :where(ol[type=\"1\"]):not(.not-prose){list-style-type:decimal;}\n.prose :where(ul):not(.not-prose){list-style-type:disc;}\n.prose :where(ol > li):not(.not-prose)::marker,.prose :where(ul > li):not(.not-prose)::marker,.prose :where(summary):not(.not-prose)::marker{color:var(--un-prose-lists);}\n.prose :where(hr):not(.not-prose){margin:2em 0;border:1px solid var(--un-prose-hr);}\n.prose :where(table):not(.not-prose){display:block;margin:1em 0;border-collapse:collapse;overflow-x:auto;}\n.prose :where(tr):not(.not-prose):nth-child(2n){background:var(--un-prose-bg-soft);}\n.prose :where(td,th):not(.not-prose){border:1px solid var(--un-prose-borders);padding:.625em 1em;}\n.prose :where(abbr):not(.not-prose){cursor:help;}\n.prose :where(kbd):not(.not-prose){color:var(--un-prose-code);border:1px solid;padding:.25rem .5rem;font-size:.875em;border-radius:.25rem;}\n.prose :where(details):not(.not-prose){margin:1em 0;padding:1.25rem 1.5rem;background:var(--un-prose-bg-soft);}\n.prose :where(summary):not(.not-prose){cursor:pointer;font-weight:600;}\n.prose{color:var(--un-prose-body);max-width:65ch;}\n/* layer: shortcuts */\n.container{max-width:100%;}\n.n-button-icon{margin-left:-0.2em;margin-right:0.2em;font-size:1.1em;}\n.n-button-base{display:inline-flex;align-items:center;grid-gap:0.25rem;gap:0.25rem;border-width:1px;border-style:solid;border-color:rgba(156,163,175,0.5);border-radius:0.25rem;padding-left:1em;padding-right:1em;padding-top:0.25em;padding-bottom:0.25em;opacity:0.8;--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgba(0,0,0,0.05));box-shadow:var(--un-ring-offset-shadow, 0 0 #0000), var(--un-ring-shadow, 0 0 #0000), var(--un-shadow);outline:2px solid transparent !important;outline-offset:2px !important;}\n.n-card-base{border-width:1px;border-style:solid;border-color:rgba(156,163,175,0.25);border-radius:0.25rem;--un-bg-opacity:1;background-color:rgba(255,255,255,var(--un-bg-opacity));--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgba(0,0,0,0.05));box-shadow:var(--un-ring-offset-shadow, 0 0 #0000), var(--un-ring-shadow, 0 0 #0000), var(--un-shadow);}\n.hover\\:n-button-hover:hover{border-color:rgba(var(--nui-c-context),1) !important;color:rgba(var(--nui-c-context),1);opacity:1;}\n[n~=\"borderless\"]{border-style:none !important;--un-shadow:0 0 var(--un-shadow-color, rgba(0,0,0,0)) !important;box-shadow:var(--un-ring-offset-shadow, 0 0 #0000), var(--un-ring-shadow, 0 0 #0000), var(--un-shadow) !important;}\n.dark .n-card-base{--un-bg-opacity:1;background-color:rgba(34,34,34,var(--un-bg-opacity));}\n.active\\:n-button-active:active{background-color:rgba(var(--nui-c-context),0.05);--un-ring-width:3px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow, 0 0 #0000);--un-ring-color:rgba(var(--nui-c-context),0.1);}\n.hover\\:n-link-hover:hover{color:rgba(var(--nui-c-context),1);-webkit-text-decoration-color:rgba(var(--nui-c-context),1);text-decoration-color:rgba(var(--nui-c-context),1);-webkit-text-decoration-style:dotted;text-decoration-style:dotted;}\n.n-link-base{-webkit-text-decoration-line:underline;text-decoration-line:underline;-webkit-text-decoration-color:rgba(0,0,0,0.2);text-decoration-color:rgba(0,0,0,0.2);text-underline-offset:2px;}\n.dark .n-link-base{-webkit-text-decoration-color:rgba(255,255,255,0.4);text-decoration-color:rgba(255,255,255,0.4);}\n.focus-visible\\:n-focus-base:focus-visible{--un-ring-width:2px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow, 0 0 #0000);--un-ring-color:rgba(var(--nui-c-context),0.5);}\n.n-transition{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:200ms;}\n@media (min-width: 640px){\n.container{max-width:640px;}\n}\n@media (min-width: 768px){\n.container{max-width:768px;}\n}\n@media (min-width: 1024px){\n.container{max-width:1024px;}\n}\n@media (min-width: 1280px){\n.container{max-width:1280px;}\n}\n@media (min-width: 1536px){\n.container{max-width:1536px;}\n}\n/* layer: default */\n.fixed{position:fixed;}\n.relative{position:relative;}\n.-bottom-1\\/2{bottom:-50%;}\n.left-0{left:0rem;}\n.right-0{right:0rem;}\n.z-10{z-index:10;}\n.z-20{z-index:20;}\n.grid{display:grid;}\n.mx-auto{margin-left:auto;margin-right:auto;}\n.-mb-2{margin-bottom:-0.5rem;}\n.-mr-1{margin-right:-0.25rem;}\n.mb-16{margin-bottom:4rem;}\n.mb-4{margin-bottom:1rem;}\n.mb-6{margin-bottom:1.5rem;}\n.mb-8{margin-bottom:2rem;}\n.block{display:block;}\n.h-1\\/2{height:50%;}\n.h-10{height:2.5rem;}\n.h-auto{height:auto;}\n.max-w-200{max-width:50rem;}\n.max-w-520px{max-width:520px;}\n.min-h-screen{min-height:100vh;}\n.w-full{width:100%;}\n.flex{display:flex;}\n.flex-1{flex:1 1 0%;}\n.flex-auto,\n[flex-auto=\"\"]{flex:1 1 auto;}\n.flex-none{flex:none;}\n.flex-col{flex-direction:column;}\n.cursor-pointer{cursor:pointer;}\n.place-content-center{place-content:center;}\n.items-end{align-items:flex-end;}\n.items-center{align-items:center;}\n.justify-center{justify-content:center;}\n.gap-2{grid-gap:0.5rem;gap:0.5rem;}\n.gap-3{grid-gap:0.75rem;gap:0.75rem;}\n.overflow-hidden{overflow:hidden;}\n.overflow-y-auto{overflow-y:auto;}\n.rounded-t-md{border-top-left-radius:0.375rem;border-top-right-radius:0.375rem;}\n.bg-black\\/5{background-color:rgba(0,0,0,0.05);}\n.bg-white{--un-bg-opacity:1;background-color:rgba(255,255,255,var(--un-bg-opacity));}\n.dark .dark\\:bg-black{--un-bg-opacity:1;background-color:rgba(0,0,0,var(--un-bg-opacity));}\n.dark .dark\\:bg-white\\/10{background-color:rgba(255,255,255,0.1);}\n[fill~=\"\\#00DC82\"]{--un-fill-opacity:1;fill:rgba(0,220,130,var(--un-fill-opacity));}\n[fill~=\"\\#80EEC0\"]{--un-fill-opacity:1;fill:rgba(128,238,192,var(--un-fill-opacity));}\n[fill~=\"none\"]{fill:none;}\n.p-2,\n[p-2=\"\"]{padding:0.5rem;}\n.p-6{padding:1.5rem;}\n.p-8{padding:2rem;}\n.px-10{padding-left:2.5rem;padding-right:2.5rem;}\n.px-4{padding-left:1rem;padding-right:1rem;}\n.px-8{padding-left:2rem;padding-right:2rem;}\n.py-10{padding-top:2.5rem;padding-bottom:2.5rem;}\n.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}\n.py-5{padding-top:1.25rem;padding-bottom:1.25rem;}\n.pt-14{padding-top:3.5rem;}\n.text-center{text-align:center;}\n.text-left{text-align:left;}\n.font-sans{font-family:Avenir, Helvetica, Arial, sans-serif;}\n.text-6xl{font-size:3.75rem;line-height:1;}\n.text-8xl{font-size:6rem;line-height:1;}\n.text-xl{font-size:1.25rem;line-height:1.75rem;}\n.font-light{font-weight:300;}\n.font-medium{font-weight:500;}\n.leading-tight{line-height:1.25;}\n.dark .dark\\:text-white{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity));}\n.text-black{--un-text-opacity:1;color:rgba(0,0,0,var(--un-text-opacity));}\n.text-gray-400{--un-text-opacity:1;color:rgba(156,163,175,var(--un-text-opacity));}\n.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale;}\n.hover\\:op-100:hover,\n.opacity-100{opacity:1;}\n.op-50,\n.op50,\n[op50=\"\"]{opacity:0.5;}\n.op20{opacity:0.2;}\n.opacity-0{opacity:0;}\n.transition{transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}\n.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}\n[n~=\"green6\"]{--nui-c-context:22,163,74;}\n[n~=\"lg\"]{font-size:1.125rem;line-height:1.75rem;}\n[disabled] .n-disabled\\:n-disabled, .n-disabled\\:n-disabled[disabled]{opacity:0.4;pointer-events:none;filter:saturate(0);}\n@media (min-width: 640px){\n.sm\\:px-0{padding-left:0rem;padding-right:0rem;}\n.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem;}\n.sm\\:py-3{padding-top:0.75rem;padding-bottom:0.75rem;}\n.sm\\:text-2xl{font-size:1.5rem;line-height:2rem;}\n.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}\n.sm\\:text-8xl{font-size:6rem;line-height:1;}\n.sm\\:text-xl{font-size:1.25rem;line-height:1.75rem;}\n}";
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/plugins/ws.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/plugins/server.mjs ($id_d4d5b3ac)
// Dependencies: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// - /node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs ($id_575fe152)
// --------------------
const $id_272b3f95 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin(() => {
  const publicConfig = __vite_ssr_import_0__.useRuntimeConfig().public;
  if (false && publicConfig.content.wsUrl) {
    __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs').then(({ useContentWebSocket }) => useContentWebSocket());
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/plugins/ws.mjs ($id_272b3f95)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// --------------------
const $id_575fe152 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs");

const logger = {
  log: (...args) => console.log("[Content]", ...args),
  warn: (...args) => console.warn("[Content]", ...args)
};
let ws;
function useContentWebSocket() {
  if (!window.WebSocket) {
    logger.warn("Could not enable hot reload, your browser does not support WebSocket.");
    return;
  }
  const onMessage = (message) => {
    try {
      const data = JSON.parse(message.data);
      if (!data) {
        return;
      }
      __vite_ssr_import_1__.refreshNuxtData();
    } catch (err) {
    }
  };
  const onOpen = () => logger.log("WS connected!");
  const onError = (e) => {
    switch (e.code) {
      case "ECONNREFUSED":
        connect(true);
        break;
      default:
        logger.warn("WS Error:", e);
        break;
    }
  };
  const onClose = (e) => {
    if (e.code === 1e3 || e.code === 1005) {
      logger.log("WS closed!");
    } else {
      connect(true);
    }
  };
  const connect = (retry = false) => {
    if (retry) {
      logger.log("WS reconnecting..");
      setTimeout(connect, 1e3);
      return;
    }
    if (ws) {
      try {
        ws.close();
      } catch (err) {
      }
      ws = void 0;
    }
    const wsURL = `${__vite_ssr_import_0__.useRuntimeConfig().public.content.wsUrl}ws`;
    logger.log(`WS connect to ${wsURL}`);
    ws = new WebSocket(wsURL);
    ws.onopen = onOpen;
    ws.onmessage = onMessage;
    ws.onerror = onError;
    ws.onclose = onClose;
  };
  connect();
  return {
    connect
  };
}
Object.defineProperty(__vite_ssr_exports__, "useContentWebSocket", { enumerable: true, configurable: true, get(){ return useContentWebSocket }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/root-component.mjs
// Parents: 
// - D:/projects/blog-netlify-nuxt/node_modules/nuxt/dist/app/entry ($id_f25e1aa5)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// --------------------
const $id_99264b6e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/root-component.mjs ($id_99264b6e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/error-component.mjs ($id_f1b38f47)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e9bfada3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/error-component.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// --------------------
const $id_f1b38f47 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/error-component.mjs ($id_f1b38f47)
// Dependencies: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8cc6d73f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
          line.includes('internal') ||
          line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = String(error.statusCode || 500)
const is404 = statusCode === '404'

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

const ErrorTemplate = is404 ? __vite_ssr_import_0__.default : true ? __vite_ssr_import_2__.default : __vite_ssr_import_1__.default

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate, Error404: __vite_ssr_import_0__.default, Error500: __vite_ssr_import_1__.default, ErrorDev: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_3__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_e68b6b38)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b90d4d0f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "404"
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-573335c0><div class="fixed left-0 right-0 spotlight z-10" data-v-573335c0></div><div class="max-w-520px text-center z-20" data-v-573335c0><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-573335c0>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-573335c0"],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 

// --------------------
const $id_e68b6b38 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.bg-white[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-573335c0]{cursor:pointer}.flex[data-v-573335c0]{display:flex}.grid[data-v-573335c0]{display:grid}.place-content-center[data-v-573335c0]{place-content:center}.items-center[data-v-573335c0]{align-items:center}.justify-center[data-v-573335c0]{justify-content:center}.font-sans[data-v-573335c0]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-573335c0]{font-weight:500}.font-light[data-v-573335c0]{font-weight:300}.text-8xl[data-v-573335c0]{font-size:6rem;line-height:1}.text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-573335c0]{line-height:1.25}.mb-8[data-v-573335c0]{margin-bottom:2rem}.mb-16[data-v-573335c0]{margin-bottom:4rem}.max-w-520px[data-v-573335c0]{max-width:520px}.min-h-screen[data-v-573335c0]{min-height:100vh}.overflow-hidden[data-v-573335c0]{overflow:hidden}.px-8[data-v-573335c0]{padding-left:2rem;padding-right:2rem}.py-2[data-v-573335c0]{padding-top:.5rem;padding-bottom:.5rem}.px-4[data-v-573335c0]{padding-left:1rem;padding-right:1rem}.fixed[data-v-573335c0]{position:fixed}.left-0[data-v-573335c0]{left:0px}.right-0[data-v-573335c0]{right:0px}.text-center[data-v-573335c0]{text-align:center}.text-black[data-v-573335c0]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-573335c0]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-573335c0]{width:100%}.z-10[data-v-573335c0]{z-index:10}.z-20[data-v-573335c0]{z-index:20}@media (min-width: 640px){.sm\\:text-4xl[data-v-573335c0]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-573335c0]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-573335c0]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-573335c0]{padding-top:.75rem;padding-bottom:.75rem}.sm\\:px-6[data-v-573335c0]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-573335c0]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-573335c0]{background:linear-gradient(45deg,#00DC82 0%,#36E4DA 50%,#0047E1 100%);filter:blur(20vh);height:40vh;bottom:-30vh}.gradient-border[data-v-573335c0]{position:relative;border-radius:.5rem;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}@media (prefers-color-scheme: light){.gradient-border[data-v-573335c0]{background-color:#ffffff4d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#e2e2e2 0%,#e2e2e2 25%,#00DC82 50%,#36E4DA 75%,#0047E1 100%)}}@media (prefers-color-scheme: dark){.gradient-border[data-v-573335c0]{background-color:#1414144d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#303030 0%,#303030 25%,#00DC82 50%,#36E4DA 75%,#0047E1 100%)}}.gradient-border[data-v-573335c0]:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:.5rem;padding:2px;width:100%;background-size:400% auto;opacity:.5;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.gradient-border[data-v-573335c0]:hover:before{background-position:-50% 0;opacity:1}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_a2b3b709)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_14c8b574 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-0914425d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-0914425d></div><div class="max-w-520px text-center" data-v-0914425d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0914425d"],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// Dependencies: 

// --------------------
const $id_a2b3b709 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.bg-white[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-0914425d]{display:grid}.place-content-center[data-v-0914425d]{place-content:center}.font-sans[data-v-0914425d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-0914425d]{font-weight:500}.font-light[data-v-0914425d]{font-weight:300}.h-1\\/2[data-v-0914425d]{height:50%}.text-8xl[data-v-0914425d]{font-size:6rem;line-height:1}.text-xl[data-v-0914425d]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-0914425d]{line-height:1.25}.mb-8[data-v-0914425d]{margin-bottom:2rem}.mb-16[data-v-0914425d]{margin-bottom:4rem}.max-w-520px[data-v-0914425d]{max-width:520px}.min-h-screen[data-v-0914425d]{min-height:100vh}.overflow-hidden[data-v-0914425d]{overflow:hidden}.px-8[data-v-0914425d]{padding-left:2rem;padding-right:2rem}.fixed[data-v-0914425d]{position:fixed}.left-0[data-v-0914425d]{left:0px}.right-0[data-v-0914425d]{right:0px}.-bottom-1\\/2[data-v-0914425d]{bottom:-50%}.text-center[data-v-0914425d]{text-align:center}.text-black[data-v-0914425d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-0914425d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width: 640px){.sm\\:text-4xl[data-v-0914425d]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-0914425d]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-0914425d]{padding-left:0;padding-right:0}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-0914425d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-0914425d]{background:linear-gradient(45deg,#00DC82 0%,#36E4DA 50%,#0047E1 100%);filter:blur(20vh)}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_2691164c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bc2d74a1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-1da4697d><div class="fixed left-0 right-0 spotlight" data-v-1da4697d></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-1da4697d><pre class="text-xl font-light leading-tight z-10 p-8" data-v-1da4697d>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1da4697d"],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 

// --------------------
const $id_2691164c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.bg-white[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-1da4697d]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-1da4697d]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-1da4697d]{display:flex}.flex-col[data-v-1da4697d]{flex-direction:column}.flex-1[data-v-1da4697d]{flex:1 1 0%}.font-sans[data-v-1da4697d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-1da4697d]{font-weight:500}.font-light[data-v-1da4697d]{font-weight:300}.h-auto[data-v-1da4697d]{height:auto}.text-xl[data-v-1da4697d]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-1da4697d]{font-size:3.75rem;line-height:1}.leading-tight[data-v-1da4697d]{line-height:1.25}.mb-8[data-v-1da4697d]{margin-bottom:2rem}.mb-6[data-v-1da4697d]{margin-bottom:1.5rem}.min-h-screen[data-v-1da4697d]{min-height:100vh}.overflow-y-auto[data-v-1da4697d]{overflow-y:auto}.p-8[data-v-1da4697d]{padding:2rem}.px-10[data-v-1da4697d]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-1da4697d]{padding-top:3.5rem}.fixed[data-v-1da4697d]{position:fixed}.left-0[data-v-1da4697d]{left:0px}.right-0[data-v-1da4697d]{right:0px}.text-black[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-1da4697d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-1da4697d]{z-index:10}@media (min-width: 640px){.sm\\:text-8xl[data-v-1da4697d]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-1da4697d]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-1da4697d]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-1da4697d]{background:linear-gradient(45deg,#00DC82 0%,#36E4DA 50%,#0047E1 100%);opacity:.8;filter:blur(30vh);height:60vh;bottom:-40vh}\n";
}


// --------------------
// Request: /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/app-component.mjs
// Parents: 
// - D:/projects/blog-netlify-nuxt/node_modules/nuxt/dist/app/entry ($id_f25e1aa5)
// Dependencies: 
// - /app.vue ($id_2b46e842)
// --------------------
const $id_1218fc03 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/app-component.mjs ($id_1218fc03)
// Dependencies: 
// - /node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue ($id_d8118121)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2b46e842 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtExampleLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtExampleLayout, __vite_ssr_import_1__.mergeProps({
    example: "essentials/hello-world",
    repo: "nuxt/content"
  }, _attrs), {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, { class: "prose text-left" }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_NuxtPage, { class: "prose text-left" })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/app.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue
// Parents: 
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/@nuxt/ui/dist/components/NLink.vue ($id_55598167)
// - /node_modules/@nuxt/ui/dist/components/NButton.vue ($id_297ec944)
// - /node_modules/@nuxt/ui/dist/components/nuxt/NDarkToggle.vue ($id_fd053068)
// - /node_modules/@nuxt/ui/dist/components/NCard.vue ($id_ab9d25ca)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@nuxt/ui/dist/components/NIcon.vue ($id_defac4b3)
// - /node_modules/@nuxt/ui/dist/components/NuxtLogo.vue ($id_31f8fda1)
// - /node_modules/@nuxt/ui/dist/components/NuxtContentLogo.vue ($id_9252eb4f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d8118121 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui/dist/components/NLink.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/ui/dist/components/NButton.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/ui/dist/components/nuxt/NDarkToggle.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui/dist/components/NCard.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@nuxt/ui/dist/components/NIcon.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/@nuxt/ui/dist/components/NuxtLogo.vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/@nuxt/ui/dist/components/NuxtContentLogo.vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "NuxtExampleLayout",
  props: {
    example: { type: String, required: false },
    showTips: { type: Boolean, required: false },
    class: { type: String, required: false },
    openPath: { type: String, required: false },
    repo: { type: String, required: false, default: "nuxt/framework" }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const openInEditor = () => {
      fetch(`/__open-in-editor?file=${encodeURIComponent(props.openPath || "app.vue")}`);
    };
    const __returned__ = { props, openInEditor, NIcon: __vite_ssr_import_5__.default, NuxtLogo: __vite_ssr_import_6__.default, NuxtContentLogo: __vite_ssr_import_7__.default };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NLink = __vite_ssr_import_0__.default;
  const _component_NButton = __vite_ssr_import_1__.default;
  const _component_NDarkToggle = __vite_ssr_import_2__.default;
  const _component_NCard = __vite_ssr_import_3__.default;
  _push(`<div${__vite_ssr_import_9__.ssrRenderAttrs(__vite_ssr_import_8__.mergeProps({
    class: "relative font-sans",
    n: "green6"
  }, _attrs))}><div class="container max-w-200 mx-auto py-10 px-4"><div class="flex items-end gap-3 mb-4 relative">`);
  __vite_ssr_import_9__.ssrRenderSlot(_ctx.$slots, "logo", {}, () => {
    if ($props.repo === "nuxt/content") {
      _push(__vite_ssr_import_9__.ssrRenderComponent($setup["NuxtContentLogo"], { class: "h-10" }, null, _parent));
    } else {
      _push(__vite_ssr_import_9__.ssrRenderComponent($setup["NuxtLogo"], { class: "h-10" }, null, _parent));
    }
  }, _push, _parent);
  _push(`<div class="text-xl flex"><div class="op-50"> examples/ </div>`);
  __vite_ssr_import_9__.ssrRenderSlot(_ctx.$slots, "name", {}, () => {
    _push(__vite_ssr_import_9__.ssrRenderComponent(_component_NLink, {
      href: `https://github.com/${$props.repo}/tree/main/examples/${$props.example}`,
      target: "_blank"
    }, {
      default: __vite_ssr_import_8__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${__vite_ssr_import_9__.ssrInterpolate($props.example)}`);
        } else {
          return [
            __vite_ssr_import_8__.createTextVNode(__vite_ssr_import_8__.toDisplayString($props.example), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  }, _push, _parent);
  _push(`</div><div flex-auto></div><div class="op20 hover:op-100 n-transition -mb-2 -mr-1">`);
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_NButton, {
    n: "borderless lg",
    class: "p-2 op50",
    to: `https://github.com/${$props.repo}/tree/main/examples/${$props.example}`,
    target: "_blank"
  }, {
    default: __vite_ssr_import_8__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_9__.ssrRenderComponent($setup["NIcon"], { icon: "carbon-code" }, null, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_8__.createVNode($setup["NIcon"], { icon: "carbon-code" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_NDarkToggle, null, {
    default: __vite_ssr_import_8__.withCtx(({ toggle }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_NButton, {
          n: "borderless lg",
          "p-2": "",
          op50: "",
          onClick: toggle
        }, {
          default: __vite_ssr_import_8__.withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(__vite_ssr_import_9__.ssrRenderComponent($setup["NIcon"], { icon: "dark:carbon-moon carbon-sun" }, null, _parent3, _scopeId2));
            } else {
              return [
                __vite_ssr_import_8__.createVNode($setup["NIcon"], { icon: "dark:carbon-moon carbon-sun" })
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_8__.createVNode(_component_NButton, {
            n: "borderless lg",
            "p-2": "",
            op50: "",
            onClick: toggle
          }, {
            default: __vite_ssr_import_8__.withCtx(() => [
              __vite_ssr_import_8__.createVNode($setup["NIcon"], { icon: "dark:carbon-moon carbon-sun" })
            ]),
            _: 2
          }, 1032, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  __vite_ssr_import_9__.ssrRenderSlot(_ctx.$slots, "subtitle", {}, null, _push, _parent);
  __vite_ssr_import_9__.ssrRenderSlot(_ctx.$slots, "nav", {}, null, _push, _parent);
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_NCard, {
    class: ["p-6 flex flex-col gap-2 text-center", _ctx.$props.class]
  }, {
    default: __vite_ssr_import_8__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_9__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_8__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  if (_ctx.$slots.tips) {
    _push(`<div class="${__vite_ssr_import_9__.ssrRenderClass([$props.showTips ? "opacity-100" : "opacity-0", "transition py-5 flex items-center gap-2 text-gray-400"])}">`);
    _push(__vite_ssr_import_9__.ssrRenderComponent($setup["NIcon"], {
      icon: "carbon-idea",
      class: "text-xl flex-none"
    }, null, _parent));
    __vite_ssr_import_9__.ssrRenderSlot(_ctx.$slots, "tips", {}, null, _push, _parent);
    _push(__vite_ssr_import_9__.ssrRenderComponent(_component_NButton, {
      icon: "carbon-edit",
      class: "flex-none",
      onClick: $setup.openInEditor
    }, {
      default: __vite_ssr_import_8__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Open in Editor `);
        } else {
          return [
            __vite_ssr_import_8__.createTextVNode(" Open in Editor ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  __vite_ssr_import_9__.ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_11__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/projects/blog-netlify-nuxt/node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/ui/dist/components/NLink.vue
// Parents: 
// - /node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue ($id_d8118121)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_55598167 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "NLink",
  props: {
    to: { type: String, required: false },
    href: { type: String, required: false },
    target: { type: String, required: false }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  __vite_ssr_import_2__.ssrRenderVNode(_push, __vite_ssr_import_1__.createVNode(__vite_ssr_import_1__.resolveDynamicComponent($props.href || $props.target ? "a" : "nuxt-link"), __vite_ssr_import_1__.mergeProps(_ctx.$props, { class: "n-link n-link-base hover:n-link-hover n-transition" }, _attrs), {
    default: __vite_ssr_import_1__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_2__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_1__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }), _parent);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/NLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/projects/blog-netlify-nuxt/node_modules/@nuxt/ui/dist/components/NLink.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/ui/dist/components/NButton.vue
// Parents: 
// - /node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue ($id_d8118121)
// Dependencies: 
// - /node_modules/@nuxt/ui/dist/components/NIcon.vue ($id_defac4b3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_297ec944 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui/dist/components/NIcon.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "NButton",
  props: {
    to: { type: String, required: false },
    icon: { type: String, required: false }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NIcon = __vite_ssr_import_0__.default;
  __vite_ssr_import_3__.ssrRenderVNode(_push, __vite_ssr_import_2__.createVNode(__vite_ssr_import_2__.resolveDynamicComponent($props.to ? "a" : "button"), __vite_ssr_import_2__.mergeProps({
    href: $props.to,
    class: "n-button n-transition n-button-base hover:n-button-hover active:n-button-active focus-visible:n-focus-base n-disabled:n-disabled"
  }, _attrs), {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
          if ($props.icon) {
            _push2(__vite_ssr_import_3__.ssrRenderComponent(_component_NIcon, {
              icon: $props.icon,
              class: "n-button-icon"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "icon", {}, () => [
            $props.icon ? (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock(_component_NIcon, {
              key: 0,
              icon: $props.icon,
              class: "n-button-icon"
            }, null, 8, ["icon"])) : __vite_ssr_import_2__.createCommentVNode("v-if", true)
          ]),
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }), _parent);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/NButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/projects/blog-netlify-nuxt/node_modules/@nuxt/ui/dist/components/NButton.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/ui/dist/components/NIcon.vue
// Parents: 
// - /node_modules/@nuxt/ui/dist/components/NButton.vue ($id_297ec944)
// - /node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue ($id_d8118121)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_defac4b3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "NIcon",
  props: {
    icon: { type: String, required: false }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
    class: ["n-icon", $props.icon]
  }, _attrs))}></div>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/NIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/projects/blog-netlify-nuxt/node_modules/@nuxt/ui/dist/components/NIcon.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/ui/dist/components/nuxt/NDarkToggle.vue
// Parents: 
// - /node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue ($id_d8118121)
// Dependencies: 
// - /node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue ($id_45c4a629)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@vueuse/core/index.mjs ($id_e8934cdc)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs ($id_20555f3d)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_fd053068 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@vueuse/core/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "NDarkToggle",
  setup(__props, { expose }) {
    expose();
    const mode = __vite_ssr_import_4__.useColorMode();
    const isDark = __vite_ssr_import_2__.computed({
      get() {
        return mode.value === "dark";
      },
      set() {
        mode.preference = isDark.value ? "light" : "dark";
      }
    });
    const toggle = __vite_ssr_import_3__.useToggle(isDark);
    const context = {
      mode,
      isDark,
      toggle
    };
    const __returned__ = { mode, isDark, toggle, context };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ColorScheme = __vite_ssr_import_0__.default;
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_ColorScheme, __vite_ssr_import_5__.mergeProps({ tag: "span" }, _attrs), {
    default: __vite_ssr_import_5__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_6__.ssrRenderSlot(_ctx.$slots, "default", $setup.context, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_5__.renderSlot(_ctx.$slots, "default", $setup.context)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/nuxt/NDarkToggle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/projects/blog-netlify-nuxt/node_modules/@nuxt/ui/dist/components/nuxt/NDarkToggle.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue
// Parents: 
// - /node_modules/@nuxt/ui/dist/components/nuxt/NDarkToggle.vue ($id_fd053068)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/client-only.mjs ($id_1ec78319)
// - /@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/color-mode-options.mjs ($id_3507b3e6)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_45c4a629 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/client-only.mjs");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/color-mode-options.mjs");

const _sfc_main = {
  name: __vite_ssr_import_1__.componentName,
  props: {
    placeholder: String,
    tag: {
      type: String,
      default: "span"
    }
  }
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __vite_ssr_import_0__.default

  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_ClientOnly, __vite_ssr_import_2__.mergeProps({
    placeholder: $props.placeholder,
    "placeholder-tag": $props.tag
  }, _attrs), {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId)
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ]
      }
    }),
    _: 3 /* FORWARDED */
  }, _parent))
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/client-only.mjs
// Parents: 
// - /node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue ($id_45c4a629)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_1ec78319 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: 'ClientOnly',
  // eslint-disable-next-line vue/require-prop-types
  props: ['fallback', 'placeholder', 'placeholderTag', 'fallbackTag'],
  setup (_, { slots }) {
    const mounted = __vite_ssr_import_0__.ref(false)
    __vite_ssr_import_0__.onMounted(() => { mounted.value = true })
    return (props) => {
      if (mounted.value) { return slots.default?.() }
      const slot = slots.fallback || slots.placeholder
      if (slot) { return slot() }
      const fallbackStr = props.fallback || props.placeholder || ''
      const fallbackTag = props.fallbackTag || props.placeholderTag || 'span'
      return __vite_ssr_import_0__.createElementBlock(fallbackTag, null, fallbackStr)
    }
  }
})

function createClientOnly (component) {
  return __vite_ssr_import_0__.defineComponent({
    name: 'ClientOnlyWrapper',
    setup (props, { attrs, slots }) {
      const mounted = __vite_ssr_import_0__.ref(false)
      __vite_ssr_import_0__.onMounted(() => { mounted.value = true })
      return () => {
        if (mounted.value) {
          return __vite_ssr_import_0__.h(component, { props, attrs }, slots)
        }
        return __vite_ssr_import_0__.h('div')
      }
    }
  })
}
Object.defineProperty(__vite_ssr_exports__, "createClientOnly", { enumerable: true, configurable: true, get(){ return createClientOnly }});
;
}


// --------------------
// Request: /node_modules/@nuxt/ui/dist/components/NCard.vue
// Parents: 
// - /node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue ($id_d8118121)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ab9d25ca = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "n-card n-card-base" }, _attrs))}>`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui/dist/components/NCard.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/ui/dist/components/NCard.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui/dist/components/NuxtLogo.vue
// Parents: 
// - /node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue ($id_d8118121)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_31f8fda1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    viewBox: "0 0 221 65",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#a)"><path fill="currentColor" d="M82.562 18.57h7.302l15.474 24.742V18.571h6.741v35.057h-7.252l-15.525-24.69v24.69h-6.74V18.57Zm59.645 35.058h-6.282v-3.916c-1.429 2.756-4.339 4.308-8.015 4.308-5.822 0-9.603-4.107-9.603-10.018V28.385h6.282V42.71c0 3.456 2.146 5.859 5.362 5.859 3.524 0 5.974-2.704 5.974-6.41V28.385h6.282v25.243Zm21.857-.4-6.026-8.413-6.027 8.414h-6.69l9.296-13.172-8.58-12.071h6.843l5.158 7.264 5.106-7.264h6.895l-8.632 12.07 9.295 13.173h-6.638Zm19.405-32.455v7.611h7.149v5.16h-7.149v12.53c0 .421.17.825.473 1.123.303.298.715.465 1.144.466h5.532v5.955h-4.137c-5.617 0-9.293-3.206-9.293-8.811V33.548h-5.056v-5.164h3.172c1.479 0 2.34-.864 2.34-2.293v-5.318h5.825Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.119 11.546c-1.886-3.242-6.6-3.242-8.484 0L1.087 46.875c-1.885 3.241.472 7.293 4.242 7.293h16.04c-1.61-1.408-2.207-3.844-.988-5.934L35.942 21.56l-5.824-10.013Z" fill="#80EEC0"></path><path d="M43.137 19.295c1.56-2.652 5.461-2.652 7.022 0l17.004 28.906c1.56 2.652-.39 5.968-3.51 5.968h-34.01c-3.12 0-5.07-3.316-3.51-5.968l17.004-28.906ZM209.174 53.8h-10.691c0-1.85.067-3.452 0-6.02h10.641c1.868 0 3.353.1 4.354-.935 1-1.034 1.501-2.335 1.501-3.903 0-1.834-.667-3.219-2.002-4.153-1.301-.967-2.985-1.451-5.054-1.451h-2.601v-5.254h2.652c1.701 0 3.119-.4 4.253-1.2 1.134-.801 1.701-1.986 1.701-3.553 0-1.301-.434-2.336-1.301-3.103-.834-.8-2.001-1.2-3.503-1.2-1.634 0-2.918.483-3.853 1.45-.9.968-1.401 2.152-1.501 3.553h-6.254c.133-3.236 1.251-5.788 3.352-7.656 2.135-1.868 4.887-2.802 8.256-2.802 2.402 0 4.42.434 6.055 1.301 1.668.834 2.919 1.952 3.753 3.353.867 1.4 1.301 2.952 1.301 4.653 0 1.968-.551 3.636-1.651 5.004-1.068 1.334-2.402 2.235-4.004 2.702 1.969.4 3.57 1.368 4.804 2.902 1.234 1.501 1.852 3.403 1.852 5.705 0 1.934-.468 3.702-1.402 5.304-.934 1.6-2.301 2.885-4.103 3.852-1.768.968-3.953 1.452-6.555 1.452Z" fill="#00DC82"></path></g></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui/dist/components/NuxtLogo.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/ui/dist/components/NuxtLogo.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui/dist/components/NuxtContentLogo.vue
// Parents: 
// - /node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue ($id_d8118121)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9252eb4f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    viewBox: "0 0 236 65",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M29.3445 12.5176c-1.8181-3.10288-6.3636-3.10288-8.1819 0L1.34708 46.334c-1.8182 3.1029.45453 6.9814 4.09096 6.9814H20.9071c-1.5538-1.3478-2.1292-3.6793-.9532-5.68l15.0073-25.5327-5.6167-9.5851Z" fill="#80EEC0"></path><path d="M41.9001 19.9353c1.5048-2.5387 5.2665-2.5387 6.7712 0l16.3991 27.6679c1.5048 2.5387-.3762 5.7122-3.3855 5.7122H28.8867c-3.0093 0-4.8904-3.1735-3.3857-5.7122l16.3991-27.6679Z" fill="#00DC82"></path><path d="M93.247 53.206c7.271 0 12.682-4.1739 13.273-10.2874h-5.579c-.508 3.2042-3.6358 5.4388-7.694 5.4388-5.1572 0-9.0462-3.5415-9.0462-10.2451 0-6.7037 3.889-10.2875 9.0462-10.2875 3.9735 0 7.102 2.2345 7.524 5.4811h5.834c-.803-6.1135-6.214-10.2875-13.358-10.2875-7.7358 0-14.6684 5.0593-14.6684 15.0939 0 10.0344 6.8059 15.0937 14.6684 15.0937Zm26.866 0c6.468 0 11.118-4.6378 11.118-10.962 0-6.3242-4.65-10.962-11.118-10.962-6.51 0-11.159 4.6378-11.159 10.962 0 6.3242 4.649 10.962 11.159 10.962Zm0-4.4692c-3.55 0-5.918-2.6562-5.918-6.4928 0-3.8368 2.368-6.4927 5.918-6.4927 3.509 0 5.877 2.6559 5.877 6.4927 0 3.8366-2.368 6.4928-5.877 6.4928Zm19.826 4.1319V41.2743c0-3.12 2.029-5.3967 4.946-5.3967 2.663 0 4.439 2.0239 4.439 4.933v12.0581h5.199V39.7143c0-4.975-3.128-8.4323-7.947-8.4323-3.044 0-5.453 1.3071-6.637 3.6259v-3.2886h-5.199v21.2494h5.199Zm21.158-21.2494h-4.185v4.3427h4.185v9.4864c0 4.722 3.044 7.4203 7.694 7.4203h3.424v-4.3849h-2.833c-1.943 0-3.085-1.0961-3.085-3.2464V35.962h5.918v-4.3427h-5.918v-6.4085h-5.2v6.4085Zm28.684 14.1662c-.55 2.0237-2.283 3.12-4.946 3.12-3.297 0-5.495-2.1924-5.876-5.6074h15.725c.043-.4217.085-1.0541.085-1.7709 0-5.0593-3.211-10.2452-10.357-10.2452-6.974 0-10.441 5.2703-10.441 10.8776 0 5.5654 3.89 11.0464 10.864 11.0464 5.243 0 9.215-2.9092 10.018-7.4205h-5.072Zm-5.369-10.6245c3.086 0 4.947 2.0237 5.158 4.722h-10.483c.549-3.2044 2.408-4.722 5.325-4.722Zm19.141 17.7077V41.2743c0-3.12 2.029-5.3967 4.947-5.3967 2.663 0 4.439 2.0239 4.439 4.933v12.0581h5.199V39.7143c0-4.975-3.128-8.4323-7.947-8.4323-3.044 0-5.453 1.3071-6.638 3.6259v-3.2886h-5.199v21.2494h5.199Zm21.159-21.2494h-4.185v4.3427h4.185v9.4864c0 4.722 3.043 7.4203 7.693 7.4203h3.425v-4.3849h-2.833c-1.945 0-3.086-1.0961-3.086-3.2464V35.962h5.919v-4.3427h-5.919v-6.4085h-5.199v6.4085Z" fill="currentColor"></path></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui/dist/components/NuxtContentLogo.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/projects/blog-netlify-nuxt/node_modules/@nuxt/ui/dist/components/NuxtContentLogo.vue"]]);
}


const __modules__ = {
  "D:/projects/blog-netlify-nuxt/node_modules/nuxt/dist/app/entry": $id_f25e1aa5,
  "/node_modules/vue/dist/vue.cjs.js": $id_60f0615f,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_780217c4,
  "/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/paths.mjs": $id_4a5f3ced,
  "/node_modules/ufo/dist/index.mjs": $id_614de060,
  "/node_modules/nuxt/dist/app/index.mjs": $id_36927477,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_e069d411,
  "/node_modules/hookable/dist/index.mjs": $id_a2c811c4,
  "/node_modules/unctx/dist/index.mjs": $id_a569ca2d,
  "/node_modules/nuxt/dist/app/compat/legacy-app.mjs": $id_a48341bc,
  "/node_modules/unenv/runtime/mock/proxy.mjs": $id_39e12da7,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_b067a79a,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_53345950,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9a4a698,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_d5b6a221,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_df511336,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_0063df1b,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_7d872108,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_6fe050f1,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_41f5ae4e,
  "/node_modules/ohash/dist/index.mjs": $id_b1b82cf3,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_511b441d,
  "/node_modules/cookie-es/dist/index.mjs": $id_f4975261,
  "/node_modules/h3/dist/index.mjs": $id_57d7ded6,
  "/node_modules/destr/dist/index.mjs": $id_03d15ecd,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_c4866ba7,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_db4d90a8,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_161bfe9f,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_ffac87b5,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_b7351483,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_04ea9504,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_852b06a2,
  "/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/css.mjs": $id_f687528d,
  "/node_modules/@nuxt/ui/dist/assets/styles.css": $id_3e441a39,
  "/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/plugins/server.mjs": $id_d4d5b3ac,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_9871bba0,
  "/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/components.plugin.mjs": $id_0a3203f7,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs": $id_12ce52f3,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs": $id_8f3d0953,
  "/node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs": $id_4c793316,
  "/node_modules/scule/dist/index.mjs": $id_ff332d11,
  "/node_modules/property-information/index.js": $id_882dd793,
  "/node_modules/html-tags/index.js": $id_4503b399,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs": $id_3f801a38,
  "/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/imports.mjs": $id_20555f3d,
  "/node_modules/nuxt/dist/app/compat/vue-demi.mjs": $id_a8110be7,
  "/node_modules/nuxt/dist/app/compat/capi.mjs": $id_0c5717a4,
  "/node_modules/@vueuse/core/index.mjs": $id_e8934cdc,
  "/node_modules/@vueuse/shared/index.mjs": $id_d77aacc8,
  "/node_modules/@nuxt/content/dist/runtime/composables/query.mjs": $id_47535763,
  "/node_modules/@nuxt/content/dist/runtime/query/query.mjs": $id_7961d5dc,
  "/node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs": $id_e943acfb,
  "/node_modules/@nuxt/content/dist/runtime/utils/json.mjs": $id_45454526,
  "/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs": $id_3db3e041,
  "/node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs": $id_eacbabc5,
  "/node_modules/@nuxt/content/dist/runtime/composables/helpers.mjs": $id_ec377465,
  "/node_modules/@nuxt/content/dist/runtime/composables/head.mjs": $id_4ed5e8c1,
  "/node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs": $id_e209d000,
  "/node_modules/@nuxtjs/color-mode/dist/runtime/composables.mjs": $id_9d5ba8e3,
  "/node_modules/nuxt/dist/pages/runtime/composables.mjs": $id_ff6ed455,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs": $id_9fab5abb,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs": $id_d2da4ccd,
  "/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.mjs": $id_a8f97a50,
  "/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.mjs": $id_9071c70d,
  "/node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs": $id_f4cbbc2c,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue": $id_558bf79f,
  "/node_modules/vue/server-renderer/index.js": $id_b215fa1c,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue": $id_01e2b479,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue": $id_19429b58,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css": $id_d7e7fe44,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue": $id_fab9e310,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue": $id_840411f2,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue": $id_b479ada6,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue": $id_9c1df7ff,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue": $id_f86082f5,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue": $id_7f627a67,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue": $id_caec80eb,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue": $id_26303ae9,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue": $id_6f4fac0c,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue": $id_f72b4351,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue": $id_1b78ec5d,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue": $id_2e24a6f5,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue": $id_0990778f,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue": $id_6d4c23c7,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue": $id_10f5aef2,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue": $id_faffa2d8,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue": $id_b51a8b09,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue": $id_07608f57,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue": $id_17b6f147,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue": $id_16f58501,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue": $id_7728c86d,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_e6f12003,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_c032264e,
  "/node_modules/defu/dist/defu.mjs": $id_d7afab65,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_a2650341,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_b2a29d6f,
  "/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/meta.config.mjs": $id_1d054283,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_a090977b,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_5fc14cdc,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_80f433aa,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_69c52686,
  "/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/routes.mjs": $id_f9ff4b69,
  "/pages/[...slug].vue?macro=true": $id_eab8124e,
  "/pages/[...slug].vue": $id_02b80d49,
  "/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/router.options.mjs": $id_fec20b37,
  "/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/middleware.mjs": $id_ac0b3777,
  "/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs": $id_a217e6ae,
  "/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/color-mode-options.mjs": $id_3507b3e6,
  "/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/unocss.mjs": $id_24724909,
  "/node_modules/@unocss/reset/tailwind.css": $id_c2c43311,
  "/__uno.css": $id_7174fecb,
  "/node_modules/@nuxt/content/dist/runtime/plugins/ws.mjs": $id_272b3f95,
  "/node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs": $id_575fe152,
  "/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/root-component.mjs": $id_99264b6e,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_e9bfada3,
  "/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/error-component.mjs": $id_f1b38f47,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_8cc6d73f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_b90d4d0f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_e68b6b38,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_14c8b574,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_a2b3b709,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_bc2d74a1,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_2691164c,
  "/@id/virtual:nuxt:D:/projects/blog-netlify-nuxt/.nuxt/app-component.mjs": $id_1218fc03,
  "/app.vue": $id_2b46e842,
  "/node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue": $id_d8118121,
  "/node_modules/@nuxt/ui/dist/components/NLink.vue": $id_55598167,
  "/node_modules/@nuxt/ui/dist/components/NButton.vue": $id_297ec944,
  "/node_modules/@nuxt/ui/dist/components/NIcon.vue": $id_defac4b3,
  "/node_modules/@nuxt/ui/dist/components/nuxt/NDarkToggle.vue": $id_fd053068,
  "/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue": $id_45c4a629,
  "/node_modules/nuxt/dist/app/components/client-only.mjs": $id_1ec78319,
  "/node_modules/@nuxt/ui/dist/components/NCard.vue": $id_ab9d25ca,
  "/node_modules/@nuxt/ui/dist/components/NuxtLogo.vue": $id_31f8fda1,
  "/node_modules/@nuxt/ui/dist/components/NuxtContentLogo.vue": $id_9252eb4f
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("D:/projects/blog-netlify-nuxt/node_modules/nuxt/dist/app/entry")