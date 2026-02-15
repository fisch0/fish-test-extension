// @ts-check
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname =
	import.meta.dirname ?? path.dirname(fileURLToPath(import.meta.url));

/** @type {import("webpack").Configuration} */
export default {
	entry: path.join(__dirname, "src/index.tsx"),

	output: {
		path: path.join(__dirname, "dist"),
		filename: "index.js",
		clean: true,
		iife: true,
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader",
					options: { transpileOnly: true },
				},
			},
		],
	},

	externals: {
		react: "window.Fish.libs.React",
		"react/jsx-runtime": "window.Fish.libs.ReactJSXRuntime",
		"react-dom": "window.Fish.libs.ReactDOM",
		"lucide-react": "window.Fish.libs.lucide",
	},

	optimization: {
		minimize: false,
	},
};
