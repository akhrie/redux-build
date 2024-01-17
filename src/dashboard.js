import { useSelector } from "react-redux";

    const Mydashboard = () =>{
        let alluser = useSelector( state=>state.Userlist );
        let allproduct = useSelector( state=>state.Productlist );
        let allapidata = useSelector( state=>state.Apilist );


        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-center text-primary"> Redux Dashboard </h1>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-12 text-center mb-4">
                        <h3> Total User in Store : {alluser.length} </h3>
                    </div>
                    {
                        alluser.reverse().map((name, index)=>{
                            return(
                                <div key={index} className="col-lg-2 mb-3">
                                    <p className="p-4 rounded text-white bg-info text-center">
                                        {name}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="row mt-5">
                    <div className="col-lg-12 mb-4">
                        <h3 className="text-center"> Total Product in Store : {allproduct.length} </h3>
                    </div>
                    {
                        allproduct.reverse().map((product, index)=>{
                            return(
                                <div className="col-lg-3 mb-4" key={index}>
                                    <div className="border rounded p-4">
                                        <h5 className="text-primary"> {product.name} </h5>
                                        <p> {product.price} </p>
                                        <p> {product.quantity} </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="row mb-5">
                    <div className="col-lg-12 text-center mb-4">
                        <h3> Api Data from Store : {allapidata.length} </h3>
                    </div>
                    {
                        allapidata.map((blog, index)=>{
                            return(
                                <div className="col-lg-4 mb-4" key={index}>
                                    <div className="p-3 border rounded">
                                        <h4 className="text-primary"> {blog.title} </h4>
                                        <p> {blog.body} </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    export default Mydashboard;