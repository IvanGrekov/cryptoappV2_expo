export const getPrevPagePath = ({ isSearchList, isFavoriteList }) => {
    if (isSearchList) {
        return 'Search';
    }

    if (isFavoriteList) {
        return 'Favorites';
    }

    return 'List';
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

    return `$${number.toFixed(2)} ${text}`;
};

export const roundPrice = (price) => {
    let number;

    switch (true) {
        case price < 1:
            number = price.toFixed(3);
            break;

        case price < 10:
            number = price.toFixed(2);
            break;

        case price < 100:
            number = price.toFixed(1);
            break;

        default:
            number = price.toFixed(0);
    }

    return `$${number}`;
};
