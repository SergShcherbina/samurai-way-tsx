import React, {Component} from "react";
import "./App.css";
import {Footer} from "../../Component/footer/ui/Footer";
import {Navbar} from "../../Component/navbar/ui/Navbar";
import {BrowserRouter} from "react-router-dom";
import {ConnectHeaderContainer} from "../../Component/header/ui/HeaderContainer";
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
      // для размещения на gh-pages и корректной работы путей добавить basename={process.env.PUBLIC_URL}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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