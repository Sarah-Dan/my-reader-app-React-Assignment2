// import React, { useEffect, useState } from "react";

// // fact_slide component
// const Books = () => {
//   const [currentItem, setCurrentItem] = useState(0);
//   const [book, setNews] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [listItems, setListItems] = useState([]);
//   const [userPerPage, setUserPerPage] = useState(5);

// // set our initial state
// useEffect(() => {
//   // list of news items
//   const booksItems = [
//     {
//       title: "Africa's population is expected to double by 2050",
//       url: "https://www.economist.com/special-report/2020/03/26/africas-population-will-double-by-2050"
//       }, {
//       title: "Africa is the youngest continent, with 60% of its population under 25",
//       url: "https://en.wikipedia.org/wiki/Youth_in_Africa"
//       }, {
//         title: "Africa is the most diverse continent",
//         url: "https://en.wikipedia.org/wiki/List_of_ethnic_groups_of_Africa",

//       }, {
//         title: "Africa is the second largest continent",
//         url: "https://en.wikipedia.org/wiki/Africa#:~:text=Africa%20is%20the%20world's%20second,20%25%20of%20its%20land%20area."
//       }, {
//         title: "Africa is the only continent that has a desert, a rain-forest, a savanna, and a snow-capped mountain",
//         url: "https://en.wikipedia.org/wiki/Africa",
//       }, {
//         title: "Africa has 54 countries",
//         url: "https://en.wikipedia.org/wiki/Africa#:~:text=Africa%20is%20the%20world's%20second,20%25%20of%20its%20land%20area.",
//       },{
//         title: "Africa has 2,000 languages",
//         url: "https://en.wikipedia.org/wiki/Languages_of_Africa",
//       }, {
//         title: "Africa has 1.3 billion people",
//         url: "https://www.worldometers.info/world-population/africa-population/",
//       }, {
//         title: "Africa has 150 million English speakers",
//         url: "https://en.wikipedia.org/wiki/Africa",
//       }, {
//         title: "Africa is the most populated continent",
//         url: "https://en.wikipedia.org/wiki/Africa#:~:text=Africa%20is%20the%20world's%20second,20%25%20of%20its%20land%20area.",
//       }
//   ];

//   const item = booksItems[currentItem];
//   // set state
//   setListItems(booksItems);
//   // Set our state
//   setNews(item);
//   setLoading(false);
// }, [currentItem]);

  
//   // Handle next button click
// const handleNext = (event) => {
//   event.preventDefault();
//   // update our state
//   if(currentItem < listItems.length - 1){
//     setCurrentItem(currentItem + 1);
//   }
//   // setCurrentItem(previous => previous + 1)
// }

// // Handle previous button click
// const handlePrevious = (event) => {
//   event.preventDefault();
//   // update our state
//   if(currentItem > 0){
//     setCurrentItem((previous) => previous - 1);
//   }
//   // setCurrentItem(next => next - 1)
// }

  
// return(
//   <section className="main-page">  
//   <section className="news">
//  {loading ? <div>Loading</div> 
//  :
//  <div className="facts-items">
//  <h3>{book.title}</h3>
//  <p>{book.description}</p>
//  <a href={book.url} target="_blank" rel="noopener noreffer">Read more</a>
// </div>}
//   </section>
//   <div className="paginate">
//     <button className="previous" onClick={handlePrevious}>Previous</button>
//     <button className="next" onClick={handleNext}>Next</button>
//   </div>
//   </section>
// );
// }


// const Users = () => {
//     return (  
//         <div className="users__container">
//         <h2>Welcome dear Users</h2>
//         <Books />
//        </div>
//      );
// }
 
// export default Users;