export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('mithra-token'));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.access_token };
    } else {
      return {};
    }
}