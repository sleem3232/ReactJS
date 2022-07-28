import React, { PureComponent } from 'react'

 class PureComponents extends PureComponent {
  render() {
    console.log("pure")
    return (
      <div>PureComponents
                    {this.props.name}

      </div>
    )
  }
}

export default PureComponents