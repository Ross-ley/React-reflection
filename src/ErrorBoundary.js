import React, {Component} from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Sorry this dosn't exist.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;