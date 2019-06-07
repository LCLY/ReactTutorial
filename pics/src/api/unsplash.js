//all code for axios configuration
import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 57e1fe643a74d96ba2ec915ea39670b3468aebf624ec02d3e65bb046058f3d05',
	},
});
