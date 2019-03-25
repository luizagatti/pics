import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 4d6ea88c1df7464c0e3cec17d0699def536f0fbf680f1ec26e50d869f0a9a790'
	}
});