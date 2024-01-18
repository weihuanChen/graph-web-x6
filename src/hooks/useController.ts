import { GraphEditor } from "./../graph/core";
import { inject } from "vue";
/** 图模控制器 */
export default function useController() {
  const canvasEditor: GraphEditor = inject("canvasEditor");
  return {
    canvasEditor,
  };
}
