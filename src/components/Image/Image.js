import React from 'react';
import './Image.scss';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.setSpans = this.setSpans.bind(this);
    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
    window.addEventListener('resize', this.setSpans);
    window.addEventListener('orientationChange', this.setSpans);
  }

  componentWillUnmount() {
    this.imageRef.current.removeEventListener('load', this.setSpans);
    window.removeEventListener('resize', this.setSpans);
    window.removeEventListener('orientationChange', this.setSpans);
  }

  setSpans() {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10) + 1;
    this.setState({ spans });
  }

  render() {
    return (
      <div className="image-root" style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={this.props.dto.urls.regular} alt={this.props.dto.description} />
      </div>
    )
  }
}

export default Image;
