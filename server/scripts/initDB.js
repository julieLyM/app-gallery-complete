const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const list = [
  {
    image:
      'https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dwbe9d58bd/assets/Y0027830/Y0027830_F002783999_E01_ZHC.jpg',
  },
  {
    image1:
      'https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dwbe9d58bd/assets/Y0027830/Y0027830_F002783999_E01_ZHC.jpg',
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
