const fromCurrency = document.querySelectorAll("select")[0];
const toCurrency = document.querySelectorAll("select")[1];
const convertBtn = document.querySelector("button");
const amountInput = document.querySelector("input");
const resultBox = document.querySelector("#textp" );

convertBtn.addEventListener("click", async () => {
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (!amount || isNaN(amount)) {
        resultBox.innerText = "Please enter a valid amount.";
        return;
    }

     const url="https://v6.exchangerate-api.com/v6/9af5c751606d76309d68e837/latest/" + from;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.success === false || data.result === undefined) {
            resultBox.innerText = "Something went wrong. Please try again.";
        } else {
            const conversionRate = data.conversion_rates[to];
            const result = amount * conversionRate;
            resultBox.innerText = amount + " " + from + " = " + result.toFixed(2) + " " + to;
        }
    } catch (error) {
        resultBox.innerText = "Error fetching data.";
        console.error("API Error:", error);
    }
});
