<template>
    <div class="first-container">
        <p>This is {{test}} {{names}} says {{message}}</p>
    </div>
</template>

<script>
export default {
  name: 'firstComponent',
  props: {
    test: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      names: 'perumal',
      message: 'hi',
    };
  }
};
</script>


