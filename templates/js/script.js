const jsonDataString = localStorage.getItem("jsonData");
const data = JSON.parse(jsonDataString);

let minutes = 20;
let seconds = 0;
let timerInterval = setInterval(function () {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timerInterval);
      onSubmit();
      alert("Time's up!");
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }

  let formattedMinutes = minutes.toString().padStart(2, "0");
  let formattedSeconds = seconds.toString().padStart(2, "0");
  document.getElementById(
    "heading"
  ).textContent = `${formattedMinutes}:${formattedSeconds}`;
}, 1000);

// const data=[
//     {
//         "question": "Inflammasome is formed in",
//         "exp": "Ans. (d) Pyroptosis(Ref: Robbins 9th/pg 58-59)Pyroptosis: Promotes the activation of inflammasomewhich activates Caspase-1Q which releases biologically active form of IL^-1 from the precursor.",
//         "cop": 4,
//         "opa": "Necrosis",
//         "opb": "Apoptosis",
//         "opc": "Necroptosis",
//         "opd": "Pyroptosis",
//         "subject_name": "Pathology",
//         "topic_name": "Cellular Pathology"
//     },
//     {
//         "question": "Hydrops fetalis d/t Hb ba is associated with?",
//         "exp": "- Hydrops fetalis is seen in most severe form of a-thalassemia, caused by deletion of all four a-globin genes. - Hb in these fetus have tetramers of g-globin chains (hemoglobin Bas) which have high affinity for oxygen. - This results in decreased delivery of oxygen to the tissues. - Survival in early development of these fetus is d/t expression of z chains, an embryonic globin that pairs with g chains to form functional z 2 g 2 Hb tetramer.",
//         "cop": 3,
//         "opa": "Hb ba's cannot bind oxygen",
//         "opb": "The excess alpha-globin form insoluble precipitates",
//         "opc": "Hb ba's cannot release oxygen to fetal tissues",
//         "opd": "Microcytic red cells become tapped in the placenta",
//         "subject_name": "Pathology",
//         "topic_name": "Beta thalasemmia"
//     },
//     {
//         "question": "Which of the following is the most common tumours of hea?",
//         "exp": "Myxomas are the most common primary tumor of the hea in adults.They are benign neoplasms often associated with clonal abnormalities of chromosomes 12 and 17 that are thought to arise from primitive multipotent mesenchymal cells. Although they may arise in any of the four chambers, about 90% are located in the atria with a left-to-right ratio of approximately 4:1. Ref: Robbins 8th edition Chapter 2.",
//         "cop": 1,
//         "opa": "Myxoma",
//         "opb": "Lipoma",
//         "opc": "Rhabdomyoma",
//         "opd": "None of the above",
//         "subject_name": "Pathology",
//         "topic_name": null
//     },
//     {
//         "question": "Stain used for tissue fungus study is -",
//         "exp": "1- Lactophenol cotton blue stain 2- Fungi are very easily visualized in a PAS reaction with Schiff's reagent, this method now being a standard 3- PAS and methenamine silver staining for histological specimens",
//         "cop": 1,
//         "opa": "PAS",
//         "opb": "Von kossa",
//         "opc": "Alizarin red",
//         "opd": "LPCB",
//         "subject_name": "Pathology",
//         "topic_name": "miscellaneous"
//     },
//     {
//         "question": "All of the following statements are true related to histamine, except:",
//         "exp": "Histamine Stored as preformed molecules in mast cells and is therefore among the first mediators to be released during inflammation. Causes dilation of aerioles and increases the permeability of venules. Can cause contraction of some smooth muscles such as in lungs. H1 receptor antagonists that bind to and block the histamine receptors are used to inflammatory reactions (allergies).",
//         "cop": 4,
//         "opa": "Histamine is a principal mediator of immediate transient response during acute inflammation.",
//         "opb": "It causes dilation of aerioles",
//         "opc": "It increases the permeability of venules",
//         "opd": "Histamine receptor agonists are used to treat allergies.",
//         "subject_name": "Pathology",
//         "topic_name": "Arachidonic acid metabolites"
//     },
//     {
//         "question": "Which of the following mechanisms is not responsible for complications in DM",
//         "exp": "The things responsible for chronic complications of DM are 1)Formation of Advanced glucation end products 2) Activation of Protein Kinase C 3)Oxidative stress and disturbance in Polyol pathways . Possible complications include: Cardiovascular disease. ... Nerve damage (neuropathy). ... Kidney damage (nephropathy). ... Eye damage (retinopathy). ... Foot damage. ... Skin conditions. ... Hearing impairment. ... Alzheimer's disease Ref: Robbins and cotrans 9e Pg 1116",
//         "cop": 4,
//         "opa": "Non enzymatic glycosylation",
//         "opb": "Protein Kinase C activation",
//         "opc": "Disturbance in polyol pathway",
//         "opd": "Chronic inflammation",
//         "subject_name": "Pathology",
//         "topic_name": "Endocrinology"
//     },
//     {
//         "question": "Condition not associated with bronchiectasis is?",
//         "exp": "Ans. is 'b' i.e., Lung Cancer * Important complications of bronchiectasis are massive hemoptysis, purulent pericarditis, lung abscess, empyema, amyloidosis, metastatic abscess (in brain, bones etc) , and cor pulmonale. It is not a premalignant condition.",
//         "cop": 2,
//         "opa": "Pericarditis",
//         "opb": "Lung cancer",
//         "opc": "Amyloidosis",
//         "opd": "Hemoptysis",
//         "subject_name": "Pathology",
//         "topic_name": "Respiration"
//     },
//     {
//         "question": "Most common missing tooth in the permanent dentition is:",
//         "exp": null,
//         "cop": 3,
//         "opa": "Maxillary canine",
//         "opb": "Maxillary first molar",
//         "opc": "Mandibular second premolar",
//         "opd": "Mandibular first molar",
//         "subject_name": "Pathology",
//         "topic_name": null
//     },
//     {
//         "question": "All are features of reversible injury of cell, except?",
//         "exp": "Ans. is 'b' i.e., Amorphous densities in mitochondrial matrixFormation of amorphous densities in the mitochondrial matrix is a feature of irreversible injury and not reversible injury.",
//         "cop": 2,
//         "opa": "Blebs",
//         "opb": "Amorphous densities in mitochondrial matrix",
//         "opc": "Loss of microvlli",
//         "opd": "Cellular swelling",
//         "subject_name": "Pathology",
//         "topic_name": null
//     },
//     {
//         "question": "Features of histocytosis are all except -",
//         "exp": "Answee is option 3,CD127 marker The tumor cells of malignant histiocytosis generally expressed the monocyte markers CD11b, CD11c, CD14, and CD45, especially after induction with phorbol ester. In contrast, the tumor cells of true histiocytic lymphoma exhibited a marker expression very similar to that of Reed-Sternberg cells in Hodgkin's disease. These cells expressed markers CD30, 2H9, and 1A2, but rarely expressed CD11b, CD11c, CD14, or CD45.",
//         "cop": 3,
//         "opa": "Antigen processing cells",
//         "opb": "CD1a marker present",
//         "opc": "CD127 marker",
//         "opd": "Osteolytic lesions",
//         "subject_name": "Pathology",
//         "topic_name": "Haematology"
//     },
//     {
//         "question": "All are true about Xanthogranulomatous inflammation, except:",
//         "exp": ". Associated with TB",
//         "cop": 1,
//         "opa": "Associated with TB",
//         "opb": "Yellow granuloma",
//         "opc": "Giant cells seen",
//         "opd": "Foam cells seen",
//         "subject_name": "Pathology",
//         "topic_name": null
//     },
//     {
//         "question": "Microarray is used to",
//         "exp": "A DNA microarray (also commonly known as DNA chip or biochip) is a collection of microscopic DNA spots attached to a solid surface Summery of Microarry; Within the organisms, genes are transcribed and spliced to produce mature mRNA transcripts (red). The mRNA is extracted from the organism and reverse transcriptase is used to copy the mRNA into stable ds-cDNA (blue). In microarrays, the ds-cDNA is fragmented and fluorescently labelled (orange). The labelled fragments bind to an ordered array of complementary oligonucleotides, and measurement of fluorescent intensity across the array indicates the abundance of a predetermined set of sequences. These sequences are typically specifically chosen to repo on genes of interest within the organism's genome.",
//         "cop": 1,
//         "opa": "Study multiple genes",
//         "opb": "Study disease",
//         "opc": "Study organism",
//         "opd": "Study blood group",
//         "subject_name": "Pathology",
//         "topic_name": "General pathology"
//     },
//     {
//         "question": "The most common site of metastases of osteosarcoma is",
//         "exp": null,
//         "cop": 4,
//         "opa": "Liver",
//         "opb": "Spleen",
//         "opc": "Lymph nodes",
//         "opd": "Lung",
//         "subject_name": "Pathology",
//         "topic_name": null
//     },
//     {
//         "question": "Transfusion reaction and erythroblastosis fetalis are-",
//         "exp": "Ans. is 'b' i.e., Type II hypersensitivity Schick test is an example of type III hypersensitivity or immune-complex reaction.HYPERSENSITIVITYType I (IgE mediated)Type II (IgG IgM ando Eczemacomplement mediated)o Hay fevero Blood transfusion reactionso Asthmao Erythroblastosis fetaliso Atopyo Autoimmune hemolytico Urticariaanemia or thrombocytopeniao Anaphylactic shockor agmulocytosiso Acute dermatitiso Pemphigus vulgariso Theobald smitho Good pasture syndromephenomenono Bullous pemphigoido Prausnitz Kusntero Pernicious anemia(PK) reactiono Acute rheumatic fevero Casonis testo Diabetes mellituso Schultz-Daleo Graves diseasephenomenono Myasthenia gravisHYPERSENSITIVITYType III flgG IgM. complementType IV (Cell mediated)and leucocyte mediated)o Tuberculin testo Local-Arthus reactiono Lepromin testo Systemic-serum sicknesso Sarcoidosiso Schick testo Tuberculosiso Polyarteritis nodosa (PAN)o Contact dermatitiso Rheumatoid arthritiso Granulomatous inflammationo SLEo Type I lepra reactiono Acute viral hepatitiso Patch testo Penicillamine toxicityo Temporal arteritiso Hyperacute graft rejectiono Jones mote reactiono Type 2 lepra reaction (ENL)(cutaneous basophilic HSN)o Hypersensitivity pneumonitiso Graft rejectiono R.A.o Fairleys testo Infective endocarditiso Frie's testo Henoch schonlein purpura o Glomerulonephritis",
//         "cop": 2,
//         "opa": "Type I hypersensitivity",
//         "opb": "Type II hypersensitivity",
//         "opc": "Type III hypersensitivity",
//         "opd": "Type IV hypersensitivity",
//         "subject_name": "Pathology",
//         "topic_name": "Blood"
//     },
//     {
//         "question": "Dr. Jones prescribes albuterol sulfate (Proventil) for a patient with newly diagnose asthma. When teaching the patient about this drug, the nurse should explain that it may cause:",
//         "exp": "Albuterol may cause nervousness. The inhaled form of the drug may cause dryness and irritation of the nose and throat, not nasal congestion; insomnia, not lethargy; and hypokalemia (with high doses), not hyperkalemia. Other adverse effects of albuterol include tremor, dizziness, headache, tachycardia, palpitations, hypertension, heartburn, nausea, vomiting and muscle cramps.",
//         "cop": 2,
//         "opa": "Nasal congestion",
//         "opb": "Nervousness",
//         "opc": "Lethargy",
//         "opd": "Hyperkalemia",
//         "subject_name": "Pathology",
//         "topic_name": null
//     },
//     {
//         "question": "Alpha fetoprotein is raised in all except: September2011",
//         "exp": "Ans. B: Down syndrome AFP is produced by hepatocellular carcinomas, yolk sac remnants in the gonads, and occasionally teratocarcinomas and embryonal cell carcinomas.",
//         "cop": 2,
//         "opa": "Teratocarcinoma",
//         "opb": "Down syndrome",
//         "opc": "Embryonal cell carcinoma",
//         "opd": "Hepatocellular carcinoma",
//         "subject_name": "Pathology",
//         "topic_name": null
//     },
//     {
//         "question": "All are true about Patterson Kelly syndrome except?",
//         "exp": "Ans. is 'd' i.e., Gastric polyps * Plummer-Vinson syndrome (PVS), also called Paterson-Brown-Kelly syndrome or sideropenic dysphagia, is a rare disease characterized by :1. Dysphagia (difficulty in swallowing)2. Odynophagia (painful swallowing)3. Pain, Weakness4. Atrophic glossitis5. Angular stomatitis6. Cheilosis7. Esophageal webs (on serial contrasted gastrointestinal radiography)8. Blood tests show a hypochromic microcytic anemia that is consistent with an iron-deficiency anemia.* Esophageal web in Plummer-Vinson syndrome is found at upper end of esophagus (post cricoid region) and Schatzki ring may be found at the lower end of esophagus.* It is more common in women, particularly in middle age (peak age is over 50). In these patients, esophageal squamous cell carcinoma risk is increased.",
//         "cop": 4,
//         "opa": "Iron deficiency anemia",
//         "opb": "Cheilosis",
//         "opc": "Esophageal webs",
//         "opd": "Gastric polyps",
//         "subject_name": "Pathology",
//         "topic_name": "G.I.T."
//     },
//     {
//         "question": "Heroin abuse causes ?",
//         "exp": "Answer- A. Focal segmental glomerulonephritisClinically it presents as nephrotic syndrome.CausesHIV infectionHeroin addictionSickle cell diseaseMassive obesityIgA nephropathyReflux nephropathyIdiopathic",
//         "cop": 1,
//         "opa": "Focal segmental glomerulonephritis",
//         "opb": "Cresent glomerulonephritis",
//         "opc": "Membraneus glomerulonephritis",
//         "opd": "Diffuse glomerulonephritis",
//         "subject_name": "Pathology",
//         "topic_name": null
//     },
//     {
//         "question": "ANCA is associated with",
//         "exp": "• ANCA or antineutrophilic cytoplasmic antibodies are formed against certain proteins in the cytoplasm of neutrophils. Out of the given options, Wegener’s granulomatosis is most strongly associated with ANCA.",
//         "cop": 2,
//         "opa": "Henoch-Schonlein Purpura",
//         "opb": "Wegener’s granulomatosis",
//         "opc": "Rheumatoid arthritis",
//         "opd": "Goodpasture syndrome",
//         "subject_name": "Pathology",
//         "topic_name": null
//     },
//     {
//         "question": "Soft granuloma is typically found in -",
//         "exp": "Ans. is 'c' i.e., Tuberculosis Soft granuloma (soft tubercle) is seen in TB.",
//         "cop": 3,
//         "opa": "Amoeboma",
//         "opb": "Leprosy",
//         "opc": "Tuberculosis",
//         "opd": "Gumma",
//         "subject_name": "Pathology",
//         "topic_name": null
//     }
// ]

