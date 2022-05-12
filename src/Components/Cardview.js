import React from 'react'

export default function Cardview() {
  return (
    <div >
 <section className="py-11 bg-light-gradient border-bottom border-white border-5">
        <div
          className="bg-holder overlay overlay-light"
          style={{
            backgroundImage: "url(../assets/img/outfit-2.jpg)",
            backgroundSize: "cover",
          }}
        ></div>
 {/* the first subcomponent starts from here */}
        <div className="container">
          <div className="row flex-center">
            <div className="col-12 mb-10">
              <div className="d-flex align-items-center flex-column">
                <h1 className="fw-normal">
                  {" "}
                  With an outstanding style, only for you
                </h1>
                <h1 className="fs-4 fs-lg-8 fs-md-6 fw-bold">
                  Exclusively designed for you
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0" id="header">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card card-span h-100 text-white move">
                {" "}
                <img
                  className="img-fluid"
                  src="assets/img/gallery/her.jpg"
                  width="790"
                  alt="image not available"
                />
                <div className="card-img-overlay d-flex flex-center">
                  {" "}
                   
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-span h-100 text-white">
                {" "}
                <img
                  className="img-fluid"
                  src="assets/img/gallery/he.jpg"
                  width="790"
                  alt="image not available"
                />
                <div className="card-img-overlay d-flex flex-center">
                  {" "}
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
                  
                      
    
    </div>
  )
}

