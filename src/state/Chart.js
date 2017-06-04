import React, {Component} from "react"
import PieChart from "react-svg-piechart"

export default class MyComponent extends Component {

  constructor() {
    super()

    this.state = {
      expandedSector: null,
    }

    this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this)
  }

  handleMouseEnterOnSector(sector) {
    this.setState({expandedSector: sector})
  }

  render() {

    const {expandedSector} = this.state

    return (
      <div>
        <PieChart
          data={ this.props.data }
          expandedSector={expandedSector}
          onSectorHover={this.handleMouseEnterOnSector}
          sectorStrokeWidth={2}
          expandOnHover
        />
        <div>
          {
            this.props.data.map((element, i) => (
              <div key={i}>
                <span style={{background: element.color}}></span>
                <span style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>
                  {element.label} : {element.value}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