console.log(data);

let question = document.querySelector("#queId"),
  option1 = document.querySelector("#opt1Id"),
  option2 = document.querySelector("#opt2Id"),
  option3 = document.querySelector("#opt3Id"),
  option4 = document.querySelector("#opt4Id"),
  label1 = document.querySelector("[for = opt1Id]"),
  label2 = document.querySelector("[for = opt2Id]"),
  label3 = document.querySelector("[for = opt3Id]"),
  label4 = document.querySelector("[for = opt4Id]");

let current = 0,
  prev = document.querySelector("#btnPrev"),
  next = document.querySelector("#btnNext");

const selected_option = new Array(20).fill(0);

question.textContent = data[0]["question"];
label1.textContent = data[0]["opa"];
label2.textContent = data[0]["opb"];
label3.textContent = data[0]["opc"];
label4.textContent = data[0]["opd"];

button_check();

function nextQuestion() {
  //before going to next i want to save the value of the checked option
  option_check();
  console.log(selected_option);

  colour_check();
  //updating pointer
  current++;
  //checking button validity
  button_check();
  //checking displaying validity
  if (current < 20) {
    display();
  }
}

function previousQuestion() {
  option_check();
  console.log(selected_option);

  colour_check();

  current--;

  button_check();

  if (current >= 0) {
    display();
  }
}

