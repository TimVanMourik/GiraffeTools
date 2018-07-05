import PropTypes from 'prop-types';
import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './itemTypes';
import Port from './port';


const boxSource = {
  beginDrag(props) {
    return {
      key: props.id,
      type: props.type
    }
  },
  endDrag(props, monitor) {
   const item = monitor.getItem()
   // const dropResult = monitor.getDropResult()
   const offset = monitor.getDifferenceFromInitialOffset()
   if (item) {
    props.dragged(item.key, offset)
   }
  },
}

const Ports = (ports) => (
  <div className="node__ports">
    {
      ports.length > 0 && (
        <ul>
          {
            visiblePorts.map((port, index) => {
              let portElement = '';
              if (port.input) {
                portElement = <span  className='node__port--input' id={port.inputPort}/>
              } else if (port.output) {
                portElement = <span onClick={(event) => this.connectPort(event, index)} className='node__port--output' id={port.outputPort}/>
              }

              return (
                <li key={index}>
                  <div className='node__port'>
                    {port.name}
                    {portElement}
                  </div>
                </li>
              )
            })
          }
        </ul>
      )
    }
  </div>
)

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.connectPort   = this.connectPort.bind(this);
    this.connect       = this.connect.bind(this);
  }

  connectPort(e, portKey) {
    e.stopPropagation()
    this.connect(e.target)
  }

  connect(el) {
    $(el).off('click')
    // TODO: make the following grab from https instead of http
    const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const l = document.createElementNS("http://www.w3.org/2000/svg", "path");
    // l.setAttribute('d', 'M4 4 C ')
    el.appendChild(s);
    s.appendChild(l);
    const xi=s.getClientRects()[0].x;
    const yi=s.getClientRects()[0].y;
    l.setAttribute("x2", 4);
    l.setAttribute("y2", 4);
    const that=this;
    $('#zoomContainer').on('click', function(e) {
      if (e.target.classList[0]==="node__port--input") {
        let x, y
        ({x,y}=e.target.getClientRects()[0])
        x=x-xi+4
        y=y-yi+4
        if (x>0) {
          l.setAttribute("d", 'M4 4 C '+x/2+' 4, '+x/2+' '+y+', '+x+' '+y);
        } else {
          l.setAttribute("d", 'M4 4 C '+(-x/2)+' '+y/2+', '+(3*x/2)+' '+y/2+', '+x+' '+y);
        }
        $(el).on('click', (e)=>{
          e.stopPropagation()
          that.connect(el)
        })
      } else{
        el.removeChild(s)
        $(el).on('click', (e)=>{
          e.stopPropagation()
          that.connect(el)
        })
      }
      $('#zoomContainer').off('mousemove')
      $('#zoomContainer').off('click')
    })
    $('#zoomContainer').on('mousemove', function(e) {
      const x=e.pageX-xi
      const y=e.pageY-yi
      if (x>0) {
        l.setAttribute("d", 'M4 4 C '+x/2+' 4, '+x/2+' '+y+', '+x+' '+y);
      } else {
        l.setAttribute("d", 'M4 4 C '+(-x/2)+' '+y/2+', '+(3*x/2)+' '+y/2+', '+x+' '+y);
      }
    })
    // this.props.addNewLink();
  }

  render() {
    const { x, y, colour, classname, id, type, click, ports, hover, leave, isDragging, connectDragSource, connectDragPreview } = this.props;
    const visiblePorts = ports.filter(port => port.visible);
    let content = (
      <div
        className={`node ${classname}`}
        style={{
          left:`${x}px`,
          top: `${y}px`,
          background: colour
        }}
        onClick={(event) => click(event, id)}
        onTouchEnd={(event) => click(event, id)}
        onMouseEnter={(event) => hover(event, id)}
        onMouseLeave={(event) => leave(event)}
        data-tip='tooltip'
        data-for='getContent'
      >
        <div className="node__type">
          {type}
        </div>

        <Ports
          ports = {visiblePorts}
        />
      </div>
    )

    content = connectDragSource(content);
    content = connectDragPreview(content);
    return content;
  }
}

Node.propTypes = {
  type:   PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  x:      PropTypes.number.isRequired,
  y:      PropTypes.number.isRequired,
  click:  PropTypes.func.isRequired,
  hover:  PropTypes.func.isRequired,
  leave:  PropTypes.func.isRequired,
  class:  PropTypes.string,
  ports:  PropTypes.array.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
}

export default DragSource(ItemTypes.Node, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))(Node)
