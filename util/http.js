import axios from "axios";
export function storeExpense(expenseData) {
  axios.post(
    "https://expensetracker-587f5-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
