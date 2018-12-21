import React, { Component } from 'react';
import axios from 'axios';
import dedupe from './function'

class DataConso extends Component {
  constructor() {
    super();
    this.state = {allDatas: [],
                  sum: [],
                  isLoaded: false};
  };

  loadAllWebSite = () => {
    axios.get(`http://localhost:8000/datawebSite`)
      .then(response => this.setState({
        allDatas: response.data.allData,
        isLoaded : true}));
  };

  componentDidMount() {
    this.loadAllWebSite();
  };



  render() {
    const { allDatas , isLoaded } = this.state;

    const dedupeWebSiteNAme = dedupe(allDatas.map(item => item.webSiteName));

    ////
    //// LA IL FAUT FAIRE LE REDUCER
    ////

    console.log(dedupeWebSiteNAme);
    if (!isLoaded) return <div>Loading...</div>
    return (
      <ul>
          {dedupeWebSiteNAme.map((item) =>
            <p key={item.id}>
              {/* <span>    AFFICHER LA SOMME LES OCTELS POUR CHAQUE SITE A PRIORI RECOLTER AVEC LE REDUCER  </span> */}
              <span>{item}  </span>
            </p>)}
      </ul>
    );
  };
};

export default DataConso;