import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import carData from './carData.json';
import { useParams } from 'react-router-dom';
import './Car.css';



function Car({ match }) {
  const [searchQuery, setSearchQuery] = useState('');

  const car=carData.cars;
  const carsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredCars = carData.cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = 10
 
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const carsToDisplay = filteredCars.slice(startIndex, endIndex);
 
  

  return (
    <div>
      <div className="container mt-10 " style={{backgroundColor:"blue"}}>
      <div className="row ">
          <div className="search-option col-md-6 offset-md-3  mt-10 w-25 daby2">
            <input
              type="text"
              className="form-control"
              placeholder="Search by car name"
              value={searchQuery}
              onChange={handleSearchChange}
             
            />
          </div>
        </div>
      <div className="row dapy1" >
        {carsToDisplay.map((car, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-3" >
              <img
                src={car.imgSrc}
                className="card-img-top"
                alt={car.name}
                style={{ height: '200px', objectFit: 'cover', padding:"8px 8px" }}
              />
              <div className="card-body">
               <div className='ca'>
               <h5 className="card-title">{car.name}</h5>
                <p className="card-text-1">{car.year}</p>
               </div>
               <div className='ca'>
                <p className="card-text">
                    <i className="bi bi-people" style={{color:"blue"}}></i>{" "}{car.seatingCapacity}</p>
                    <p className="card-text"> <i class="bi bi-fuel-pump" style={{color:"blue"}}></i>{" "}{car.fuel}</p>
                    </div>
                    <div className='ca'>
                    <p className="card-text"><i class="bi bi-speedometer2" style={{color:"blue"}}></i>{" "} {car.mileage}</p>
                    <p className="card-text"><i class="bi bi-gear" style={{color:"blue"}}></i>{" "} {car.type}</p>


                    </div>
                
                    <div className='ca'>
                <p className="card-text">Rent Per Month: ${car.rentPerMonth}</p>
                <button className="btn btn-primary">Rent Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
 
    <div className="pagein ml-3">
      Page {currentPage} of {totalPages}
    </div>
<div className=" page col-md-12 text-center">
  <nav aria-label="Page navigation">
    <ul className="pagination">
      <li
        className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
      >
        <Link
          to={`/page/${currentPage - 1}`}
          className="page-link"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </Link>
      </li>

      {/* Display hardcoded page numbers */}
      {Array.from({ length: 10 }).map((_, page) => (
        <li key={page} className={`page-item`}>
          <Link
            to={`/page/${page + 1}`}
            className={`page-link ${currentPage === page + 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(page + 1)}
          >
            {page + 1}
          </Link>
        </li>
      ))}

      <li
        className={`page-item ${currentPage >= totalPages ? 'disabled' : ''}`}
      >
        <Link
          to={`/page/${currentPage + 1}`}
          className="page-link"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </Link>
      </li>
    </ul>
    
  </nav>
</div>
</div>




     
   
  );
}

export default Car;
