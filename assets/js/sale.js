function calculateProfitLoss() {
      const cp = parseFloat(document.getElementById('costPrice').value);
      const sp = parseFloat(document.getElementById('sellingPrice').value);
      const resultDiv = document.getElementById('result');

      if (isNaN(cp) || isNaN(sp) || cp <= 0) {
        resultDiv.textContent = "Please enter valid cost and selling prices!";
        resultDiv.className = "result neutral";
        return;
      }

      let message = "";
      let profitLossValue = 0;
      let profitLossPercent = 0;

      if (sp > cp) {
        profitLossValue = sp - cp;
        profitLossPercent = (profitLossValue / cp) * 100;
        message = `Profit: $${profitLossValue.toFixed(2)} (${profitLossPercent.toFixed(2)}%)`;
        resultDiv.className = "result profit";
      } 
      else if (sp < cp) {
        profitLossValue = cp - sp;
        profitLossPercent = (profitLossValue / cp) * 100;
        message = `Loss: $${profitLossValue.toFixed(2)} (${profitLossPercent.toFixed(2)}%)`;
        resultDiv.className = "result loss";
      } 
      else {
        message = "No Profit, No Loss.";
        resultDiv.className = "result neutral";
      }

      resultDiv.textContent = message;
    }