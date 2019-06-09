import axios from 'axios';

const KEY = 'AIzaSyAvXmqQcCoNLFlxOs_Hwz_PgPYXyKRH5eU';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});
