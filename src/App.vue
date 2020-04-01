<template>
  <v-app>
   
    <v-content>
      <Navbar></Navbar>
      <Map></Map>
      
    </v-content>

  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Map from './components/Map';

export default {
  name: 'App',

  components: {
    Navbar,
    Map,
  },

  data: () => ({
    //
  }),
};
</script>
