const posts = document.querySelector(".posts")

const searchbar = document.getElementById("searchbar")
const searchtype = document.getElementById("search_sort").value

const up_down = document.getElementById("up_down")

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
            console.log(post)
            if (!(post.children[0].innerHTML.toLocaleLowerCase().includes(searchbar.value.toLocaleLowerCase()))) {
                post.style.display = "none"
            }
            else {
                post.style.display = "block"
            }
        }
    }
    else if (searchtype == "Content") {
        for (let post of posts.children) {
            console.log(post)
            if (!(post.children[2].innerHTML.toLocaleLowerCase().includes(searchbar.value.toLocaleLowerCase()))) {
                post.style.display = "none"
            }
            else {
                post.style.display = "block"
            }
        }
    }
    else if (searchtype == "Date") {
        //use calendar input to select a range of dates maybe
        for (let post of posts.children) {
            console.log(post)
            if (!(post.children[1].innerHTML.toLocaleLowerCase().includes(searchbar.value.toLocaleLowerCase()))) {
                post.style.display = "none"
            }
            else {
                post.style.display = "block"
            }
        }
    }
}