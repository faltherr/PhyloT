import React, {Component} from 'react';
import Tree from 'react-d3-tree';
 
const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];
 
class PhyloTreeSelector extends React.PureComponent {
state={}

componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 2
      }
    });
  }

  render() {
    return (
    //   {/* <Tree /> will fill width/height of its container; in this case `#treeWrapper` */}
      <div id="treeWrapper" style={{width: '50vw', height: '50vh'}} ref={tc => (this.treeContainer = tc)}>
 
        <Tree 
            data={myTreeData} 
            translate={this.state.translate}
            orientation = {'vertical'}
        />
      </div>
    )
  }
}

export default PhyloTreeSelector