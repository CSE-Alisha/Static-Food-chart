
function resetButton(button, output) {
    output.innerHTML = defaultParagraphText;
    button.style.color = 'black';
    button.style.background = buttonUnselectedColor;
}

function setButton(button) {
    button.style.background = buttonSelectedColor;
    button.style.color = 'white';
}

// Task 1
function getAllFoodData(foodData, button, output) {
    if (task1Completed) {
        resetButton(button, output);
    } else {
        setButton(button);
        let innerHTML = `<b>${task1}</b> <br>`;
        for (let i = 0; i < foodData.length; i++) {
            for (let key in foodData[i]) {
                innerHTML += `${key}: ${foodData[i][key]} <br>`;
            }
            innerHTML += '<br>';
        }
        output.innerHTML = innerHTML;
    }
    task1Completed = !task1Completed;
    return foodData;
}

// Task 2
function getAllVegetables(foodData, button, output) {
    let allVegetables = [];
    if (task2Completed) {
        resetButton(button, output);
    } else {
        setButton(button);
        let innerHTML = `<b>${task2}</b> <br>`;
        for (let i = 0; i < foodData.length; i++) {
            if (foodData[i]['category'] == 'Vegetable') {
                allVegetables.push(foodData[i]);
                for (let key in foodData[i]) {
                    innerHTML += `${key}: ${foodData[i][key]} <br>`;
                }
                innerHTML += '<br>';
            }
        }
        output.innerHTML = innerHTML;
    }
    task2Completed = !task2Completed;
    return allVegetables;
}

// Task 3 
function getAllFruits(foodData, button, output) {
    let allFruits = [];
    if (task3Completed) {
        resetButton(button, output);
    } else {
        setButton(button);
        let innerHTML = `<b>${task3}</b> <br>`;
        for (let i = 0; i < foodData.length; i++) {
            if (foodData[i]['category'] == 'Fruit') {
                allFruits.push(foodData[i]);
                for (let key in foodData[i]) {
                    innerHTML += `${key}: ${foodData[i][key]} <br>`;
                }
                innerHTML += '<br>';
            }
            output.innerHTML = innerHTML;
        }
    }
    task3Completed = !task3Completed;
    return allFruits;
}

// Task 4
function getAllProteinFoods(foodData, button, output) {
    let allProteinFoods = [];
    if (task4Completed) {
        resetButton(button, output);
    } else {
        setButton(button);
        let innerHTML = `<b>${task4}</b> <br>`;
        for (let i = 0; i < foodData.length; i++) {
            if (foodData[i]['category'] == 'Protein') {
                allProteinFoods.push(foodData[i]);
                for (let key in foodData[i]) {
                    innerHTML += `${key}: ${foodData[i][key]} <br>`;
                }
                innerHTML += '<br>';
            }
            output.innerHTML = innerHTML;
        }
    }
    task4Completed = !task4Completed;
    return allProteinFoods;
}

// Task 5
function getAllNuts(foodData, button, output) {
    let allNuts = [];
    if (task5Completed) {
        resetButton(button, output);
    } else {
        setButton(button);
        let innerHTML = `<b>${task5}</b> <br>`;
        for (let i = 0; i < foodData.length; i++) {
            if (foodData[i]['category'] == 'Nuts') {
                allNuts.push(foodData[i]);
                for (let key in foodData[i]) {
                    innerHTML += `${key}: ${foodData[i][key]} <br>`;
                }
                innerHTML += '<br>';
            }
            output.innerHTML = innerHTML;
        }
    }
    task5Completed = !task5Completed;
    return allNuts;
}

// Task 6
function getAllGrains(foodData, button, output) {
    let allGrains = [];
    if (task6Completed) {
        resetButton(button, output);
    } else {
        setButton(button);
        let innerHTML = `<b>${task6}</b> <br>`;
        for (let i = 0; i < foodData.length; i++) {
            if (foodData[i]['category'] == 'Grain') {
                allGrains.push(foodData[i]);
                for (let key in foodData[i]) {
                    innerHTML += `${key}: ${foodData[i][key]} <br>`;
                }
                innerHTML += '<br>';
            }
            output.innerHTML = innerHTML;
        }
    }
    task6Completed = !task6Completed;
    return allGrains;
}

