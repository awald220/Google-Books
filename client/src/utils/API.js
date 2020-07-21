import axios from "axios";

export default {
    //get all books
    getBooks: function(){
        return axios.get("/api/books");
    },

    //get books with an id 
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },

    //delete book with id 
    deleteBook: function(id){
        return axios.delete("/api/books/" + id);
    },

    //save book to database
    saveBook: function(bookData){
        return axios.post("/api/books", bookData);
    }
};