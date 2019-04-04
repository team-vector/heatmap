import React, { PureComponent } from 'react';

class Form extends PureComponent {
  state = {
    procedure: '',
    zipcode: ''
  }

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state.procedure);
  }

  updateInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { procedure, zipcode } = this.state;
    return(
      <form onSubmit={this.onSubmit} className={'form'}>
      <input type="text" name="procedure" placeholder={'Procedure'} value={procedure} onChange={this.updateInput} />
      <input type='text' maxLength='5' name='zipcode' value={zipcode} placeholder={'Zipcode'} onChange={this.updateInput} required />
      <button type='submit'><i className="fas fa-search"></i></button>
      </form>
    );
  }
}

export default Form;