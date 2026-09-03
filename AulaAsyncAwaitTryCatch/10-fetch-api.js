async function buscarUsuario() {
	try {
		const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1");

		if (!resposta.ok) {
			throw new Error(`Erro na requisição: ${resposta.status}`);
		}

		const usuario = await resposta.json();
		console.log("Usuário encontrado:");
		console.log(usuario);
	} catch (error) {
		console.log("Não foi possível buscar o usuário");
		console.log(error.message);
	}
}

buscarUsuario();
