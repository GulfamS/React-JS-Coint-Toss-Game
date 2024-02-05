import {Component} from 'react'
import './index.css'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {totalResult: headImg, headsCount: 0, tailsCount: 0}

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''
    let updateHeadCount = headsCount
    let updateTailCount = tailsCount

    if (toss === 0) {
      tossImg = headImg
      updateHeadCount += 1
    } else {
      tossImg = tailImg
      updateTailCount += 1
    }
    this.setState({
      totalResult: tossImg,
      headsCount: updateHeadCount,
      tailsCount: updateTailCount,
    })
  }

  render() {
    const {totalResult, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="coins-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={totalResult} className="image" alt="toss result" />
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="head-tail-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
