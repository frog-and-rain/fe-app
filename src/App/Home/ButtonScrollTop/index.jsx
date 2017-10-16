import React from 'react';
import './styles.css';

class ButtonScrollTop extends React.Component {
  constructor(props) {
    super(props);
    this.node = null;

    this.setNode = this.setNode.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }

  setNode(node) {
    this.node = node;
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY <= 926) {
        this.node.style.display = 'none';
      } else {
        this.node.style.display = 'flex';
      }
    });
  }

  scrollTop() {
    let y = window.scrollY;
    y = y - 10;
    window.scrollTo(0, y);
    if (y > 0) {
      setTimeout(this.scrollTop, 1);
    }
  }

  render() {
    return (
      <div ref={this.setNode} className="btn-scroll-top" onClick={this.scrollTop}>
        <p>&#10094;</p>
        <p>TOP</p>
      </div>
    );
  }
}

export default ButtonScrollTop;