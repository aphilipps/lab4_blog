import axios from 'axios';
import { browserHistory } from 'react-router';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
};

const ROOT_URL = 'https://lab5-mongodb.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
const API_KEY = '?key=a_philipps';


export function fetchposts() {
  return (
    (dispatch) => {
      axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      // do something with response.data  (some json)
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
      }).catch(error => {
        // alert('I am an alert box!');
      // hit an error do something else!
      });
    }
  );
}

export function fetchpost(id) {
  return (
    (dispatch) => {
      axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`).then(response => {
      // do something with response.data  (some json)
        dispatch({ type: 'FETCH_POST', payload: response.data });
      }).catch(error => {
      // hit an error do something else!
      });
    }
  );
}

export function deletePost(id) {
  return (
    (dispatch) => {
      axios.delete(`${ROOT_URL}/posts/${id}/${API_KEY}`).then(response => {
      // do something with response.data  (some json)
        dispatch({ type: 'DELETE_POST', payload: response.data });
        browserHistory.push('/');
      }).catch(error => {
      // hit an error do something else!
      });
    }
  );
}

export function createPost(title, tags, content) {
  return (
    (dispatch) => {
      const fields = { title, content, tags };
      axios.post(`${ROOT_URL}/posts${API_KEY}`, fields).then(response => {
      // do something with response.data  (some json)
        dispatch({ type: 'CREATE_POST', payload: response.data });
        browserHistory.push('/');
      }).catch(error => {
      // hit an error do something else!
      });
    }
  );
}

export function updatePost(id, title, tags, content) {
  return (
    (dispatch) => {
      const fields = { title, content, tags };
      axios.put(`${ROOT_URL}/posts/${id}/${API_KEY}`, fields).then(response => {
      // do something with response.data  (some json)
        dispatch({ type: 'UPDATE_POST', payload: response.data });
        console.log(response.data);
        // browserHistory.push('/');
      }).catch(error => {
      // hit an error do something else!
      });
    }
  );
}
