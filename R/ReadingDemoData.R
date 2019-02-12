library(readr)
library(jsonlite)
library(plyr)

# Original data set

NCBI_ref_genomes <- read_tsv('../../Desktop/phyloT/R/assembly_summary_with_lineage.txt', col_names = TRUE)

head(NCBI_ref_genomes)

str(NCBI_ref_genomes)

unique(NCBI_ref_genomes$superkingdom)

write_json(NCBI_ref_genomes, '/Users/faltherr/Desktop/phyloT/R/all_ref_genomes.json')

ref_genome_subset <- NCBI_ref_genomes[sample(nrow(NCBI_ref_genomes), 5000), ]

dim(ref_genome_subset)

write_json(ref_genome_subset, '/Users/faltherr/Desktop/phyloT/R/ref_genome_subset.json')

# Data set v5

new_ref_genomes <-read_tsv('genome_database_v5.txt', col_names = TRUE)

head(new_ref_genomes)

View(new_ref_genomes)

# Data subsetting to explore phylogeney ** Demo Only **

superkingdom_freq_table = count(new_ref_genomes, 'superkingdomName')

archaea_subset = new_ref_genomes[new_ref_genomes$superkingdomName == "Archaea",]

archaea_freq_table = count(archaea_subset, 'phylumName')

thaumarchaeota_subset = archaea_subset[archaea_subset$phylumName == "Thaumarchaeota",]

thaumarchaeota_freq_table = count(thaumarchaeota_subset, 'className')

# Writing data to a new json file to utilize in the frontend mockups
genome_subset_v5 <- new_ref_genomes[sample(nrow(new_ref_genomes), 10000), ]

write_json(genome_subset_v5, '/Users/faltherr/Desktop/phyloT/R/ref_genome_subset_v5.json')
