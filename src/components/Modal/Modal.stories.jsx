import React, { useState } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";

export default {
	title: "Components/Modal",
	component: Modal,
	argTypes: {
		isOpen: {
			control: "boolean",
		},
	},
};

const Template = (args) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Open Modal</Button>
			<Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
				{args.children}
			</Modal>
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	children: (
		<div>
			<h2 style={{ marginTop: 0 }}>Modal Title</h2>
			<p>This is a basic modal with some content.</p>
		</div>
	),
};

export const WithForm = Template.bind({});
WithForm.args = {
	children: (
		<div>
			<h2 style={{ marginTop: 0 }}>Contact Form</h2>
			<form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
				<div>
					<label style={{ display: "block", marginBottom: "4px" }}>Name</label>
					<input
						type="text"
						style={{
							width: "100%",
							padding: "8px",
							borderRadius: "4px",
							border: "1px solid #ced4da",
						}}
					/>
				</div>
				<div>
					<label style={{ display: "block", marginBottom: "4px" }}>Email</label>
					<input
						type="email"
						style={{
							width: "100%",
							padding: "8px",
							borderRadius: "4px",
							border: "1px solid #ced4da",
						}}
					/>
				</div>
				<Button>Submit</Button>
			</form>
		</div>
	),
};

export const WithLongContent = Template.bind({});
WithLongContent.args = {
	children: (
		<div>
			<h2 style={{ marginTop: 0 }}>Terms and Conditions</h2>
			<div style={{ maxHeight: "300px", overflowY: "auto" }}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<p>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est
					laborum.
				</p>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo.
				</p>
			</div>
		</div>
	),
};
