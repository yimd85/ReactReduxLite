// export function selectBook(book) {
//     console.log('A book has been selected:', book.title);
// }

export const selectBook = (test) => {
    // console.log('A book has been selected:', test.title);

    //selectBook is an action creator, it needs to return an actions an object with a type property
    return{
        type: 'BOOK_SELECTED',
        payload: test
    };
}