import React from 'react';

import axios from 'axios';

export default class Doencas extends React.Component {
  state = {
    doencas: [
      {
          ok: true,
          data: [{
              label: "Dor de cabeça",
              id: 1
          }, {
             label: "Dor nas costas",
             id: 2
         }]
      }
      ]
  }

  componentDidMount() {
    axios.get('https://assina-prontuario.herokuapp.com')
      .then(res => {
        const doencas = res.data;
        this.setState({ doencas });
      })
  }

  render() {
    return (
      <ul>
        { this.state.doencas.map(doencas => <li>{doencas.label}</li>)}
      </ul>
    )
  }
}

/*const api = axios.get({
  method: 'get',
  url: 'https://assina-prontuario.herokuapp.com',
  responseType: 'json'
})

//'https://assina-prontuario.herokuapp.com' */


    /*state = {
    doencas: [
      {
          ok: true,
          data: [{
              label: "Dor de cabeça",
              id: 1
          }, {
             label: "Dor nas costas",
             id: 2
         }]
      }
      ]
  }*/