/* eslint-disable */
import Button from '@enact/sandstone/Button';
import { InputField } from '@enact/sandstone/Input';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import $L from '@enact/i18n/$L';
import Icon from '@enact/sandstone/Icon';
import { changeUser } from '../store/store';
import { addUser, deleteUser } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import spotlight from '@enact/spotlight';


const Account = () => {
	let dispatch = useDispatch();
	const users = useSelector((state) => { return state.users });
	console.log(users);
	const [name, setName] = useState({name:"Jason"});
	// const fetchUser = async () => {
	// 	try {
	// 		const response = await axios.get('/api/users');
	// 		setState({ users: response.data });
	// 		console.log('>>>>>> RESPONSE: ', response.data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	const handleSubmit = () => {
		console.log("add");
		dispatch(addUser(name.name));
		setName({name: ""});
		// axios
		// 	.post('/api/users', { name: state.name, email: state.email })
		// 	.then(response => {
		// 		setState(prevState => ({
		// 			users: [...prevState.users, response.data],
		// 			name: '',
		// 			email: ''
		// 		}));
		// 	})
		// 	.catch(error => console.error(error));
	};
	const handleDelete = id => {
		console.log("delete", id);
		dispatch(deleteUser(id));
	}
	// const handleDelete = async id => {
	// 	try {
	// 		await axios.delete(`/api/users/${id}`);
	// 		setState(prevState => ({
	// 			users: prevState.users.filter(user => user._id !== id)
	// 		}));
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchUser();
	// }, []);
	useEffect(() => {
		console.log("check");
		spotlight.focus(".userButton:first-of-type");
	});
	return (
		<div style={{ display: "flex", flexDirection: "column", height: "100%", }}>
			<div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, paddingBottom: "1rem" }}>
				<h2>Add User</h2>
				<div>
					<InputField
						type="text"
						value={name.name}
						onChange={e =>{setName(prev => ({name:e.value}))}}
						placeholder="Name"
					/>
					{/* <InputField
						type="email"
						value={state.email}
						onChange={e => setState(prev => ({ ...prev, email: e.value }))}
						placeholder="Email"
					/> */}
					<Button onClick={handleSubmit} type="submit">
						{$L('Add User')}
					</Button>
				</div>
			</div>
			{Array.isArray(users) ? (
				<div style={{ display: "flex", justifyContent: "center", flexGrow: 1, alignItems: "center" }}>
					{users.map((user, index) => (
						<div key={user.userId} style={{ display: "flex", flexDirection: "column" }}>
							<Button style={{ height: "10rem", width: "10rem" }} onClick={() => dispatch(changeUser(user))}>
								{user.userName}
							</Button>
							<Button backgroundOpacity="transparent" size="small" onClick={() => handleDelete(user.userId)}>
								<Icon size="small" title="closex">closex</Icon>
							</Button>
						</div>
					))}
				</div>
			) : (
				<p>{$L('Cannot retreive data!')}</p>
			)}

		</div>
	);
};

export default Account;
