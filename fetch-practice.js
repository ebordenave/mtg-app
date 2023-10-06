const url = "https://api.scryfall.com/cards/named?fuzzy=aust+com";

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getData();
