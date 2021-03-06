'use strict';

import React from 'react';

import {Row, Label, Control} from './components';

export default class Select extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options
    }
  }

  render() {
    return (
      <Row>
        <Label>{this.props.label}</Label>
        <Control>
          <select
            onChange={this.handleChange.bind(this)}
            defaultValue={this.props.value}
            style={{
              backgroundColor: this.context.style.lowlight,
              color: this.context.style.highlight,
              font: this.context.style.font,
              height: this.context.style.computed.itemHeight,
              lineHeight: this.context.style.computed.itemHeight,
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              userSelect: 'none',
              MozAppearance: 'none',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            {this.state.options.map(function(opt,index) {
              return (
                <option
                  value={opt}
                  key={opt + index}
                  style={{
                    backgroundColor: this.context.style.font,
                  }}
                >
                  {opt}
                </option>
              )
            }.bind(this))}
          </select>
        </Control>
      </Row>
    )
  }

  handleChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
    if (this.props.onFinishChange) {
      this.props.onFinishChange(e.target.value);
    }
  }

}

Select.propTypes = {
  options: React.PropTypes.array.isRequired,
  label: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onFinishChange: React.PropTypes.func,
};

Select.contextTypes = {
  style: React.PropTypes.object
};
