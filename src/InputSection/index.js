import './index.css'

const InputSection = props => {
  const {itemDetails, showPassword, deleteItems} = props
  const {id, websiteInput, passwordInput, userNameInput} = itemDetails

  const initial = websiteInput ? websiteInput[0].toUpperCase() : ''

  const showHidePasswd = showPassword ? (
    <p className="passwordInp">{passwordInput}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      className="starImage"
      alt="stars"
    />
  )

  const deleteList = () => {
    deleteItems(id)
  }

  return (
    <li className="listContainer">
      <div className="initialContainer">{initial}</div>
      <div className="textContainer">
        <p className="webName">{websiteInput}</p>
        <p className="userName">{userNameInput}</p>
        {showHidePasswd}
      </div>
      <div className="buttonContainer1">
        <button
          className="buttonDelete"
          testid="delete"
          onClick={deleteList}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            className="deleteImg"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default InputSection
