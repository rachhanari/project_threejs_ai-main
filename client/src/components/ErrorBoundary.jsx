import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error("Error in Environment:", error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ color: "red" }}>Failed to load HDRI environment</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
