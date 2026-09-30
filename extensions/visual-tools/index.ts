/** Register the Mermaid and SVG authoring tools. */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent"
import mermaidToolsExtension from "./tools/mermaid_tools.ts"
import svgToolsExtension from "./tools/svg_tools.ts"

export default function (pi: ExtensionAPI) {
  mermaidToolsExtension(pi)
  svgToolsExtension(pi)
}
