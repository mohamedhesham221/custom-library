import React, { useEffect } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ToastContainer = styled.div`
	position: fixed;
	top: 20px;
	right: 20px;
	z-index: 1000;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const ToastItem = styled.div`
	padding: 12px 24px;
	border-radius: 4px;
	color: white;
	font-size: 14px;
	display: flex;
	align-items: center;
	gap: 8px;
	min-width: 200px;
	max-width: 400px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	animation: slideIn 0.3s ease-in-out;

	${(props) => {
		switch (props.type) {
			case "success":
				return `background-color: #28a745;`;
			case "error":
				return `background-color: #dc3545;`;
			case "info":
				return `background-color: #17a2b8;`;
			default:
				return `background-color: #6c757d;`;
		}
	}}

	@keyframes slideIn {
		from {
			transform: translateX(100%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
`;

const Toast = ({ messages, onRemove }) => {
	useEffect(() => {
		messages.forEach((message) => {
			if (message.duration) {
				const timer = setTimeout(() => {
					onRemove(message.id);
				}, message.duration);

				return () => clearTimeout(timer);
			}
		});
	}, [messages, onRemove]);

	return (
		<ToastContainer>
			{messages.map((message) => (
				<ToastItem
					key={message.id}
					type={message.type}
					onClick={() => onRemove(message.id)}
				>
					{message.content}
				</ToastItem>
			))}
		</ToastContainer>
	);
};

Toast.propTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			type: PropTypes.oneOf(["success", "error", "info"]).isRequired,
			content: PropTypes.node.isRequired,
			duration: PropTypes.number,
		})
	).isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default Toast;
