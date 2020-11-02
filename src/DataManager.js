export default class DataManager {

    //Do that localStorage thing

    /*
    Error Types:
    Num: 1 (return to landing page), 2 (request again after timeout)
    */

    static password = null
    static token = null

    static job_data = null;
    static review_data = null;
    static resume_data = null;

    static searchPending = false;

    static getData(type) {
        return new Promise(resolve => {
            if (type == "jobs"){
                this.getJobData().then(value => {
                    resolve(value)
                })
            }else if (type == "reviews"){
                this.getReviewData().then(value => {
                    resolve(value)
                })
            }else if (type == "forms"){
                this.getFormData().then(value => {
                    resolve(value)
                })
            }else if (type == "resumes"){
                this.getResumeData().then(value => {
                    resolve(value)
                })
            }
        })
    }

    static getJobData(){
        return new Promise(resolve => {
            if (this.job_data == null){
                resolve({"error": true, "error_num": 1})
            }else {
                resolve({"error": false, "data": this.job_data})
            }
        })
    }

    
    static getReviewData(){
        return new Promise(resolve => {
            if (this.review_data == null){
                resolve({"error": true, "error_statement": 1})
            }else {
                resolve({"error": false, "data": this.review_data})
            }
        })
    }

    static getFormData(){
        return new Promise(resolve => {
            if (this.job_data == null || this.review_data == null){
                resolve({"error": true, "error_num": 1})
            }else {
                let forms = {"job_form": this.job_data[0]["form"], "review_form":this.review_data[0]["form"]}
                resolve({"error": false, "data": forms})
            }
        })
    }

    static getResumeData(){
        return new Promise(resolve => {
            if (this.resume_data == null){
                resolve({"error": true, "error_num": 1})
            }else {
                resolve({"error": false, "data": this.resume_data})
            }
        })
    }

    

    static loadData(password){
        console.log("token: ", this.token)
        return new Promise(resolve => {
            this.searchPending = true;
            if (this.token == null){
                if (password == null){
                    if (this.password == null){
                        this.searchPending = false;
                        resolve({"error": true, "error_statement": "1: no password submitted"})
                    }
                }else {
                    this.password = password;
                }
                this.genToken().then(token_response=> {
                    if (token_response["pass_accepted"]){
                        this.token = token_response["token"]
                        this.reqFullData().then(job_response => {
                            this.searchPending = false;
                            resolve(job_response)
                        })
                    }else {
                        this.searchPending = false;
                        resolve({"error": true, "error_statement": "3: password not accepted"})
                    }
                })
            }else {
                this.reqFullData().then(job_response => {
                    this.searchPending = false;
                    resolve(job_response)
                })
            }

        })
    }
  
    static genToken(){
        return new Promise(resolve => {
            fetch("https://test-app-akp.azurewebsites.net/gen-token?pass=" + this.password).then(response => {
                const json = response.json()
                resolve(json)
            })
        })
    }

    static reqFullData(){
        return new Promise(resolve => {
            this.reqData("jobs").then(job_response => {
                if(job_response["token_accepted"]){


                    this.reqData("reviews").then(review_response => {
                        if(review_response["token_accepted"]){
                            this.reqData("resumes").then(resume_response => {
                                if(resume_response["token_accepted"]){
                                    this.job_data = JSON.parse(job_response["data"])
                                    this.review_data = JSON.parse(review_response["data"])
                                    this.resume_data = JSON.parse(resume_response["data"])
                                    resolve({"error": false})
                                }else {
                                    resolve({"error": true, "error_statement": "2: token not accepted"})
                                    this.token = null
                                }
                            })
                        }
                    })
                }else {
                    resolve({"error": true, "error_statement": "2: token not accepted"})
                    this.token = null
                }
            })
        })
    }

    static reqData(type){
        return new Promise(resolve => {
            fetch("https://test-app-akp.azurewebsites.net/" + type + "?token=" + this.token).then(response => {
                const json = response.json()
                resolve(json)
            })
        })
    }
}
