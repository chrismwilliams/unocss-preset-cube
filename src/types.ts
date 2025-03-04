export interface CubePresetOptions {
  /**
   * The layer name for CUBE.fyi Block components.
   * See: https://cube.fyi/block.html
   * @default "components"
   */
  blocksLayerName?: string | undefined;
  /**
   * The layer name for CUBE.fyi Composition Layer
   * See: https://cube.fyi/composition.html
   * @default "components"
   */
  compositionsLayerName?: string | undefined;
  /**
   * The layer name for CUBE.fyi Utilities.
   * @default "components"
   * See: https://cube.fyi/utility.html
   */
  utilitiesLayerName?: string | undefined;
  /**
   * The layer name for utility classes (--flow-space, --region-space, --gutter).
   * @default "components"
   */
  utilityClassesLayerName?: string | undefined;
}
