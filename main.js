function getProjects(){
    const urlGitHub = 'https://api.github.com/users/karinecsilva/repos'
    var loadingElement = document.getElementById('loading')

    fetch(urlGitHub {
        method: 'GET'
    })
        .then((Response)=> response.json())
        .then((Response)=> {
            loadingElement.style.display = 'none'
            showProjects(response)
        })
        .catch((e) => {
        console.log(e)
        })
}

function showProjects(data){
    var listElement = document.getElementById('my-projects-list')

    for(let i = 0; i < data.length; i++)
    {
        let a = document.
    }

}

getProjects()