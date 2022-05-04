import axios from 'axios';

let doggos = [];

const getDoggos = () => {
    axios
        .get('http://localhost:8080/breeds')
        .then((res) => {
            doggos = res.data;
        })
        .catch((err) => console.log(err));
};

const answerOne = (answer) => {
    const currDoggos = [];
    if (answer === 'hunting') {
        doggos.forEach((dog) => {
            if (dog.bred_for?.includes('hunting')) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    } else if (answer === 'working') {
        doggos.forEach((dog) => {
            if (dog.breed_group?.includes('Working')) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    }
};

const answerTwo = (answer) => {
    const currDoggos = [];
    if (answer === 'protective') {
        doggos.forEach((dog) => {
            if (dog.temperament?.includes('Protective')) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    } else if (answer === 'noProtect') {
        doggos.forEach((dog) => {
            if (!dog.temperament?.includes('Protective')) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    }
};

const answerThree = (answer) => {
    const currDoggos = [];
    if (answer === 'lazy') {
        doggos.forEach((dog) => {
            if (!dog.temperament?.includes('Active')) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    } else if (answer === 'active') {
        doggos.forEach((dog) => {
            if (dog.temperament?.includes('Active')) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    }
};

const answerFour = (answer) => {
    console.log(answer);
    const currDoggos = [];
    if (answer === 'independent') {
        doggos.forEach((dog) => {
            if (!dog.temperament?.includes('Independent')) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    } else if (answer === 'social') {
        doggos.forEach((dog) => {
            if (!dog.temperament?.includes('Independent')) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    }
};

const answerFive = (answer) => {
    const currDoggos = [];
    if (answer === 'smart') {
        doggos.forEach((dog) => {
            if (dog.temperament?.includes('Intelligent')) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    } else if (answer === 'notsmart') {
        doggos.forEach((dog) => {
            if (!dog.temperament?.includes('Intelligent')) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    }
};

const answerSix = (answer) => {
    const currDoggos = [];
    if (answer === 'small') {
        doggos.forEach((dog) => {
            const weights = dog.weight.imperial.split('-');
            const avgWeight = (Number(weights[0]) + Number(weights[1])) / 2;
            console.log(avgWeight);
            if (avgWeight <= 20) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    } else if (answer === 'medium') {
        doggos.forEach((dog) => {
            const weights = dog.weight.imperial.split('-');
            const avgWeight = (Number(weights[0]) + Number(weights[1])) / 2;
            console.log(avgWeight);
            if (avgWeight > 20 && avgWeight <= 45) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    } else if (answer === 'large') {
        doggos.forEach((dog) => {
            const weights = dog.weight.imperial.split('-');
            const avgWeight = (Number(weights[0]) + Number(weights[1])) / 2;
            console.log(avgWeight);
            if (avgWeight > 45 && avgWeight <= 70) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    } else if (answer === 'huge') {
        doggos.forEach((dog) => {
            const weights = dog.weight.imperial.split('-');
            const avgWeight = (Number(weights[0]) + Number(weights[1])) / 2;
            console.log(avgWeight);
            if (avgWeight > 70) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    }
    console.log(doggos);
};

const answerSeven = (answer) => {
    const currDoggos = [];
    if (answer === 'affectionate') {
        doggos.forEach((dog) => {
            if (dog.temperament?.includes('Affectionate')) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    } else if (answer === 'noSnuggle') {
        doggos.forEach((dog) => {
            if (!dog.temperament.includes('Affectionate')) {
                currDoggos.push(dog);
            }
        });
        doggos = currDoggos;
    }
    console.log(doggos);
};
export {
    getDoggos,
    answerOne,
    answerTwo,
    answerThree,
    answerFour,
    answerFive,
    answerSix,
    answerSeven,
};
