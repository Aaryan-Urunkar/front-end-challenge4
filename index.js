var date=new Date();
var currDay=date.getDate();
var currMonth=date.getMonth();
var currYear=date.getFullYear();


function dateGenerator(e){
    reset();
    var enteredDate=document.querySelector(".days input").value;
    var enteredMonth=document.querySelector(".months input").value;
    var enteredYear=document.querySelector(".years input").value;
    var bool=dateVerify(enteredDate,enteredMonth,enteredYear);
    if(bool ==1){
        timeCalc(enteredDate,enteredMonth,enteredYear);
    }
}


function dateVerify(enteredDate,enteredMonth,enteredYear){
    if(enteredDate>31){
        document.querySelector(".days span").style.display="inline";
        document.querySelector(".days label").classList.add("incorrect");
        document.querySelector(".days input").classList.add("incorrect");
        return 0;
    } else if(enteredMonth>12){
        document.querySelector(".months span").style.display="inline";
        document.querySelector(".months label").classList.add("incorrect");
        document.querySelector(".months input").classList.add("incorrect");
        return 0;
    } else if(enteredYear>currYear || (enteredYear==currYear && (enteredMonth>(currMonth+1) || (enteredMonth==(currMonth+1)&&enteredDate>currDay)))){
        document.querySelector(".years span").style.display="inline";
        document.querySelector(".years label").classList.add("incorrect");
        document.querySelector(".years input").classList.add("incorrect");
        return 0;
    } else if((enteredMonth==4 ||enteredMonth==6||enteredMonth==9||enteredMonth==11)&& enteredDate>30){
        document.querySelector(".days span").textContent="Must be a valid date";
        document.querySelector(".days span").style.display="inline";
        document.querySelector(".days label").classList.add("incorrect");
        document.querySelector(".days input").classList.add("incorrect");
        document.querySelector(".months label").classList.add("incorrect");
        document.querySelector(".months input").classList.add("incorrect");
        document.querySelector(".years label").classList.add("incorrect");
        document.querySelector(".years input").classList.add("incorrect");
        return 0;
    } else if( ( (enteredMonth=="2" && enteredYear%4==0)&&enteredDate>29 ) || ((enteredMonth==2 && enteredYear%4!=0)&&enteredDate>28 ) ){
        document.querySelector(".days span").textContent="Must be a valid date";
        document.querySelector(".days span").style.display="inline";
        document.querySelector(".days label").classList.add("incorrect");
        document.querySelector(".days input").classList.add("incorrect");
        document.querySelector(".months label").classList.add("incorrect");
        document.querySelector(".months input").classList.add("incorrect");
        document.querySelector(".years label").classList.add("incorrect");
        document.querySelector(".years input").classList.add("incorrect");
        return 0;
    }
    return 1;
}


function timeCalc(enteredDate,enteredMonth,enteredYear){
    var years;
    var months;
    var days;
    var noOfDays=[31,28,31,30,31,30,31,31,30,31,30,31]
    if(enteredYear%4==0){
        noOfDays[1]=29;
    }
    var currentMonth=currMonth+1;
    if(currentMonth-enteredMonth>0 ||((currentMonth-enteredMonth==0)&&currDay-enteredDate>=0 )){
        years=currYear-enteredYear;
    } else if(currentMonth-enteredMonth<0 ||((currentMonth-enteredMonth==0)&&currDay-enteredDate<0 )){
        years=currYear-enteredYear-1;
    }
    months=currentMonth-enteredMonth;
    if(currDay-enteredDate<0){
        months--;
    }
    if(months<0){
        months+=12;
    }
    days=currDay-enteredDate;
    if(days<0){
        days+=noOfDays[enteredMonth-1];
    }
    document.querySelector(".showYears span").textContent=years;
    document.querySelector(".showMonths span").textContent=months;
    document.querySelector(".showDays span").textContent=days;
}

function reset(){
    document.querySelector(".days label").classList.remove("incorrect");
    document.querySelector(".days input").classList.remove("incorrect");
    document.querySelector(".months label").classList.remove("incorrect");
    document.querySelector(".months input").classList.remove("incorrect");
    document.querySelector(".years label").classList.remove("incorrect");
    document.querySelector(".years input").classList.remove("incorrect");
    document.querySelector(".days span").style.display="none";
    document.querySelector(".months span").style.display="none";
    document.querySelector(".years span").style.display="none";
    document.querySelector(".days span").textContent="Must be a valid day";
}

document.querySelector(".wrapper img").addEventListener("click",dateGenerator);