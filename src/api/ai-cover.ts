import axios from './index';

export const createOrUpdateUser = (deviceId: string) => {
  console.log('createOrUpdateUser', deviceId);
  return axios({
    method: 'POST',
    url: '/ai-note-taker/update-or-create-user',
    data: {
      deviceId,
    },
  })
    .then((response: any) => response.data)
    .catch(err => {
      return {error: err.response.data};
    });
};

export const getUserNotes = (deviceId: any) => {
  return axios({
    method: 'POST',
    url: '/ai-note-taker/get-user-notes',
    data: {
      deviceId,
    },
  })
    .then((response: any) => response.data)
    .catch(err => {
      return {error: err.response.data};
    });
};

export const deleteUserNote = (noteId: any) => {
  return axios({
    method: 'DELETE',
    url: '/ai-note-taker/delete-note',
    data: {
      noteId,
    },
  })
    .then((response: any) => response.data)
    .catch(err => {
      return {error: err.response.data};
    });
};

export const createNoteWithAudioRecord = (formData: any) => {
  return axios({
    method: 'POST',
    url: '/ai-note-taker/create-note-with-record',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      api_key: 'ca03na188ame03u1d78620de67282882a84',
    },
  })
    .then(response => response.data)
    .catch(err => {
      throw err.response ? err.response.data : err;
    });
};

export const updateNote = ({_id, transcript, item, liked}: any) => {
  return axios({
    method: 'PUT',
    url: '/ai-note-taker/update-note',
    data: {
      _id,
      transcript,
      item,
      liked,
    },
  })
    .then((response: any) => response.data)
    .catch(err => {
      return {error: err.response.data};
    });
};

export const generateQuizQuestions = (noteId: any) => {
  return axios({
    method: 'POST',
    url: '/ai-note-taker/generate-quiz-questions',
    data: {
      noteId,
    },
  })
    .then((response: any) => response.data)
    .catch(err => {
      return {error: err.response.data};
    });
};

export const generateFlashcardQuestions = (noteId: any) => {
  return axios({
    method: 'POST',
    url: '/ai-note-taker/generate-flascard-questions',
    data: {
      noteId,
    },
  })
    .then((response: any) => response.data)
    .catch(err => {
      return {error: err.response.data};
    });
};

export const updateUser = ({deviceId, fcmToken, status}: any) => {
  return axios({
    method: 'POST',
    url: '/ai-cover/update-user',
    data: {
      deviceId,
      firebaseToken: fcmToken,
      status,
    },
  })
    .then((response: any) => response.data)
    .catch(err => {
      return {error: err.response.data};
    });
};
