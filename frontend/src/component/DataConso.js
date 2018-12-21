import React, { Component } from 'react';
import axios from 'axios';
import dedupe from './function'
import './DataConso.css';
import deux from '../2.png';
import trois from '../3.png';
import un from '../1.png'
import panda from './panda.png'

class DataConso extends Component {
  constructor() {
    super();
    this.state = {
      allDatas: [],
      sum: [],
      isLoaded: false
    };
  };

  loadAllWebSite = () => {
    axios.get(`http://localhost:8000/datawebSite`)
      .then(response => this.setState({
        allDatas: response.data.allData,
        isLoaded: true
      }));

  };

  componentDidMount() {
    this.loadAllWebSite();
  };



  render() {
    const { allDatas, isLoaded } = this.state;
    const order = allDatas.sort(function (a, b) { return b.Octel - a.Octel; });

    const dedupeWebSiteNAme = dedupe(order.map(item => item.webSiteName + '   '+''+ item.Octel));
    const newdedupeWebSiteNAme = dedupeWebSiteNAme.filter(function(link){
      return link.includes("http")
    })

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const reducData = Math.round(allDatas.map(item => item.Octel).reduce(reducer, allDatas.length) / 1000)
    const mailweight = Math.round(reducData / 1000)
    const co2 = mailweight * 19 / 1000

    ////
    //// LA IL FAUT FAIRE LE REDUCER
    ////
    console.log('alldata',allDatas)
    console.log('dedupeweb',newdedupeWebSiteNAme);
    console.log('tutu', reducData)
    console.log('order', order)
    if (!isLoaded) return <div>Loading...</div>
    return (
      <div class="DataConso">
      <ul>
        <h1>{reducData} Kilobytes</h1>
        <h2>Environ {mailweight} mails envoyés</h2>
        <h3> {co2}Kg de CO2 rejeté</h3><img src={panda}/>
        <h4>gràce à vous, à nous <br/>
        et à nos trois gagnants</h4> 
        <div class="result">
        <img src={un}/> <p>{newdedupeWebSiteNAme[0]} octets.</p>
        <img src={deux}/> <p>{newdedupeWebSiteNAme[1]} octets.</p>
        <img src={trois}/><p>{newdedupeWebSiteNAme[2]} octets.</p>
        </div>
        {/* {newdedupeWebSiteNAme.map((item) =>
          <p key={item.id}>
            <span>{item} </span>
          </p>)} */}
      </ul>
      </div>
    );
  };
};

export default DataConso;