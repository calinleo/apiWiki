window.onload = function(){
    document.getElementById('search').addEventListener('click',showResults)

    function showResults() {
        
        var url = 'https://randomuser.me/api';
        ajaxJs(url, function(response){
            console.log(response)
        })
    }

    function ajaxJs (url, callback){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                callback(JSON.parse(xhr.responseText))
            }
            // callback('readychange works')
        }
        xhr.open('GET', url, true) // true for Asynchronous
        xhr.send();
    }

}