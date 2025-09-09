function fun (num) {

    for (let index = 1; index <= num; index++) {
        if (num % index == 0) {
            console.log("prient", index);
            
        };
        
    }
    
}

fun(100);