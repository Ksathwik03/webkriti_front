import React, { useState, useEffect } from "react";
// import { user_data } from "../../data";
import { useHistory } from "react-router-dom";
// import * as rooms from '../../Api/api';
import { ImCross } from "react-icons/im";
import { BiRightArrow } from "react-icons/bi";
import "../assets/styles/userdashboard.css";
import axios from "axios";
import { api } from "../../Api/api";
import { toast, ToastContainer } from "react-toastify";

function Userdashboard({ match }) {
  const [user_data, setuser_data] = useState({
    username: localStorage.getItem("username") || "",
    user_id: localStorage.getItem("user_id") || "",
    All_Requests: [],
  });
  const [search, setsearch] = useState("");
  const [roomsDetail, setroomsDetail] = useState([]);
  const [showRequestForm, setshowRequestForm] = useState(false);
  const [blur, setblur] = useState(false);
  const [loading, setloading] = useState(false);
  const [productLink, setproductLink] = useState("");
  const [bank, setbank] = useState("ICIC");
  const [update, setupdate] = useState(false);
  const history = useHistory();
  const [prodDet, setprodDet] = useState({});
  const [showpro, setshowpro] = useState(false);
  const [offer, setoffer] = useState({ name: "", price: "", image: "" });

  let admin = false;
  if (localStorage.getItem("username") == "admin") {
    admin = true;
  }
  // const getdetails = () => {
  //   rooms.rooms.map((item) => {
  //     if (item.link === productLink){
  //       setoffer({name:item.name,price:item.price,image:item.image})
  //     }
  //   })
  //   setshowRequestForm(false)
  //   // setloading(true)
  //   // await fetch(productLink).then(res => setprodDet(res.data))
  //   // axios.get(productLink).then((res) => {setprodDet(res.data);setloading(false);setshowpro(true)})
  //   setshowpro(true)
  // }

  const filterFucntion = ({ product_name }) => {
    return product_name.toLowerCase().indexOf(search.toLowerCase().trim()) > -1;
  };

  const [rooms, setrooms] = useState([]);
  // useEffect(() => {
  //   if (search === "") {
  //     setfilteredRequests(user_data.All_Requests);
  //   }
  //   setfilteredRequests(user_data.All_Requests.filter(filterFucntion));
  // }, [search]);

  useEffect(async () => {
    setloading(true);
    const data = await axios.get(`${api}/room`);
    // console.log(data.data.products)
    setroomsDetail(data.data.products);
    console.log(roomsDetail[0])
    setloading(false);
  },[rooms]);
  // useEffect(async () => {
  //   setloading(true)
  //   await axios.post(`${api}product/user`, headers)
  //     .then((res) => {
  //       if (res.status == 200) {
  //         console.log(res)
  //         let temp_data = user_data
  //         temp_data.All_Requests = res.data.rooms
  //         setuser_data(temp_data)
  //         setfilteredRequests(res.data.rooms)
  //       }
  //       else {
  //         toast("some error occured")
  //       }
  //       setloading(false)
  //     })
  // }, [update])

  // function tokenHandler(token){
  //   console.log(token)
  //   postProduct()
  // }

  // const postProduct = async (e) => {
  //   // e.preventDefault()
  //   setloading(true)
  //   const body = { product_name: productName, product_link: productLink, bank: bank ,"token": localStorage.getItem("token") || null }
  //   await axios.post(`${api}product/add`, body)
  //     .then((res) => {
  //       console.log(res)
  //       if (res.status == 200) {
  //         toast("Successfully added")
  //       }
  //       else {
  //         toast("Some error occured")
  //       }
  //     })
  //   setblur(false)
  //   setprodDet({});
  //   setshowpro(false)
  //   setupdate(!update)
  //   setloading(false)
  // }

  // const handleProduct = async (id) => {
  //   console.log(id)
  //   const headers = { "x-access-token": localStorage.getItem("token") || null }
  //   const body = { dealStatus: "success" }
  //   await axios.put(`${api}product/update/${id}`, headers, body)
  //     .then((res) => {
  //       console.log(res)
  //     })
  //   setupdate(!update)
  // }

  if (loading) {
    return (
      <div>
        <h1 className="loading">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className={`dashboard-main ${blur ? "mkblr" : ""}`}>
        <h1 className="user-name"> Welcome {user_data.username}</h1>
        <div className="dashboard-box">
          {" "}
          <div className="filter">
            <input
              type="text"
              placeholder="search by room number"
              onChange={(e) => setsearch(e.target.value)}
              value={search}
            />
            {!admin && (
              <button
                onClick={() => {
                  setshowRequestForm(!showRequestForm);
                  setblur(!blur);
                }}
              >
                Find a room
              </button>
            )}
          </div>
          <div className="roomsData">
            <div className="room">
              {roomsDetail.length === 0 && (
                <h2 style={{ color: "rgb(100 100 100)", textAlign: "center" }}>
                  No rooms found!!!
                </h2>
              )}
              {roomsDetail.map((el) => (
                <div className="request" key={el.id}>
                  <div className="req-detail">
                    <span>Room Number: {el.roomNumber}</span><br />
                    <span>Vacant: {el.isEmpty?"YES":"NO"}</span><br />
                    {!el.isEmpty&&<span>Enrolment Number:{el.EnrollmentNumber}</span>}<br />
                    {!el.isEmpty&&<span>Mobile No.:{el.MobileNumber}</span>}<br />
                    {!el.isEmpty&&<span></span>}
                  </div>
                  {/* {admin && (
                    <button
                      className="chat"
                      onClick={() =>
                        history.push(
                          `/${match.params.userId}/dashboard/${request.chat_id}`
                        )
                      }
                    >
                      Allocate{"   "} <BiRightArrow />
                    </button>
                  )} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showRequestForm && (
        <div className="requestForm">
          <div className="form-head">
            <h1>Filter Rooms</h1>
            <button
              onClick={() => {
                setshowRequestForm(!showRequestForm);
                setblur(!blur);
                setprodDet({});
                setshowpro(false);
              }}
            >
              <ImCross />
            </button>
          </div>

          <div className="field">
            <label htmlFor="link">Room No.</label>
            <input
              type="text"
              name="link"
              placeholder="product link"
              onChange={(e) => {
                setproductLink(e.target.value);
              }}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="bank">Avaliable Stauts</label>
            <select name="status" onChange={(e) => setbank(e.target.value)}>
              <option value="True">True</option>
              <option value="False">False</option>
            </select>
          </div>
          <button
            onClick={() => {
              setshowRequestForm(!showRequestForm);
              setblur(!blur);
              setprodDet({});
              setshowpro(false);
            }}
          >
            Filter
          </button>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default Userdashboard;
