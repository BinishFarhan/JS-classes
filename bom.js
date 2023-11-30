// window is a object
// it has too many properties..
// window.location.hostname == shows web browser
// href shows whole current address.
// pathname = shows current page.
// for forward and backword and go..
function win() {
    var wind = window.open("https://www.google.com/", "mywin", "width=400,height=400,top=100,left=100");
    console.log(wind)


}

function fb() {
    // window.location.assign("https://www.facebook.com/")  // url .. maintain history
    window.location.replace("https://www.facebook.com/")  // current history remove. 
    // window.location.href = "https://www.google.com/"  /// url

}


function reload() {
    // console.log(window.location) // 
    window.location.reload()
}
