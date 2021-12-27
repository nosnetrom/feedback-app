function App() {
  const title = 'Hello from the app component!';
  const comments = [
    {id: 1, text: 'Lorem ipsum'},
    {id: 2, text: 'Dolor vincit'},
    {id: 3, text: 'Sic amet'},
  ]
  return (
    <div className="component">
      <h1>{title}</h1>
      <ul>
        {
          comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;