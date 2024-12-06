// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    console.log("Metadata:", metadata);

    // Filter the metadata for the object with the desired sample number
    let sampleNumber = metadata.filter(number => number.id == sample)[0];

    console.log("SampleNumber:", sampleNumber);

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");

    console.log("Panel:", panel);

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    let entries = Object.entries(sampleNumber);

    for (let i = 0; i < entries.length; i++) {
      let key = entries[i][0];
      let value = entries[i][1];
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    }


  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;

    console.log("Samples Field:", samples);

    // Filter the samples for the object with the desired sample number
    let dataSample = samples.filter(sampleObject => sampleObject.id == sample)[0];

    console.log("Sample Field Data:", dataSample);


    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = dataSample.otu_ids;
    let otu_labels = dataSample.otu_labels;
    let sample_values = dataSample.sample_values;

    console.log("Sample otu_ids Data:", otu_ids);
    console.log("Sample otu_labels Data:", otu_labels);
    console.log("Sample sample_values Data:", sample_values);

    // Build a Bubble Chart
    let trace1 = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Earth'
      }
    };

    let bubbleData = [trace1];

    // Render the Bubble Chart
    let bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Number of Bacteria' },
      hovermode: 'closest'
    };

    Plotly.newPlot('bubble', bubbleData, bubbleLayout);


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let yticks = [];

    for (let i = 0; i < 10 && i < otu_ids.length; i++) {
      yticks.push(`OTU ${otu_ids[i]}`);
    }

    yticks.reverse();

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let trace2 = {
      x: sample_values.slice(0, 10).reverse(),
      y: yticks,
      text: otu_labels.slice(0, 10).reverse(),
      type: 'bar',
      orientation: 'h'
    };

    let barData = [trace2];


    // Render the Bar Chart
    let barLayout = {
      title: 'Top 10 Bacteria Cultures Found',
      xaxis: { title: 'Number of Bacteria' },
      margin: { t: 30, l: 150 }
    };

    Plotly.newPlot('bar', barData, barLayout);

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names = data.names;

    console.log("Names Field:", names);

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdownMenu = d3.select("#selDataset");

    console.log("Dropdown:", dropdownMenu);

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let i = 0; i < names.length; i++) {

      dropdownMenu.append("option").text(names[i]).property("value", names[i]);
      
    }

    // Get the first sample from the list
    let firstSample = names[0];

    console.log("First Sample", firstSample);

    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);

  console.log("New Sample",newSample);

}

// Initialize the dashboard
init();
