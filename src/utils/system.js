/*****************
 * LOCAL STORAGE *
 *****************/
export const getLocalStorage = (storageName) =>
    localStorage.getItem(storageName);

export const setLocalStorage = (name, value) => {
    localStorage.setItem(name, value);
};

export const clearLocalStorage = () => {
    localStorage.clear();
};
