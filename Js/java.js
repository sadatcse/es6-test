const loadcountry = (searchText) =>{
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displaycountry(data));
}


loadcountry('Bangladesh');


const displaycountry = countrys =>{
    console.log(countrys);
    // countrys.forEach(country => {
    //     console.log(country.name.common)

    // })
       

    // step 1: container element
    }

