import { Trip } from "../types/userTrips.model"

export const userTrips: Trip[] = [
    {
        id: 1001,
        tripName: 'Rome 2023',
        countryCurrency: 'EUR',
        budget: 3000,
        conversionRate: 1.107,
        expenses: [{
            category: 'food',
            description: 'chicken salad',
            date: {
                day: 1,
                month: 3,
                year: 2024,
                hour: 12,
                minute: 23,
            },
            cost: 12.50
        },
        {
            category: 'accommodation',
            description: 'hotel booking',
            date: {
                day: 2,
                month: 3,
                year: 2024,
                hour: 15,
                minute: 0,
            },
            cost: 150.00
        },
        {
            category: 'transportation',
            description: 'taxi ride',
            date: {
                day: 3,
                month: 3,
                year: 2024,
                hour: 9,
                minute: 45,
            },
            cost: 30.00
        },
        {
            category: 'sightseeing',
            description: 'museum entry',
            date: {
                day: 4,
                month: 3,
                year: 2024,
                hour: 11,
                minute: 30,
            },
            cost: 20.00
        },
        {
            category: 'food',
            description: 'pizza and drinks',
            date: {
                day: 5,
                month: 3,
                year: 2024,
                hour: 19,
                minute: 15,
            },
            cost: 32.00
        },
        {
            category: 'shopping',
            description: 'souvenirs',
            date: {
                day: 6,
                month: 3,
                year: 2024,
                hour: 14,
                minute: 50,
            },
            cost: 45.00
        },
        {
            category: 'food',
            description: 'gelato',
            date: {
                day: 7,
                month: 3,
                year: 2024,
                hour: 16,
                minute: 5,
            },
            cost: 5.00
        },

        ]

    },
   
]