// Task 7
function getAllDairy(foodData, button, output) {
    let allDairy = [];
    if (task7Completed) {
        resetButton(button, output);
    } else {
        setButton(button);
        let innerHTML = `<b>${task7}</b> <br>`;
        for (let i = 0; i < foodData.length; i++) {
            if (foodData[i]['category'] == 'Dairy') {
                allDairy.push(foodData[i]);
                for (let key in foodData[i]) {
                    innerHTML += `${key}: ${foodData[i][key]} <br>`;
                }
                innerHTML += '<br>';
            }
            output.innerHTML = innerHTML;
        }
    }
    task7Completed = !task7Completed;
    return allDairy;
}

// Task 8
function getFoodsWithCaloryMoreThan100(foodData, button, output) {
    let filteredFoods = [];
    if (task8Completed) {
        resetButton(button, output);
    } else {
        setButton(button);
        let innerHTML = `<b>${task8}</b> <br>`;
        for (let i = 0; i < foodData.length; i++) {
            if (foodData[i]['calorie'] > 100) {
                filteredFoods.push(foodData[i]);
                for (let key in foodData[i]) {
                    innerHTML += `${key}: ${foodData[i][key]} <br>`;
                }
                innerHTML += '<br>';
            }
            output.innerHTML = innerHTML;
        }
    }
    task8Completed = !task8Completed;
    return filteredFoods;
}

// Task 9
function getFoodsWithCaloryLessThan100(foodData, button, output) {
    let filteredFoods = [];
    if (task9Completed) {
        resetButton(button, output);
    } else {
        setButton(button);
        let innerHTML = `<b>${task9}</b> <br>`;
        for (let i = 0; i < foodData.length; i++) {
            if (foodData[i]['calorie'] < 100) {
                filteredFoods.push(foodData[i]);
                for (let key in foodData[i]) {
                    innerHTML += `${key}: ${foodData[i][key]} <br>`;
                }
                innerHTML += '<br>';
            }
            output.innerHTML = innerHTML;
        }
    }
    task9Completed = !task9Completed;
    return filteredFoods;
}

// Task 10
function getFoodsAccordingToProteinContent(foodData, button, output) {
    let sortedData = [];
    if (task10Completed) {
        resetButton(button, output);
    } else {
        setButton(button);
        for (let i = 0; i < foodData.length; i++) {
            sortedData.push(foodData[i]);
        }
        let innerHTML = `<b>${task10}</b> <br>`;
        sortedData.sort(function (a, b) { return b['protiens'] - a['protiens']; });
        for (let i = 0; i < sortedData.length; i++) {
            for (let key in sortedData[i]) {
                innerHTML += `${key}: ${sortedData[i][key]} <br>`;
            }
            innerHTML += '<br>';
        }
        output.innerHTML = innerHTML;
    }
    task10Completed = !task10Completed;
    return sortedData;
}

// Task 11
function getFoodsAccordingToCabContent(foodData, button, output) {
    let sortedData = [];
    if (task11Completed) {
        resetButton(button, output);
    } else {
        setButton(button);
        let innerHTML = `<b>${task11}</b> <br>`;
        for (let i = 0; i < foodData.length; i++) {
            sortedData.push(foodData[i]);
        }
        sortedData.sort(function (a, b) { return a['cab'] - b['cab']; });
        for (let i = 0; i < sortedData.length; i++) {
            for (let key in sortedData[i]) {
                innerHTML += `${key}: ${sortedData[i][key]} <br>`;
            }
            innerHTML += '<br>';
        }
        output.innerHTML = innerHTML;
    }
    task11Completed = !task11Completed;
    return sortedData;
}

task1Btn.addEventListener('click', function () {
    getAllFoodData(foodData, task1Btn, output);
});

task2Btn.addEventListener('click', function () {
    getAllVegetables(foodData, task2Btn, output);
});

task3Btn.addEventListener('click', function () {
    getAllFruits(foodData, task3Btn, output);
});

task4Btn.addEventListener('click', function () {
    getAllProteinFoods(foodData, task4Btn, output);
});

task5Btn.addEventListener('click', function () {
    getAllNuts(foodData, task5Btn, output);
});

task6Btn.addEventListener('click', function () {
    getAllGrains(foodData, task6Btn, output);
});

task7Btn.addEventListener('click', function () {
    getAllDairy(foodData, task7Btn, output);
});

task8Btn.addEventListener('click', function () {
    getFoodsWithCaloryMoreThan100(foodData, task8Btn, output);
});

task9Btn.addEventListener('click', function () {
    getFoodsWithCaloryLessThan100(foodData, task9Btn, output);
});

task10Btn.addEventListener('click', function () {
    getFoodsAccordingToProteinContent(foodData, task10Btn, output);
});

task11Btn.addEventListener('click', function () {
    getFoodsAccordingToCabContent(foodData, task11Btn, output);
});















