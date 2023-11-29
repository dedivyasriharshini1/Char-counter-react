import {UserInput, UserEnteredDetails} from 'styled-components'

const UserInput = props => {
  const {userInputDetails} = props
  const {userEnteredText, textLength} = UserEnteredDetails

  return (
    <UserInputItem>
      <UserEnteredDetails>
        {userEnteredText}:{textLength}
      </UserEnteredDetails>
    </UserInputItem>
  )
}
export default UserInput
