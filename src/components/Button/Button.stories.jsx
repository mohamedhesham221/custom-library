import React from "react";
import Button from "./Button";

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		variant: {
			control: "select",
			options: ["primary", "secondary", "success", "danger"],
		},
		size: {
			control: "select",
			options: ["small", "medium", "large"],
		},
		disabled: {
			control: "boolean",
		},
	},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: "Primary Button",
	variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: "Secondary Button",
	variant: "secondary",
};

export const Success = Template.bind({});
Success.args = {
	children: "Success Button",
	variant: "success",
};

export const Danger = Template.bind({});
Danger.args = {
	children: "Danger Button",
	variant: "danger",
};

export const Small = Template.bind({});
Small.args = {
	children: "Small Button",
	size: "small",
};

export const Large = Template.bind({});
Large.args = {
	children: "Large Button",
	size: "large",
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: "Disabled Button",
	disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	children: "Button with Icon",
	icon: "→",
};
