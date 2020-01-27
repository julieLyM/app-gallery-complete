const pictureStore = require('../store/picturesStore');

const getPic = async (req, res) => {
  try {
    const data = await pictureStore.listPicture();
    console.log(data);
    res.json(data);
  } catch (e) {
    console.error(e);
  }
};

// const addPic = async (req, res) => {
//   const { body: picture } = req;
//   await pictureStore.addPicture(picture);
//   res.sendStatus(201);
// };

module.exports = { getPic };
