const koreaTimeDiff = 9 * 60 * 60 * 1000;
const userAgentModel = {
    "idt":"",
    "purpose":"",
    "date":new Date(new Date().getTime() + (new Date().getTimezoneOffset() * 60 * 1000) + koreaTimeDiff)
}



module.exports = {
    printUserAgent : function(idt,purpose){
        userAgentModel.idt = idt;
        userAgentModel.purpose = purpose;
        console.log(`날짜 : ${userAgentModel.date}\n 목적 : ${userAgentModel.purpose}\n 식별 : ${userAgentModel.idt}`);
    }
}