import React from "react";
import Input from "./Input";

export default {
	title: "Components/Input",
	component: Input,
	argTypes: {
		error: {
			control: "boolean",
		},
		success: {
			control: "boolean",
		},
		disabled: {
			control: "boolean",
		},
		required: {
			control: "boolean",
		},
	},
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "Default Input",
	placeholder: "Enter text here",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
	label: "Input with Label",
	placeholder: "Enter text here",
};

export const Required = Template.bind({});
Required.args = {
	label: "Required Input",
	placeholder: "This field is required",
	required: true,
};

export const WithError = Template.bind({});
WithError.args = {
	label: "Input with Error",
	placeholder: "Enter text here",
	error: true,
	errorMessage: "This field is required",
};

export const WithSuccess = Template.bind({});
WithSuccess.args = {
	label: "Input with Success",
	placeholder: "Enter text here",
	success: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	label: "Disabled Input",
	placeholder: "This input is disabled",
	disabled: true,
};
