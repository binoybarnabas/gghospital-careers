const careers = document.getElementsByClassName('careers');

for (let i=0; i<10; i++) {
    const careerCards = document.createElement('div');
    careerCards.classList("career-cards");
    const careerContent = document.createElement('div');
    careerContent.classList("career-content");
    const h1 = document.createElement('h1');
    h1.classList.add("h1");
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const careerButton = document.createElement('div');
    careerButton.classList.add("career-button");
    const button = document.createElement('button');

    h1.textContent = " ";
    p1.textContent = "Designation:" + " " + "| Qualification:" + " " + "| Experience:" + " ";
    p2.textContent = "Send your CV to" + " " + "| Contact number:" + " ";
    button.textContent = "Apply Now";

    careerContent.appendChild(h1);
    careerContent.appendChild(p1);
    careerContent.appendChild(p2);
    careerButton.appendChild(button);
    careerCards.appendChild(careerContent);
    careerCards.appendChild(careerButton);
    careers.appendChild(careerCards);
}
