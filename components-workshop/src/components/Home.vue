<template>
  <app-content>
    <template v-slot:nav>
      <ul>
        <li
          @click="selectSubjectHandler(index)"
          :class="{ active: index === selectSubjectIndex }"
          v-for="(item, index) in subjects"
          :key="index"
        >
          <a>{{ item.name }}</a>
        </li>
      </ul>
    </template>
    <template v-slot:info>
        {{ selectSubject.content }}
    </template>
  </app-content>
</template>

<script>
import AppContent from "./shared/Content.vue";
export default {
  components: {
    AppContent
  },
  props: {
    subjects: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectSubjectIndex: 0
    };
  },
  methods: {
    selectSubjectHandler(inx) {
      this.selectSubjectIndex = inx;
    }
  },
  computed: {
      selectSubject() {
          return this.subjects[this.selectSubjectIndex];
      }
  }
};
</script>

<style scoped>
</style>
