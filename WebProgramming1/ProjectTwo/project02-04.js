/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Zachary Clawson
      Date:   09/12/2025

      Filename: project02-04.js
 */
const CHICKEN_PRICE = 10.95
const HALIBUT_PRICE = 13.95
const BURGER_PRICE = 9.95
const SALMON_PRICE = 18.95
const SALAD_PRICE = 7.95
const SALES_TAX = 0.07

/*
document.getElemenetById("chicken").addEvenetListerner("clcik", calcTotal())
document.getElemenetById("halibut").addEvenetListerner("clcik", calcTotal()) 
document.getElemenetById("burger").addEvenetListerner("clcik", calcTotal()) 
document.getElemenetById("salmon").addEvenetListerner("clcik", calcTotal()) 
document.getElemenetById("salad").addEvenetListerner("clcik", calcTotal())  */

// add up the total
function calcTotal(){
   let cost = 0;
   let buyChicken = document.getElementById("chicken")
   let buyHalibut = document.getElementById("halibut")
   let buyBurger = document.getElementById("burger")
   let buySalmon = document.getElementById("salmon")
   let buySalad = document.getElementById("salad")

   // If buyVar is true add price to cost if not add 0!!!
   console.log(buyChicken.checked)
   console.log(buyHalibut.checked)
   cost += buyChicken.checked ? CHICKEN_PRICE : 0;
   // if(buyChicken){
   //    cost += CHICKEN_PRICE
   // }

   cost += buyHalibut.checked ? HALIBUT_PRICE : 0;
   // if(buyHalibut){
   //    cost += HALIBUT_PRICE
   // }

   cost += buyBurger.checked ? BURGER_PRICE : 0;
   // if(buyBurger){
   //    cost += BURGER_PRICE
   // }
   cost += buySalmon.checked ? SALMON_PRICE : 0;
   // if(buySalmon){
   //    cost += SALMON_PRICE
   // }
   
   cost += buySalad.checked ? SALAD_PRICE : 0;
   // if(buySalad){
   //    cost += SALAD_PRICE
   // }
   

   let foodTotalSpan = document.getElementById("foodTotal")
   foodTotalSpan.innerHTML = formatCurrency(cost);

   let tax = cost * SALES_TAX;

   let totalCost = cost + tax

   let totalBillSpan = document.getElementById("totalBill")
   totalBillSpan.innerHTML = formatCurrency(totalCost)
}

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