function button_check() {
  if (current > 0) prev.disabled = false;
  else prev.disabled = true;
  if (current < 19) next.disabled = false;
  else next.disabled = true;
}

function option_check() {
  if (option1.checked) {
    selected_option[current] = 1;
  } else if (option2.checked) {
    selected_option[current] = 2;
  } else if (option3.checked) {
    selected_option[current] = 3;
  } else if (option4.checked) {
    selected_option[current] = 4;
  }
}

function colour_check() {
  let gridnum = document.getElementsByClassName((current + 1).toString(10));
  if (selected_option[current] != 0) {
    gridnum[0].classList.add("marked");
  } else {
    gridnum[0].classList.add("read");
  }
}

function display() {
  if (selected_option[current] == 0) {
    option1.checked = false;
    option2.checked = false;
    option3.checked = false;
    option4.checked = false;
  } else if (selected_option[current] == 1) {
    option1.checked = true;
  } else if (selected_option[current] == 2) {
    option2.checked = true;
  } else if (selected_option[current] == 3) {
    option3.checked = true;
  } else {
    option4.checked = true;
  }
  question.textContent = data[current]["question"];
  label1.textContent = data[current]["opa"];
  label2.textContent = data[current]["opb"];
  label3.textContent = data[current]["opc"];
  label4.textContent = data[current]["opd"];
}

function changeTo(curr) {
  option_check();
  colour_check();
  current = curr - 1;
  button_check();
  display();
}



function onSubmit() {
  option_check();
  colour_check();
  window.localStorage.setItem('options', JSON.stringify(selected_option));
  window.location.href='/result';

}


