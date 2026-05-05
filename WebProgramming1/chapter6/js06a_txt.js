"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: Zachary Clawson
      Date:   10/9/2025

      Filename: js06a.js
 */

window.addEventListener("load", function(){
      // reference to order form
      let orderForm = document.forms.orderForm;
      //reference to the selector list within order form
      let model = orderForm.elements.model;

      //select model selction list in form options
      model.focus();

      //add event listerner for evry form element
      for(let i = 0; i < orderForm.elements.length; i++){
            orderForm.elements[i].addEventListener("change", calcOrder);
      }

      //calculate the cost of the order
      calcOrder();

      function calcOrder(){
            //determine the selected model
            let mIndex = model.selectedIndex;
            let mValue = model.options[mIndex].value;

            //determine teh selected quantity
            let qIndex = orderForm.elements.qty.selectedIndex;
            let quantity = orderForm.elements.qty[qIndex].value;

            //model cost = model cost times quantity
            let modelCost = mValue * quantity;
            orderForm.elements.modelCost.value = modelCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
            //value of the plan selected by the customer
            let planValue = document.querySelector('input[name="plan"]:checked').value;

            //retrieve the cost of the protetion plan
            let planCost = planValue * quantity;
            orderForm.elements.planCost.value = planCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            //calculate the order subtotal
            let subtotal = modelCost + planCost;
            orderForm.elements.subtotal.value = subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"});

            //calculate the sales tax
            let salesTax = subtotal * 0.05;
            orderForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {style: "currency", currency: "USD"});

            //calculate the total cost of the order
            let totalCost = subtotal * salesTax;
            orderForm.elements.totalCost.value = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            //store the text of the selected option in selection list
            orderForm.elements.modelName.value = model.options[mIndex].text;
            let selectedPLan = document.querySelector("input[name='plan']:checked");
            orderForm.elements.planName.value = selectedPLan.labels[0].textContent;

      }
});



