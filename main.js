const { default: axios } = require("axios");

const residentsButton = document.querySelector('button');

residentsButton.addEventListener('click', (event) => {
    // console.log('Button Clicked');
    axios.get('https://swapi.dev/api/planets/?search=Alderaan', (req, res) => {
        const { id } = req.params.id;
        res.status(200).send(res.data);
    })
        .then(() => {
            const residents = res.data.results;
            for (let i = 0; i < residents.length; i++) {
                console.log(residents);
            }
        }).catch((error) => {
            console.log('Error');
        })
})