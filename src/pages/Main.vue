<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Test from '../components/Test'

@Component
export default class App extends Vue {
  mounted () {
    this.greet()
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  greet() {
    console.log('greeting')
  }

  handleClick(event, a, b, c) {
    console.log(this)
  }

  render(h) {
    const props = {
      message: 'Hello World',
    }

    return (
      <div>
        <Test props={props} />
        <button
          type="button"
          onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    )
  }
}
</script>
