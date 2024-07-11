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


let notes = [];

if(localStorage.getItem('notes')){
  notes = JSON.parse(localStorage.getItem('notes'));

}else{

}



// const notes = [
//   {
//     id: 1,
//   title: 'Основы',
//   text: 'Lorem ipsum dolor sit amet'
// },
// {
//   id: 2,
//   title: 'Основы',
//   text: 'Lorem ipsum dolor sit amet'
// },
// {
//   id: 3,
//   title: 'Основы',
//   text: 'Lorem ipsum dolor sit amet'
// },];




addNoteForm.addEventListener('submit', (event)=>{
 event.preventDefault();

 let id = 1;
if( notes.length > 0 ){
  id = notes[notes.length -1]['id'] + 1;
}
 notes.push({
  id: id,
  title: noteTextInput.value,
  text: noteTextInputTwo.innerHTML,
 });

 localStorage.setItem('notes', JSON.stringify(notes));
 noteTextInputTwo.textContent = '';
 addNoteForm.reset();
 const lastNote = notes[notes.length - 1];
 const html = `<section class="card">
        <div class="card-body">
            <h5 class="card-title">${lastNote.title}</h5>
          <p class="card-text">${lastNote.text}</p>
          <button data-id="${lastNote.id}" data-action="delete" class="btn  btn-danger btn-sm">Удалить</button>
        </div>
      </section>`;
cardswrapper.insertAdjacentHTML('afterbegin',html);
noteTextInput.focus();
});






notes.forEach((item, index)=>{
  console.log(item);
  const html = `<section class="card">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.text}</p>
          <button data-id="${item.id}" data-action="delete" class="btn btn-danger btn-sm">Удалить</button>
        </div>
      </section>`;
      cardswrapper.insertAdjacentHTML('afterbegin',html);
})


document.addEventListener('click', (event)=>{
  formStarter.removeAttribute('hidden');
  formContent.hidden = 'true';
})




// delete button

document.addEventListener('click', (event)=>{
  event.target
  if(event.target.dataset.action === 'delete'){

    const id = event.target.dataset.id;
    const index = notes.findIndex((item) => {
      return item.id == id;
    })
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
     event.target.closest('.card').remove()
  }
})