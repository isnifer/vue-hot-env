<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import PropTypes from '@znck/prop-types'

@Component({
  props: {
    props: PropTypes.shape({
      message: PropTypes.string.isRequired,
    }),
  }
})
export default class Test extends Vue {
  mounted() {
    console.log('Hello, Anton!')
  }

  render(h, context) {
    console.log(context)

    return (
      <div>{this.props.message}</div>
    )
  }
}
</script>
