import { useState } from "react";
import swal from 'sweetalert';

const Mybook = () =>{
    let[booklist, updateBook] = useState( [] );
    let[newbook, pickBook] = useState("");

    const save = () =>{
        updateBook( booklist = [...booklist, newbook]);
        swal(newbook, " Added Successfully", "success");
        pickBook("");
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="text-center text-danger">  
                        What is problem in React ? Why Need Redux ?
                    </h1>
                    <p className="text-center">
                        Enter Book Name : 

                        <input type="text" className="m-3"
                        onChange={obj=>pickBook(obj.target.value)} 
                        value={newbook}/>

                        <button className="btn btn-info m-3" onClick={save}> Save </button>
                    </p>

                    {
                        booklist.map((bookname, index)=>{
                            return(
                                <p key={index} className="m-3"> {bookname} </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Mybook;