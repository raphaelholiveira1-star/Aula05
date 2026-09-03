function buscarAluno(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (id === 1) {
				resolve({
					id: 1,
					nome: "Raphael Henrique",
					turma: "DS1A"
				});
			} else {
				reject(new Error("Aluno não encontrado"));
			}
		}, 1000);
	});
}

async function executarBusca() {
	try {
		const aluno = await buscarAluno(1);
		console.log("Aluno encontrado:");
		console.log(aluno);
	} catch (error) {
		console.log("Não foi possível buscar o aluno");
		console.log(error.message);
	}
}

executarBusca();
