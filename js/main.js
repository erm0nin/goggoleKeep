const formStarter = document.querySelector('.form__starter');
const formContent = document.querySelector('.form__content');
const formTitle = document.querySelector('.form__title');
const formText = document.querySelector('.form__text')

formStarter.onclick = (event)=>{
  event.stopPropagation();
  formStarter.hidden = 'true';
  formContent.removeAttribute('hidden');
  formTitle.focus();
  
}

formContent.onclick = (event)=>{
  event.stopPropagation();
  
  
}


formTitle.addEventListener('keydown', (event)=>{
  if(event.key === 'Enter'){
    event.preventDefault(); 
    formText.focus();
    formText.innerText = '';
  }
})

formText.addEventListener('focus', ()=>{
  formText.textContent = '';
})

const addNoteForm = document.querySelector('#addNoteForm');
const noteTextInput = document.querySelector('#noteText');
const cardswrapper = document.querySelector('#cards-wrapper');

const noteTextInputTwo = document.querySelector('#noteTextInputTwo');


const notes = [
  {
  title: 'Основы',
  text: 'Lorem ipsum dolor sit amet'
},
{
  title: 'Основы',
  text: 'Lorem ipsum dolor sit amet'
},
{
  title: 'Основы',
  text: 'Lorem ipsum dolor sit amet'
},

  
];


addNoteForm.addEventListener('submit', (event)=>{
 event.preventDefault();
 notes.push({
  title: noteTextInput.value,
  text: noteTextInputTwo.textContent,
 });
 noteTextInputTwo.textContent = '';
 addNoteForm.reset();
 const lastNote = notes[notes.length - 1];
 const html = `<section class="card">
        <div class="card-body">
            <h5 class="card-title">${lastNote.title}</h5>
          <p class="card-text">${lastNote.text}</p>
        </div>
      </section>`;
cardswrapper.insertAdjacentHTML('afterbegin',html);
noteTextInput.focus();
});
notes.forEach((item)=>{
  console.log(item);

  const html = `<section class="card">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.text}</p>
        </div>
      </section>`;
      cardswrapper.insertAdjacentHTML('afterbegin',html);
})


document.addEventListener('click', (event)=>{
  formStarter.removeAttribute('hidden');
  formContent.hidden = 'true';
})


