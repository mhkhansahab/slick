import './App.css';
import "./Styles/fonts.css";
import Layout from "./Containers/layouts/mainLayout";
import {BrowserRouter as Router} from "react-router-dom";
import {useEffect} from "react";
import {getProducts, getBanners, getCategories} from "./Store/action/actions";
import {connect} from "react-redux";

function App(props) {

  useEffect(() => {
    props.getProducts();
    props.getBanners();
    props.getCategories();
  }, [])
  return (
    <div className="App">
      <Router>
      <Layout></Layout>
      </Router>
    </div>
  );
}

const actions = {
  getProducts,
  getBanners,
  getCategories
}


export default connect(null, actions)(App);
