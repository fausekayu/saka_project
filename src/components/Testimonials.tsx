import React from 'react';
import './indexx.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: 'John Doe', feedback: 'This gallery has amazing collections!' },
    { name: 'Jane Doe', feedback: 'I found the art piece I was looking for.' },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h3>Testimonials</h3>
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <blockquote>{testimonial.feedback}</blockquote>
              <cite>- {testimonial.name}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
