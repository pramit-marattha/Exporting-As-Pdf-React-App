import React from 'react';
import { useReactToPrint } from 'react-to-print';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <th>column 1</th>
          <th>column 2</th>
          <th>column 3</th>
        </thead>
        <tbody>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const Example = () => {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <App ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};


render(<Example />, document.querySelector("#root"));


export default App;