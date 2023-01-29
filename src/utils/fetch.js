const url = 'https://api.github.com/users/kmortal'
const repos = document.querySelector('div')

function fetchAPI(){
    fetch(url)
        .then(res => res.json())
        .then(data=>{
            data.repos_url
            repos.innerText = data.repos_url
        })
        .catch(e=>console.log(e))
        
        
}