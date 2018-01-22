<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <Button @click="show">Click me!
    </Button>
    <Modal v-model="visible" title="Welcome">Welcome to iView</Modal>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      visible: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods: {
    show: function () {
      this.visible = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
