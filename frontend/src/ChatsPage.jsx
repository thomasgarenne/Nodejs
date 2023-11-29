import { PrettyChatWindow } from 'react-chat-engine-pretty'
import PropTypes from 'prop-types'

const ChatsPage = (props) => {
	return (
	<div style={{ heigth: '100vh' }}>
		<PrettyChatWindow 
			projectId='f77c1849-fd84-4081-bcb4-b9c7a424692b'
			username={props.user.username}
			secret={props.user.secret}
			style={{ height: '100%' }}
		/>
	</div>
)}

ChatsPage.propTypes = {
	user: PropTypes.shape({
		username: PropTypes.string,
		secret: PropTypes.string,
	})
}

export default ChatsPage;