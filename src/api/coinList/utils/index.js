import { COIN_IMAGES_URL } from '../../../constants/coinList';

export const formatCoinList = (data) => {
    if (!data) {
        return [];
    }

    const result = [];

    data.forEach((coin) => {
        if (!coin.RAW || !coin.RAW.USD) {
            return;
        }

        const { Id, FullName, ImageUrl } = coin.CoinInfo;
        const { PRICE, MKTCAP, FROMSYMBOL } = coin.RAW.USD;

        result.push({
            id: Id,
            name: FullName,
            fullName: FullName,
            symbol: FROMSYMBOL,
            imageUrl: `${COIN_IMAGES_URL}${ImageUrl}`,
            price: PRICE,
            marketCap: MKTCAP,
        });
    });

    return result;
};

export const formatSymbolList = (data) => {
    const result = [];

    for (const symbol of Object.values(data.RAW)) {
        const { FROMSYMBOL, PRICE, MKTCAP, IMAGEURL } = symbol.USD;

        result.push({
            id: `${MKTCAP}`,
            name: FROMSYMBOL,
            fullName: FROMSYMBOL,
            symbol: FROMSYMBOL,
            imageUrl: `${COIN_IMAGES_URL}${IMAGEURL}`,
            price: PRICE,
            marketCap: MKTCAP,
        });
    }

    return result;
};

const getAssetIndustries = (data) => {
    return data?.map(({ ASSET_INDUSTRY }) => ASSET_INDUSTRY);
};

const getTwitterAccount = (data) => {
    const mainTwitterAccount = data?.[0];

    if (!mainTwitterAccount) {
        return undefined;
    }

    return {
        url: mainTwitterAccount.URL,
        followers: mainTwitterAccount.FOLLOWERS,
    };
};

const getSupportedPlatforms = (data) => {
    if (!data) {
        return [];
    }

    const result = [];

    for (const { BLOCKCHAIN, TOKEN_STANDARD } of data) {
        if (!BLOCKCHAIN || !TOKEN_STANDARD) {
            continue;
        }

        const isExist = result.some(
            (platform) =>
                platform.blockchain === BLOCKCHAIN && platform.tokenStandard === TOKEN_STANDARD,
        );

        if (isExist) {
            continue;
        }

        result.push({
            blockchain: BLOCKCHAIN,
            tokenStandard: TOKEN_STANDARD,
        });
    }

    return result.sort((a, b) => a.tokenStandard.localeCompare(b.tokenStandard));
};

const getProjectLeaders = (data) => {
    return data?.map(({ LEADER_TYPE, FULL_NAME }) => ({
        leaderType: LEADER_TYPE,
        fullName: FULL_NAME,
    }));
};

const getExplorers = (data) => {
    return data?.map(({ URL }) => {
        const name = URL.split('/')[2];

        return {
            name,
            url: URL,
        };
    });
};

export const formatSymbolAsset = (data) => {
    const {
        NAME,
        SYMBOL,
        LOGO_URL,
        PRICE_USD,
        TOTAL_MKT_CAP_USD,
        TOPLIST_BASE_RANK,
        SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD,
        ASSET_INDUSTRIES,
        ASSET_DESCRIPTION_SNIPPET,
        ASSET_DESCRIPTION_SUMMARY,
        SUPPLY_MAX,
        SUPPLY_ISSUED,
        WEBSITE_URL,
        WHITE_PAPER_URL,
        TWITTER_ACCOUNTS,
        PROJECT_LEADERS,
        EXPLORER_ADDRESSES,
        SUPPORTED_PLATFORMS,
    } = data.Data;

    return {
        id: `${TOTAL_MKT_CAP_USD}`,
        name: NAME,
        fullName: NAME,
        symbol: SYMBOL,
        imageUrl: LOGO_URL,
        price: PRICE_USD,
        marketCap: TOTAL_MKT_CAP_USD,
        marketCapRank: TOPLIST_BASE_RANK.CIRCULATING_MKT_CAP_USD,
        change24h: SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD,
        assetDescription: ASSET_DESCRIPTION_SNIPPET || ASSET_DESCRIPTION_SUMMARY,
        assetIndustries: getAssetIndustries(ASSET_INDUSTRIES),
        maxSupply: SUPPLY_MAX ? SUPPLY_MAX : undefined,
        issuedSupply: SUPPLY_MAX && SUPPLY_ISSUED ? SUPPLY_ISSUED : undefined,
        websiteUrl: WEBSITE_URL,
        whitePageUrl: WHITE_PAPER_URL,
        twitterAccount: getTwitterAccount(TWITTER_ACCOUNTS),
        projectLeaders: getProjectLeaders(PROJECT_LEADERS),
        supportedPlatforms: getSupportedPlatforms(SUPPORTED_PLATFORMS),
        explorers: getExplorers(EXPLORER_ADDRESSES),
    };
};
