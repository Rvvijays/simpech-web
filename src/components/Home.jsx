import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #282c34;
  background: #f4f4f9;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #21a1f1;
  transition: color 0.3s ease;

  &:hover {
    color: #21a1f1;
  }
`;

const Tagline = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const ContactLink = styled(Link)`
  color: #6e0cd0;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
`;

const SubTagline = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #21a1f1;
  font-weight: bold;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Heading>Welcome to Simpech!</Heading>
      <Tagline>Simplicity in Technology</Tagline>
      <SubTagline>We're launching soon, and we want to reward you with exclusive early discounts. <ContactLink to="/contact">Contact us</ContactLink> now to be among the first to benefit!</SubTagline>

      <Section>
        <Paragraph>
          At Simpech, we believe that technology should be simple, intuitive, and empowering. Our mission is to transform your ideas into reality with elegance and efficiency. Whether you're looking for cutting-edge web development, innovative software solutions, or seamless mobile app experiences, we are here to deliver exceptional results without the complexity.
        </Paragraph>
        <Paragraph>
          <strong>Why Choose Simpech?</strong>
        </Paragraph>
        <ul>
          <li><strong>Elegant Solutions:</strong> We focus on creating designs and functionalities that are both beautiful and user-friendly. Our approach ensures that your technology integrates seamlessly into the lives of your users, providing them with a smooth and enjoyable experience.</li>
          <li><strong>Quality and Precision:</strong> At Simpech, quality is non-negotiable. We adhere to the highest standards of craftsmanship, ensuring that every detail is meticulously executed. Our dedicated team employs best practices and advanced technologies to deliver solutions that are reliable and performant.</li>
          <li><strong>Tailored to Your Needs:</strong> We understand that every project is unique. That's why we take the time to understand your specific requirements and goals. From initial concept to final implementation, we customize our approach to fit your vision and deliver results that exceed expectations.</li>
          <li><strong>Transparent Communication:</strong> We believe in open and honest communication throughout the development process. Our team is committed to keeping you informed and involved, ensuring that you are always aware of progress and can provide feedback at every stage.</li>
          <li><strong>Support and Maintenance:</strong> Our commitment to you doesn’t end with the launch. We offer ongoing support and maintenance to ensure your technology continues to perform at its best. Whether it's troubleshooting issues or making enhancements, we're here to help.</li>
        </ul>
        <Paragraph>
          <strong>Our Services:</strong>
        </Paragraph>
        <ul>
          <li><strong>Web Development:</strong> Crafting responsive, high-performance websites that captivate and convert. From e-commerce platforms to dynamic content management systems, we build web solutions that drive results.</li>
          <li><strong>Software Development:</strong> Developing custom software that meets your specific business needs. Our solutions are designed to be scalable, efficient, and easy to use.</li>
          <li><strong>Mobile App Development:</strong> Creating mobile applications that provide exceptional user experiences across all devices. Our apps are designed to be intuitive and engaging, with a focus on performance and usability.</li>
          <li><strong>Maintenance and Support:</strong> Offering reliable support and maintenance services to keep your technology running smoothly. We handle updates, bug fixes, and performance enhancements so you can focus on what matters most.</li>
        </ul>
        <Paragraph>
          Ready to elevate your technology with simplicity and style? <ContactLink to="/contact">Contact us</ContactLink> today to discuss your project and see how Simpech can make a difference.
        </Paragraph>
        <Paragraph>
          At Simpech, simplicity is more than just a tagline – it's the core of our approach. Experience technology that’s as straightforward as it is powerful.
        </Paragraph>
      </Section>
    </HomeWrapper>
  );
}

export default Home;
