export async function getUsers() {
  const users = await admin.firestore().collection('users');

  console.log('users', users);
}
