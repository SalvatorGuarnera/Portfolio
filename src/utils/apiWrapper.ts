import axios from 'axios';

export default axios.create({
	baseURL: 'https://us-central1-website-d4dc2.cloudfunctions.net/api/'
});
