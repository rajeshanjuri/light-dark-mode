// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  // initialize the state object
  state = {islightMode: true}

  // button change
  onChangeLight = () => {
    this.setState(prevState => {
      console.log(`the light btn clicked is ${prevState.islightMode}`)
      return {islightMode: !prevState.islightMode}
    })
  }

  // object destructuring and changing button
  render() {
    const {islightMode} = this.state
    const changeMode = islightMode ? 'darkMode' : 'lightMode'
    const buttonText = islightMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`card-container ${changeMode}`}>
          <h1 className="title">Click to Change Mode</h1>
          <button type="button" className="button" onClick={this.onChangeLight}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
