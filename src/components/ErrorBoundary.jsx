import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false, // Initial state to track whether an error has occurred
  };

  // Static method to handle errors and update state accordingly
  static getDerivedStateFromError(error) {
    return { hasError: true }; // Update state to indicate an error has occurred
  }

  // Method called when an error is caught
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo); // Log the error and error info
  }

  render() {
    // Render children normally if no error has occurred
    if (!this.state.hasError) {
      return this.props.children;
    }

    // Render an error message if an error has occurred
    return <h1>Something went wrong.</h1>;
  }
}

export default ErrorBoundary;
