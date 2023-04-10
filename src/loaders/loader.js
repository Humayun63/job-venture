const jobs = async() =>{
    const res = await fetch('jobs.json');
    const data = await res.json();
    return data;
}
const jobDetailsApi = id => jobs.find(job => job.id === id);


export {jobDetailsApi}