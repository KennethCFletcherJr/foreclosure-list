import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const PropertyUpdate = () => {
  /*  const [property, setProperty] = useState({}); */

  const [streetName, setStreetName] = useState('')
  const [streetNumber, setStreetNumber] = useState(0)
  const [unitIdentifiers, setUnitIdentifiers] = useState('')
  const [geographicLocation, setGeographicLocation] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState(0)
  const [defaultDate, setDefaultDate] = useState(new Date('1970-01-01'))
  const [listingDate, setListingDate] = useState(new Date('1970-01-01'))
  const [auctionDate, setAuctionDate] = useState(new Date('1970-01-01'))
  const [startingBid, setStartingBid] = useState(0)
  const [documentUpload, setDocumentUpload] = useState(false)
  const [propertyDetails, setPropertyDetails] = useState('')

  const { id } = useParams()
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

  useEffect(() => {
    axios
      .get(`http://localhost:1910/api/properties/${id}`)
      .then(res => {
        console.log('Testing')
        setStreetNumber(res.data.streetNumber)
        setStreetName(res.data.streetName)
        setUnitIdentifiers(res.data.unitIdentifiers)
        setGeographicLocation(res.data.geographicLocation)
        setState(res.data.State)
        setZipCode(res.data.zipCode)
        setDefaultDate(res.data.defaultDate)
        console.log(res.data.defaultDate)
        setListingDate(res.data.listingDate)
        setAuctionDate(res.data.auctionDate)
        setStartingBid(res.data.startingBid)
        setDocumentUpload(res.data.documentUpload)
        setPropertyDetails(res.data.propertyDetails)
      })

      .catch(err => {
        console.log(err)
      })
  }, [id])

  const submitHandler = e => {
    e.preventDefault()

    axios
      .put(`http://localhost:1910/api/properties/${id}`, {
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
        console.log(res)
        console.log(res.data)
        navigate(`/properties/${id}/details`)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
     <div className='row'>
      <div className='header-wrapper2'>
        {/* Button to navigate to the Catalog page. */}
        <div className='titles'>
          <h1 className='title'>Edit Property</h1>
          <h3 className='sub-title'>{`Edit Property: ${streetNumber}${streetName}`}</h3>
        </div>
        <div className='link'>
        <Link to={`/properties/${id}/details`}>Property Details</Link>
      </div>
      </div>

      <div className='form-wrapper'>
        <form onSubmit={submitHandler}>
          <div className='section-wrapper'>
            <div className='section1'>
              <label className='label' htmlFor='streetNumber'>
                Street Number:{' '}
              </label>&nbsp;
              <input
                className='input-wrapper'
                type='text'
                name='streetNumber'
                value={streetNumber}
                onChange={streetNumberHandler}
              ></input>&nbsp;&nbsp;
              {/* {errors.streetNumber && (
                <span className="error">{errors.streetNumber.message}</span>
              )} */}

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
              {/* {errors.streetName && (
                <span className="error">{errors.streetName.message}</span>
              )} */}

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
              {/* {errors.unitIdentifiers && (
                <span className="error">{errors.unitIdentifiers.message}</span>
              )} */}
              {/*  </div>

            <div className="section2">
              <h4>Ingredients -- Optional!</h4> */}

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
              {/* {errors.geographicLocation && (
                <span className="error">{errors.geographicLocation.message}</span>
              )} */}

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
              {/* {errors.state && (
                <span className="error">{errors.state.message}</span>
              )} */}

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
            </div>
            {/* {errors.zipCode && (
                <span className="error">{errors.zipCode.message}</span>
              )} */}
            {/*  </div>
              onChange={auctionDateHandler}
            ></input>
            {/* {errors.auctionDate && (
                <span className="error">{errors.auctionDate.message}</span>
              )} */}
            <div className='section2'>
              <div className='label-input'>
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
              </div>
              {/* {errors.startingBid && (
                <span className="error">{errors.startingBid.message}</span>
              )} */}

              <div className='label-input'>
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
              </div>
              {/* {errors.documentUpload && (
                <span className="error">{errors.documentUpload.message}</span>
              )} */}
              <div className='label-input'>
                <label className='label' htmlFor='propertyDetails'>
                  Property Details:{' '}
                </label>&nbsp;
                <input
                  className='input-wrapper'
                  type='text'
                  name='propertyDetails'
                  value={propertyDetails}
                  onChange={propertyDetailsHandler}
                ></input>
              </div>
              {/* {errors.propertyDetails && (
                <span className="error">{errors.propertyDetails.message}</span>
              )} */}
            </div>
          </div>
          <button className='button'>UPDATE</button>
        </form>
      </div>
      </div>
    </>
  )
}

export default PropertyUpdate

//onSubmit={submitHandler}
