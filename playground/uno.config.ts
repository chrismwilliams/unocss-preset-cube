import { defineConfig, presetMini } from "unocss";
import { presetCube } from "unocss-preset-cube";

export default defineConfig({
	presets: [presetMini({ preflight: "on-demand", prefix: "un-" }), presetCube()],
});
