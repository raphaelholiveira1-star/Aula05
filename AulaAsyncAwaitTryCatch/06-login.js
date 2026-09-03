function fazerLogin(usuario, senha) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (usuario === "admin" && senha === "1234") {
				resolve("Login realizado com sucesso");
			} else {
				reject(new Error("Usuário ou senha inválidos"));
			}
		}, 1000);
	});
}

async function executarLogin() {
	try {
		const mensagem = await fazerLogin("admin", "1234");
		console.log(mensagem);
	} catch (error) {
		console.log("Não foi possível fazer login");
		console.log(error.message);
	}
}

executarLogin();
