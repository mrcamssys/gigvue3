<template>
  <div class="ingresox">
  <iframe ref="" width="100%" height="100%" :src="url" style="border:0px;"></iframe>
  </div>
</template>

<script>
let root;
export default {
  name: "plataformas",
  data() {
    return {
      url:"http://gimnasioguatiquia.42web.io/",
    };
  },
  created: function() {
		root = this;
    console.warn("ruta: ",root.$route.params)
    if(root.$route.params.url!=null) root.url="http://gimnasioguatiquia.42web.io/?"+root.$route.params.url;
    
	},

  methods: {
  }
};
</script>

<style  scoped>
.ingresox{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 50px;
    z-index: -1;
}

</style>
