export const getPlatformBadgeColor = (platforms) => {
    const lowerCasePlatforms = platforms.toLowerCase();

    if (lowerCasePlatforms.startsWith('bep')) {
        return 'warning';
    }

    if (lowerCasePlatforms.startsWith('erc')) {
        return 'info';
    }

    if (lowerCasePlatforms.startsWith('trc')) {
        return 'error';
    }

    return 'dark';
};
