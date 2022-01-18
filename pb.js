// find the bangladesh word is present or not!!

var bangladesh = "Bangladesh is highly populated country";
var lowercase = bangladesh.toLowerCase();

if (lowercase.indexOf("bangladesh") !== -1) {
    console.log("The word is present");
} else {
    console.log("The word is not present")
}