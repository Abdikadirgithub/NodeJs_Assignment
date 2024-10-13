function calculateTotalTarget(startDate, endDate, totalAnnualTarget) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    let currentDate = new Date(startDate);
    let totalWorkingDays = 0;
    let monthlyTargets = [];
    let daysExcludingFridays = [];
    let daysWorkedExcludingFridays = [];

    // Iterate through the date range, counting valid working days (excluding Fridays)
    while (currentDate <= end) {
        if (currentDate.getDay() !== 5) { // Exclude Fridays (Day 5)
            totalWorkingDays++;
        }
        // Logic to switch to the next month
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Proportionally distribute the annual target
    let monthlyTarget = totalAnnualTarget / totalWorkingDays;

    return {
        daysExcludingFridays: daysExcludingFridays,
        daysWorkedExcludingFridays: daysWorkedExcludingFridays,
        monthlyTargets: monthlyTargets,
        totalTarget: totalWorkingDays * monthlyTarget
    };
}

// Example Usage
console.log(calculateTotalTarget('2024-01-01', '2024-03-31', 5220));