
    
    const Userlist = (state=[], action) =>{

        let alldata = Object.assign([], state); // it collect old value from state if any 

        if( action.type === "adduser" )
        {
            alldata.push( action.username ); // old value from state + new value given by user 
        }

        if(action.type==="deleteuser")
        {
            alldata.splice( action.userindex, 1 );
        }

        return alldata; // return old + new value to react 
        
    }

    export default Userlist;