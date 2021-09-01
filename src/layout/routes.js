/** @format */

import DefaultDashboard from '../views/AuthDashboard/Dashboard'
import FMITI from '../views/Dashboard/FMITI';
import WMD from '../views/Dashboard/WMD';
import ContactUs from '../views/Dashboard/ContactUs'
import Home from '../views/Dashboard/Home';
import Downloads from '../views/Dashboard/Downloads';
import NewInstrumentReg from '../views/AuthDashboard/NewInstrumentReg';
import RegisteredInstrument from '../views/Tables'
import Uploads from '../views/AuthDashboard/Uploads'
import Reports from '../views/AuthDashboard/Reports'
import OutstandingBill from '../views/Tables/OutstandingBill'
import PaidBill from '../views/Tables/PaidBill'
import ApplyApproval from '../views/Tables/ApplyApproval'
import ApplyInstVerification from '../views/Tables/ApplyInstVerification'
import PeridicVer from '../views/Tables/PeridicVer'


export const routes = [
    
  { path: "/dashboard/home", exact: true, component: Home,  title: "welcome", key: "welcome" },
  { path: "/dashboard/downloads",  name: "Downloads", component: Downloads },
  { path: "/dashboard/fmiti",  name: "FMITI", component: FMITI },
  { path: "/dashboard/wmd",  name: "WMD", component: WMD },
  { path: "/dashboard/contactus",  name: "ContactUs", component: ContactUs },
  
   
];



export const defaultlayout = [
  { path: "/defaultlayout/home",exact: true,  name: "DefaultDashboard", component: DefaultDashboard },
    { path: "/defaultlayout/newinstrument",  name: "Newinstrument", component: NewInstrumentReg },
    { path: "/defaultlayout/registeredinstrument", name: "Registeredinstrument", component: RegisteredInstrument },
    { path: "/defaultlayout/uploads",  name: "Uploads", component: Uploads },
    { path: "/defaultlayout/outstandingbill",  name: "OutstandingBill", component: OutstandingBill },
    { path: "/defaultlayout/paidbill",  name: "PaidBill", component: PaidBill },
    { path: "/defaultlayout/applyapproval",  name: "ApplyApproval", component: ApplyApproval },
    { path: "/defaultlayout/applyinstverification",  name: "ApplyInstVerification", component: ApplyInstVerification },
    { path: "/defaultlayout/reports",  name: "Report", component: Reports },
    { path: "/defaultlayout/periodicinstrumentv",  name: "Periodic", component: PeridicVer },
 
];

 
