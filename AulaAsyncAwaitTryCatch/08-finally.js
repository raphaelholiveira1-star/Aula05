function carregarDados() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Dados carregados com sucesso");
		}, 1000);
	});
}

async function executar() {
	console.log("Iniciando carregamento...");

	try {
		const mensagem = await carregarDados();
		console.log(mensagem);
	} catch (error) {
		console.log("Ocorreu um erro:", error.message);
	} finally {
		console.log("Processo finalizado");
	}
}

executar();
