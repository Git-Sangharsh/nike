import React, { useEffect, useState } from "react";
import "./View.css";
import api from "../api/Api";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";

const View = (props) => {

  // const anotherSize = props.anotherSize;
  const [viewSubproduct, setViewSubProduct] = useState([]);

  // console.log("anotherSize is",anotherSize)
  //select size
  const [shoesSize, setShoesSize] = useState("");

  const params = useParams();

  // const { updateShoesSize } = props; // This is how you destructure a prop in a functional component

const handelSize = (z) => {
  setShoesSize(z);
  // console.log("Selected size is", z, );
};

  // console.log(shoesSize)
  useEffect(() => {
    // converting parma.id to integer
    const paramsInt = parseInt(params.id);

    //filtering the data based on our params id
    const filterDataImg = api.filter((item) => item.id === paramsInt);

    setViewSubProduct(filterDataImg);
  }, [params.id]);

  // console.log('viewProduct',viewSubproduct)

  return (
    <div className="View">
      <div className="view-wrapper">
        <div className="view-wrapper-div">
          <div className="parrent-car-div">
            <Carousel
              className="car-div"
              key={viewSubproduct.length}
              autoPlay={true}
              interval={2000}
              infiniteLoop={true}
              showArrows={false}
              showIndicators={true}
              showThumbs={false}
              showStatus={false}
            >
              {viewSubproduct[0] && viewSubproduct[0].subImg ? (
                viewSubproduct[0].subImg.map((i) => (
                  <div className="subimg-div" key={i.id}>
                    <img src={i.imgs} alt="" className="i-imgs-img" />
                  </div>
                ))
              ) : (
                <p>Loading Image</p>
              )}
            </Carousel>
          </div>

          <div className="shoes-detail">
            {viewSubproduct.map((i) => (
              <div className="shoes-detail-map-div" key={i.id}>
                <h1>{i.title}</h1>
                <h5>Men's Shoes</h5>
                <h4>{i.price}</h4>
                <h3>
                  incl. of taxes <br />
                  (Also includes all applicable duties)
                </h3>
              </div>
            ))}
            <div className="select-size">
              <div className="size-guide">
                <h2>Select Size</h2>
                <h3>Size Guide</h3>
              </div>

              <div className="known-div">
                {shoesSize ? (
                  viewSubproduct[0] && viewSubproduct[0].sizes ? (
                    viewSubproduct[0].sizes.map((i) => (
                      <div className="select-size-btn" key={i.id}>
                        <button onClick={() => handelSize(i.size)}>
                          {i.size}
                        </button>
                      </div>
                    ))
                  ) : (
                    <p>Loading Image</p>
                  )
                ) : viewSubproduct[0] && viewSubproduct[0].sizes ? (
                  viewSubproduct[0].sizes.map((i) => (
                    <div className="select-size-btn" key={i.id} onClick={() => props.anotherSize(i.size)}>
                      <button onClick={() => handelSize(i.size)}>
                        {i.size}
                      </button>
                    </div>
                  ))
                ) : (
                  <p>loading image</p>
                )}
              </div>

              <div className="add-to-bag">
                {
                  //if shoes size is selected change the root
                  shoesSize
                    ? viewSubproduct?.map((i) => (
                        <Link to={`/cart/${i.id}`} key={i.id}>
                          <button className="only-bag">Add to Bag</button>
                          <h1>{i.desc}</h1>
                        </Link>
                      ))
                    : viewSubproduct?.map((i) => (
                        <div className={"not-selected-div"} key={i.id}>
                          <button>Add to Bag</button>
                          <h1>{i.desc}</h1>
                        </div>
                      ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
