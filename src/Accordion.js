import { Component } from 'react';

class Accordion extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        activeIndex: null
      };
    }
  
    componentDidMount() {
        fetch('https://countriesnow.space/api/v0.1/countries/capital')
        .then(response => response.json())
        .then(data => {
          const countries = data.data.slice(0, 30);
          // console.log(countries);

          this.setState({ data: countries });
        })
        .catch(error => console.log(error));
    }
  
    handleClick = index => {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex === index ? null : index
      }));
    };
  
    render() {
      const { data, activeIndex } = this.state;
      // console.log(activeIndex);
  
      return (
        <div className="accordion">
          {data.map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                onClick={() => this.handleClick(index)}>
                {item.name}
              </div>
              <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                {item.capital}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
  
  export default Accordion;