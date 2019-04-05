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
      <>
        <form onSubmit={this.onSubmit} className={'form'}>
        <input type="text" name="procedure" placeholder={'Procedure'} value={procedure} onChange={this.updateInput} />
        <input type='text' maxLength='5' name='zipcode' value={zipcode} placeholder={'Zipcode'} onChange={this.updateInput} required />
        <button type='submit'><i className="fas fa-search"></i></button>
        </form>
        {procedure.toLowerCase() === 'hernia repair' ? <iframe title="hernia repair" src="https://www.google.com/maps/d/u/4/embed?mid=18D4qtSCHU8-Vkscaj7Coj9ozPuDvsJzQ" width="640" height="480"></iframe> 
          : procedure.toLowerCase() === 'thyroidectomy' ? <iframe title="thyroidectomy" src="https://www.google.com/maps/d/u/4/embed?mid=1xs_r4ZjQpXzxLtvEn6UQzcYXiPwnzNJ8" width="640" height="480"></iframe>
          : procedure.toLowerCase() === 'cataract' ? <iframe title="cataract" src="https://www.google.com/maps/d/u/4/embed?mid=1gI2Wwv_6l7T6IioM35B5VVWmMMRu-_2w" width="640" height="480"></iframe>
          : procedure !== null ? <iframe title="current location" src="https://www.google.com/maps/d/u/4/embed?mid=11bwg80ejW569wbQXxb0aiitl5KiJjX7u" width="640" height="480"></iframe> : ''}
      </>
    );
  }
}

export default Form;
