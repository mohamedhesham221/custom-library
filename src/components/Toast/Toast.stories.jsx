import React, { useState } from "react";
import Toast from "./Toast";
import Button from "../Button/Button";

export default {
	title: "Components/Toast",
	component: Toast,
};

const Template = (args) => {
	const [messages, setMessages] = useState([]);

	const addMessage = (type) => {
		const newMessage = {
			id: Date.now().toString(),
			type,
			content: `${type.charAt(0).toUpperCase() + type.slice(1)} message`,
			duration: 3000,
		};
		setMessages((prev) => [...prev, newMessage]);
	};

	const removeMessage = (id) => {
		setMessages((prev) => prev.filter((message) => message.id !== id));
	};

	return (
		<div>
			<div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
				<Button onClick={() => addMessage("success")}>Show Success</Button>
				<Button onClick={() => addMessage("error")} variant="danger">
					Show Error
				</Button>
				<Button onClick={() => addMessage("info")} variant="secondary">
					Show Info
				</Button>
			</div>
			<Toast messages={messages} onRemove={removeMessage} />
		</div>
	);
};

export const Default = Template.bind({});

export const WithCustomMessages = () => {
	const [messages, setMessages] = useState([]);

	const addCustomMessage = () => {
		const newMessage = {
			id: Date.now().toString(),
			type: "success",
			content: (
				<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
					<span>✅</span>
					<span>Custom styled message with icon</span>
				</div>
			),
			duration: 5000,
		};
		setMessages((prev) => [...prev, newMessage]);
	};

	const removeMessage = (id) => {
		setMessages((prev) => prev.filter((message) => message.id !== id));
	};

	return (
		<div>
			<Button onClick={addCustomMessage}>Show Custom Message</Button>
			<Toast messages={messages} onRemove={removeMessage} />
		</div>
	);
};
