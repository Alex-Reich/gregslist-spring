function JobService(cb) {
    var baseUrl = "https://bcw-gregslist.herokuapp.com/api/jobs"

    var jobs = []

    function Job(company, jobTitle, hours, rate, description) {
        this.company = company
        this.jobTitle = jobTitle
        this.hours = hours
        this.rate = rate
        this.description = description || "No description provided but that's life."
    }

    
    function loadJobs() {
        $.get(baseUrl).then(res => {
            cb(res.data)
        })
    }
    loadJobs()
    
    this.addJob = function addJob(job) {
        var newJob = new Job(job.company, job.jobTitle, job.hours, job.rate, job.description)
        $.post(baseUrl, newJob)
        .then(res => {
            loadJobs()
        })
    }
    this.deleteJob = function deleteJob(id){
        $.ajax({
            method: "DELETE",
            url: baseUrl + "/" + id
        }).then(res =>{
            loadJobs()
        })
    }
    this.increaseRate = function increaseRate(id, rate) {
        $.ajax({
            method: "PUT",
            url: baseUrl + "/" + id,
            contentType: "application/JSON",
            data: JSON.stringify({
                rate: rate * 1.5
            })
        }).then(res => {
            loadJobs()
        })
    }
}