console.log("Working")
let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "b22cs070",
    "email": "b22cs070@iitj.ac.in",
    "score": 0.8,
    "state": "deliverable",
    "domain": "iitj.ac.in",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}
submitBtn.addEventListener("click",async (e) => {
    e.preventDefault()
    resultCont.innerHTML = `<img width="233" src="img/loading.svg" alt="">`
    let key = "ema_live_55TIMOwHAaB00tD0yqXogTMbUbILLQF8SCpe6xKF"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res= await fetch(url)
    let result= await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key] !==" ") {
            str = str + `<div>${key}: ${result[key]}</div>`
        }
        
    }
    console.log(str)
    resultCont.innerHTML = str
})






