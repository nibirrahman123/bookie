// -----------read------------

const getStoredReadBookId = () => JSON.parse(localStorage.getItem('readBookId') || '[]');

const addReadBookIdToLocalStorage = (id) => {
    const readBookIds = getStoredReadBookId();
    localStorage.setItem('readBookId', JSON.stringify([...readBookIds, id]));
}

// -----------wishList-----------

const getWishlistBookId = () => {
    const storedWishList = localStorage.getItem('wishListId')
    if (storedWishList) {
        return JSON.parse(storedWishList)
    }
    return []
}

const addWishListIdToLocalStorage = (id) => {
    const storedWishListId = getWishlistBookId()
    storedWishListId.push(id)
    const stringifiedWishListId = JSON.stringify(storedWishListId)
    localStorage.setItem('wishListId', stringifiedWishListId)
}

export { getStoredReadBookId, addReadBookIdToLocalStorage, getWishlistBookId, addWishListIdToLocalStorage }