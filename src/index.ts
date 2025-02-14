import { definePreset } from "unocss";

export const presetCube = definePreset(() => {
  return {
    name: "unocss-preset-cube",
    rules: [
      [
        /^flow-space-(.+)$/,
        ([, d]) => ({ "--flow-space": `var(--space-${d})` }),
        { layer: "components" },
      ],
      [
        /^region-space-(.+)$/,
        ([, d]) => ({ "--region-space": `var(--space-${d})` }),
        { layer: "components" },
      ],
      [
        /^gutter-(.+)$/,
        ([, d]) => ({ "--gutter": `var(--space-${d})` }),
        { layer: "components" },
      ],
      [
        /^flow$/,
        (_, { symbols }) => {
          return {
            [symbols.selector]: (selector) => `${selector} > * + *`,
            "margin-top": "var(--flow-space, 1em)",
          };
        },
        { layer: "components" },
      ],
      [
        "cluster",
        {
          display: "flex",
          "flex-wrap": "wrap",
          gap: "var(--cluster-gap, 1rem)",
        },
        { layer: "components" },
      ],
      [
        "wrapper",
        {
          "margin-inline": "auto",
          "max-width": "clamp(16rem, var(--wrapper-max-width, 100vw), 80rem)",
          "padding-left": "var(--gutter)",
          "padding-right": "var(--gutter)",
          position: "relative",
        },
        { layer: "components" },
      ],
      [
        "region",
        {
          "padding-block": "var(--region-space, var(--space-xl-2xl))",
        },
        { layer: "components" },
      ],
      [
        "visually-hidden",
        {
          border: "0",
          clip: "rect(0 0 0 0)",
          height: "0",
          margin: "0",
          overflow: "hidden",
          padding: "0",
          position: "absolute",
          width: "1px",
          "white-space": "nowrap",
        },
        { layer: "components" },
      ],
      [
        /^switcher$/,
        function* (_, { symbols }) {
          yield {
            display: "flex",
            "flex-wrap": "wrap",
            gap: "var(--gutter, var(--space-s-l))",
            "align-items": "var(--switcher-vertical-alignment, flex-start)",
          };
          yield {
            [symbols.selector]: (selector) => `${selector} > *`,
            "flex-grow": "1",
            "flex-basis":
              "calc((var(--switcher-target-container-width, 40rem) - 100%) * 999)",
          };
          yield {
            [symbols.selector]: (selector) => `${selector} > :nth-child(n + 3)`,
            "flex-basis": "100%",
          };
        },
        { layer: "components" },
      ],
      [
        /^sidebar$/,
        function* (_, { symbols }) {
          yield {
            display: "flex",
            "flex-wrap": "wrap",
            gap: "var(--gutter, var(--space-s-l))",
          };
          yield {
            [symbols.selector]: (selector) => `${selector} > :first-child`,
            "flex-grow": "1",
            "flex-basis": "var(--sidebar-target-width, 20rem)",
          };
          yield {
            [symbols.selector]: (selector) => `${selector} > :last-child`,
            "flex-basis": 0,
            "flex-grow": 999,
            "min-width": "var(--sidebar-content-min-width, 50%)",
          };
        },
        { layer: "components" },
      ],
      [
        /^repel$/,
        function* (_, { symbols }) {
          yield {
            display: "flex",
            "flex-wrap": "wrap",
            gap: " var(--gutter, var(--space-s-m))",
            "justify-content": "space-between",
            "align-items": "var(--repel-vertical-alignment, center)",
          };
          yield {
            [symbols.selector]: (selector) => `${selector}[data-nowrap]`,
            "flex-wrap": "nowrap",
          };
        },
        { layer: "components" },
      ],
      [
        /^grid$/,
        function* (_, { symbols }) {
          yield {
            display: "grid",
            "grid-template-columns":
              "repeat(var(--grid-placement, auto-fill),minmax(var(--grid-min-item-size,16rem), 1fr))",
            gap: "var(--gutter, var(--space-s-l))",
          };
          yield {
            [symbols.selector]: (selector) =>
              `${selector}[data-layout="50-50"]`,
            "--grid-placement": "auto-fit",
            "--grid-min-item-size": "clamp(16rem, 50vw, 33rem)",
          };
          yield {
            [symbols.selector]: (selector) =>
              `${selector}[data-layout="thirds"]`,
            "--grid-placement": "auto-fit",
            "--grid-min-item-size": "clamp(16rem, 33%, 20rem)",
          };
        },
        { layer: "components" },
      ],
    ],
  };
});
