<template>
  <v-app id="inspire">
    <v-container column text-center>
      <div class="nav">
        <v-btn to="/" text color="warning">Home</v-btn>
        <v-btn to="/users" text color="warning">Users</v-btn>
      </div>
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
