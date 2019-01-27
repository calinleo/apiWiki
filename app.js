window.onload = function(){
    document.getElementById('search').addEventListener('click',showResults)

    function showResults() {
        console.log('event listener works')
    }
}