# React Component Library

A collection of reusable React components for building modern web applications.

## Components

### Button
A versatile button component with support for different variants, sizes, and icons.

```jsx
import Button from './components/Button/Button';

// Basic usage
<Button>Click me</Button>

// With variant
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="success">Success Button</Button>
<Button variant="danger">Danger Button</Button>

// With size
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>

// With icon
<Button icon="→">Button with Icon</Button>

// Disabled state
<Button disabled>Disabled Button</Button>
```

### Input
A flexible input component with support for labels, error states, and validation.

```jsx
import Input from './components/Input/Input';

// Basic usage
<Input placeholder="Enter text" />

// With label
<Input label="Username" placeholder="Enter username" />

// Required field
<Input label="Email" required placeholder="Enter email" />

// With error
<Input
  label="Password"
  error
  errorMessage="Password is required"
  type="password"
/>

// With success state
<Input label="Username" success value="john_doe" />

// Disabled state
<Input label="Read-only" disabled value="Cannot edit" />
```

### Card
A card component for displaying content in a structured format.

```jsx
import Card from './components/Card/Card';

// Basic usage
<Card
  title="Card Title"
  description="This is a basic card with a title and description."
/>

// With image
<Card
  image="https://example.com/image.jpg"
  title="Card with Image"
  description="This card includes an image at the top."
/>

// With footer
<Card
  title="Card with Footer"
  description="This card includes a footer section."
  footer={<div>Footer Content</div>}
/>

// Product card example
<Card
  image="https://example.com/product.jpg"
  title="Product Name"
  description="Product description goes here."
  footer={
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>$99.99</span>
      <button>Add to Cart</button>
    </div>
  }
/>
```

### Modal
A modal component for displaying content in an overlay.

```jsx
import Modal from './components/Modal/Modal';

// Basic usage
const [isOpen, setIsOpen] = useState(false);

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <h2>Modal Title</h2>
  <p>Modal content goes here.</p>
</Modal>

// With form
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <h2>Contact Form</h2>
  <form>
    {/* Form fields */}
  </form>
</Modal>
```

### Toast
A toast component for displaying notifications.

```jsx
import Toast from './components/Toast/Toast';

// Basic usage
const [messages, setMessages] = useState([]);

const addMessage = (type) => {
  const newMessage = {
    id: Date.now().toString(),
    type,
    content: `${type} message`,
    duration: 3000,
  };
  setMessages((prev) => [...prev, newMessage]);
};

<Toast messages={messages} onRemove={(id) => {
  setMessages((prev) => prev.filter((msg) => msg.id !== id));
}} />
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. View the Storybook documentation:
```bash
npm run storybook
```

## Features

- Fully customizable components
- Responsive design
- Accessibility support
- TypeScript support
- Storybook documentation
- Emotion for styling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
