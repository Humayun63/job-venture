// Applied Jobs Id saved to local storage
const saveToDB = id => {
    const ids = localStorage.getItem('applied-jobs') ? JSON.parse(localStorage.getItem('applied-jobs')) : [];
    if(!ids.includes(id)){
        ids.push(id);
        localStorage.setItem('applied-jobs', JSON.stringify(ids))
    }
}

// Get Jobs Id from Local Storage
const getFromDB = () =>{
    if(localStorage.getItem('applied-jobs')){
        return JSON.parse(localStorage.getItem('applied-jobs'))
    }
}



export {saveToDB, getFromDB}