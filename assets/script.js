function App() {

  const sampleData = [
    {
      title: "Mango",
      description: "Rich in vitamin C and A; great for smoothies and boosting immunity."
    },
    {
      title: "Apple",
      description: "High in fiber and antioxidants; promotes heart and gut health."
    },
    {
      title: "Banana",
      description: "Excellent source of potassium; provides quick energy for workouts."
    },
    {
      title: "Orange",
      description: "Loaded with vitamin C; strengthens the immune system and skin."
    },
    {
      title: "Pineapple",
      description: "Contains bromelain, which aids digestion and reduces inflammation."
    },
    {
      title: "Strawberry",
      description: "Rich in antioxidants; helps improve skin health and prevent heart disease."
    },
    {
      title: "Grapes",
      description: "Packed with resveratrol; supports heart and brain health."
    },
    {
      title: "Watermelon",
      description: "Hydrating and refreshing; contains lycopene which promotes heart health."
    },
    {
      title: "Papaya",
      description: "Contains papain enzyme; aids digestion and supports skin repair."
    },
    {
      title: "Blueberry",
      description: "Known for high antioxidant levels; improves memory and brain function."
    }
  ];

  return `
    <div>
      <h1>Hello World</h1>
      <p>Put all your codes in assets/script.js</p>

      <br/><br/>

      <p>Data:</p>
      <ul>
        ${sampleData.map(item => (
          `
          <li>
            <h2>${item.title}</h2>
            <p>${item.description}</p>
          </li>
          `
        ))}
      <ul>
    </div>
  `;
}

// Render the content
document.getElementById("root").innerHTML = App();