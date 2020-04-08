//challenge 1. Calculate the totalProduction - daily using a function
//step 1. Arrange your imformation using objects & Arrays

var sheds = [
  
  
    //shedA
    {
      name :"Shed A",
      cows:34,
      milkProd:15
      
    },
    
  //  shedB
    {
      name : "Shed B",
      cows:11,
      milkProd:28
    },
    
    //shedC
    {
      name: "Shed C",
      cows: 27,
      milkProd: 18
      
    },
    
    //shedD
    {
      name: "Shed D",
      cows: 52,
      milkProd: 11
    }
    
    ];
    
    //test out whether it can access key:pair values
    
    //console.log(sheds[3].cows*sheds[3].milkProd);
    
    //Success!! :-)
    
    
    // Step 2: Use a for loop to calculate daily production
    
    shedlength  = sheds.length;
    var months = {January: 31, February:29, March:31, April:30, May:31, June:30, July:31, August:31, September:30, October:31, November:30, December:31};
  
   
   
    var totalProduction = function(verbose){
      prodTotals = 0;
     var i =0;
      
    while( i<shedlength ){
      
      
      
        prodTotals += sheds[i].cows*sheds[i].milkProd;
        shedTotals = sheds[i].cows*sheds[i].milkProd;
       
        //prodTotals += sheds[i].cows*sheds[i].milkProd;
        if(verbose===true){
          console.log("Your production in "+sheds[i].name+" " +shedTotals+ " litres per day");
        }
      
      
        
        i+=1;
      }
      
      if(verbose===true){
        
      console.log("The total production is "+prodTotals + " litres per day");
        
      }
      
      return prodTotals;
      
      
    };
    
   totalProduction(verbose=true);
    
    //function for calculating how much will be received over time
    var incomeOverTime = function(selling_price,time,verbose){
      
      //Start by calculating income for one day
      
      dailyIncome = totalProduction() *selling_price;
      
      return dailyIncome*time;
      
      
    }
    
  //  incomeOverTime(45,7);
   //Display weekly and yearly income
  console.log("Your weekly income will be Ksh: " +incomeOverTime(45,7));
  console.log("Your yearly income will be Ksh: " +incomeOverTime(45,365));
  
  
  //Calculate monthly income
  for (var key in months){
              monthly_income = incomeOverTime(45, months[key]);
              console.log("Your income for " + key + " is " + monthly_income.toString());
  }