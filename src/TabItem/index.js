// Write your code here
import './index.css'

const TabItem = props => {
  const {details, tabItemClick} = props
  const tabclick = () => {
    tabItemClick(details.tabId)
  }
  return (
    <li className="tabelment">
      <button type="button" className="tabbtn" onClick={tabclick}>
        {details.displayText}
      </button>
      <hr />
    </li>
  )
}
export default TabItem
