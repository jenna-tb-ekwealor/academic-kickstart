#!/bin/bash
# Job name:mafft_trnLtrnFspacer
#
# Account:
#SBATCH --account=fc_phylodiv
#
# Partition:
#SBATCH --partition=savio
#
# Quality of Service:
#SBATCH --qos=savio_normal
#
# Wall clock limit:
#SBATCH --time=12:00:00
#
## Command(s) to run:


export PATH=$PATH:/global/home/groups/fc_phylodiv/modules
export PATH=$PATH:/global/home/groups/fc_phylodiv/modfiles

cd /global/scratch/jbaughman/combined_450/trimmed14/assembled/

for size in trnLtrnFspacerblast_fastas_*bp/; do
	mkdir "$size"aligned
	cat "$size"*edit.fasta > "$size"cat_trnLtrnFspacer_named.fasta
		mafft --auto --adjustdirection "$size"cat_trnLtrnFspacer_named.fasta > "$size"aligned/cat_trnLtrnFspacer_named_aln.fasta
			filesize=$(stat -c%s "$size"aligned/cat_trnLtrnFspacer_named_aln.fasta)
				if (( filesize < 1 )); then
                              rm "$size"aligned/cat_trnLtrnFspacer_named_aln.fasta
                              else
                              echo 'non-empty alignment!'
				fi
	sed 's,_R_,,g' -i "$size"aligned/cat_trnLtrnFspacer_named_aln.fasta  # remove _R_ added by mafft
	done
