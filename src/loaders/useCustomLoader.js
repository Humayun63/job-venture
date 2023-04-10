import { getFromDB } from "../utilities/fakeDB";

export const useCustomLoader = async () => {
    const loadJobs = await fetch('/jobs.json')
    const jobs = await loadJobs.json();

    const appliedIds = getFromDB();
    const appliedJobs = [];

    if (appliedIds) {
        for (const id of appliedIds) {
            const appliedJob = jobs.find(job => job.id === id);
            if (appliedJob) {
                appliedJobs.push(appliedJob)
            }
        }
    }

    return appliedJobs;
}