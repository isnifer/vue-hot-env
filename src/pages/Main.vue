<script>
import Test from '../components/Test'

export default {
  data() {
    return {
      color: this.getColor(),
      backgroundColor: this.getColor(),
    }
  },

  computed: {
    welcomeMessage() {
      return 'Hello World'
    },
  },

  methods: {
    getColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`
    },

    handleClick() {
      this.color = this.getColor()
      this.backgroundColor = this.getColor()
    },
  },

  render() {
    return (
      <div class="app">
        <Test
          message={this.welcomeMessage}
          color={this.color}
          backgroundColor={this.backgroundColor}
        />
        <button type="button" class="button" onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    )
  },
}
</script>

<style scoped lang="less">
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #689f38;
  height: 100%;
}

.button {
  display: block;
  width: 150px;
  height: 80px;
  background-color: #ff5252;
  color: #ffffff;
  font-size: 24px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.8);
  outline: none;
  position: relative;

  &:active {
    top: 2px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
  }
}
</style>
