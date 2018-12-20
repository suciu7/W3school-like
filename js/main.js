
//Array to be filled with the output result
var output = [];

//String to be filled with the users code
var code = "";



//Check if user input is correct
function run() {

  // Catch users input and fill var response with it
  var result = document.getElementById("exerciseAnswer").value
  for (var i = 0; i < result.length; i++) {
    code += result[i]
  }

  // console.log equals this function which fills var outpu

  console.log = function log(code) {
        output.push(code);
  }
  // Execut user input code
    eval(code);

}

function show_answer()
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", 'js/answer.js', false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var responseText = rawFile.responseText;
                document.getElementById("correct").innerHTML = responseText
            }
        }
    }
    rawFile.send(null);
}

// // Check if the response array is equal to the exercises array
//   // for (var i = 0; i < exercises.length; i++) {
//   //   for (var i = 0; i < response.length; i++){
//   //     if (response[i] === exercises[i]) {
//   //       document.getElementById("correct").innerHTML = "Your code is correct";
//   //     } else {
//   //       document.getElementById("incorrect").innerHTML = "Your code is incorrect.Pay attention to the rules";
//   //     }
//   //   }
//   // }
