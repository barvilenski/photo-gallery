import React from 'react';
import axios from 'axios';
import Image from '../Image';
import './Gallery.scss';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.getImages = this.getImages.bind(this);
    this.state = { images: [] };
  }

  componentDidUpdate() {
    this.getImages();
  }

  async getImages() {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: this.props.searchTerm },
      headers: { Authorization: 'Client-ID 09dd98b98246f12396ee47bd815221038330fb0fbcf70f499aecc775d74d29f4' }
    });
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="gallery-root">
        {this.state.images.map(dto => <Image key={dto.id} dto={dto} /> )}
      </div>
    );
  }
}

export default Gallery;
