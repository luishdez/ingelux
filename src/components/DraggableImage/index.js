import React from 'react';
import ReactCompareImage from 'react-compare-image';
import img1 from '../../images/projects/renderA.png';
import img2 from '../../images/projects/renderB.png';

const DraggableImage = () => {
  return (
    <section
      id="project-hero"
      className="container draggable"
      style={{ paddingTop: 100, paddingBottom: 40 }}
    >
      <ReactCompareImage
        sliderLineWidth="5"
        sliderLineColor="#000"
        leftImage={img1}
        rightImage={img2}
      />
    </section>
  );
};

export default DraggableImage;
