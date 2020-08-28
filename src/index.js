import React from 'react';
import { useReactToPrint } from 'react-to-print';
import { render } from 'react-dom';
import './index.css';

class Exportpdf extends React.Component {
  render() {

    return (
      <iframe src="https://pramit-corona-visual.netlify.app/" height="500" width="100%" title="Covid-19 Visualization">
      </iframe>
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
      <Exportpdf ref={componentRef} />
      <button onClick={handlePrint}>Export As Pdf</button>
    </div>
  );
};


render(<Example />, document.querySelector("#root"));