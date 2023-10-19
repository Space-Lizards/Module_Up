const quickModule = (m, n, q) => {
	let result = 1;
	m = m % q;
	while (n > 0) {
		if (n % 2 == 1) {
			result = (result * m) % q;
		}
		n = Math.floor(n / 2);
		m = (m * m) % q;
	}
	return result;
};

const headerMain = () => {
	const numberMInput = document.querySelector('#number_m');
	const numberNInput = document.querySelector('#number_n');
	const numberQInput = document.querySelector('#number_q');
	const resultDiv = document.getElementById('result');

	function updateResult() {
		const m = parseInt(numberMInput.value);
		const n = parseInt(numberNInput.value);
		const q = parseInt(numberQInput.value);

		try {
			if (isNaN(m) || isNaN(n) || isNaN(q)) {
				throw new Error('Пожалуйста, введите корректные числа');
			}

			if (q < 0 || n < 0 || m < 0) {
				throw new Error('Пожалуйста, введите положительные числа');
			}

			if (q <= 0) {
				throw new Error('Модуль должен быть больше нуля');
			}

			const result = quickModule(m, n, q);
			resultDiv.textContent = `Результат: ${result}`;
		} catch (error) {
			resultDiv.textContent = error.message;
		}
	}

	const calculateButton = document.getElementById('button');
	calculateButton.addEventListener('click', updateResult);
};

headerMain();
