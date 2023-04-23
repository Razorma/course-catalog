function tutorOvertimeWageCalculator(timeSheet,level){
    //split the string
    let sheet = timeSheet.split("-")
    //check if it is a valid timesheet
    if(sheet.length < 5 || sheet.length>7){
        return 0;
    }
    //initialise a value to add the hours in
    let hours = 0 ;
    let overTime = 0;
    //loop through the array 
    for(var i = 0;i<sheet.length;i++){
        // use parseInt for the values because they are strings to turn them into numbers
        hours += parseInt(sheet[i])
        overTime = hours-40
    }
    // console.log(hours)
  
    //create a condition to tell if what level it is
    if(level === 1 && hours > 40){
        //create a variable and use math.round to round up the ovetTimePay
        let overTimePay = Math.round((overTime * 80.25) * 100) / 100;
        return overTimePay 
       
    }else if(level === 2  && hours > 40){
        let overTimePay = Math.round((overTime * 98.1) * 100) / 100;
        return overTimePay 
    }else if(level === 3  && hours > 40){
        let overTimePay = Math.round((overTime * 117.6) * 100) / 100;
        return overTimePay;
    }
}