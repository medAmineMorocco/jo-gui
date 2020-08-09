import React from "react";
import "./accordion.css";

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.state = { active: false };
  }

  toggleAccordion() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <div className="accordion-container">
        <button
          className={this.state.active ? "accordion active" : "accordion"}
          onClick={this.toggleAccordion}
          style={this.props.style}
        >
          <h3>{this.props.title}</h3>
          <div className={this.state.active ? "panel panel-active" : "panel"}>
            {this.props.renderedParagraphs}
            {!!this.props.source && (
              <div className="panel-section-source">
                Source : <a href={this.props.source}>{this.props.source}</a>
              </div>
            )}
          </div>
        </button>
      </div>
    );
  }
}
