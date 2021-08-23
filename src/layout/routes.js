/** @format */

import Loadable from "react-loadable";


import Spinner from "../helpers/Spinner/Spinner";

const styleProps = {
  color: "#00854D",
  height: 50,
  width: 50,
  className: "spinner-background-opt",
};


 const Home = Loadable({
    loader: () => import('../views/Dashboard/Home'),
    loading: () => <Spinner {...styleProps} />
  });



    const AboutUs = Loadable({
        loader: () => import('../views/Dashboard/ContactUs'),
        loading: ()=> <Spinner {...styleProps} />
    });
    const Download = Loadable({
        laoder: () => import('../views/Dashboard/Downloads'),
        loading: ()=> <Spinner {...styleProps} />
    });
    const QuickSearch = Loadable({
        loader: () => import('../views/Dashboard/QuickSearch'),
        loading: ()=> <Spinner {...styleProps} />
    });
    const Help = Loadable({
        loader:() => import('../views/Dashboard/Help'),
        loading: ()=> <Spinner {...styleProps} />
    });

    

const routes = [
    { path: "/", exact: true, name: "Home", component: Home },
    { path: "/dashboard",exact: true, name: "Dashboard", component: Home },
  { path: "/aboutus", component: AboutUs, title: "aboutus", key: "aboutus" },
  { path: "/download", component: Download, title: "download", key: "download" },
  { path: "/quicksearch", component: QuickSearch, title: "quicksearch", key: "quicksearch" },
  { path: "/help", component: Help, title: "help", key: "help" }
];

export default routes;
