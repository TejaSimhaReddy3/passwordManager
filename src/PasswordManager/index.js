import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import InputSection from '../InputSection'

import './index.css'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    itemsList: [],
    searchInput: '',
    showPasswordChecked: false,
  }

  onChangeWebSite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {websiteInput, userNameInput, passwordInput} = this.state

    if (websiteInput !== '' && userNameInput !== '' && passwordInput !== '') {
      const newItem = {
        id: uuid(),
        websiteInput,
        userNameInput,
        passwordInput,
      }

      this.setState(prevState => ({
        itemsList: [...prevState.itemsList, newItem],
        websiteInput: '',
        userNameInput: '',
        passwordInput: '',
      }))
    }
  }

  onSearchList = event => {
    this.setState({searchInput: event.target.value})
  }

  onCheckBox = () => {
    this.setState(prevState => ({
      showPasswordChecked: !prevState.showPasswordChecked,
    }))
  }

  nullUsers = () => (
    <div className="nullImgContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="noPasswordImg"
      />
      <p className="noPasswd">No Passwords</p>
    </div>
  )

  onDeleteItem = id => {
    const {itemsList} = this.state

    const updatedList = itemsList.filter(eachList => eachList.id !== id)

    this.setState({itemsList: updatedList})
  }

  updatedLists = () => {
    const {itemsList, searchInput} = this.state

    const filteredList = itemsList.filter(eachList =>
      eachList.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return filteredList
  }

  render() {
    const {
      websiteInput,
      userNameInput,
      passwordInput,
      showPasswordChecked,
    } = this.state

    const updatedList = this.updatedLists()

    const userCount = updatedList.length

    return (
      <div className="bgContainer">
        <div className="contentContainers">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="logoPasswdImg"
            alt="app logo"
          />
          <div className="inputFormContainer">
            <form onSubmit={this.onSubmitForm} className="form">
              <h1 className="formHead">Add New Password</h1>
              <div className="inputImgs">
                <div className="imgContainers">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    className="inputLogos"
                    alt="website"
                  />
                </div>
                <input
                  type="text"
                  onChange={this.onChangeWebSite}
                  className="inputBox"
                  placeholder="Enter Website"
                  value={websiteInput}
                />
              </div>
              <div className="inputImgs">
                <div className="imgContainers">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    className="inputLogos"
                    alt="username"
                  />
                </div>
                <input
                  type="text"
                  onChange={this.onChangeUserName}
                  className="inputBox"
                  placeholder="Enter Username"
                  value={userNameInput}
                />
              </div>
              <div className="inputImgs">
                <div className="imgContainers">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                    className="inputLogos"
                    alt="password"
                  />
                </div>
                <input
                  type="password"
                  onChange={this.onChangePassword}
                  placeholder="Enter Password"
                  className="inputBox"
                  value={passwordInput}
                />
              </div>
              <div className="buttonContainer">
                <button className="button" type="submit">
                  Add
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="formImage"
              alt="password manager"
            />
          </div>
          <div className="passwordHandling">
            <div className="footerHeader">
              <div className="headingContainer">
                <h1 className="passwdCount">Your Passwords </h1>{' '}
                <p className="countSpan">{userCount}</p>
              </div>
              <div className="searchContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="searchImg"
                />
                <input
                  type="search"
                  className="searchBox"
                  onChange={this.onSearchList}
                  placeholder="Search"
                />
              </div>
            </div>
            <hr className="footerHr" />
            <div className="checkBoxContainer">
              <input
                type="checkbox"
                checked={showPasswordChecked}
                id="checkBox"
                onChange={this.onCheckBox}
              />
              <label htmlFor="checkBox" className="checkBox">
                Show passwords
              </label>
            </div>
            {userCount === 0 ? (
              this.nullUsers()
            ) : (
              <ul className="listsContainer">
                {updatedList.map(eachList => (
                  <InputSection
                    key={eachList.id}
                    itemDetails={eachList}
                    showPassword={showPasswordChecked}
                    deleteItems={this.onDeleteItem}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
