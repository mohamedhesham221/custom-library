import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    image: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  description: 'This is a basic card with a title and description.',
};

export const WithImage = Template.bind({});
WithImage.args = {
  image: 'https://via.placeholder.com/300x200',
  title: 'Card with Image',
  description: 'This card includes an image at the top.',
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  title: 'Card with Footer',
  description: 'This card includes a footer section.',
  footer: <div>Footer Content</div>,
};

export const ProductCard = Template.bind({});
ProductCard.args = {
  image: 'https://via.placeholder.com/300x200',
  title: 'Product Name',
  description: 'Product description goes here. This is a sample product card.',
  footer: (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span>$99.99</span>
      <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
        Add to Cart
      </button>
    </div>
  ),
};

export const ProfileCard = Template.bind({});
ProfileCard.args = {
  image: 'https://via.placeholder.com/300x300',
  title: 'John Doe',
  description: 'Software Developer | React Enthusiast',
  footer: (
    <div style={{ display: 'flex', gap: '8px' }}>
      <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
        Follow
      </button>
      <button style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px' }}>
        Message
      </button>
    </div>
  ),
}; 