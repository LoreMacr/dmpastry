// Llamada a instagram que has de poner en la carpeta de las llamadas a api
import axios from 'axios';

export async function instagramLastest(callback) {
  const API_URL = 'https://graph.instagram.com';
  const url = `${API_URL}/me/media`;
  const instaToken = 'IGQVJYQ2tUSTdfdldzQnZAKd29fR2pTbXpyVTFjNXdHbjAxZAUg2Wk12Q3paQUFMR0lXelRSN0lDcjduRG94ZAkc5N2ExTEl1YkoxZAzc3YWx1SGRfREJSQ3NFQy1PVUtEUndzWVhZAX1BaWWhmdWRyN29vOAZDZD';

  const headers = { 'Content-Type': 'application/json' };
  const params = {
    fields: 'caption, media_url, thumbnail_url, permalink, media_type',
    access_token: instaToken,
  };

  try {
    const response = await axios({ method: 'get', url, params, headers });

    const gallery = response?.data?.data || [];

    if (gallery.length > 0) {
      return callback(null, gallery);
    }
    return callback({ error: true }, null);
  } catch (error) {
    return callback({ error: true }, null);
  }
}