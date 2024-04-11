const dia = document.querySelector(".dia");
const mes = document.querySelector(".mes");
const año = document.querySelector(".año");
const day = document.querySelector("#day"); 
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const submit = document.querySelector("button");
const dayfinal = document.querySelector(".day");
const monthfinal = document.querySelector(".month");
const yearfinal = document.querySelector(".year");   
const dayresult = 31
const monthresult = 12
const yearresult = 2024


submit.addEventListener("click",(e)=>{
    e.preventDefault()
    const labelday = document.querySelector("#labelday")
    const labelmonth = document.querySelector("#labelmonth")
    const labelyear = document.querySelector("#labelyear")
    const daynull = document.querySelector(".daynull")
    const monthnull = document.querySelector(".monthnull")
    const yearnull = document.querySelector(".yearnull")
    const errorDay = document.querySelector("#messageErrorDay")
    const errorMonth = document.querySelector("#messageErrorMonth")
    const errorYear = document.querySelector("#messageErrorYear")
    let dayShow
    let monthShow
    let yearShow
    let booleanDay = false;
    let booleanMonth = false;
    let booleanYear = false;

    const isEmptyDay = day.value.length === 0

    if(isEmptyDay || (day.value<1 || day.value>31) ){
        const messageErrorDayValue = isEmptyDay? "this filed is requiered" : "must be a valided day"
        labelday.classList.add("null")
        day.classList.add("daynull")

        !errorDay? dia.insertAdjacentHTML("beforeend",`<span class="null" id="messageErrorDay">${messageErrorDayValue}</span>`): errorDay.innerHTML = `${messageErrorDayValue}`
    
    }else { 
        
        booleanDay = true

        if(daynull){
            dia.removeChild(errorDay)
            labelday.classList.remove("null")
            day.classList.remove("daynull")
        } 
    }   
    
    
    if(month.value.length === 0 || (month.value<0 || month.value>12)){
        const messageErrorMonthValue = month.value.length === 0? "this filed is requiered" : "must be a valided month"
        
        labelmonth.classList.add("null")
        month.classList.add("monthnull")
        
        !errorMonth? mes.insertAdjacentHTML("beforeend",`<span class="null" id="messageErrorMonth">${messageErrorMonthValue}</span>`): errorMonth.innerHTML = `${messageErrorMonthValue}`

    }else { 
        booleanMonth = true

        if(monthnull){
            mes.removeChild(errorMonth)
            labelmonth.classList.remove("null")
            month.classList.remove("monthnull")
        }
    }
    
    if(year.value.length === 0 || year.value<0 || year.value>2024){
        const messageErrorYearValue = year.value.length === 0 ? "this filed is requiered" : "must be in the past"

        labelyear.classList.add("null")
        year.classList.add("yearnull")

        !errorYear? año.insertAdjacentHTML("beforeend",`<span class="null" id="messageErrorYear">${messageErrorYearValue}</span>`): errorYear.innerHTML = `${messageErrorYearValue}`


    } else {
        booleanYear = true

        if(yearnull){
            año.removeChild(errorYear)
            labelyear.classList.remove("null")
            year.classList.remove("yearnull")
        }
    }
    console.log(booleanDay,booleanMonth,booleanYear)
    if(booleanDay === true && booleanMonth === true && booleanYear === true){
        
        dayShow = dayresult-day.value
        dayfinal.innerHTML = `<h2 class="value">${dayShow}</h2><h2>days</h2>`  

        monthShow = monthresult-month.value 
        monthfinal.innerHTML = `<h2 class="value">${monthShow}</h2><h2>months</h2>`

        yearShow = yearresult-year.value        
        yearfinal.innerHTML = `<h2 class="value">${yearShow}</h2><h2>years</h2>`

    } else{
        dayfinal.innerHTML = `<h2 class="value">--</h2><h2>days</h2>`
        monthfinal.innerHTML = `<h2 class="value">--</h2><h2>months</h2>`
        yearfinal.innerHTML = `<h2 class="value">--</h2><h2>years</h2>`  
    }
})


