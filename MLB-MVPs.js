const players = [
    {name: "Shohei Ohtani (2023)", description: "DH/SP for Los Angeles Angels.", imgSrc:"./shohei-ohtani.jpg"},
    {name: "Aaron Judge (2022)", description: "Outfielder for New York Yankees.", imgSrc:"./aaron-judge.jpg"},
    {name: "Shohei Ohtani (2021)", description: "DH/SP for Los Angeles Angels.", imgSrc:"./shohei-ohtani.jpg"},
    {name: "José Abreu (2020)", description: "First Baseman for Chicago White Sox.", imgSrc:"./jose-abreu.jpg"},
    {name: "Mike Trout (2019)", description: "Outfielder for Los Angeles Angels.", imgSrc:"./mike-trout.jpg"},
    {name: "Mookie Betts (2018)", description: "Outfielder for Boston Red Sox.", imgSrc:"./mookie-betts.jpg"},
    {name: "Jose Altuve (2017)", description: "Second Baseman for Houston Astros.", imgSrc:"./jose-altuve.jpg"},
    {name: "Mike Trout (2016)", description: "Outfielder for Los Angeles Angels.", imgSrc:"./mike-trout.jpg"},
    {name: "Josh Donaldson (2015)", description: "Third Baseman for Toronto Blue Jays.", imgSrc:"./josh-donaldson.jpg"},



]

const createCard = (currPlayer) => {
    return `
        <div class="col-md-4">
            <div class="card card-mb-4 custom-card">
                <img src="${currPlayer.imgSrc}" class="card-img-top" alt="${currPlayer.name}">
                <div class="card-body">
                    <h5 class="card-title">${currPlayer.name}</h5>
                    <p class="card-text">${currPlayer.description}</p>
                </div>
            </div>
        </div>
    `
}

document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("card-container")
    for (let i = 0; i < players.length; i++) {
        const currPlayer = players[i]
        const currCardHTMLStr = createCard(currPlayer)
        cardContainer.innerHTML += currCardHTMLStr
    }
})
