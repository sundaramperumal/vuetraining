<template>
  <div class="static-class-name rfp-mctb">
    <div v-for="item in datas" :key="item">{{item.title}}
      <button @click="viewData(item)">view</button>
      <button @click="editData(item)">Edit</button>
      <button @click="deleteData(item.id)">Delete</button>
    </div>
    <button @click="getdatas">Get</button>
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
      datas: []
    };
  },
  methods: {
    getdatas() {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.datas = json)
    },
    viewData(lists) {
      console.log(lists);
      window.eventBus.$emit('listdatas', JSON.stringify(lists));
    },
    editData(edititem){
      //console.log(edititem);
      window.eventBus.$emit('editdatas', edititem);
    },
    deleteData(ids) {
      console.log(ids);
      fetch('https://jsonplaceholder.typicode.com/posts/'+ ids, {
        method: 'DELETE'
      })
    }
  },
  created() {
    this.getdatas();
  }
};

</script>