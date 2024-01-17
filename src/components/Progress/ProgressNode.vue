<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ProgressNode',
  inject: ['getNode'],
  data() {
    return {
      percentage: 80
    }
  },
  mounted() {
    const node = (this as any).getNode()
    console.log(node)
  }
})
</script>