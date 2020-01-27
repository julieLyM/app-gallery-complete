import axios from 'axios';

export const getListPictures = async () => {
  const { data } = await axios.get('/api/v1/pictures/');
  console.log(data);
  return data;
  // const data = Promise.resolve([
  //   {
  //     id: Math.random()
  //       .toString(36)
  //       .substr(2, 9),
  //     urlImage:
  //       'https://images.unsplash.com/photo-1562792531-9dd3e7a1d891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  //   },
  //   {
  //     id: Math.random()
  //       .toString(36)
  //       .substr(2, 9),
  //     urlImage:
  //       'https://images.unsplash.com/photo-1579761393476-25a9f6c7126d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80',
  //   },
  //   {
  //     id: Math.random()
  //       .toString(36)
  //       .substr(2, 9),
  //     urlImage:
  //       'https://images.unsplash.com/photo-1555930475-03b7d06a39da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
  //   },
  //   {
  //     id: Math.random()
  //       .toString(36)
  //       .substr(2, 9),
  //     urlImage:
  //       'https://images.unsplash.com/photo-1557211228-dcd32da125c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  //   },
  // ]);
  return data;
};
