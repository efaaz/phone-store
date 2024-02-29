const loadPhone = async (name=13)=>{
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
            <button onclick='fetchingDetails("${phones.slug}")' class="btn btn-primary">Show Details</button>
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

loadPhone()

async function fetchingDetails(id){
   const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
   const data = await res.json();
   const phone = data.data
   
   showDetails(phone)
}


const showDetails = (phone)=>{
    console.log(phone);
    showModal.showModal()

    let name = document.getElementById('name');
    name.textContent = phone.name;
    
    let brand = document.getElementById('brand');
    brand.textContent = phone.brand;

    let storage = document.getElementById('storage');
    storage.textContent = phone.mainFeatures.storage
    
    let size = document.getElementById('size');
    size.textContent = phone.mainFeatures.displaySize

    let chipset = document.getElementById('chipset');
    chipset.textContent = phone.mainFeatures.chipSet

    let memory = document.getElementById('memory');
    memory.textContent = phone.mainFeatures.memory

    let release = document.getElementById('release');
    release.textContent = phone.releaseDate;

    let sensors = document.getElementById('sensors');
    sensors.textContent = phone.mainFeatures.sensors[1]

}