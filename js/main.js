var elInput = document.querySelector(".input")
var elBtn = document.querySelector(".btn")
var elForm = document.querySelector('form')
var elTitle = document.querySelector('.title')
var elRefresh = document.querySelector('.refresh')
var allArr = ['C','PHP','Java Script','Java','Css','Bootstrap','Html','Swift','Kotlin','Python','C++','C#','Delphy']
var arr1 = []


elBtn.addEventListener('click',function(){
    inp = elInput.value
    for(var i = 0; i<=allArr.length; i++){
        if(allArr[i].length == inp){
            arr1.push(allArr[i])
            elTitle.textContent = arr1
        }
        
        
    }   
})

