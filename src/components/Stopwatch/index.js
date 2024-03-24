import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 0,
      seconds: 0,
      isStarted: false,
    }
  }

  onClickStart = () => {
    this.setState({isStarted: true})
    this.intervalId = setInterval(() => {
      const {minutes, seconds} = this.state
      if (seconds === 59) {
        this.setState({minutes: minutes + 1, seconds: 0})
      } else {
        this.setState({seconds: seconds + 1})
      }
    }, 1000)
  }

  onClickStop = () => {
    clearInterval(this.intervalId)
    this.setState({isStarted: false})
  }

  onClickReset = () => {
    const {isStarted} = this.state
    if (!isStarted) {
      this.setState({
        minutes: 0,
        seconds: 0,
      })
    }
  }

  render() {
    const {minutes, seconds} = this.state
    console.log(`min:${minutes},sec:${seconds}`)
    const stringifedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return (
      <div className="container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="card-1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="Stopwatch"
              className="Stopwatch-logo"
            />
            <p className="timer-p">Timer</p>
          </div>
          <h1 className="timer">
            {stringifedMinutes}:{stringifedSeconds}
          </h1>
          <div className="btn-container">
            <button className="start btn" onClick={this.onClickStart}>
              Start
            </button>
            <button className="stop btn" onClick={this.onClickStop}>
              Stop
            </button>
            <button className="reset btn" onClick={this.onClickReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
