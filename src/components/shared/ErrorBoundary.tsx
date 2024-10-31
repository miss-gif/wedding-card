// 기본적으로 렌더링 중에 애플리케이션에서 오류가 발생하면 React는 화면에서 UI를 제거합니다.

import React from 'react'

interface ErrorBoundaryProps {
  fallback: React.ReactNode
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log(error)
    console.log(info)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <h1>에러가 발생했습니다.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
