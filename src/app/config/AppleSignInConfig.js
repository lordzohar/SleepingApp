// AppleSignInConfig.js
import appleAuth from '@invertase/react-native-apple-authentication';

const signInWithApple = async () => {
  try {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    const { identityToken, nonce } = appleAuthRequestResponse;

    if (identityToken) {
      const appleCredential = firebase.auth.AppleAuthProvider.credential(identityToken, nonce);
      return firebase.auth().signInWithCredential(appleCredential);
    }
  } catch (error) {
    console.error(error);
  }
};

export { signInWithApple };
