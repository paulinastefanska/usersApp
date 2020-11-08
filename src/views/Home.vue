<template>
  <v-container class="home">
    <v-layout align-center column pa-10>
      <div class="display-2 font-weight-black text-center">Welcome To Users App</div>
      <v-btn to="/users" class='ma-6' fab dark x-large color='warning'>
        GO
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home'
}
</script>
