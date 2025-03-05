import { clampGenerator, tokensToTailwind as tokensToUno } from "@chriswilliams/tokens-to-tailwind";
import { defineConfig, presetMini } from "unocss";
import { presetCube } from "unocss-preset-cube";

import spacingTokens from "./src/css/design-tokens/spacing.json";
import viewports from "./src/css/design-tokens/viewports.json";

const spacing = tokensToUno(clampGenerator(spacingTokens.items, viewports));

export default defineConfig({
	presets: [presetMini({ preflight: "on-demand", prefix: "un-" }), presetCube()],
	preflights: [
		{
			// add default gutter
			getCSS: () => `
				:root {
					/* default gutter size */
					--gutter: var(--space-s-l);
				}
			`,
		},
		{
			// add spacing css vars
			getCSS: () => {
				let spacingVars = "";
				for (const [key, value] of Object.entries(spacing)) {
					spacingVars += `--space-${key}:${value};`;
				}
				return `:root {${spacingVars}}`;
			},
		},
	],
	theme: {
		spacing,
		breakpoints: {
			sm: `${viewports.min}px`,
			md: `${viewports.mid}px`,
			lg: `${viewports.max}px`,
		},
	},
});
