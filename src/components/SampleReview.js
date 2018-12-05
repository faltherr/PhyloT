import React, {Component} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import Modal from 'react-responsive-modal'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// Demo Data
// const genomes = [
//       {
//         id: 1168290,
//         name: 'Bifidobacterium animalis subsp. lactis B420',
//         abundance: 0.012803158,
//         fastaSeq: 'GCF_000277325.1_ASM27...fna',
//         size: 1938595,
//         reads: 9639,
//         numberGenome: 1
//       },
//       {
//         id: 200450,
//         name: 'Pseudomonas trivalis',
//         abundance: 0.103765933,
//         fastaSeq: 'GCF_000.1_ASM27...fna',
//         size: 6452803,
//         reads: 32264,
//         numberGenome: 2
//       }
//     ]

const columns = [{
  dataField: 'id',
  text: 'Taxonomic ID',
  editable: false 
}, 
{
  dataField: 'name',
  text: 'Organism Name',
  editable: false 
}, 
{
  dataField: 'abundance',
  text: 'Relative Abundance'
},
{
    dataField: 'fastaSeq',
    text: 'Genome Sequence FASTA',
    editable: false 
},
{
    dataField: 'size',
    text: 'Genome Size',
    editable: false 
},
{
    dataField: 'reads',
    text: 'Simulated Reads'
},
{
    dataField: 'numberGenome',
    text: 'Number of Genomes'
}
];

// React component for table results

  export default class SampleReview extends Component{
    constructor(){
        super()
            this.state={
                openReviewModal: false,
                totalReads: '',
                totalGenomes: '',
                genomes : [
                    {
                      id: 1168290,
                      name: 'Bifidobacterium animalis subsp. lactis B420',
                      abundance: 0.012803158,
                      fastaSeq: 'GCF_000277325.1_ASM27...fna',
                      size: 1938595,
                      reads: 9639,
                      numberGenome: 1
                    },
                    {
                      id: 200450,
                      name: 'Pseudomonas trivalis',
                      abundance: 0.103765933,
                      fastaSeq: 'GCF_000.1_ASM27...fna',
                      size: 6452803,
                      reads: 32264,
                      numberGenome: 2
                    }
                  ]
            }
    }

    componentDidMount = () => {
        this.totals(this.state.genomes)
    }

    // componentDidUpdate = (prevProps, prevState) => {
    //     if ( this.state.genomes !== prevState.genomes){
    //         this.totals(this.state.genomes)
    //     }
    // }
    
    totals = (data) => {
        // let readSum = genomes.reduce((a,b) => ({reads: a.reads + b.reads}))
        let readSum = 0
        let genomeSum = 0
        this.state.genomes.forEach(element=>{
            readSum += +element.reads
            genomeSum += +element.numberGenome
        })

        this.setState({
            totalReads: readSum,
            totalGenomes: genomeSum
        })
    }

    openReviewModal = () => {
        this.setState({
            openReviewModal: true
        })
    }

    closeReviewModal = () => {
        this.setState({
            openReviewModal: false
        })
    }

    // handleChangeCell = () => {
    //     this.totals(this.state.genomes)
    // }
    
    render(){
        console.log(this.state.genomes)
        // console.log('PROPS', this.props)
        return(
            <div  className='sample-review-page-container'>
                <h1>Review Your Sample</h1>
                <div className='review-sample-button-container' style={{display:'flex'}}>
                    <button className='btn btn-success'>Add More Genomes</button>
                    <button className='btn btn-danger'>Reset Sample</button>
                </div>

                <BootstrapTable keyField='id' data={ this.state.genomes } columns={ columns } cellEdit={ cellEditFactory({ mode: 'click' , blurToSave:true, afterSaveCell:()=>this.totals(this.state.genomes)})}/>
                    <p>Total Reads: {this.state.totalReads} </p> 
                    <p>Total Genomes: {this.state.totalGenomes}</p>
                <button className='btn btn-info'>Explore Sample Distribution</button>
                <button className='btn btn-success' onClick={this.openReviewModal}>Run Simulation (Execute Py Script)</button>
                <Modal open={this.state.openReviewModal} onClose={this.closeReviewModal}>
                    <h2>Other Inputs Prior to Analysis</h2>
                    
                </Modal>

            </div>
        )
    }
}