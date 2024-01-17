import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

const Myapi = () =>{
    let[bloglist, updateBlog] = useState( [] );
    const getBlog = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(blogarray=>{
            updateBlog(blogarray);
        })
    }

    useEffect(()=>{
        getBlog();
    }, [1]);

    const dispatch = useDispatch();
    const save = () =>{
        let blogdata = { apidata:bloglist, type:"saveapi" };
        dispatch(blogdata);
        swal("Api Data", "Successfully sent to Store", "success");
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mb-5">
                    <h1 className="text-center text-dark"> 
                        { bloglist.length } : Api Data Management 
                    </h1>
                    <button className="btn btn-danger m-3" onClick={save}> 
                        Send Data To Redux 
                    </button>
                </div>
                {
                    bloglist.map((blog, index)=>{
                        return(
                            <div className="col-lg-3 mb-4" key={index}>
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
export default Myapi;