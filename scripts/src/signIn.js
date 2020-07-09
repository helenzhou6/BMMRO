const firebase = require("firebase");
const Status = require("./helpers/Status");

const signIn = async (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => new Status("SUCCESS", email))
    .catch((e) => new Status("INVALID_CREDENTIALS", e.message));
};

module.exports = signIn;
