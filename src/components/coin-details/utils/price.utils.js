export const getPriceChangeBadgeColor = (priceChange) => {
    if (priceChange < 0) {
        return 'red';
    }

    if (priceChange > 0) {
        return 'green';
    }

    return 'coolGray';
};

export const roundPrice = (price) => {
    let number;

    switch (true) {
        case price < 1:
            number = price.toFixed(5);
            break;

        case price < 10:
            number = price.toFixed(4);
            break;

        case price < 100:
            number = price.toFixed(3);
            break;

        default:
            number = price.toFixed(2);
    }

    return `$${number}`;
};

export const roundPriceChange = (priceChange) => {
    return priceChange.toFixed(2);
};

export const roundMarketCap = (marketCap) => {
    let number;
    let text;

    if (marketCap < 1_000_000_000) {
        number = marketCap / 1_000_000;
        text = 'mln';
    } else {
        number = marketCap / 1_000_000_000;
        text = 'bln';
    }

    return `$${number.toFixed(3)} ${text}`;
};

export const roundSupply = (supply) => {
    if (supply <= 0) {
        return '∞';
    }

    let number;
    let text;

    if (supply < 1_000_000_000) {
        number = supply / 1_000_000;
        text = 'mln';
    } else {
        number = supply / 1_000_000_000;
        text = 'bln';
    }

    return `${number.toFixed(2)} ${text}`;
};
