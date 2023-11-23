export const getIndustryBadgeColor = (industry) => {
    const lowerCaseIndustry = industry.toLowerCase();

    if (lowerCaseIndustry === 'payment') {
        return 'green';
    }

    if (lowerCaseIndustry === 'stablecoin') {
        return 'blue';
    }

    return 'coolGray';
};
