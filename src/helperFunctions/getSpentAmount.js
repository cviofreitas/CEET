export default function getSpentAmount(trip) {
    const expenses = trip.expenses

    const total = expenses.reduce((acc, expense) => acc + expense.cost, 0);
    return total;
}