export default class DataManager {

    /*
    Error Types:
    Num: 1 (return to landing page), 2 (request again after timeout)
    */

    static password = null

    static data = null

    static getData(type) {
        return new Promise(resolve => {
            if (this.data == null){
                resolve({"error": true, "error_num": 1})
            }else {
                if (type == "forms"){
                    let forms = {"job_form": this.data["jobs"][0]["form"], "review_form":this.data["reviews"][0]["form"]}
                    resolve({"error": false, "data": forms})
                }
                resolve({"error": false, "data": this.data[type]})
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
        return new Promise(resolve => {
            let token = localStorage.getItem('OTPPtoken')
            if (token == null || token == ""){
                if (password == null){
                    if (this.password == null){
                        resolve({"error": true, "error_statement": "1: no password submitted"})
                    }
                }else {
                    this.password = password;
                }
                this.genToken().then(token_response=> {
                    if (token_response["pass_accepted"]){
                        localStorage.setItem('OTPPtoken', token_response["token"]);
                        this.handleDataReq().then(job_response => {
                            resolve(job_response)
                        })
                    }else {
                        resolve({"error": true, "error_statement": "3: password not accepted"})
                    }
                })
            }else {
                this.handleDataReq().then(job_response => {
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

    static handleDataReq() {
        return new Promise(resolve => {
            this.reqData("full").then(response => {
                if (response["token_accepted"]){
                    this.data = response["data"]         
                    resolve({"error": false})
                }else {
                    resolve({"error": true, "error_statement": "2: token not accepted"})
                    localStorage.setItem('OTPPtoken', "");
                }
                
            })
        })
    }
    static reqData(type){
        return new Promise(resolve => {
            let token = localStorage.getItem('OTPPtoken');
            fetch("https://test-app-akp.azurewebsites.net/" + type + "?token=" + token).then(response => {
                const json = response.json()
                resolve(json)
            })
        })
    }
}
