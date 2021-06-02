<template lang="html">
  <input type="tel"
         :value="formattedValue"
         @change="change"
         @focus="focus"
         v-money="{precision, decimal, thousands, prefix, suffix, allowBlank}"
         class="v-money" />
</template>

<script>
import money from './directive'
import defaults from './options'
import { format, unformat } from './utils'

export default {
  name: 'Money',
  props: {
    value: {
      required: true,
      type: [Number, String],
      default: 0
    },
    masked: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number,
      default: () => defaults.precision
    },
    decimal: {
      type: String,
      default: () => defaults.decimal
    },
    thousands: {
      type: String,
      default: () => defaults.thousands
    },
    prefix: {
      type: String,
      default: () => defaults.prefix
    },
    suffix: {
      type: String,
      default: () => defaults.suffix
    },
    allowBlank: {
      type: Boolean,
      default: () => defaults.allowBlank
    }
  },

  directives: { money },

  data () {
    return {
      formattedValue: '',
      format: true,
      valueString: null
    }
  },

  watch: {
    value: {
      immediate: true,
      handler (newValue, oldValue) {
        // if (oldValue === 0 && newValue !== 0) {
        //   this.formattedValue = parseFloat(newValue)
        // }
        const formatted = format(newValue, this.$props)
        // if (formatted !== this.formattedValue) {
        if (this.format || typeof this.valueString === 'undefined') {
          console.log('%c-format', 'color: yellow;', newValue)
          this.formattedValue = formatted
          this.format = false
        }
      }
    }
  },

  methods: {
    change (evt) {
      this.valueString = evt.target.value || undefined
      this.$emit('input', this.masked ? evt.target.value : unformat(evt.target.value, this.precision))
    },
    focus (evt) {
      if (evt.target.value === 0) {
        evt.target.setSelectionRange(0, 1)
      }
    }
  }
}
</script>
