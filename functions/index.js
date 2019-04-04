const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
admin.initializeApp();

exports.addProcedure = functions.https.onRequest((request, response) => {
  console.log('request.body: ', request.body);
    return admin.firestore().collection('procedures').add({
      name: 'Appendectomy'
    })
      .then(() => response.status(200).send(request.body))
});
