const arrayDimention = 15;

const createEmptyArr = (range, char) => {
    const outputArray = [];
    for(let i=0; i < range; i++){
        let subArr = [];
        for(let j=0; j < range; j++){
            subArr.push(char);
        }
        outputArray.push(subArr);
    }
    return outputArray;
}

//const ArrCO = createEmptyArr(arrayDimention);

function GenerateNumber (n){
    return Math.ceil(Math.random()*n)
}

const fillRandom = (Arr) => {
    let number;
    for(let i=0; i < arrayDimention; i++){        
        for(let j=0; j < arrayDimention; j++){
            if (Arr[i][j] == undefined){
                if (i != j){
                    number = GenerateNumber(20);
                    Arr[i][j] = number;
                    Arr[j][i] = number;
                }else{
                    Arr[i][j] = 0;
                }
                
            }
        }
    }
}

const formatNumber = (num) => {
    let change = num;
    //console.log(num.toString().length);
    if (num.toString().length == 1) {
        change = " " + num;
    }
    return change;
}

const formatArrPrint = (arrForPrint) => {
    const formatArr = Array.from(arrForPrint);
    const len = formatArr.length;
    for(let i=0; i < len; i++){
        let stringPrint = "";      
        for(let j=0; j < len; j++){        
            stringPrint += formatNumber(formatArr[i][j]) + "  ";
            //console.log(formatArr[i][j] + " ");
        }
        console.log(stringPrint);
        //console.log();
    }
}

let min1=min2=min3=0;
let counter = 0;

let method1Time = method2Time = 0;

