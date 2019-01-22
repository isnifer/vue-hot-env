<script>
export default {
  props: {
    message: String,
    color: String,
    backgroundColor: String,
  },

  render() {
    return (
      <h1 style={{ color: this.color, backgroundColor: this.backgroundColor }}>
        {this.message}
      </h1>
    )
  },
}
</script>
