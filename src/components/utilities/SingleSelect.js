import React, { Component, Fragment } from 'react';
import Select from 'react-select';

export default class SingleSelect extends Component{
    constructor(){
        super()
        this.state = {
          isClearable: true,
          isDisabled: false,
          isLoading: false,
          isSearchable: true,
        };

    }

  render() {
    const {
      isClearable,
      isSearchable,
    //   isDisabled,
      isLoading,
    } = this.state;

    return (
      <Fragment>
        <Select
          className="basic-single"
          classNamePrefix="select"
          // defaultValue={this.props.optionName[0]}
          isDisabled={false}
          isLoading={isLoading}
          isClearable={isClearable}
          isSearchable={isSearchable}
          name="color"
          options={this.props.optionName}
        />
      </Fragment>
    );
  }
}
