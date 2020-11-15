<template>
  <div>
    <a
      class="block items-center w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer"
      @click="onClick"
    >
      <slot />
    </a>
  </div>

</template>
<script>
export default {
  name: 'DropDownItem',

  inject: ['dropdown'],

  props: {
    to: {
      type: [String, Object],
      default: undefined
    }
  },

  data () {
    return {}
  },

  methods: {
    onClick (evt) {
      if (this.to) {
        this.$router.push(this.to)
      }
      this.$emit('click', evt)
      this.closeDropDown()
    },

    closeDropDown () {
      this.dropdown.close()
    }
  }

}
</script>
