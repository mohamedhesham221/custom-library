import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  ${props => props.required && `
    &::after {
      content: '*';
      color: #dc3545;
      margin-left: 4px;
    }
  `}
`;

const StyledInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  ${props => props.error && `
    border-color: #dc3545;
    &:focus {
      border-color: #dc3545;
      box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
    }
  `}

  ${props => props.success && `
    border-color: #28a745;
    &:focus {
      border-color: #28a745;
      box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.25);
    }
  `}

  ${props => props.disabled && `
    background-color: #e9ecef;
    cursor: not-allowed;
    opacity: 0.65;
  `}
`;

const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 12px;
  margin-top: 2px;
`;

const Input = ({
  label,
  error,
  success,
  required,
  disabled,
  errorMessage,
  ...props
}) => {
  return (
    <InputContainer>
      {label && (
        <Label required={required}>
          {label}
        </Label>
      )}
      <StyledInput
        error={error}
        success={success}
        disabled={disabled}
        {...props}
      />
      {error && errorMessage && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </InputContainer>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Input; 