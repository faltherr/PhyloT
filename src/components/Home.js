import React, { Component } from 'react'
import '../styles/home.css'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className='homepage-main-container'>
            <div className='home-section-1'>
                <div className='jump-to-start'>
                    <div className='jump-to-start-description'>
                        <h1>CREATE</h1>
                        <h3>Design and customize a synthetic genome</h3>
                    </div>
                    <Link to={'/generate'} style={{ textDecoration: 'none', color:'white' }}>
                        <div className='home-start-button'> Get Started  </div>
                    </Link>
                </div>
            </div>
            <div className='home-section-2'>
                <h3> Advanced Bioinformatics Solutions </h3>
                <div className='seqsim-description'>
                    <h4>SeqSim generates phylogenetic trees based on the NCBI taxonomy from a list of taxonomic names,  identifiers of protein accessions, SeqSim generates a pruned tree in the selected output format. Complete clades can be included, with interruption at desired taxonomic levels and with optional filtering of unwanted nodes.</h4>
                </div>
                {/* <h4>Optimized interface. Performant Results.</h4> */}
                {/* <h4> &#x2193; </h4> */}
                <div className='seqsim-overview-container'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus massa quis sapien luctus tristique. Sed ac enim felis. Phasellus mattis, quam a luctus bibendum, nulla odio euismod felis, non dictum eros ex in ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla euismod eleifend nisi, eget ullamcorper dui sodales eget. Proin sagittis felis purus, quis lacinia augue sagittis non. Ut mollis sapien felis, non sollicitudin risus ultrices id. Praesent fringilla justo est, vel lacinia diam convallis ut. Donec placerat eget ligula eget commodo. Etiam ut fringilla magna. Phasellus eros neque, accumsan eget velit tincidunt, pulvinar interdum velit. Etiam tristique odio ut quam eleifend, nec aliquet sem porttitor. Vivamus sit amet vulputate orci, a tempus nunc. Nunc mi ante, aliquam vel dignissim a, euismod vel tellus.

                        Mauris sit amet venenatis ante. Praesent vehicula dapibus enim sit amet egestas. In hac habitasse platea dictumst. Fusce dignissim bibendum orci ac aliquet. Sed orci ligula, molestie non varius quis, lacinia nec nisl. Donec ac leo ut tellus viverra maximus id ut lectus. Etiam sollicitudin cursus felis, aliquam feugiat mauris auctor eget. Maecenas luctus felis dignissim lacinia dignissim. Aenean luctus sollicitudin augue, eu pretium nibh imperdiet non. Suspendisse rhoncus ex at nibh commodo efficitur. Vivamus convallis odio id risus tristique, vitae dignissim ante sollicitudin. Fusce mattis, dolor vitae hendrerit imperdiet, nisl nibh commodo elit, sed euismod nibh nisi non metus. Maecenas ultrices tellus dignissim dictum feugiat.

                        Morbi pretium eleifend libero, ut vestibulum sem bibendum quis. Praesent leo dui, rutrum a maximus ut, feugiat nec tellus. Cras sapien eros, hendrerit id luctus nec, faucibus in ante. Suspendisse venenatis posuere dui quis accumsan. Praesent egestas enim mollis lectus condimentum, eu consectetur purus luctus. Maecenas vehicula condimentum magna, ut porta orci maximus ac. Sed non mauris finibus nisi fermentum sollicitudin sed nec tortor. Donec ultrices, mi sed hendrerit lobortis, nisl sapien bibendum elit, eget vestibulum odio eros nec lorem. Morbi iaculis condimentum fringilla. Donec suscipit pellentesque massa vel tincidunt. Proin tincidunt odio aliquet risus efficitur laoreet. Praesent tempor commodo lectus, eu ultrices velit consectetur tristique.

                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque suscipit magna mi, facilisis malesuada odio pharetra quis. Etiam laoreet felis euismod felis tincidunt porta ut eget elit. Mauris eget fermentum tellus. Praesent semper rhoncus accumsan. Suspendisse varius tellus quam, et scelerisque eros viverra vitae. Aliquam sit amet tempor sapien. Mauris a diam mauris. Sed felis turpis, pharetra eu enim in, sodales tincidunt leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ut eros luctus, pretium quam non, rutrum quam. Nulla a vestibulum diam. Donec iaculis libero eu quam ultrices, vel porttitor elit facilisis. Curabitur urna augue, interdum sed faucibus in, imperdiet ac velit. Proin nec turpis justo.

                        Vivamus in ullamcorper nisi, et mollis sapien. Duis et odio id turpis iaculis posuere. Vivamus maximus sapien non tortor pharetra tincidunt. Nunc aliquam turpis turpis, ac tempor mi ultrices in. Ut lacus nunc, dapibus et odio nec, interdum posuere lacus. Nulla facilisi. Cras tincidunt eros sed metus malesuada mattis. Donec at ex ut sem porta cursus eget nec sem.
                    </p>
                </div>
            </div>
            </div>
        )
    }
}