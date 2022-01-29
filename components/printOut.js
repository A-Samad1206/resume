import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Resume from './Resume';
const Example = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <Resume ref={componentRef} />
    </div>
  );
};

export default Example;
// eslint-disable-next-line react/display-name
const ComponentToPrint = React.forwardRef((props, ref) => {
  return <Resume />;
});
// /* CSS HEX */
// --french-gray: #ceced0;
// --shark: #1f2028;
// --jumbo: #727275;
// --gumbo: #7d9ca1;
// --manatee: #898a9a;
// --crimson: #ed1515;
// --ming: #327275;
// --gravel: #4b4a4d;
// --river-bed: #484e5f;
