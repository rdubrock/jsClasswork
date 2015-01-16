

var counter = function () {
    var x = 0;

    
    var methods = 
        {
        nextNum : function () { 

            x = x + 1;
            return x;
            
        },
        reset : function () {

            x = 0;
            return x;
        
        }
    };
    return methods
};

var sequence1 = counter();

var sequence2 = counter();
// var sequence = function () {

//     x = x + 1;

//     return x;

// };
// var sequence1 = function () {
//     counter ();
// };

// var sequence2 = function () {
//     counter ();
// };