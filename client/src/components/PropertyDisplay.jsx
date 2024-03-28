import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
/* @import "bootstrap/scss/bootstrap"; */

function PropertyDisplay (props) {
  const { propertyList, setPropertyList } = props

  const [properties, setProperties] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('http://localhost:1910/api/properties')
      .then(res => {
        console.log(res.data)
        setProperties(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const deleteButton = propertyIdFromBelow => {
    let filteredProperties = properties.filter(
      property => property._id !== propertyIdFromBelow
    )
    setProperties(filteredProperties)
    //store.id is from the map() function, mapping through and displaying the whole list. storeId is the id entered by the deleteButton().
    /* const removeBox = (idFromBelow)=>{
let filteredBoxArray = arrayStringColorBox.filter((box)=>box.id !== idFromBelow);
setArrayStringColorBox(filteredBoxArray); */

    axios
      .delete(`http://localhost:1910/api/${propertyIdFromBelow}`)
      // .delete(`http://localhost:9000/api/stores/${store.id}` */)
      /*  .delete(`/${id}`)*/
      .then(res => {
        console.log(res.data)

        navigate(`/`) // Navigate to the homepage after deletion
      })
      .catch(err => console.log(err))
  }

  return (
    <>

            <div className='header-wrapper'>
              {/* Button to navigate to the Catalog page. */}

              <div className='titles'>
                <h1 className='title'>FORECLOSURE LIST</h1>
                <h3 className='sub-title'>All Foreclosure Listings</h3>
              </div>
            </div>
          
        

        <div className='row'>
          <table class='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>#</th>
                <th scope='col-m-1'>Street Number</th>
                <th scope='col-m-1'>Street Name</th>
                <th scope='col-m-1'>Unit Identifiers</th>
                <th scope='col-m-1'>Geographic Location</th>
                <th scope='col-m-1'>State</th>
                <th scope='col-m-1'>Zip Code</th>
                <th scope='col-m-1'>Default Date</th>
                <th scope='col-m-.5'>Listed Date</th>
                <th scope='col-m-.5'>Auction Date</th>
                <th scope='col-m-1'>Starting Bid</th>
                <th scope='col-m-1'>Documents</th>
                <th scope='col-m-1'>Details</th>
                <th scope='col-m-1'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/*  We are mapping through our books getter to receive an array of
          objects? showing property street number, street name, author, page count, availability and
          buttons linking to BookDetails. */}

              {properties.map((property, index) => (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{property.streetNumber}</td>
                  <td>{property.streetName}</td>
                  <td>{property.unitIdentifiers}</td>
                  <td>{property.geographicLocation}</td>
                  <td>{property.state}</td>
                  <td>{property.zipCode}</td>
                  <td>{property.defaultDate}</td>
                  <td>{property.listingDate}</td>
                  <td>{property.auctionDate}</td>
                  <td>{property.startingBid}</td>
                  <td>{property.documentUpload}</td>
                  <td>
                    <Link
                      className='link'
                      to={`/properties/${property._id}/details`}
                    >
                      {property.propertyDetails}
                    </Link>
                  </td>
                  <td>
                    <button
                      className='delete-button'
                      onClick={() => deleteButton(property._id)}
                    >
                      Delete
                    </button>

                    {/*  <Link to={`/meals/${meal._id}/details`}>Details</Link> |{" "}
                <Link to={`meals/${meal._id}/edit`}>Edit</Link> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </>
  )
}

export default PropertyDisplay
