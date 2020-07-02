"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase()); //uppercase
        console.log(word.toLowerCase()); //lowercase
        console.log(word.charAt(0)); //index 0
        var str = new String("Das");
        var str1 = word.concat(str.toString()); //concatenate
        console.log(str1);
        console.log(str1.slice(0, -5)); //slicing
        console.log(str1.length); //length
    };
    StringManipulations.prototype.findVowel = function (str) {
        var vowel = ["a", "e", "i", "o", "u"];
        var str = word.toLowerCase();
        for (var i = 0; i < str.length; i++) {
            for (var j = 0; j < vowel.length; j++) {
                if (str[i] == vowel[j]) {
                    console.log(str[i] + " is Vowel");
                    break;
                }
                else {
                    continue;
                }
            }
        }
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        var sen = "";
        for (var i = 0; i < sentence.length; i++) {
            sen = sen + sentence[i] + " ";
        }
        console.log(sen);
    };
    return StringManipulations;
}());
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findMagic = function (num) {
        //throw new Error("Method not implemented."); ex:199 is magic: 1+9+9 will 1
        if (num % 9 == 1)
            console.log(num + " is a Magic Number");
        else
            console.log(num + " is NOT a Magic Number");
        /*
          while(num>9){
              var temp:number = num;
              var sum:number=0;
              var n:number=0;
                  while(temp>0){
                  n = temp % 10;
                  console.log("n is"+n);
                  sum = sum+n;
                  console.log("sum is"+sum);
                  temp = temp/10;
                  console.log("temp is"+temp);
                  }
              num = sum;
          }
          if(num ==1){
              console.log(num + " is a magic number");
          }
          else{
              console.log(num + " is not a magic number");
          }*/
    };
    NumbersManipulations.prototype.findPrime = function (num) {
        var flag = 0;
        if (num == 0 || num == 1) {
            console.log(num + " is not prime number");
        }
        else {
            for (var i = 2; i < num / 2; i++) {
                if (num % i === 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 1) {
                console.log(num + " is not prime number....!");
            }
            else {
                console.log(num + " is a prime number...!");
            }
        }
    };
    return NumbersManipulations;
}());
var word = "Subham ";
var obj = new StringManipulations();
obj.print(word);
obj.printWithSpace(word);
obj.findVowel(word);
//--------------------------------------------------------------
var obj1 = new NumbersManipulations();
obj1.findPrime(51);
obj1.findMagic(19);
