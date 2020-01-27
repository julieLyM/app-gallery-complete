import React from 'react';
import { connect } from 'react-redux';
import { fetchPicture } from '../actions';
import Gallery from '../components/Gallery';

export class PictureContainer extends React.Component {
  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    const { fetchPicture } = this.props;
    return await fetchPicture();
  };

  render() {
    const { pictures } = this.props;
    return (
      <>
        <h1>gallery</h1>
        <div style={{ display: 'flex' }}>
          {pictures.map(element => (
            <div style={{ flex: '1 1 150px', margin: '10px' }}>
              <img style={{ maxWidth: '100%' }} src={element.image} />
            </div>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    pictures: state.pictures,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPicture: () => dispatch(fetchPicture()),
  };
};

const Connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureContainer);
export default Connected;
