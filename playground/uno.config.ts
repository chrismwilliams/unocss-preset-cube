import { defineConfig, presetMini } from "unocss";

export default defineConfig({
	presets: [presetMini({ preflight: "on-demand" })],
});
