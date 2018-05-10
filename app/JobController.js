function JobController() {

    var jobService = new JobService(drawJobs)

    function drawJobs(jobs) {
        var template = ''
        for (let i = 0; i < jobs.length; i++) {
            const job = jobs[i];
            template += `
            <h1>Company: ${job.company}</h1>
            <h1>Job Title: ${job.jobTitle}</h1>
            <h1>Hours: ${job.hours}</h1>
            <h1>Rate: ${job.rate}</h1>
            <h1>Description: ${job.description}</h1>
            <button onclick="app.controllers.jobController.deleteJob('${job._id}')">Job Filled (Remove)</button>
            <button onclick="app.controllers.jobController.increaseRate('${job._id}',${job.rate})">Increase Rate</button>
            <button onclick="app.controllers.jobController.decreaseRate('${job._id}',${job.rate})">Decrease Rate</button>
            `
        }
        document.getElementById("jobs").innerHTML = template

    }

    this.addJob = function addJob(e) {
        e.preventDefault();
        var data = e.target
        var newJob = {
            company: data.company.value,
            jobTitle: data.jobTitle.value,
            hours: data.hours.value,
            rate: data.rate.value,
            description: data.description.value
        }
        jobService.addJob(newJob)
        data.reset()
    }
    this.deleteJob = function deleteJob(id) {
        jobService.deleteJob(id)
    }
    this.increaseRate = function increaseRate(id, rate) {
        jobService.increaseRate(id, rate)
    }
    this.decreaseRate = function decreaseRate(id, rate) {
        jobService.decreaseRate(id, rate)
    }
}