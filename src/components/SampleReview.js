import React, {Component} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import Modal from 'react-responsive-modal'
import {Link} from 'react-router-dom'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../styles/sampleReview.css'

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
    text: 'Number of Reads'
},
{
    dataField: 'numberGenome',
    text: 'Number of Genomes'
},
{
    dataField: 'foldCoverage',
    text: 'Fold Coverage'
},
{
    dataField: 'gcContent',
    text: 'GC Content'
}
];

// React component for table results

  export default class SampleReview extends Component{
    constructor(){
        super()
            this.state={
                openReviewModal: false,
                openKronaPlotModal: false,
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

    openKronaPlotModal = () => {
        this.setState({
            openKronaPlotModal:true
        })
    }

   closeKronaPlotModal = () => {
        this.setState({
            openKronaPlotModal:false
        })
    }
    
    render(){
        console.log(this.state.genomes)
        // console.log('PROPS', this.props)
        return(
            <div  className='sample-review-page-container'>
                <h1>Review Your Sample</h1>
                <div className='review-sample-button-container' style={{display:'flex'}}>
                    <Link to='/generate/community_selector'> 
                        <button className='btn btn-success'>Add More Genomes</button>
                    </Link>
                    
                        <button className='btn btn-danger'>Reset Sample</button>

                </div>

                <BootstrapTable keyField='id' data={ this.state.genomes } columns={ columns } cellEdit={ cellEditFactory({ mode: 'click' , blurToSave:true, afterSaveCell:()=>this.totals(this.state.genomes)})}/>
                    <p>Total Reads: {this.state.totalReads} </p> 
                    <p>Total Genomes: {this.state.totalGenomes}</p>
                    <p>Choose a Statistical Distribution:</p>
                    <select>
                        <option value="0">Equal Distribution</option>
                        <option value="1">Uniform Distribution</option>
                        <option value="2">Normal Distribution</option>
                        <option value="3">Log Normal Distribution</option>
                    </select> 
                <div>
                    <button className='btn btn-info' onClick={this.openKronaPlotModal}>Explore Sample Distribution</button>
                        <Modal open={this.state.openKronaPlotModal} onClose={this.closeKronaPlotModal}>
                                <h2>Krona Plot Placeholder</h2>
                        </Modal>
                    <button className='btn btn-success' onClick={this.openReviewModal}>Run Simulation (Execute Py Script)</button>
                        <Modal open={this.state.openReviewModal} onClose={this.closeReviewModal}>
                            <h2>Other Inputs Prior to Analysis??</h2>
                            <p>Sequencing platform:</p>
                            <p>Relative Abundance: </p>
                            <p>Add spike-ins: </p>
                            <div>
                                <button className='btn btn-success'>Run Simulation</button>
                                <button className='btn btn-danger' onClick={this.closeReviewModal}>Close</button>    
                            </div>
                        </Modal>
                </div>
            </div>
        )
    }
}