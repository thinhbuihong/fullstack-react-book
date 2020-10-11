class ProductList extends React.Component {
  render() {
    return (
      <div className="ui unstackable items">
        heelo , friend i am a basic react component
      </div>
    )
  }
}

ReactDOM.render(
  <ProductList></ProductList>,
  document.getElementById('content')
)