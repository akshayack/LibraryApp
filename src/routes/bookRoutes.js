const express = require("express");

const booksRouter = express.Router();

function router(nav) {
  var books = [
    {
      title: "Your Dreams Are Mine Now",
      author: " Ravinder Singh",
      genre: "Fiction",
      img: "b1.jpg",
      des: "Rupali and Arjun couldn't have been more different. She was a simple, small-town girl whose priorities began and ended with academics; he was the quintessential Delhi boy who was actively involved in the youth politics at Delhi University (DU) ",
      dat:"2014",
    },

    {
      title: "Wings of Fire",
      author: "A. P. J. Abdul Kalam",
      genre: "Autobiography",
      img: "4.jpg",
      des: "Wings of Fire revolves around the personal & professional life of Kalam and the individuals who made an impact on him. The book is mainly divided into 4 sections (Orientation, Creation, Propitiation and Contemplation) of Kalam’s life which contains 16 chapters and an epilogue.",
      dat:"1999",
    },
    {
      title: "The Kite Runner",
      author: " Khaled Hosseini",
      genre: "Historical Fiction",
      img: "b3.jpg",
      des: "The Kite Runner is the first novel by Afghan-American author Khaled Hosseini.",
      dat:"2003",
    },
    
  ];

  var books2 = [
    {
      title: "Alice's Adventures in Wonderland",
      author: "Lewis Carroll",
      genre: "Fantasy",
      img: "5.png",
      des: "Alice's Adventures in Wonderland is an 1865 English children's novel by Lewis Carroll. A young girl named Alice falls through a rabbit hole into a fantasy world of anthropomorphic creatures.",
      dat:"26 November 1865",
    },
    {
      title: "Pride and Prejudice",
      author: "	Jane Austen",
      genre: "Novel",
      img: "3.jpg",
      des: "Pride and Prejudice is an 1813 romantic novel of manners written by Jane Austen. Though it is mostly called a romantic novel, it can also be considered a satirical book.",
      dat:"28 January 1813",
    },
    {
      title: "2 States: The Story of My Marriage",
      author: "Chetan Bhagat",
      genre: "Novel",
      img: "b6.jpg",
      des: "It is the story about a couple coming from two different states in India, who face hardships in convincing their parents to approve of their marriage",
      dat:"2009",
    },
  ];


  booksRouter.get("/nmy/:id", function (req, res) {
    const id = req.params.id;
    res.render("book", {
      nav,
      title: "Single Book",

      book1: books2[id],
    });
  });

  booksRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    res.render("book", {
      nav,
      title: "Single Book",
      book1: books[id],
    });
  });

  booksRouter.get("/", function (req, res) {
    res.render("books", {
      nav,
      title: "Books:Library",
      books,
      books2,
    });
  });

  return booksRouter;
}

module.exports = router;