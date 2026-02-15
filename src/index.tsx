/**
 * fish-test-extension — minimal test extension
 *
 * Registers:
 *   1. A view node ("Test View") that renders a greeting + counter
 *   2. A provider that wraps children with a colored border
 *
 * Uses window.Fish.libs.React via externals (not bundled).
 */

import React, { useState, type ReactNode } from "react";

const ctx = window.Fish.ctx();

// ── View Node ────────────────────────────────────────────────────────

function TestViewNode() {
	const [count, setCount] = useState(0);

	return (
		<div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12, height: "100%" }}>
			<h3 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>Test Extension</h3>
			<p style={{ margin: 0, fontSize: 12, opacity: 0.7 }}>
				If you can see this, the plugin system works.
			</p>
			<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
				<button
					type="button"
					onClick={() => setCount((c) => c + 1)}
					style={{
						padding: "4px 12px",
						borderRadius: 4,
						border: "1px solid currentColor",
						background: "transparent",
						color: "inherit",
						cursor: "pointer",
						fontSize: 12,
					}}
				>
					Clicked: {count}
				</button>
			</div>
			<p style={{ margin: 0, fontSize: 11, opacity: 0.5 }}>
				Loaded at: {new Date().toLocaleTimeString()}
			</p>
		</div>
	);
}

ctx.viewNodes.register({
	id: "fish-test-extension.test-view",
	name: "Test View",
	description: "A test view node from fish-test-extension",
	category: "Test",
	component: TestViewNode,
});

// ── Provider ─────────────────────────────────────────────────────────

function TestProvider({ children }: { children: ReactNode }) {
	return (
		<div style={{ border: "2px solid #22c55e", borderRadius: 6, position: "relative" }}>
			<div
				style={{
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
				}}
			>
				Test Provider Active
			</div>
			{children}
		</div>
	);
}

ctx.providers.register({
	id: "fish-test-extension.test-provider",
	component: TestProvider,
});

console.log("[fish-test-extension] Registered view node and provider.");
