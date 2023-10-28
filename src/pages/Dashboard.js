import "./Dashboard.css";
import CovidData from "../Charts/CovidData.js";
import React, { useEffect, useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import NotDevelop from "../PopUp/NotDevelop";
import CovidPieChart from "../Charts/CovidPieChart";

const Dashboard = () => {
  const userName = localStorage.getItem("userName");
  const userPhoto = localStorage.getItem("userPhoto");
  console.log(userName);

  // const [country, setCountry] = useState("");
  const [cases, setCases] = useState("");
  // const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [deathCases, setDeathCases] = useState("");
  // const [recoveredCases, setRecoveredCases] = useState("");
  const [userInput, setUserInput] = useState("India");
  const [countryList, setCountryList] = useState([]);

  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const openDialog = () => {
    setDialogIsOpen(true);
  };

  const closeDialog = () => {
    setDialogIsOpen(false);
  };

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountryList(data.map((country) => country.country));
      });
  }, []);

  const setData = ({
    // country,
    cases,
    deaths,
    // recovered,
    todayCases,
    todayDeaths,
    // todayRecovered,
  }) => {
    // setCountry(country);
    setCases(cases);
    // setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todayCases);
    setDeathCases(todayDeaths);
    // setRecoveredCases(todayRecovered);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });

  return (
    <div className="dashboard1">
      <NotDevelop isOpen={dialogIsOpen} onClose={closeDialog} />
      <div className="navigation1">
        <div className="left-side1" />
        <Button
          onClick={openDialog}
          variant="text"
          color="primary"
          style={{ color: "white" }}
          className="help1"
        >
          Help
        </Button>
        <Button
          onClick={openDialog}
          variant="text"
          color="primary"
          style={{ color: "white" }}
          className="contact-us1"
        >
          Contact Us
        </Button>

        <Button
          variant="text"
          color="primary"
          style={{ color: "white" }}
          className="settings1"
          onClick={openDialog}
        >
          <img style={{ paddingRight: "10%" }} alt="" src="/setting-icon.svg" />
          <span>Settings</span>
        </Button>
        <Button
          variant="text"
          color="primary"
          style={{ color: "white" }}
          className="users1"
          onClick={openDialog}
        >
          <img style={{ paddingRight: "10%" }} alt="" src="/user-icon.svg" />
          <span> Users</span>
        </Button>
        <Button
          variant="text"
          color="primary"
          style={{ color: "white" }}
          className="schedules1"
          onClick={openDialog}
        >
          <img
            style={{ paddingRight: "10%" }}
            alt=""
            src="/schedule-icon.svg"
          />
          <span>Schedules</span>
        </Button>
        <Button
          variant="text"
          color="primary"
          style={{ color: "white" }}
          className="transactions1"
          onClick={openDialog}
        >
          <img
            style={{ paddingRight: "10%" }}
            alt=""
            src="/transaction-icon.svg"
          />
          <span>Transactions</span>
        </Button>
        <Button
          variant="text"
          color="primary"
          style={{ color: "white" }}
          className="dashboard2"
        >
          <img
            style={{ paddingRight: "10%" }}
            alt=""
            src="/dashboard-icon.svg"
          />
          <span>Dashboard</span>
        </Button>
        <b className="board2">Board.</b>
      </div>
      <div className="frame-parent">
        <div className="total-revenues-parent">
          <div className="total-revenues">
            <div className="card2">
              <div className="card3" />
            </div>
            <div className="total-revenues-child" />
          </div>
          <div className="frame-child" />
          <img className="vector-icon5" alt="" src="/death.png" />
        </div>
        <div className="total-revenues-parent">
          <div className="total-revenues">
            <div className="card2">
              <div className="card3" />
            </div>
            <div className="total-revenues-child" />
          </div>
          <div className="frame-item" />
          <img className="vector-icon6" alt="" src="/corpse.png" />
          <div className="frame-group">
            <div className="total-transactions-parent">
              <div className="total-transactions">Total Deaths</div>
              <b className="b">{deaths}</b>
            </div>
          </div>
        </div>
        <div className="total-revenues-parent">
          <div className="total-revenues">
            <div className="card2">
              <div className="card3" />
            </div>
            <div className="total-revenues-child" />
          </div>
          <div className="frame-inner" />
          <div className="frame-container">
            <div className="total-transactions-parent">
              <div className="total-transactions">Cases Today</div>
              <b className="b1">{todayCases}</b>
            </div>
          </div>
          <img className="vector-icon7" alt="" src="/sign.png" />
        </div>
        <div className="total-revenues-parent">
          <div className="total-revenues">
            <div className="card2">
              <div className="card3" />
            </div>
            <div className="total-revenues-child" />
          </div>
          <div className="ellipse-div" />
          <div className="frame-container">
            <div className="total-transactions-parent">
              <div className="total-transactions">Deaths Today</div>
              <b className="b1">{deathCases}</b>
            </div>
          </div>
          <img className="vector-icon8" alt="" src="/flower.png" />
        </div>
      </div>
      <div className="frame-parent2">
        <div className="total-transactions-parent">
          <div className="total-transactions">Total Cases</div>
          <b className="b">{cases}</b>
        </div>
      </div>

      <div className="activities-card">
        <div className="card10">
          <div className="card11">
            <div style={{ padding: "0px 0px 0px 20px" }}>
              <CovidData />
            </div>
          </div>
        </div>
      </div>
      <div className="top-products-card">
        <div className="card12">
          <div className="card13">
            <div style={{ padding: "0px 0px 0px 20px" }}>
              <CovidPieChart />
            </div>
          </div>
        </div>
      </div>
      {/* <img className="schedules-card-icon" alt="" src="/schedules-card.svg" /> */}
      {/* <div className="chart-weeks"></div> */}
      <div className="header">
        <b className="dashboard3">Dashboard</b>
        <div className="search-bar">
          <div className="search-icon">
            {/* <Typography variant="h4">COVID-19 CASES COUNTRY WISE</Typography> */}
            <div className="covidData__input">
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <Select
                    size="small"
                    value={userInput}
                    onChange={handleSearch}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {countryList.map((countryName, index) => (
                      <MenuItem key={index} value={countryName}>
                        {countryName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </form>
            </div>
          </div>
          
          
          {/* <input className="white1" type="text" />
          <div className="search">Search...</div>
          <img className="search-icon" alt="" src="/search-icon.svg" /> */}
        </div>
        <div className="mask-group-icon1" >
            <img
              alt=""
              src={userPhoto}
              style={{ width: 50, height: 50, borderRadius: 400 / 2 }}
            />
            <h6 style={{position: "absolute",top:"15px"}}>{userName}</h6>
          </div>
        {/* <img className="mask-group-icon1" alt="" src="/mask-group@2x.png" /> */}
      </div>
      

      <div className="card14">
        <div className="card13" />
        <div className="group-parent">
          <img
            className="group-icon"
            alt=""
            src="/group-7558.svg"
            // onClick={onGroupClick}
            onClick={openDialog}
          />
          <div className="add-profile">Add Profile</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
