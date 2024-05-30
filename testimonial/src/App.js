import './App.css';
import Testimonial from './components/Testimonials';
import reviews from "./data";

function App() {
  return (
    <div>
      <div>
        <h1>Our Testimonials</h1>
        <div></div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
