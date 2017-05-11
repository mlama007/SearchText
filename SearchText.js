/*jshint multistr:true */

var text = "Mami Mami Mami Mami Mami Mami Mami Mami";
var myName= "Mili";
var hits = [];

for (var i = 0; i<=text.length; i++){
    if (text[i]==="M"){
        for( var j = i; j < (myName.length + i); j++){
            hits.push(text[j]);
        }
    }
}

// if there are no hits, then "..."
if (hits){
    console.log("Your name wasn't found!");   
}
else {
    console.log (hits);
}