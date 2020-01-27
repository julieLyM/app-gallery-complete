const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const list = [
  {
    image:
      'https://images.unsplash.com/photo-1562792531-9dd3e7a1d891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    image:
      'https://images.unsplash.com/photo-1555930475-03b7d06a39da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
  },
  {
    image:
      'https://images.unsplash.com/photo-1557211228-dcd32da125c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
];

let db = null;

const initializeDatabase = async () => {
  const client = await MongoClient.connect(url, {
    auth: { user: 'julix', password: 'secret' },
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('pictures');
};

const addPicture = async pictures => {
  try {
    const { result } = await db.collection('pictures').insertMany(pictures);
    console.log(result);
  } catch (e) {
    console.error(e);
  }
};

async function clearCollection() {
  try {
    return await db.dropDatabase();
  } catch (e) {
    console.error(e);
  }
}

async function initialize() {
  await initializeDatabase();
  await clearCollection();
  addPicture(list);
}

initialize();
