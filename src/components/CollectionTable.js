import React from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../styles/tables.css";

import { updateCollection, removeFromCollection } from '../reducers/mainReducer'

const CollectionTable = props => {

  let renderEditable = cellInfo => {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...props.collection];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          props.updateCollection({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: props.collection[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };

  return (
    <div className="collection-table-container">
      <ReactTable
        data={props.collection}
        //This defines the way the columns are laid out
        columns= {[
            {
                Header: "",
                accessor: "TaxID",
                // Cell: cell => (<button onClick={(e) => this.handleButtonClick(e, cell)}> X </button>)
                Cell: ({value}) => (<i className="fas fa-times-circle" onClick={()=>props.removeFromCollection({value})}></i>),
                // width: 15
            },
            {
              Header: "Superkingdom",
              accessor: "superKingdom" // String-based value accessors!
            },
            {
              Header: "Taxonomic Rank",
              accessor: "rank"
              //   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            },
            {
              Header: "Taxonomic ID",
              accessor: "TaxID"
            },
            {
              Header: "Genome Name",
              accessor: "GenomeName"
            },
            {
              Header: "Number of Genomes",
              accessor: "numberOfGenomes",
              Cell: renderEditable
            }
          ]}
        defaultPageSize={5}
        className='striped'
        noDataText='No Genomes Selected. Select from above or review sample.'
      />
    </div>
  );
};

let mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {updateCollection, removeFromCollection})(CollectionTable);
