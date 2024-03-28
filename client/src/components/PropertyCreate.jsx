//We'll need useState to track User Input
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
/* import PropertyDisplay from './PropertyDisplay.jsx'; */

function PropertyCreate (props) {
  const { propertyList, setPropertyList } = props

  const [properties, setProperties] = useState([])

  const [streetName, setStreetName] = useState('')
  const [streetNumber, setStreetNumber] = useState(0)
  const [unitIdentifiers, setUnitIdentifiers] = useState('')
  const [geographicLocation, setGeographicLocation] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState(0)
  const [defaultDate, setDefaultDate] = useState()
  const [listingDate, setListingDate] = useState()
  const [auctionDate, setAuctionDate] = useState()
  const [startingBid, setStartingBid] = useState(0)
  const [documentUpload, setDocumentUpload] = useState(false)
  const [propertyDetails, setPropertyDetails] = useState('')

  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  const streetNameHandler = e => {
    setStreetName(e.target.value)
  }

  const streetNumberHandler = e => {
    setStreetNumber(e.target.value)
  }

  const unitIdentifiersHandler = e => {
    setUnitIdentifiers(e.target.value)
  }

  const geographicLocationHandler = e => {
    setGeographicLocation(e.target.value)
  }

  const stateHandler = e => {
    setState(e.target.value)
  }

  const zipCodeHandler = e => {
    setZipCode(e.target.value)
  }

  const defaultDateHandler = e => {
    setDefaultDate(e.target.value)
  }

  const listingDateHandler = e => {
    setListingDate(e.target.value)
  }

  const auctionDateHandler = e => {
    setAuctionDate(e.target.value)
  }

  const startingBidHandler = e => {
    setStartingBid(e.target.value)
  }

  const documentUploadHandler = e => {
    setDocumentUpload(e.target.value)
  }

  const propertyDetailsHandler = e => {
    setPropertyDetails(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()

    axios
      .post('http://localhost:1910/api/properties', {
        streetName,
        streetNumber,
        unitIdentifiers,
        geographicLocation,
        state,
        zipCode,
        defaultDate,
        listingDate,
        auctionDate,
        startingBid,
        documentUpload,
        propertyDetails
      })

      .then(res => {
        /*   console.log(res);
        console.log(res.data); */
        setPropertyList([...propertyList, res.data])
        navigate('/')
      })
      .catch(err => {
        console.log(err)
        setErrors(err.response.data.errors)
      })
  }
  return (
    <div className='row'>
      <div className='header-wrapper2'>
        {/* Button to navigate to the Catalog page. */}
        <div className='titles'>
          {/*  <h1 className="title">FORECLOSURE LIST</h1> */}
          <h3 className='sub-title'>Add Foreclosure Property</h3>
        </div>
      </div>

      <div className='form-wrapper'>
        <form onSubmit={submitHandler}>
          <div className='section-wrapper'>
            <div className='section1'>
              <label className='label' htmlFor='streetNumber'>
                Street Number:{' '}
              </label>
              <input
                className='input-wrapper'
                type='text'
                name='streetNumber'
                value={streetNumber}
                onChange={streetNumberHandler}
              ></input>
              {errors.streetNumber && (
                <span className='error'>{errors.streetNumber.message}</span>
              )}

              <label className='label' htmlFor='streetName'>
                Street Name:{' '}
              </label>&nbsp;
              <input
                className='input-wrapper'
                type='text'
                name='streetName'
                value={streetName}
                onChange={streetNameHandler}
              ></input>&nbsp;&nbsp;
              {errors.streetName && (
                <span className='error'>{errors.streetName.message}</span>
              )}

              <label className='label' htmlFor='unitIdentifiers'>
                Unit Identifiers:{' '}
              </label>&nbsp;
              <input
                className='input-wrapper'
                type='text'
                name='unitIdentifiers'
                value={unitIdentifiers}
                onChange={unitIdentifiersHandler}
              ></input>&nbsp;&nbsp;
              {errors.unitIdentifiers && (
                <span className='error'>{errors.unitIdentifiers.message}</span>
              )}
            

              <label className='label' htmlFor='geographicLocation'>
                Geographic Location:{' '}
              </label>&nbsp;
              <input
                className='input-wrapper'
                type='text'
                name='geographicLocation'
                value={geographicLocation}
                onChange={geographicLocationHandler}
              ></input>&nbsp;&nbsp;
              {errors.geographicLocation && (
                <span className='error'>
                  {errors.geographicLocation.message}
                </span>
              )}

              <label className='label' htmlFor='state'>
                State:{' '}
              </label>&nbsp;
              <input
                className='input-wrapper'
                type='text'
                name='state'
                value={state}
                onChange={stateHandler}
              ></input>&nbsp;&nbsp;
              {errors.state && (
                <span className='error'>{errors.state.message}</span>
              )}

              <label className='label' htmlFor='zipCode'>
                Zip Code:{' '}
              </label>&nbsp;
              <input
                className='input-wrapper'
                type='number'
                name='zipCode'
                value={zipCode}
                onChange={zipCodeHandler}
              ></input>&nbsp;&nbsp;
              {errors.zipCode && (
                <span className='error'>{errors.zipCode.message}</span>
              )}
            </div>

            
            <div className='section2'>
              <label className='label' htmlFor='defaultDate'>
                Default Date:{' '}
              </label>&nbsp;
              <input
                className='input-wrapper'
                type='date'
                name='defaultDate'
                value={defaultDate}
                onChange={defaultDateHandler}
              ></input>&nbsp;&nbsp;
              {errors.defaultDate && (
                <span className='error'>{errors.defaultDate.message}</span>
              )}

              <label className='label' htmlFor='listingDate'>
                Listing Date:{' '}
              </label>&nbsp;
              <input
                className='input-wrapper'
                type='date'
                name='listingDate'
                value={listingDate}
                onChange={listingDateHandler}
              ></input>&nbsp;&nbsp;
              {errors.listingDate && (
                <span className='error'>{errors.listingDate.message}</span>
              )}

              <label className='label' htmlFor='auctionDate'>
                Auction Date:{' '}
              </label>&nbsp;
              <input
                className='input-wrapper'
                type='date'
                name='auctionDate'
                value={auctionDate}
                onChange={auctionDateHandler}
              ></input>&nbsp;&nbsp;
              {errors.auctionDate && (
                <span className='error'>{errors.auctionDate.message}</span>
              )}

              <label className='label' htmlFor='startingBid'>
                Starting Bid:{' '}
              </label>&nbsp;
              <input
                className='input-wrapper'
                type='number'
                name='startingBid'
                value={startingBid}
                onChange={startingBidHandler}
              ></input>&nbsp;&nbsp;
              {errors.startingBid && (
                <span className='error'>{errors.startingBid.message}</span>
              )}

              <label className='label' htmlFor='documentUpload'>
                Document Upload:{' '}
              </label>&nbsp;
              <input
                className='input-wrapper'
                type='text'
                name='documentUpload'
                value={documentUpload}
                onChange={documentUploadHandler}
              ></input>&nbsp;&nbsp;
              {errors.documentUpload && (
                <span className='error'>{errors.documentUpload.message}</span>
              )}

              <label className='label' htmlFor='propertyDetails'>
                Property Details:{' '}
              </label>&nbsp;
              <input
                className='input-wrapper'
                type='text'
                name='propertyDetails'
                value={propertyDetails}
                onChange={propertyDetailsHandler}
              ></input>&nbsp;&nbsp;
              {errors.propertyDetails && (
                <span className='error'>{errors.propertyDetails.message}</span>
              )}
              
            </div>
            
          </div>
          <button className='button'>Add Property</button>
        </form>
      </div>
    </div>
  )
}

export default PropertyCreate
