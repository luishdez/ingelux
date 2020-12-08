import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export default class LightboxProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { children, images } = this.props;
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
	<a onClick={() => this.setState({ isOpen: true })}>{children}</a>

	{isOpen && (
	  <Lightbox
	    mainSrc={images[photoIndex]}
	    nextSrc={images[(photoIndex + 1) % images.length]}
	    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
	    onCloseRequest={() => this.setState({ isOpen: false })}
	    onMovePrevRequest={() =>
	      this.setState({
		photoIndex: (photoIndex + images.length - 1) % images.length,
	      })
	    }
	    onMoveNextRequest={() =>
	      this.setState({
		photoIndex: (photoIndex + 1) % images.length,
	      })
	    }
	  />
	)}
      </div>
    );
  }
}
