// Write your code here
import './index.css'

const AppItem = props => {
  const {appdetails} = props
  const {imageUrl, appName} = appdetails

  return (
    <li className="elementcontainer">
      <img className='image' src={imageUrl} alt={appName} />
      <div className='overlay'>
        <p>{appName}</p>
      </div>
    </li>
  )
}
export default AppItem
