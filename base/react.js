'use strict'

const e = React.createElement

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
    }
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.'
    }

    return <button onClick={() => this.setState({ liked: true })}>Like</button>
  }
}

const domContainer = document.querySelector('#app')
ReactDOM.render(e(Home), domContainer)
