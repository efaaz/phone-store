
const loadPhone = async (name)=>{
   const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${name}`);
   const data = await res.json();
   const phones = data.data
   console.log(phones);
   showOnDisplay(phones)
}

 

function showOnDisplay(phones){
    let card = document.getElementById('cards');
    card.textContent = ''
    phones.forEach(phones => {
    let div = document.createElement('div');
    div.classList = `card bg-white shadow-xl pt-6`
    div.innerHTML = 
        `<figure><img src="${phones.image}" /></figure>
        <div class="card-body">
         <h2 class="card-title">${phones.phone_name}</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
         <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
         </div>
        </div>`
        card.appendChild(div)
    })
    loading(false)
}


function searchInput(){
    loading(true)
    let input = document.getElementById('search');
    let name =  input.value;
    console.log(name);
    loadPhone(name)
}

function loading(condition){
    let load = document.getElementById('loading');
    if (condition) {
        load.classList.remove('hidden') 
    }else{
        load.classList.add('hidden')
    }
    
    
}

