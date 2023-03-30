import PropTypes from 'prop-types';
import React from 'react';
import MktTestimonials from '../../src/common/components/MktTestimonials';

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @param { TestimonialsProps }
 */
const Testimonials = ({ slice }) => (
  <MktTestimonials
    title={slice?.primary?.title}
    endpoint={slice?.primary?.endpoint || '/v1/feedback/review'}
    slice={slice}
  />
);
Testimonials.propTypes = {
  slice: PropTypes.objectOf(PropTypes.any),
};

Testimonials.defaultProps = {
  slice: {},
};

export default Testimonials;
