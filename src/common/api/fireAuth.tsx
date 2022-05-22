import auth from '@react-native-firebase/auth';

export async function isLoggedIn() {
  return auth().currentUser ? true : false;
}

export async function signIn(email: string, password: string) {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function signUp(email: string, password: string, name: string) {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    await changeProfile(name);

    return {statusCode: 200, ...response};
  } catch (error) {
    console.log(error);
  }
}

export async function changeProfile(info) {
  try {
    const response = await auth().currentUser?.updateProfile({
      displayName: info,
    });

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export function subscribeAuth(callback: () => void) {
  return auth().onAuthStateChanged(callback);
}

export function signOut() {
  return auth().signOut();
}