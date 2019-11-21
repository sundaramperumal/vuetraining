<template>
  <div class="static-class-name rfp-mctb">
   <div> <input type="text" v-model="editInput"> <input type="button" value ="save" @click="savedata(datas.id)"></div>
  </div>
</template>
<script>
export default {
  componentName: 'edit-data-component',
  data() {
    return {
      datas: [],
      editInput:""
    };
  },
  methods:  {
    savedata(ids)  {
      console.log(ids);
     // this.datas[index] = this.editInput;
     // window.eventBus.$emit('savedatas', ids);
    }
  },
  created() {
    window.eventBus.$on('editdatas', (val) => {
      this.datas = val
      this.editInput = this.datas.title;
    });
  }
};

</script>