<script lang="ts" setup>
import { Graph, Shape } from '@antv/x6';
import { onMounted, onUnmounted, ref,provide } from 'vue';

/** 画布组件，初始化画布 */
const containerRef = ref(ref)
let graph: Graph | null = null;
// json反序列化节点
const data = {
  nodes: [
    {
      id: 'node1',
      shape: 'rect',
      x: 160,
      y: 180,
      width: 100,
      height: 40,
      label: 'hello',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
    {
      id: 'node2',
      shape: 'rect',
      x: 260,
      y: 280,
      width: 100,
      height: 40,
      label: 'world',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
  ]
}
// 手动添加节点
const rect = new Shape.Rect({
  x: 100,
  y: 200,
  width: 80,
  height: 40,
  angle: 30,
  attrs: {
    body: {
      fill: 'blue',
    },
    label: {
      text: 'Hello',
      fill: 'white',
    },
  },
})
const initX6 = ()=> {
  graph = new Graph({
    container: document.getElementById('container') as HTMLElement,
    autoResize: true,
    background: {
      color: '#F2F7FA',
    },
    grid: {
      visible: true,
      type: 'doubleMesh',
      args: [
        {
          color: '#eee', // 主网格线颜色
          thickness: 1, // 主网格线宽度
        },
        {
          color: '#ddd', // 次网格线颜色
          thickness: 1, // 次网格线宽度
          factor: 4, // 主次网格线间隔
        },
      ],
    },
  })
  graph.fromJSON(data)
  graph.centerContent()
}

provide('X6Graph',graph)
onUnmounted(() => {
  graph?.dispose() // 销毁
})
onMounted(() => {
  initX6()
  graph?.addNode(rect)
})
</script>
<template>
  <div class="auto-resize-app" style="width:100%; height:100%">
    <div id="container" class="app-content" ref="containerRef">
    </div>
  </div>
</template>
<style lang="less">
.auto-resize-app {
  display: flex;
  width: 600px;
  height: 400px;
  padding: 0;
  font-family: sans-serif;

  .app-content {
    flex: 1;
    height: 280px;
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 5px;
    box-shadow: 0 12px 5px -10px rgb(0 0 0 / 10%), 0 0 4px 0 rgb(0 0 0 / 10%);
  }

  .full {
    width: 100%;
    height: 100%;
  }
}
</style>