import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import swal from "sweetalert";

const Myproduct = () =>{
    let[pname, pickName] = useState("");
    let[pprice, pickPrice] = useState("");
    let[pqty, pickQty] = useState("");

    const dispatch = useDispatch();

    const save = () =>{
       let itemData = {name:pname, price:pprice, quantity:pqty};
       let dispatchData = { productinfo : itemData, type:"newproduct" };
       dispatch(dispatchData);
       swal(pname , " Sent To Store ", "success");
       pickName("");
       pickPrice("");
       pickQty("");
    }

    const delproduct = (index, name) =>{
        let pdata = { pindex : index, type:"deleteproduct" };
        dispatch(pdata);
       swal(name , " Deleted From Store ", "success");
    }

    let allproduct = useSelector( state=>state.Productlist ); // fetch data from store 

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="text-center text-warning"> Product Management</h1>
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="col-lg-3">
                    <label> Product Name </label>
                    <input type="text" className="form-control" value={pname}
                    onChange={obj=>pickName(obj.target.value)}/>
                </div>

                <div className="col-lg-3">
                    <label> Product Quantity </label>
                    <input type="text" className="form-control" value={pqty}
                    onChange={obj=>pickQty(obj.target.value)}/>
                </div>

                <div className="col-lg-3">
                    <label> Product Price </label>
                    <input type="text" className="form-control" value={pprice}
                    onChange={obj=>pickPrice(obj.target.value)}/>
                </div>
                <div className="col-lg-3">
                    <br/>
                    <button className="btn btn-primary" onClick={save}> Save Product </button>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <h2 className="text-center text-primary"> Available Products in Store : {allproduct.length} </h2>
                    <table className="table table-bordered mt-4">
                        <thead>
                            <tr>
                                <th> Sl No </th>
                                <th> Product Name </th>
                                <th> Price </th>
                                <th> Quantity </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allproduct.map((product, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td> {index} </td>
                                            <td> {product.name} </td>
                                            <td> {product.price} </td>
                                            <td> {product.quantity} </td>
                                            <td> 
                                                <button 
                                                className="btn btn-danger btn-sm"
                                                onClick={delproduct.bind(this, index, product.name)}> Delete </button> 
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Myproduct;