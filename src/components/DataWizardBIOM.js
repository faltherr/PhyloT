import React, { Component } from 'react'
import FilteredMultiSelect from 'react-filtered-multiselect'
import Dropzone from 'react-dropzone'
import '../styles/biomInput.css'

export default class BiomSelector extends Component {
    constructor() {
        super()
        this.state = {
            selected_file: [],
            biom_files: [{ value: 1, text: 'Coastal' }, { value: 2, text: 'Oceanic' }, { value: 3, text: 'Fecal' }, { value: 4, text: 'Saliva' }]
        }
    }

    handleChangeFile = (selected_file) => {
        this.setState(
            { selected_file }
        )
    }
    handleDeselect(index) {
        var selected_file = this.state.selected_file.slice()
        selected_file.splice(index, 1)
        this.setState({ selected_file })
    }

    handleOnDrop = (files, rejectedFiles) => {
        console.log(files)
        if (rejectedFiles && rejectedFiles.length > 0) {
            const currentRejectFile = rejectedFiles[0]
            const currentRejectFileType = currentRejectFile.type
            if (currentRejectFileType !== '.png') {
                alert('This file type is not accepted.')
            }
        }

    }

    render() {
        console.log('THis is the selected File', this.state.selected_file)
        const { selected_file } = this.state
        return (
            <div className='biom-main-container'>
                <div className='file-uploader-container'>
                    <h2>Upload a BIOM File</h2>
                    <Dropzone onDrop={this.handleOnDrop} className='dropzone-file-uploader' accept="image/png" multiple={false} acceptStyle={{ border: '2px solid green' }} rejectStyle={{ border: '2px solid red' }}>
                        <div className='biom-file-uploader'>
                            <i className="fas fa-cloud-upload-alt" style={{ fontSize: '48px' }}></i>
                            <p>Drag & Drop a BIOM file here</p>
                            <button>Browse files</button>
                            <br />
                            <p>Only *.biom files will be accepted</p>
                        </div>
                    </Dropzone>
                </div>
                <div className='select-file-contianer'>
                    <h2>Select a BIOM File from the list below</h2>
                    <FilteredMultiSelect onChange={this.handleChangeFile} options={this.state.biom_files} showFilter={false} />
                    {selected_file.length === 0 && <p>(nothing selected yet)</p>}
                    {selected_file.length > 0 && <div>
                        {selected_file.map((file, index) => {
                            return <p key={file.value}>Selected BIOM file: {file.text}</p>
                        })}
                    </div>}
                </div>
                <button className='btn btn-info'>Review Sample and Generate Synthetic Data</button>
            </div>
        )
    }
}