import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const PropertyDetail = () => {
  //Keep track of singular book!!! as an Object with several key: value (property: value) pairs as object literals.
  const [property, setProperty] = useState({})

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:1910/api/properties/${id}`)
      .then(res => {
        console.log(res.data)
        setProperty(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  //We don't need to invoke useEffect by a change in id here, since we are accessing only one item by id, and it's properties and values. But providing the id will prevent the error.
  //We already have the id from the axios call for details. So we can make an Axios call using that id to the back-end route, and be directed to the corresponding controller function for delete.
  const deleteProperty = () => {
    // Delete book from API
    axios
      .delete(`http://localhost:1910/api/properties/${id}`)
      .then(res => {
        console.log(res.data)
        navigate('/') // Navigate to the homepage after deletion
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className='header-wrapper'>
        {/* Button to navigate to the Catalog page. */}
        <div className='titles'>
          <h1 className='title'>Property Details</h1>
          <h3 className='sub-title'>
            {property.streetNumber} {property.streetName},{' '}
            {property.unitIdentifiers}
          </h3>
        </div>
        <div className='link-button'>
          <div className='link'>
            <Link to={`/`}>Back Home</Link>
          </div>
          <div className='link'>
            <Link to={`/properties/${property._id}/edit`}>Edit Property</Link>
          </div>

          {/* <button className="remove-button" onClick={deleteProperty}>
            Delete Property
          </button> */}
        </div>
      </div>

      {/*  <header /> */}
      <div className='row'>
        <table class='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Street Number</th>
              <th>Street Name</th>
              <th>Unit Identifiers</th>
              <th>Geographic Location</th>
              <th>State</th>
              <th>Zip Code</th>
              <th>Default Date</th>
              <th>Listed Date</th>
              <th>Auction Date</th>
              <th>Starting Bid</th>
              <th>Documents</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/*  We are mapping through our books getter to receive an array of
          objects? showing book title, author, page count, availability and
          buttons linking to BookDetails. */}
            <tr>
              <td>{property.streetNumber}</td>
              <td>{property.streetName}</td>
              <td>{property.streetNumber}</td>
              <td>{property.unitIdentifiers}</td>
              <td>{property.geographicLocation}</td>
              <td>{property.state}</td>
              <td>{property.zipCode}</td>
              <td>{property.defaultDate}</td>
              <td>{property.listingDate}</td>
              <td>{property.auctionDate}</td>
              <td>{property.startingBid}</td>
              <td>{property.documentUpload}</td>
              <td>{property.propertyDetails}</td>
              <td>
                <div className='link'>
                  <Link to={`/properties/${property._id}/edit`}>
                    Edit Details
                  </Link>
                </div>
              </td>
              <td>
                <button
                  className='delete-button'
                  onClick={() => deleteProperty(property._id)}
                >
                  Delete Property
                </button>
                {/*   <Link to={`/properties/:id/details`} onClick={() => deleteProperty(property._id)}>Delete Property</Link> */}
                {/*  <div className="link">
            <Link to={`/properties/:id/details`} className="delete-property-link" onSubmit={() => deleteProperty(property._id)}>Delete Property</Link>
           </div> */}
                {/*  <Link to={`/meals/${meal._id}/details`}>Details</Link> |{" "}
                <Link to={`meals/${meal._id}/edit`}>Edit</Link> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PropertyDetail
