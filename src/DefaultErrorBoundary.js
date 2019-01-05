import React from 'react'

export default class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  render() {
    const { isError } = this.state
    const { children } = this.props // eslint-disable-line

    return isError ? <div>Something went wrong!</div> : children
  }
}
