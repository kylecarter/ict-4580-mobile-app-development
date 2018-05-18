'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

const Option = ( option, idx )=> <option key={ 'react.option.' + idx } value={ option.value }>{ option.label }</option>

export default class SelectList extends React.Component {
  constructor( props ) {
    super( props );
    const i = this.default(this.props.options);
    this.state = _.defaults( _.clone( props ), {
      required: false,
      value: i > -1 ? options[i].value : ''
    });

    this.default = this.default.bind( this );
    this.change = this.change.bind( this );
  }

  render() {
    const { id, options, required, value } = this.state;
    return(<div className="form-row form-selectlist">
      <label htmlFor="example-selectlist" className={ required ? 'required' : '' }>Example Select</label>
      <select id={ id } className={[ 'custom-select', value !== '' ? 'valued' : '' ].join( ' ' ).trim() } defaultValue={ value } onChange={ this.change } >
        <option value="" disabled="disabled">Select an available option...</option>
        { options.map( Option ) }
      </select>
    </div>)
  }

  default( options ) {
    return _.findIndex( options, { selected: true } );
  }

  change( e ) {
    this.setState({ value: e.target.value });
  }
}
