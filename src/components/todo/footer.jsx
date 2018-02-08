/* eslint-disable */
import '../../assets/styles/footer.styl'
export default {
  data () {
    return {
      auther: 'jokcy'
    }
  },
  render () {
    return (
      <div id="footer">
        <span>Writen by {this.auther}</span>
      </div>
    )
  }
}
