import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";

const Myuser = () =>{
    let[fullname, pickName] = useState("");

    const dispatch = useDispatch();// create object of useDispatch function
    const save = () =>{
        let userdata = {"username":fullname,  "type":"adduser"};
        dispatch( userdata );
        swal(fullname , " Sent To Store ", "success");
        pickName("");
    }

    const deluser = (index, name) =>{
        let userdata = {"userindex":index,  "type":"deleteuser"};
        dispatch( userdata );
        swal(name , " Deleted From Store ", "success");
    }

    // fetch data from store 
    let alluser = useSelector( state =>state.Userlist );

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mb-5">
                    <h1 className="text-center text-success"> User Management : { alluser.length } </h1>
                    <p className="text-center">
                        Enter Name : <input type="text" className="m-3"
                                    onChange={obj=>pickName(obj.target.value)}
                                    value={fullname}/>
                        <button className="btn btn-primary m-3" onClick={save}> Save User </button>
                    </p>
                </div>

                {
                    alluser.map((name, index)=>{
                        return(
                            <div className="col-lg-2 mb-4 text-center" key={index}>
                                <div className="bg-info text-white p-3 rounded">
                                    <p> {name} </p>
                                    <button className="btn btn-danger btn-sm"
                                    onClick={deluser.bind(this, index, name)}> Delete </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Myuser;