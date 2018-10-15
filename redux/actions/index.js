export const changeVariantStatus = (index, status) => (
    {
        type: 'CHANGE_VARIANT_STATUS',
        payload: {index, status},
    }
);

export const changeVariantProgress = (index, progress) => (
    {
        type: 'CHANGE_VARIANT_PROGRESS',
        payload: {index, progress},
    }
);