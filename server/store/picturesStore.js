const MongoClient = require('mongodb').MongoClient;
const auth = require('../utils/auth');
const url = 'mongodb://mongo:27017';

let db = null;

const initializeDatabase = async () => {
  console.log('coucou from initialize');
  const client = await MongoClient.connect(url, {
    auth,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('pictures');
  console.log('fin initalize function');
};

function listPicture() {
  console.log('getlistpicture');
  const data = db
    .collection('pictures')
    .find()
    .toArray();
  console.log(data);
  console.log('fin function listpicture');
  return data;
}

async function initialize() {
  await initializeDatabase();
}

initialize();

module.exports = { listPicture };
