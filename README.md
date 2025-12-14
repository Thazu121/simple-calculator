# Responsive Calculator Web App

A modern, responsive calculator built using **HTML**, **CSS**, and **JavaScript**.  
It supports basic arithmetic operations along with advanced mathematical functions and works smoothly across devices.

## Features

### Basic Operations
- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`×`)
- Division (`/`)

### Advanced Functions
- Percentage (`%`)
- Square Root (`√`)
- Power functions (`x²`, `x³`)
- Reciprocal (`1/x`)
- Decimal input support

### Utility Controls
- Clear all (`AC`)
- Delete last digit (`DE`)
- Error handling for invalid operations
- Real-time display updates

## Project Structure

├── index.html # Calculator layout

├── index.css # Styling and responsiveness

├── index.js # Calculator functionality

## Technologies Used

- **HTML5** – Structure and layout
- **CSS3** – Grid layout, flexbox, media queries
- **JavaScript (ES6)** – Logic and event handling

## How It Works

- Button clicks are captured using event listeners
- Values are stored using `curr`, `prev`, and `operator`
- Calculations are executed dynamically
- Display updates instantly as inputs are entered

## Responsive Design

- Optimized for desktop and mobile devices
- Media queries for screens below **600px** and **400px**
- Adaptive button sizing and display scaling

## Error Handling

- Prevents division by zero
- Prevents square root of negative numbers
- Displays `"Error"` for invalid operations
- Automatically resets after errors


## Installation
1. Download or clone the repository
2. Open the project folder
git clone https://github.com/Thazu121/calculator.git


##  Future Improvements

- Keyboard input support

- Calculation history

- Scientific mode

- Theme toggle (dark/light)



