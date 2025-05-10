import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-weight: 500;
	transition: all 0.2s ease-in-out;

	/* Size variants */
	${(props) => {
		switch (props.size) {
			case "small":
				return `
          padding: 6px 12px;
          font-size: 14px;
        `;
			case "large":
				return `
          padding: 12px 24px;
          font-size: 18px;
        `;
			default:
				return `
          padding: 8px 16px;
          font-size: 16px;
        `;
		}
	}}

	/* Color variants */
  ${(props) => {
		switch (props.variant) {
			case "primary":
				return `
          background-color: #007bff;
          color: white;
          &:hover {
            background-color: #0056b3;
          }
        `;
			case "secondary":
				return `
          background-color: #6c757d;
          color: white;
          &:hover {
            background-color: #545b62;
          }
        `;
			case "success":
				return `
          background-color: #28a745;
          color: white;
          &:hover {
            background-color: #218838;
          }
        `;
			case "danger":
				return `
          background-color: #dc3545;
          color: white;
          &:hover {
            background-color: #c82333;
          }
        `;
			default:
				return `
          background-color: #007bff;
          color: white;
          &:hover {
            background-color: #0056b3;
          }
        `;
		}
	}}

  /* Disabled state */
  ${(props) =>
		props.disabled &&
		`
    opacity: 0.65;
    cursor: not-allowed;
    &:hover {
      background-color: inherit;
    }
  `}
`;

const Button = ({
	children,
	variant = "primary",
	size = "medium",
	disabled = false,
	icon,
	onClick,
	...props
}) => {
	return (
		<StyledButton
			variant={variant}
			size={size}
			disabled={disabled}
			onClick={onClick}
			{...props}
		>
			{icon && <span className="button-icon">{icon}</span>}
			{children}
		</StyledButton>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
	size: PropTypes.oneOf(["small", "medium", "large"]),
	disabled: PropTypes.bool,
	icon: PropTypes.node,
	onClick: PropTypes.func,
};

export default Button;
