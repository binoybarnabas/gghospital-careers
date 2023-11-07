
    const url = 'https://dummyjson.com/users';

    const getData = async(url)=>{
        try{
            const response = await fetch(url);
            //console.log(response);
            const data = await response.json();
            console.log(data);
            data.users.map((userData)=>{
                showData = document.querySelector('.career-main');
                const cardData = createCardData(userData);
                showData.appendChild(cardData);
            })
        }
        catch(e){
            console.log(e)
        }
        
    }

    getData(url);

    const createCardData = (userData)=>{

    const careerCards = document.createElement('div');
    careerCards.classList.add("career-cards");
    const careerContent = document.createElement('div');
    careerContent.classList.add("career-content");
    const h1 = document.createElement('h1');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const careerButton = document.createElement('div');
    careerButton.classList.add("career-button");
    const button = document.createElement('button');
    h1.textContent = userData.company.department;
    p1.textContent = " Designation: " + userData.company.title + " | Qualification: " + userData.university + " | Experience: " + Number(Number(userData.age) - 20);
    p2.textContent = " Send your CV to " + userData.email + " | Contact number: " + userData.phone;
    button.textContent = "Apply Now";
    careerContent.appendChild(h1);
    careerContent.appendChild(p1);
    careerContent.appendChild(p2);
    careerButton.appendChild(button);
    careerCards.appendChild(careerContent);
    careerCards.appendChild(careerButton);

    careerCards.addEventListener('click',()=>{
    openNewPage(userData);
    console.log("hello event");
    })
    return careerCards;

    }

    const openNewPage = (userData)=>{
        window.location.href = `form.html?id=${userData.id}`
    }
    