<!--测试组件，缩放功能-->
<script setup lang="ts">
import useController from '@/hooks/useController'
const { canvasEditor } = useController();
console.log(canvasEditor);

const handleClick = (command:string) => {
  canvasEditor.transform(command)
}
</script>
<template>
  <div @click="handleClick('translate')">缩放</div>
</template>