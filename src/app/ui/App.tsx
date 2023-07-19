import React, {Component} from "react";
import "./App.css";
import {Footer} from "../../Component/Footer/Footer";
import {Navbar} from "../../Component/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {ConnectHeaderContainer} from "../../Component/Header/HeaderContainer";
import {Spinner} from "../../assets/spinner/Spinner";
import {Routing} from "./routing/Routing";

type AppType = {
  initialized: boolean;
  initAppTC: () => void;
};

export class App extends Component<AppType> {
  componentDidMount() {
    this.props.initAppTC();
  }
  render() {
    if (!this.props.initialized)  return <Spinner />;

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <ConnectHeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Routing/>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}