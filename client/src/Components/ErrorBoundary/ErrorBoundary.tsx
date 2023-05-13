import React, { FC, ReactNode } from "react";
import { ErrorScreen } from "../ErrorScreen/ErrorScreen";
export interface IError {
  error: Error;
}
interface IProps {
  children?: ReactNode;
  fallback?: FC<IError>;
}
interface IState {
  error?: Error | null;
}
export default class ErrorBoundary extends React.Component<IProps, IState> {
  state = {
    error: null
  };

  static getDerivedStateFromError(error: Error): IState {
    return {
      error
    };
  }

  render(): ReactNode {
    const { error } = this.state;
    const { children, fallback } = this.props;

    const FallbackComponent = fallback || ErrorScreen;

    if (error) return <FallbackComponent error={error} />;
    return children;
  }
}
