<script setup lang="ts">
import { useData } from "vitepress"
import { computed } from "vue"

const defaultAuthor = "开往"
const { frontmatter } = useData()

const contributors = computed(() => {
  return [
    frontmatter.value?.author,
    ...(frontmatter.value.contributors || []),
  ].filter((x) => x)
})

function isNotEmpty(arr: string | string[]) {
  return Array.isArray(arr) && arr.length
}
</script>

<style scoped>
.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.gap-2 {
  grid-gap: 0.5rem;
  gap: 0.5rem;
}

.gap-4 {
  grid-gap: 1rem;
  gap: 1rem;
}

.items-center {
  align-items: center;
}

.w-8 {
  width: 2rem;
}

.h-8 {
  width: 2rem;
}

.rounded-full {
  border-radius: 9999px;
}

img {
  display: block;
  border: 0.1px solid var(--vp-c-brand);
}

p {
  line-height: 24px;
  /* font-size: 14px; */
  font-weight: 500;
  color: var(--vp-c-brand);
}

.con {
  margin-bottom: 5px;
}
</style>