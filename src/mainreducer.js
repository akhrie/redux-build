import { combineReducers } from "redux";


import Userlist from "./userreducer";
import Apilist from "./apireducer";
import Productlist from "./productreducer";

const Mainreducer = combineReducers({
    Userlist, Apilist, Productlist
});

export default Mainreducer;



