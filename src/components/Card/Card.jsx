import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;

const CardFooter = styled.div`
  padding: 12px 16px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = ({
  image,
  title,
  description,
  footer,
  children,
  ...props
}) => {
  return (
    <CardContainer {...props}>
      {image && <CardImage src={image} alt={title} />}
      <CardContent>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
        {children}
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  footer: PropTypes.node,
  children: PropTypes.node,
};

export default Card; 