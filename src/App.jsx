import React, { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import Toast from "./components/Toast/Toast";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
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
		<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
			<h1>Component Library Demo</h1>

			<section style={{ marginBottom: "40px" }}>
				<h2>Buttons</h2>
				<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
					<Button>Default Button</Button>
					<Button variant="primary">Primary Button</Button>
					<Button variant="secondary">Secondary Button</Button>
					<Button variant="success">Success Button</Button>
					<Button variant="danger">Danger Button</Button>
					<Button size="small">Small Button</Button>
					<Button size="large">Large Button</Button>
					<Button disabled>Disabled Button</Button>
					<Button icon="→">Button with Icon</Button>
				</div>
			</section>

			<section style={{ marginBottom: "40px" }}>
				<h2>Input Fields</h2>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "20px",
						maxWidth: "400px",
					}}
				>
					<Input label="Default Input" placeholder="Enter text here" />
					<Input
						label="Required Input"
						required
						placeholder="This field is required"
					/>
					<Input
						label="Input with Error"
						error
						errorMessage="This field is required"
						placeholder="Enter text here"
					/>
					<Input label="Input with Success" success value="Valid input" />
					<Input label="Disabled Input" disabled value="Cannot edit" />
				</div>
			</section>

			<section style={{ marginBottom: "40px" }}>
				<h2>Cards</h2>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
						gap: "20px",
					}}
				>
					<Card
						title="Basic Card"
						description="This is a basic card with a title and description."
					/>
					<Card
						image="https://placehold.co/600x400"
						title="Card with Image"
						description="This card includes an image at the top."
					/>
					<Card
						image="https://placehold.co/600x400"
						title="Product Card"
						description="This is a sample product card."
						footer={
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									gap: "10px",
								}}
							>
								<span
									style={{
										fontSize: "1.5rem",
										fontWeight: "bold",
										color: "black",
									}}
								>
									$99.99
								</span>
								<Button size="large">Add to Cart</Button>
							</div>
						}
					/>
				</div>
			</section>

			<section style={{ marginBottom: "40px" }}>
				<h2>Modal</h2>
				<Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
				<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
					<div>
						<h2 style={{ marginTop: 0 }}>Modal Title</h2>

						<p style={{ color: "black" }}>
							You can add more text here to provide additional information or
							context.
						</p>
						<div style={{ marginTop: "20px" }}>
							<Button onClick={() => setIsModalOpen(false)}>Close</Button>
						</div>
					</div>
				</Modal>
			</section>

			<section style={{ marginBottom: "40px" }}>
				<h2>Toast Messages</h2>
				<div style={{ display: "flex", gap: "10px" }}>
					<Button onClick={() => addMessage("success")}>Show Success</Button>
					<Button onClick={() => addMessage("error")} variant="danger">
						Show Error
					</Button>
					<Button onClick={() => addMessage("info")} variant="secondary">
						Show Info
					</Button>
				</div>
				<Toast messages={messages} onRemove={removeMessage} />
			</section>
		</div>
	);
}

export default App;
