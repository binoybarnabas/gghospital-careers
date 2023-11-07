const urlParam = new URLSearchParams(window.location.search);

const id = Number(urlParam.get('id'));
console.log(typeof(id));
let filteredData;
let url = 'https://dummyjson.com/users';

const dataProcess = async(url,id)=>{
try{
let response = await fetch(url);
let data = await response.json();
const newData = data.users.filter((userData)=>{
    if(userData.id == id){
           return userData;   
    }
}
);
document.getElementById('position').innerHTML = newData[0].company.department;
document.getElementById('designation').innerHTML = newData[0].company.title;
document.getElementById('qualification').innerHTML = newData[0].university;

filteredData = newData;
document.getElementById('fname').value = filteredData[0].firstName;
document.getElementById('pnumber').value = filteredData[0].phone;
document.getElementById('email').value = filteredData[0].email;
document.getElementById('coverletter').value = filteredData[0].address.address;
document.getElementById('date').value = filteredData[0].birthDate;
document.getElementById('subject').value = filteredData[0].maidenName;
console.log(filteredData);
}
catch(e){   
    console.log(e); 
}
}

dataProcess(url,id);


let urlPost = 'https://dummyjson.com/users/add';
//posting
const postData = async () =>{
    console.log(filteredData);
    
    let data = filteredData;
    let response = await fetch(urlPost,{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    console.log(response);

    let dataNew =await response.json();
    console.log(data);
    console.log(response);
    console.log(dataNew);
}
