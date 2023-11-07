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

    let fullName = document.getElementById('fname').value;
    let phoneNumber = document.getElementById('pnumber').value;
    let mail = document.getElementById('email').value;
    let coverletter = document.getElementById('coverletter').value;
    let date = document.getElementById('date').value;
    let subject = document.getElementById('subject').value;
    let data = {fullName, phoneNumber,mail ,coverletter,date,subject};
    let response = await fetch(urlPost,{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })

    let dataNew =await response.json();
    console.log(data);
    console.log(response);
    console.log(dataNew);
}
