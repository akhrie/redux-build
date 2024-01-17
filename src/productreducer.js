
const Productlist = (state=[], action) =>{

    let alldata = Object.assign([], state);

    if(action.type==="newproduct")
    {
        alldata.push( action.productinfo );
    }

    if(action.type==="deleteproduct")
    {
        alldata.splice( action.pindex, 1 );
    }
    return alldata;
    
}

export default Productlist;