function performSearch() {
  const searchResult = document.getElementById("productSearch").value; // Replace with your actual search result
  console.log(searchResult);
  if (searchResult === "Bamboo Toothbrush") {
    window.location.pathname = "file:///C:/Users/17033/hacktj/bamboo_search.HTML";
  }
  
  else{
    alert("Sorry, no results found.");
  } 
  }