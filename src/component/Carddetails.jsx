import React from "react";
import "./Style.css";

const Carddetails = () => {
  return (
    <>
      <main className="container mt-4">
        <h2 className="text-center">Item Details Page</h2>
        <div className="main">
          <div className="cardx mb-3">
            <div class="row">
              <div class="col">
                <img
                  src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
                  alt="..."
                  style={{ maxWidth: "100%" }}
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col">
                <div className="card-body">
                  {/* <div className="col"> */}
                  <table className="table">
                    <tr>
                      <td>
                        <p className="paragraph_right">
                          <strong>Restaurant :</strong>
                          <span className="list">Massala Theoryy</span>
                        </p>
                        <p className="paragraph_right">
                          <strong>Price :</strong>
                          <span className="list">₹360</span>
                        </p>
                        <p className="paragraph_left">
                          <strong className="text-end">Dishes :</strong>
                          <span className="list">
                            North Indian biryani Massala
                          </span>
                        </p>
                        <p className="paragraph_left">
                          <strong className="text-end">Total :</strong>
                          <span className="list">₹300</span>
                        </p>
                      </td>
                      <td>
                        <p className="paragraph_right">
                          <span>
                            {" "}
                            <strong>Rating :</strong>
                            <span className="star">3.0⋆</span>
                          </span>
                        </p>
                        <p className="paragraph">
                          <span>
                            <strong>Order Review : </strong>
                            <span className="review">⋆⋆⋆⋆</span>
                          </span>
                        </p>
                        <p className="paragraph">
                          <strong className="">Remove :</strong>
                          <span className="list">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              color="red"
                              fill="currentColor"
                              class="bi bi-trash3-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                            </svg>
                          </span>
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Carddetails;
