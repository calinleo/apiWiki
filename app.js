window.onload = function(){
    document.getElementById('search').addEventListener('click',showResults)

    function showResults() {
        console.log('event listener works')
        var url = 'https://randomuser.me/api';
        ajaxJs(url, function(response){
            console.log(response)
        })
    }

    function ajaxJs (url, callback){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            console.log(xhr)
            callback('readychange works')
        }
        xhr.open('GET', url, true) // true for Asynchronous
        xhr.send();
    }

}