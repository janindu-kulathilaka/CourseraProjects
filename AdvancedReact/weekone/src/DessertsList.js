function DessertsList({ data }) {
  // Implement the component here.
  const listItems = data.map((dessert) => {
    const itemTest = `${dessert.name} - ${dessert.calories}`;
    return <li>{itemTest}</li>;
  });
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default DessertsList;
