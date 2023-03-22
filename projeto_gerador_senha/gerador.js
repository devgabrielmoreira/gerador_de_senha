const gerarSenha = () => {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_+";
    let senha = "";

    for(let i = 0; i < 10; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    document.getElementById("senhaGerada").innerHTML = senha;
}

document.getElementById("gerarSenha").addEventListener("click", gerarSenha);