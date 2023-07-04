document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    function handleSubmit(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const numero = document.getElementById('numero').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('mensagem').value;

        const data = {
            nome,
            numero,
            email,
            assunto
        };
        fetch('https://leonam.tech/inserir', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin':'https://leonam.tech/contatos'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    alert('Salvamos com sucesso. Logo mais lhe retorno!');
                    form.reset();
                } else {
                    response.text().then(message=>{
                        alert(message)
                    })
                }
            })
            .catch(error => {
                console.error(error);
            })
    }

    form.addEventListener('submit', handleSubmit);
});