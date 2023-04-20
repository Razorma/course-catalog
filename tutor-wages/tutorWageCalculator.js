function tutorWageCalculator(timeSheet,level){
    //split the string
    let sheet = timeSheet.split("-")
    //check if it is a valid timesheet
    if(sheet.length < 5 || sheet.length>7){
        return 0;
    }
    //initialise a value to add the hours in
    let hours = 0 ;
    //loop through the array 
    for(var i = 0;i<sheet.length;i++){
        // use parseInt for the values because they are strings to turn them into numbers
        hours += parseInt(sheet[i])
        
    }
    console.log(hours)
    //create a condition to tell if what level it is
    if(level === 1){
        return (hours * 75)
    }else if(level === 2){
        return ( hours * 90)
    }else if(level === 3){
        return ( hours * 105)
    }
}