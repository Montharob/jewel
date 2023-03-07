<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import { ref } from 'vue';
import { storeToRefs } from 'pinia'
import { useUsarStore} from './stores/user'
//import { db } from '@/firebase'
const { theme } = storeToRefs(useUsarStore())
const { clickTheme } = useUsarStore()
</script>
<script>
export default {
  data() {
    return {
      iconProfile: false
    }
  },
  methods: {
    showProfile() {
      this.iconProfile = !this.iconProfile
      console.log(this.iconProfile)
    }
  }
}
</script>
<template>
  <v-app :theme="theme">
    <v-app-bar>
      <RouterLink to="/"><img src="https://www.creativefabrica.com/wp-content/uploads/2018/12/Diamond-logo-jewelry-gemstone-by-XVI-Supplies.jpg" width="175" class="pfshop"></RouterLink>
      <v-spacer></v-spacer>
      <!-- <v-btn href="/about">
        About
        
      </v-btn> -->

      <v-btn
        @click="clickTheme"
        :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
      >
        change theme 
      </v-btn>

      <v-menu transition="scroll-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn icon color="secondary" class="ma-2" v-bind="props">
            <v-avatar>
              <v-img
                src="data:image/png;base64,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"
              />
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <!-- <v-list-item
          v-for="n in 5"
          :key="n"
          link
        >
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>-->
          <v-list-item href="/login">
            <v-list-item-title v-text="'sign in'"></v-list-item-title>
          </v-list-item>  
          <v-list-item href="/signup">
            <v-list-item-title v-text="'sign up'"></v-list-item-title>
          </v-list-item>  
          
        </v-list>
      </v-menu>
    </v-app-bar>
    <RouterView />
  </v-app>

  

</template>

