const mock_ref_genomes = require('./MockData/ref_genome_subset_v5.json')

module.exports = {
    getGenomes: (req,res) => {
            res.status(200).send(mock_ref_genomes)
    }
}