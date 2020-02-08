const insert = (exp) => document.form.result.value += exp;

const clearResult = () => document.form.result.value = '';


const equals = () => {
    let problem = document.form.result.value;
    let solution = eval(problem);
    if (problem) {
        document.form.result.value = solution;
    }
}

const back = () => {
    let result = document.form.result.value;
    document.form.result.value = result.substring(0, result.length - 1);
}

