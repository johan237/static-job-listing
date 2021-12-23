filteredItems = document.querySelector('.filtered-items')
 let closeButtons = document.querySelectorAll('.close')
let tempArr = [] 
window.addEventListener('DOMContentLoaded',()=>{
        fetch('./data.json')
            .then(data => data.json())
             .then(results => 
               display(results)
               )           
       })  
clearBtn = document.querySelector('header p')

let jobs = document.querySelectorAll('.job')
console.log(jobs)
let skills = document.querySelectorAll('.job job-skills')
 
async function display(results){
    results.forEach(result => {
       let  div = document.createElement('div')
       div.classList.add('job')
       div.classList.add('flex')
    
      let span = ""
       if(result['new']){
        span = '<span class="new button button-radius">NEW</span>'
    }

    let featured =""
    if(result['featured']){
        featured = '<span class="featured button button-radius">FEATURED</span>'
    }
 
   let results = ""
    result['languages'].forEach(language =>{
      
    results += '<span class="skill button">'+language+'</span>'
})

{/* <span class="skill button">  result['level'] </span> */}

 let  tools = ""
result['tools'].forEach(tool =>{
    
  tools +='<span class="skill button">' +tool +'</span>'
})
//  a  = ..results
// console.log(...results)
    
    div.innerHTML = 
       `    
  <div class="job-attributes flex">
  <img src="${result['logo']}" alt="">
  
  <div class="content flex flex-col">
    <div class="content-top">
    <span class="name">${result['company']}</span>

    ` +span + featured+ `
    </div>
    <h1 class="role">${result['position']}</h1>  
    <div class="info flex">
      <span class="when">${result['postedAt']}</span>
      <span class="full-time">${result['contract']}</span>
      <span class="location">${result['location']}</span>
    </div>
  </div>
  </div>
    <div class="job-skills">
  <span class="skill button">  ${result['role']} </span>
  <span class="skill button">  ${result['level']} </span> 
  ` + results+ tools+
  ` </div> `
       document.querySelector('main').appendChild(div)
    });
    // console.log(jobs)
    jobs = document.querySelectorAll('.job')
    skills = document.querySelectorAll('.job .job-skills .skill')
 skills.forEach(skill=>skill.addEventListener('click',()=>{
   console.log(tempArr)
   console.log(tempArr.indexOf(skill.textContent))
     if(tempArr.indexOf(skill.textContent) ==-1){
       tempArr.push(skill.textContent)
       console.log(tempArr.indexOf(skill.textContent))
      console.log("no " +skill.textContent)
      let newSpan = document.createElement('span')

      newSpan.innerHTML = 
          `
          ${skill.textContent}<span class=" button close">X</span>
          `
      filteredItems.appendChild(newSpan)
     }
 
closeButtons = document.querySelectorAll('.close')

closeButtons.forEach(button=>button.addEventListener('click',(e)=>{
   buttonContent = button.parentElement.innerText
   resultsa = buttonContent.slice(0,-1)
e.stopPropagation()
   console.log(resultsa)
  jobs.forEach(job =>{
    jobContent = Array.from(job.querySelectorAll(' .job-skills .skill')).map(res => res.textContent)
    if(jobContent.indexOf(resultsa) ==-1){
      job.style.display = 'block'
      job.classList.add('job')
      job.classList.add('flex')
      
    }
  })

  button.parentElement.remove()
 }))


 jobs.forEach(job =>{
   jobContent = Array.from(job.querySelectorAll(' .job-skills .skill')).map(res => res.textContent)
   if(jobContent.indexOf(skill.textContent) ==-1){
    //  tempArr.push(job)
     job.style.display = 'none'
   }
 })

 document.querySelector('header p').addEventListener('click',()=>{
  document.querySelector('.filtered-items').innerHTML=''

  console.log(jobs)
  jobs.forEach(job=>{
    job.style.display = 'block'
  })
})



}))

}


