function validarId(id) {
	if (!Number.isInteger(id) || id <= 0) {
		throw new Error("O ID deve ser um número inteiro positivo");
	}

	return id;
}

async function executarValidacao() {
	try {
		const id = validarId(1);
		console.log(`ID ${id} é válido`);
	} catch (error) {
		console.log("Erro de validação:", error.message);
	}
}

executarValidacao();
