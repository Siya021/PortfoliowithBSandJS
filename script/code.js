// about section
let about = document.querySelector('section#about .row:last-child');
let aboutContents = [
    "I am an aspiring front end developer from the streets of Phillipi",
    "Come to my Kasi, Woza and you get me the"
]
// Loop through the contents
aboutContents.forEach( (content)=>{
about.innerHTML += `
<p class='lead' >${content}</p>

`
 })
 // Education
 let education = [
     {
         id: 1,
         year: 2023,
         description: 'Started at Life Choices Academy',
         place: 'Life Choices',
         type: 'certificate',
         certificate: ''
     },
     {
         id: 7,
         year: 2018,
         description: 'Grade 12',
         place: 'Phakama Secondary School',
         type: 'Certificate',
         certificate: 'Malusi'
     },
 ]
 //
 let divEducation = document.querySelector('.education');
 education.forEach((data)=> {
     divEducation.innerHTML += `
     <div class="card">
         <h4 class="display-4">${data.year}</h4>
         <div class="card-body">
             <p class="text-white">
                 ${data.description} @ <span>${data.place}</span> 
                 <a href="${data.certificate}" target="_blank">${data.type}</a>
             </p>
         </div>
     </div>
     `
 })
 