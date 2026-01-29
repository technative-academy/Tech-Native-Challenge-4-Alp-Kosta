const tabsTexts = {
  labelfirst: "<strong>Rolex<strong> A crown for every achievement.",
  labelsecond:'“Simple, stylish, and reliable. Exactly what I was looking for in an everyday watch.”',
  beatrice:
    "“It's amazing - we love it (lorem ipsum dolor sit amet, lorem ipsum dolor sit amet)”",
};




const myTabElements = document.querySelectorAll('#btn__button');
const tabsElements = Array.from(document.getElementsByClassName('btn__button__button'));
const myImage = document.querySelector('.tabs-frame-image');



myTabElements.forEach((tabs) => {
  tabs.addEventListener('click', () => changeTabs(tabs));
  console.log(tabs);
});






function changeTabs(tabParameterValue){


    console.log(tabParameterValue);

    changeTabsActivation();

    tabParameterValue.classList.add("btn-active");

    

    
    
    let expression = tabParameterValue.className;
    console.log(expression);
        
        

       switch(expression) {
        case "btn__button__button tabFirst btn-active":
            console.log("Rolex Resmi");
            myImage.src="./images/Rolex.jpg";
            break;
        case "btn__button__button tabSecond btn-active":
            console.log("Omega Resmi");
             myImage.src="./images/Omega.jpg"
            break;
        case "btn__button__button tabThird btn-active":
            console.log("Palet Resmi");
            myImage.src="./images/Patek.jpg"
            break;
        case "btn__button__button tabFourth btn-active":
            console.log("Tah Heuer Resmi");
            myImage.src="./images/TAG-Heuer.jpg"
            break;
        default:
            console.log("There is a problem in here.");
    }
    
   
       
}
        
        
    


function changeTabsActivation() {
  tabsElements.forEach((tab) => {
    tab.classList.remove('btn-active');
  });
}







