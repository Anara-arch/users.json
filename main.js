const BASE_URL ="https://jsonplaceholder.typicode.com/users ";

const ul = document.getElementById("ul");
const body = document.querySelector("body");

let newArray = [];

const renderUsers = () => {
    newArray.forEach((item) => {
        const li = document.createElement("li");
        const image = document.createElement("img");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const h5 = document.createElement("h5");
        image.setAttribute(
            "src",
            "https://www.shutterstock.com/image-vector/default-profile-picture-avatar-photo-260nw-1681253560.jpg"
        );

        image.setAttribute("alt", item.name);
        image.style.width = "110px";
        image.style.height = "110px";
        image.style.borderRadius = "50%";
        image.style.marginLeft = "30px";
        h5.innerText = item.id;
        h5.style.marginLeft = "80px";
        h2.innerText = item.name;
        h2.style.marginLeft = "20px";
        p.innerText = item.email;
        li.style.background = "red";
        li.style.width = "170px";
        li.append(image, h5,h2, p,);
        ul.appendChild(li);
    });
};

const getUsers = async() => {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        newArray = data;
        renderUsers();
        console.log(data);
};
getUsers()



   