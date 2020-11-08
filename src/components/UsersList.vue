<template>
  <v-data-table
    must-sort
    :headers="headers"
    :options.sync="options"
    :server-total-items="options.totalItems"
    :loading="loading"
    :items="items"
    :items-per-page="5"
    class="elevation-1"
    @click:row="handleClick"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.items.username }}</td>
      <td class="text-xs-left">{{ props.items.name }}</td>
      <td class="text-xs-left">{{ props.items.email }}</td>
      <td class="text-xs-left">{{ props.items.company }}</td>
    </template>
  </v-data-table>
</template>
<script>
import store from '../store/index'

export default {
  store,

  data() {
    return {
      loading: false,
      headers: [
        { text: 'Username', value: 'username' },
        { text: 'Name', value: 'name' },
        { text: 'E-mail', value: 'email' },
        { text: 'Comapny', value: 'company' }
      ]
    }
  },

  watch: {
    options: {
      handler() {
        this.loading = true
        this.$store.dispatch('queryItems')
          .then(() => {
            this.loading = false
          })
      },
      deep: true
    }
  },

  computed: {
    options: {
      get() {
        return this.$store.getters.options
      },
      set(value) {
        this.$store.commit('setOptions', value)
      }
    },
    items() {
      return this.$store.getters.items
    }
  },

  methods: {
    handleClick(users) {
      return (
        this.$router.push(`/user/${users.id}`)
      )
    }
  }
}
</script>
<style lang='scss'>
  tr {
    cursor: pointer;
  }
</style>
