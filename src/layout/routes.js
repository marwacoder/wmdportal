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
    loading: () => <Spinner {...styleProps} />,
  });



    const AboutUs = Loadable({
        loader: () => import('../views/Dashboard/aboutUs'),
        loading: ()=> <Spinner {...styleProps} />
    });
    const Download = Loadable({
        laoder: () => import('../views/Dashboard/daownloads'),
        loading: ()=> <Spinner {...styleProps} />
    });
    const QuickSearch = Loadable({
        loader: () => import('../views/Dashboard/quickSearch'),
        loading: ()=> <Spinner {...styleProps} />
    });
    const Help = Loadable({
        loader:() => import('../views/Dashboard/help'),
        loading: ()=> <Spinner {...styleProps} />
    });

    

const routes = [
  { path: "/home", component: Home, title: "welcome", key: "welcome" },
  { path: "/", exact: true, tittle: "Home", component: Home },
  { path: "/aboutus", component: AboutUs, title: "aboutus", key: "aboutus" },
  { path: "/download", component: Download, title: "download", key: "download" },
  { path: "/quicksearch", component: QuickSearch, title: "quicksearch", key: "quicksearch" },
  { path: "/help", component: Help, title: "help", key: "help" },
];

export default routes;
