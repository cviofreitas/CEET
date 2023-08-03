
export interface ExpenseDate {
  day: number;
  month: number;
  year: number;
  hour: number;
  minute: number;
}

export interface Expense  {
  category: string;
  description: string;
  date: ExpenseDate;
  cost: number;
}

export interface Trip  {
  id: number;
  tripName: string;
  countryCurrency: string;
  budget: number;
  conversionRate: number;
  expenses: Expense[];
}


