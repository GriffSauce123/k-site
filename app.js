const posts = document.querySelector(".posts")

const searchbar = document.getElementById("searchbar")
const searchtype = document.getElementById("search_sort").value

const up_down = document.getElementById("up_down")

const webhook = document.URL.slice(document.URL.lastIndexOf('?'))

window.addEventListener("load", (event) => {filter_by_category(webhook.toLocaleLowerCase().slice(10))});

up_down.addEventListener("click", flip_order)
searchbar.addEventListener("keyup", search)

function flip_order() {
    if (up_down.style.rotate == "180deg") {
        up_down.style.rotate = "0deg";
    }
    else {
        up_down.style.rotate = "180deg";
    }
    //reverse the sort of posts
    for (var i = 1; i < posts.childNodes.length; i++){
        posts.insertBefore(posts.childNodes[i], posts.firstChild);
    }
}

function search() {
    if (searchtype == "Title") {
        for (let post of posts.children) {
            //console.log(post)
            if (!(post.querySelector("#content").children[0].innerHTML.toLowerCase().includes(searchbar.value.toLowerCase()))) {
                post.style.display = "none"
            }
            else {
                post.style.display = "flex"
            }
        }
    }
    else if (searchtype == "Subtitle") {
        for (let post of posts.children) {
            //console.log(post.querySelector("#content").children[1])
            if (!(post.querySelector("#content").children[1].innerHTML.toLowerCase().includes(searchbar.value.toLowerCase()))) {
                post.style.display = "none"
            }
            else {
                post.style.display = "flex"
            }
        }
    }
    else if (searchtype == "Content") {
        for (let post of posts.children) {
            //console.log(post)
            if (!(post.querySelector("#content").children[3].innerHTML.toLowerCase().includes(searchbar.value.toLowerCase()))) {
                post.style.display = "none"
            }
            else {
                post.style.display = "flex"
            }
        }
    }
    else if (searchtype == "Date") {
        //use calendar input to select a range of dates maybe
        for (let post of posts.children) {
            //console.log(post.querySelector("#content").children[2])
            if (!(post.querySelector("#content").children[2].innerHTML.toLowerCase().includes(searchbar.value.toLowerCase()))) {
                post.style.display = "none"
            }
            else {
                post.style.display = "flex"
            }
        }
    }
}

function filter_by_category(cat) {
    if (!(cat == '')) {
        for (let post of posts.children) {
            if (!(post.querySelector(".category").id.toLowerCase() == cat)) {
                post.style.display = "none"
            }
            else {
                post.style.display = "flex"
            }
        }
}
}
