window.onload = function(){
    document.getElementById('search').addEventListener('click',showResults)

    function showResults() {
        
        //var url = 'https://randomuser.me/api';
        var searchTerm = document.querySelector('input[name="searchTerm"]').value

        var url = 'https://en.wikipedia.org/w/api.php?format=json&action=opensearch&origin=*&search=' + searchTerm;
        // console.log(searchTerm)
        var output = document.querySelector('#output')

        ajaxJs(url, function(response){
            // console.log(response)
            for ( var x in response){
                //console.log(x)
                //console.log(response[x]) // resturns all arrays
                console.log(response[x][0])  // returns the first of the array
            }
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

// https://en.wikipedia.org/w/api.php?format=json&action=opensearch&origin=*&search=javascript