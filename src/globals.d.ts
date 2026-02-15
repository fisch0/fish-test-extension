/** Global type declarations for fish extensions */

interface FishCtx {
	viewNodes: {
		register(def: { id: string; name: string; description: string; category: string; component: React.ComponentType }): void;
		unregister(id: string): void;
		get(id: string): unknown;
		getAll(): unknown[];
	};
	providers: {
		register(def: { id: string; component: React.ComponentType<{ children: React.ReactNode }> }): void;
		unregister(id: string): void;
	};
	[key: string]: unknown;
}

interface FishLibs {
	React: typeof import("react");
	ReactDOM: typeof import("react-dom/client");
	ReactJSXRuntime: typeof import("react/jsx-runtime");
	lucide: typeof import("lucide-react");
	[key: string]: unknown;
}

interface FishAPI {
	ctx(): FishCtx;
	libs: Readonly<FishLibs>;
	ui: Readonly<Record<string, unknown>>;
}

interface Window {
	Fish: FishAPI;
}
