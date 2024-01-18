import { Graph } from "@antv/x6";
/** 图模编辑器core */
export class GraphEditor {
  private graph: Graph
  constructor() {

  }
  _init(graph: Graph) {
    this.graph = graph;
  }
  /** 测试用,缩放、转换等 */
  transform = (command: string) => {
    switch (command) {
      case "translate":
        this.graph.translate(20, 20);
        break;
      case "zoomIn":
        this.graph.zoom(0.2);
        break;
      case "zoomOut":
        this.graph.zoom(-0.2);
        break;
      case "zoomTo":
        this.graph.zoomTo(1);
        break;
      case "zoomToFit":
        this.graph.zoomToFit();
        break;
      case "centerContent":
        this.graph.centerContent();
        break;
      default:
        break;
    }
  };
}
