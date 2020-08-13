export default class DataManager {

    static password = null
    static token = null

    static getData(type, password){
        return new Promise(resolve => {
            if (this.token == null){
                if (password == null){
                    if (this.password == null){
                        resolve({"error": true, "error_statement": "1: password not accepted"})
                    }
                }else {
                    this.password = password
                }
                this.genToken().then(token_response=> {
                    if (token_response["pass_accepted"]){
                        this.token = token_response["token"]
                        this.getJobData().then(job_response => {
                            if (job_response["token_accepted"]){
                                resolve(JSON.parse(job_response["data"]))
                            }else {
                                resolve({"error": true, "error_statement": "2: password not accepted"})
                            }
                        })
                    }else {
                        resolve({"error": true, "error_statement": "3: password not accepted"})
                    }
                })
            }else {
                this.getJobData().then(job_response => {
                    if (job_response["token_accepted"]){
                        resolve(JSON.parse(job_response["data"]))
                    }else {
                        resolve({"error": true, "error_statement": "2: password not accepted"})
                    }
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

    static getJobData(){
        return new Promise(resolve => {
            fetch("https://test-app-akp.azurewebsites.net/?token=" + this.token).then(response => {
                const json = response.json()
                resolve(json)
            })
        })
    }
}
