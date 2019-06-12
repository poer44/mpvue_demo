<template>
    <div>
      <searchbar></searchbar>
      <row></row>
      <row></row>
      <row></row>
      <row></row>
      <row></row>
      <row></row>
      <row></row>
    </div>
</template>

<script>
  import searchbar from '@/components/searchbar'
  import row from '@/components/row'

  export default {
    data () {
      return {

      }
    },

    components: {
      searchbar, row
    },

    methods: {

    },

    created () {
      // let app = getApp()
    }
  }
</script>

<style scoped>

</style>
