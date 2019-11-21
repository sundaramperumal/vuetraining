<template>
  <div class="static-class-name rfp-mctb">
    <span><strong>{{title}}</strong></span>
    
    <span>{{ propsData }}</span>
  </div>
</template>
<script>
export default {
  name: 'sampleComponent',
  props: {
    propsData: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    }
  },
  data() {
    return {
    };
  }
};

</script>