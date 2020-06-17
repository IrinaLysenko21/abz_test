import axios from 'axios';
import config from '../config/config';

export const fetchUsers = async usersNum => {
  try {
    const response = await axios(
      `${config.BASE_URL}users?page=1&count=${usersNum}`,
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchPositions = async () => {
  try {
    const response = await axios.get(
      'https://frontend-test-assignment-api.abz.agency/api/v1/positions',
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};
