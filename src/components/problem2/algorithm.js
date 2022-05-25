function userInput(){

    var input = prompt("write a string of letters")

    console.log(input)
    return input;
} 


function maxChar(test_string){
    if (test_string != null){ 
        const string_array = []
        
        for (let i = 0; i < test_string.length; i++) {
            string_array.push((test_string.charAt(i)));
        }
        var true_max = 1;
        var temp_max = 0;
        var str;
        for (var i=0; i<string_array.length; i++){
            for (var j=i; j<string_array.length; j++){
                if (string_array[i] == string_array[j]){
                temp_max++;
                }
                if (true_max<temp_max){
                true_max=temp_max; 
                str = string_array[i];
                }
            }
            temp_max=0;
        }
        console.log(str);
        alert (str);
        return str;
    }
    else {
        console.log("no input")
    }
}