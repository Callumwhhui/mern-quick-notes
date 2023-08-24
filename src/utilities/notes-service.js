import sendRequest from './send-request';

const BASE_URL = '/api/notes';

export async function getNotes() {
  return sendRequest(BASE_URL);
}
const data = {text: 'text data thus'}
export async function saveNote(noteData) {
  return sendRequest(BASE_URL, 'POST', noteData);
}