do {
    const ArrCO = createEmptyArr(arrayDimention);   

    fillRandom(ArrCO);

    //formatArrPrint(ArrCO);


    const findTotalOptimum = (array) => {
        const resultArray = [];
        let minArray = [];
        let min = 0;
        for(let i = 0; i < arrayDimention - 1; i++){
            min += ArrCO[i][i+1];
        }
        
        //console.log(resultArray);
        
        for(i1 = 0; i1 < arrayDimention; i1++){
            resultArray.push(i1);
            for(i2 = 0; i2 < arrayDimention; i2++){
                if(!resultArray.includes(i2)){
                    resultArray.push(i2);
                    for(i3 = 0; i3 < arrayDimention; i3++){
                        if(!resultArray.includes(i3)){
                            resultArray.push(i3);
                            for(i4 = 0; i4 < arrayDimention; i4++){
                                if(!resultArray.includes(i4)){
                                    resultArray.push(i4);
                                    for(i5 = 0; i5 < arrayDimention; i5++){
                                        if(!resultArray.includes(i5)){
                                            resultArray.push(i5);
                                            console.log(resultArray);
                                            let sum = 0;
                                            for(let j = 0; j < arrayDimention - 1; j++){
                                                sum += array[resultArray[j]][resultArray[j+1]];
                                            }

                                            console.log(sum);

                                            if(sum < min){
                                                min = sum;
                                                minArray = Array.from(resultArray);
                                            }                                        
                                            resultArray.pop();
                                        }

                                    }
                                    resultArray.pop();
                                }
                                
                            }
                            resultArray.pop();
                        }
                        
                    }
                    resultArray.pop();
                }
                
            }
            resultArray.pop();
        }
        console.log(min + " " + minArray);
    }


    const resultArray1 = [];
    let minArray1 = [];
    //let min1 = 0;
    for(let i = 0; i < arrayDimention - 1; i++){
        min1 += ArrCO[i][i+1];
    }
    min1 += ArrCO[arrayDimention-1][0];

    const findByRecursion = (dimention) => {    
        for(let x = 0; x < dimention; x++){
            if(!resultArray1.includes(x)){
                resultArray1.push(x);
                if(resultArray1.length == dimention){
                    //console.log(resultArray1);
                    let sum = 0;
                    for(let j = 0; j < dimention - 1; j++){
                        sum += ArrCO[resultArray1[j]][resultArray1[j+1]];
                    }
                    //console.log(sum);
                    if(sum < min1){
                        min1 = sum;
                        minArray1 = Array.from(resultArray1);
                    }                     
                } else {
                    findByRecursion(dimention);                
                }
                resultArray1.pop();            
            }
        }    
    }


    //findTotalOptimum(ArrCO);
    
    let startTime = Date.now();
    //findByRecursion(arrayDimention);
    let endTime = Date.now();
    //console.log(min1 + " " + minArray1);
    //let executionTime = endTime - startTime;
    //console.log("Executed for " + executionTime/1000 + " s.")
      






    const effectiveArray = (minArr, Arr) => {
        const newArr = createEmptyArr(Arr.length, " ");
        for(let i = 0; i < minArr.length - 1; i++){
        newArr[minArr[i]][minArr[i+1]] = Arr[minArr[i]][minArr[i+1]];
        }
        return newArr;
    }

    







    const resultArray2 = [];
    let raw = -1;
    let minArray2 = [];
    let flag = 0;    
    for(let i = 0; i < arrayDimention - 1; i++){
        min2 += ArrCO[i][i+1];
    }
    min2 += ArrCO[arrayDimention-1][0]; 

    //console.log("Min2 = " + min2);

    const fastRecurtion = (arrayToRecurse, dim) => {  
            for(let x = 0; x < dim; x++){
                
                let exp = (resultArray2.length == 0) || !(arrayToRecurse[resultArray2[resultArray2.length - 1]][x] == ' ');
            if(!resultArray2.includes(x) && exp){
                resultArray2.push(x);
                if(resultArray2.length == dim){
                    //console.log(resultArray2);
                   /* if(resultArray2[0] != raw){
                        raw = resultArray2[0];
                        console.log(raw + " ");
                        //process.stdout.write(raw + " ");
                    }   */         
                    let sum = 0;
                    for(let j = 0; j < dim - 1; j++){
                        sum += arrayToRecurse[resultArray2[j]][resultArray2[j+1]];
                    }
                    //console.log(sum);
                    if(sum < min2){
                        min2 = sum;
                        minArray2 = Array.from(resultArray2);
                    }
                }else {
                    fastRecurtion(arrayToRecurse, dim);              
                }
                resultArray2.pop();            
            }
        }    
    }

    function copySquareArray(array){
        const dim = array.length;
        const newArr = createEmptyArr(dim);
        for(let i = 0; i < dim; i++){
            for(let j = 0; j < dim; j++){
                newArr[i][j] = array[i][j];
            }
        }
        return newArr;
    }

    const fasterMethod1 = (dimention, arr) => {
        const minValues = createEmptyArr(dimention, ' ');
        const reducedArray = copySquareArray(arr);
        //console.log(ArrCO);
        for(let i = 0; i < dimention; i++){
            reducedArray[i][i] = Infinity;
        }
        //console.log(ArrCO);
        //for(let j = 1; j < dimention; j++){
        while (minArray2.length == 0 || flag <= 1) {
            //console.log(minArray2.length);
            //const funktion = (item) =>  item = " ";
            //if(minValues[0].every(funktion) = true){
            //    n = 2;
            //}else{
            let n = 1;
            //}
            for(let i = 0; i < dimention; i++){
                let minElement, index;
                for(let j = 0; j < n; j++){  
                minElement = Math.min(...reducedArray[i]);
                    if (minElement != Infinity){
                        index = reducedArray[i].indexOf(minElement);
                        minValues[i][index] = minElement;
                        //minValues[index][i] = minElement;
                        reducedArray[i][index] = Infinity;
                        //reducedArray[index][i] = 99;
                    }    
                }
                //for(let j = 1; j < dimention; j++){}    
            }
            //console.log(ArrCO);
            
            fastRecurtion(minValues, dimention);
            if (minArray2.length != 0){
                flag++;
                //console.log(min2 + " " + minArray2);
            }
        }             
        return minValues;
    }
    
    console.log();

    startTime = Date.now();
    //formatArrPrint(fasterMethod(arrayDimention, ArrCO));
    
    fasterMethod1(arrayDimention, ArrCO);

    //console.log(ArrCO);

    endTime = Date.now();
    console.log(min2 + " " + minArray2);
    executionTime = endTime - startTime;
    method1Time += executionTime;
    console.log("Executed for " + executionTime/1000 + " s.");
    console.log();






    const resultArray3 = [];
    let raw3 = -1;
    let minArray3 = [];
    let flag3 = 0;    
    for(let i = 0; i < arrayDimention - 1; i++){
        min3 += ArrCO[i][i+1];
    }
    min3 += ArrCO[arrayDimention-1][0]; 

    //console.log("Min3 = " + min3);

    const fastRecurtion3 = (arrayToRecurse, dim) => {  
            for(let x = 0; x < dim; x++){
                
                let exp = (resultArray3.length == 0) || !(arrayToRecurse[resultArray3[resultArray3.length - 1]][x] == ' ');
            if(!resultArray3.includes(x) && exp){
                resultArray3.push(x);
                if(resultArray3.length == dim){
                    //console.log(resultArray2);
                    /*if(resultArray2[0] != raw){
                        raw = resultArray2[0];
                        console.log(raw + " ");
                        //process.stdout.write(raw + " ");
                    }    */           
                    let sum = 0;
                    for(let j = 0; j < dim - 1; j++){
                        sum += arrayToRecurse[resultArray3[j]][resultArray3[j+1]];
                    }
                    //console.log(sum);
                    if(sum < min3){
                        min3 = sum;
                        minArray3 = Array.from(resultArray3);
                    }
                }else {
                    fastRecurtion3(arrayToRecurse, dim);              
                }
                resultArray3.pop();            
            }
        }    
    }
    const fasterMethod2 = (dimention, arr) => {
        const minValues = createEmptyArr(dimention, ' ');
        const reducedArray = copySquareArray(arr);

        for(let i = 0; i < dimention; i++){
            reducedArray[i][i] = Infinity;
        }

        const sortingArray = copySquareArray(reducedArray);
        const accendingArray = [];
        //let minimum;

        for(let k = 0; k < dimention*(dimention-1); k++){
            let minimum = Infinity;
            const minCoordinates = [];            
            for(let i=0; i < dimention; i++){
                for(let j=0; j < dimention; j++){
                    //console.log(sortingArray[i][j]);
                    //console.log(Infinity > minimum);
                    if(sortingArray[i][j] < minimum){
                        minimum = sortingArray[i][j];
                        if(minCoordinates.length == 0){
                            minCoordinates.push(i);
                            minCoordinates.push(j);
                        }else{
                            minCoordinates[0] = i;
                            minCoordinates[1] = j;
                        }                                               
                    }
                }
            }
            //console.log(minCoordinates);
            accendingArray.push(minCoordinates);
            //console.log(sortingArray);
            sortingArray[minCoordinates[0]][minCoordinates[1]] = Infinity;
        }
        //console.log(sortingArray);
        
            for(let i = 0; i < dimention; i++){
                let minElement, index, index1;                
                minElement = Math.min(...reducedArray[i]);
                    index = reducedArray[i].indexOf(minElement);
                    minValues[i][index] = minElement;                    
                    reducedArray[i][index] = Infinity;

                    for (let index2 = 0; index2 < accendingArray.length; index2++){
                        if(accendingArray[index2][0] == i && accendingArray[index2][1] == index){
                            index1 = index2;
                        }
                    }
                    //console.log(index1);
                    accendingArray.splice(index1,1);                    
                            
            }
            fastRecurtion3(minValues, dimention);
                if (minArray3.length != 0){
                    flag3++;
                    //console.log(min2 + " " + minArray2);
                }
            
            while (minArray3.length == 0 || flag3 <= 1) {
                
                for(let i = 0; i < Math.floor(dimention/(flag3 + 1)); i++){
                    if(accendingArray.length != 0){
                        minValues[accendingArray[0][0]][accendingArray[0][1]] = reducedArray[accendingArray[0][0]][accendingArray[0][1]];
                        reducedArray[accendingArray[0][0]][accendingArray[0][1]] = Infinity;
                        accendingArray.splice(0,1);
                    }
                }

                fastRecurtion3(minValues, dimention);
                if (minArray3.length != 0){
                    flag3++;
                   
                }
            } 
        //formatArrPrint(reducedArray);
        //console.log(accendingArray);

        //return minValues;
    }
   
    console.log();

    startTime = Date.now();
    //formatArrPrint(fasterMethod(arrayDimention, ArrCO));
    
    fasterMethod2(arrayDimention, ArrCO);

    //console.log(ArrCO);

    endTime = Date.now();
    console.log(min3 + " " + minArray3);
    executionTime = endTime - startTime;
    method2Time += executionTime;
    console.log("Executed for " + executionTime/1000 + " s.");
    console.log();
    console.log();

    counter++;

} while (min2 == min3);

console.log(counter);
console.log(method1Time + '/' + method2Time + '=' + method1Time/method2Time);
