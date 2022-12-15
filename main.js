const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let card = '';

posts.forEach((element) => {
    const date = element.created;
    const [year, month, day] = date.split('-');
    const dataFinale = [month, day, year].join('/');
    let immagine;

    //Bonus 2

    if(element.author.image == null){
        //prendiamo le iniziali
        let text = element.author.name;
        const arrayNome = text.split(" ");
        let nome = arrayNome[0];
        let cognome = arrayNome[1];
        let letteraNome = nome.charAt(0);
        let letteraCognome = cognome.charAt(0); 
        //stampiamo nel dom
        immagine = `<h1 class="profile-pic color-black">${letteraNome}${letteraCognome}</h1>`
    }else{
        immagine = `<img class="profile-pic" src="${element.author.image}" alt="Phil Mangione">                    
                   `
    }



    card += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${immagine}
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${dataFinale}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}</div>
            <div class="post__image">
                <img src="${element.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" data-postid="${element.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
});

const creaCard = document.getElementById('container');
creaCard.innerHTML += card;

//Array likes

const bottoneLike = document.getElementsByClassName('js-like-button');
const arrayLike = [];

for (let i=0; i<bottoneLike.length; i++){

    bottoneLike[i].addEventListener('click', function(){

        const postId = this.dataset.postid;
        const likes = document.getElementById(`like-counter-${postId}`);
        const likesNumber = parseInt(likes.innerText);

        if(arrayLike.includes(postId)){
            likes.innerText = likesNumber-1;
            
            const index = arrayLike.indexOf(postId);
            if(index > -1){
                arrayLike.splice(index,1);
            }
            bottoneLike[i].classList.remove("like-button--liked");
            console.log(arrayLike);
        }else{
            likes.innerText = likesNumber+1;
            arrayLike.push(postId);
            console.log(arrayLike);
            bottoneLike[i].classList.add("like-button--liked");
        }

    });
}



