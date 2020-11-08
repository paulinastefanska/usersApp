<template>
  <v-container class="users" fliud style="max-width: 1000px">
    <v-layout align-center column text-left pa-10>
      <div class="display-1 font-weight-black text-center">Active Users</div>
      <p>- click row to display details -</p>
    </v-layout>
    <UsersList />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import UsersList from '../components/UsersList.vue'

export default {
  components: {
    UsersList
  },

  computed: {
    ...mapState([
      'items'
    ])
  }
}
</script>
