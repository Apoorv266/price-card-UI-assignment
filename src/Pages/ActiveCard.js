import React from 'react'

const ActiveCard = ({data}) => {
  return (
    <div className="card active">
      <div className='ribbon'>
        <p>Best {data.plan}</p>
      </div>
      <ul>
        <li className="pack">
          <div className="align">
            <h1>Swish {data.plan}</h1>
          </div>
        </li>
        <li>
          <div className="align">
            <p className='title-head'>Lorem ipsum dolor dit amet</p>
          </div>
        </li>
        <li>
          <p className="faded-text title-text">
            Lorem ipsum dolor dit amet, Lorem ipsum dolor dit amet, Lorem
            ipsum dolor dit amet
          </p>
        </li>
        <li className="bottom-bar top-bar">
          <div className="grid-items">
            <div>
              <h4>Free</h4>
              <p className="faded-text">Activation</p>
            </div>
            <div className="second-item">
              <h4>400 mbps</h4> <p className="faded-text">Upload + download</p>
            </div>
            <div>
              <h4>24 months</h4>
              <p className="faded-text">Contract</p>
            </div>
          </div>
        </li>
        <li>
          <div className="align">
            <h4>Activation</h4>
          </div>
        </li>
        <li>
          <div className="align desc-text faded-text">
            <p>Lorem ipsum is just dummy text for printing and typesetting industry.</p>
          </div>
        </li>
        <div className="renew bottom-bar faded-text">
          <p>Enable auto-renewal</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <li>
          <div className="price align">
            <h1>$45</h1>
            <p className="faded-text">/per month</p>
          </div>
        </li>
        <li>
          <button className="btn">Pay ${data.price}</button>
        </li>
      </ul>
    </div>
  )
}

export default ActiveCard