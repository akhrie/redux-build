
const Apilist = (state=[], action) =>{

    let alldata = Object.assign( [], state);

    if( action.type==="saveapi" )
    {
        alldata = action.apidata;
    }

    return alldata;
    
}

export default Apilist;