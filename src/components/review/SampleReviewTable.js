import React from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../../styles/tables.css";

// import { updateCollection, removeFromCollection } from '../../reducers/mainReducer'

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
          // props.updateCollection({ data });
        }}
        dangerouslySetInnerHTML={{
          // __html: props.collection[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };

  return (
    <div className="review-table-container">
      <ReactTable
        data={props.genomeSample}
        //This defines the way the columns are laid out
        columns= {[
            {
                Header: "",
                accessor: "gbrs_paired_asm",
                // Cell: cell => (<button onClick={(e) => this.handleButtonClick(e, cell)}> X </button>)
                Cell: ({value}) => (<i id="remove-button" className="fas fa-times-circle" onClick={()=>props.removeFromCollection({value})}></i>),
                // width: 15
            },
            {
              Header: "Organism Name",
              accessor: "organism_name" // String-based value accessors!
            },
            //Unknown value! Currently a place holder
            {
              Header: "Relative Abundance",
              accessor: "taxid"
              //   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            },
            {
              Header: "Genome Sequence FASTA",
              accessor: "assembly_accession"
            },
            {
              Header: "Genome Size",
              accessor: " "
            },
            //Unknown value! Currently a place holder
            {
              Header: "Number of Genomes",
              accessor: " ",
              Cell: renderEditable
            },
            {
              Header: "Fold Coverage",
              accessor: " ",
              Cell: renderEditable
            },
            {
              Header: "GC Content",
              accessor: " ",
              Cell: renderEditable
            }
          ]}
        defaultPageSize={5}
        className='striped'
        noDataText='No Genomes Selected. Select more genomes or start over.'
      />
    </div>
  );
};

let mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {})(CollectionTable);
