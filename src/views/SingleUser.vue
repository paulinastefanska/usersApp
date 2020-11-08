<template>
  <v-container class="users" fliud style="max-width: 1000px">
    <v-layout align-center column text-left pa-10>
      <div class="display-1 font-weight-black text-center">Details</div>
    </v-layout>
    <v-card class="mx-auto" max-width="400">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ user.username }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.name }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ user.company }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Address</v-list-item-title>
          <v-list-item-subtitle>{{ user.street }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ user.suite }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ user.city }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ user.zipcode }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Contact</v-list-item-title>
          <v-list-item-subtitle>E-mail: {{ user.email }}</v-list-item-subtitle>
          <v-list-item-subtitle>Phone: {{ user.phone }}</v-list-item-subtitle>
          <v-list-item-subtitle>Website: {{ user.website }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-btn to="/users" text small color="warning">back</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store/index'

export default {
  data() {
    return {
      user: {}
    }
  },

  computed: {
    ...mapState([
      'items'
    ])
  },

  mounted() {
    let user = store.state.items
    const id = parseFloat(this.$route.params.id)
    user = user.filter((el) => {
      return el.id === id
    })
    user = user[0]
    this.user = user
  }
}
</script>
