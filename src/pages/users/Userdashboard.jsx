import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { BiRightArrow } from "react-icons/bi";
import "../assets/styles/userdashboard.css";
import axios from "axios";
import { api } from "../../Api/api";
import { toast, ToastContainer } from "react-toastify";

function Userdashboard({ match }) {
  const [user_data, setuser_data] = useState({
    username: localStorage.getItem("email") || "",
    user_id: localStorage.getItem("user_id") || "",
    All_Requests: [],
  });
  const [search, setsearch] = useState("");
  const [roomsDetail, setroomsDetail] = useState([]);
  const [showRequestForm, setshowRequestForm] = useState(false);
  const [showAllocationForm, setshowAllocationForm] = useState(false);
  const [blur, setblur] = useState(false);
  const [loading, setloading] = useState(false);
  const history = useHistory();
  const [prodDet, setprodDet] = useState({});
  const [showpro, setshowpro] = useState(false);
  const [roomNo, setroomNo] = useState('');
  const [StudentName, setStudentName] = useState('');
  const [EnrollmentNo, setEnrollmentNo] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  
  let admin = false;
  if (localStorage.getItem("admin") !== null) {
    admin = true;
  }

  const filterFucntion = ({ product_name }) => {
    return product_name.toLowerCase().indexOf(search.toLowerCase().trim()) > -1;
  };

  const [rooms, setrooms] = useState([]);

  useEffect(async () => {
    setloading(true);
    const data = await axios.get(`${api}/room`);
    setroomsDetail(data.data.products);
    console.log(roomsDetail[0])
    setloading(false);
  },[rooms]);

  const Allocate = async(req,res) => {
    setloading(true)
    const temp = {
      student_name: StudentName,
      MobileNumber: MobileNo,
      EnrollmentNumber: EnrollmentNo
    }
    
    const data = await axios.post(`${api}/room/allocate/${roomNo}`,temp)
    
    setloading(false)
  }

  const vacate = async(req,res) => {
    console.log(roomNo)
    setloading(true)

    const data = await axios.post(`${api}/room/vacate/${roomNo}`)
    setloading(false)
  }

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
        <h1 className="user-name"> Welcome {localStorage.getItem("email")}</h1>
        <div className="dashboard-box">
          {" "}
          <div className="filter">
            <input
              type="text"
              placeholder="search by room number"
              onChange={(e) => setsearch(e.target.value)}
              value={search}
            />
            {admin && (
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
                  {admin && el.isEmpty &&(
                    <button
                      className="chat"
                      onClick={() => {
                        setshowAllocationForm(!showAllocationForm);
                        setblur(!blur);
                      }}
                    >
                      Allocate{"   "} <BiRightArrow />
                    </button>
                  )}
                  
                  {admin && !el.isEmpty &&(
                    <button
                      className="chat"
                      onClick={() => {
                        setroomNo(el.roomNumber)
                        vacate()
                      }}
                    >
                      Vacate{"   "} <BiRightArrow />
                    </button>
                  )}

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      

      {showAllocationForm && (
        <div className="requestForm">
          <div className="form-head">
            <h1>Allocate Rooms</h1>
            <button
              onClick={() => {
                setshowAllocationForm(false);
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
              placeholder="Room No."
              onChange={(e) => {
                setroomNo(parseInt(e.target.value));
              }}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="link">StudentName</label>
            <input
              type="text"
              name="link"
              placeholder="Student Name"
              onChange={(e) => {
                setStudentName(e.target.value);
              }}
              required
            />
          </div>
          
          <div className="field">
            <label htmlFor="link">Enrollment number</label>
            <input
              type="text"
              name="link"
              placeholder="Enrollment Number"
              onChange={(e) => {
                setEnrollmentNo(e.target.value);
              }}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="link">MobileNo</label>
            <input
              type="text"
              name="link"
              placeholder="Mobile Number"
              onChange={(e) => {
                setMobileNo(e.target.value);
              }}
              required
            />
          </div>

          <button
            onClick={() => {
              setshowAllocationForm(false);
              setblur(!blur);
              setprodDet({});
              setshowpro(false);
              Allocate();
            }}
          >
            Allocate
          </button>
        </div>
      )}

      <ToastContainer />
    </>
  );
}

export default Userdashboard;
