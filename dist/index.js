/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// external "window.Fish.libs.ReactJSXRuntime"
const external_window_Fish_libs_ReactJSXRuntime_namespaceObject = window.Fish.libs.ReactJSXRuntime;
;// external "window.Fish.libs.React"
const external_window_Fish_libs_React_namespaceObject = window.Fish.libs.React;
;// ./src/index.tsx

/**
 * fish-test-extension — minimal test extension
 *
 * Registers:
 *   1. A view node ("Test View") that renders a greeting + counter
 *   2. A provider that wraps children with a colored border
 *
 * Uses window.Fish.libs.React via externals (not bundled).
 */

const ctx = window.Fish.ctx();
// ── View Node ────────────────────────────────────────────────────────
function TestViewNode() {
    const [count, setCount] = (0,external_window_Fish_libs_React_namespaceObject.useState)(0);
    return ((0,external_window_Fish_libs_ReactJSXRuntime_namespaceObject.jsxs)("div", { style: { padding: 16, display: "flex", flexDirection: "column", gap: 12, height: "100%" }, children: [(0,external_window_Fish_libs_ReactJSXRuntime_namespaceObject.jsx)("h3", { style: { margin: 0, fontSize: 14, fontWeight: 600 }, children: "Test Extension" }), (0,external_window_Fish_libs_ReactJSXRuntime_namespaceObject.jsx)("p", { style: { margin: 0, fontSize: 12, opacity: 0.7 }, children: "If you can see this, the plugin system works." }), (0,external_window_Fish_libs_ReactJSXRuntime_namespaceObject.jsx)("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: (0,external_window_Fish_libs_ReactJSXRuntime_namespaceObject.jsxs)("button", { type: "button", onClick: () => setCount((c) => c + 1), style: {
                        padding: "4px 12px",
                        borderRadius: 4,
                        border: "1px solid currentColor",
                        background: "transparent",
                        color: "inherit",
                        cursor: "pointer",
                        fontSize: 12,
                    }, children: ["Clicked: ", count] }) }), (0,external_window_Fish_libs_ReactJSXRuntime_namespaceObject.jsxs)("p", { style: { margin: 0, fontSize: 11, opacity: 0.5 }, children: ["Loaded at: ", new Date().toLocaleTimeString()] })] }));
}
ctx.viewNodes.register({
    id: "fish-test-extension.test-view",
    name: "Test View",
    description: "A test view node from fish-test-extension",
    category: "Test",
    component: TestViewNode,
});
// ── Provider ─────────────────────────────────────────────────────────
function TestProvider({ children }) {
    return ((0,external_window_Fish_libs_ReactJSXRuntime_namespaceObject.jsxs)("div", { style: { border: "2px solid #22c55e", borderRadius: 6, position: "relative" }, children: [(0,external_window_Fish_libs_ReactJSXRuntime_namespaceObject.jsx)("div", { style: {
                    position: "absolute",
                    top: -10,
                    left: 8,
                    background: "#22c55e",
                    color: "#000",
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "1px 6px",
                    borderRadius: 3,
                    zIndex: 1,
                }, children: "Test Provider Active" }), children] }));
}
ctx.providers.register({
    id: "fish-test-extension.test-provider",
    component: TestProvider,
});
console.log("[fish-test-extension] Registered view node and provider.");

/******/ })()
;