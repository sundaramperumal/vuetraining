<template>
    <div class="sample-profile-component">
        {{title}}
				<div v-for = "details in user">{{details}}</div>
    </div>
</template>
<script>
export default {
  name: 'sampleProfile',
  props: {
    userid: {
      typle: String,
      require: true,
    }
  },
  data() {
    return {
      user: {}
    };
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json()).then(json => this.user=json);		
  }
};
</script>



