// URL to fetch the JSON data
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Fetch the JSON data and call the init function to initialize the dashboard
d3.json(url).then(data => {
    init(data);
});

function init(data) {
    // Populate the dropdown menu
    const dropdown = d3.select("#selDataset");
    data.names.forEach(name => {
        dropdown.append("option").text(name).property("value", name);
    });

    // Set up the initial plots and metadata display
    const firstSample = data.names[0];
    updateCharts(firstSample, data);
    updateMetadata(firstSample, data);

    // Add event listener for dropdown menu
    dropdown.on("change", function() {
        const newSample = dropdown.property("value");
        updateCharts(newSample, data);
        updateMetadata(newSample, data);
    });
}

function updateCharts(sample, data) {
    // Get the sample data
    const sampleData = data.samples.filter(d => d.id === sample)[0];

    // Horizontal bar chart data
    const barData = {
        x: sampleData.sample_values.slice(0, 10).reverse(),
        y: sampleData.otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse(),
        text: sampleData.otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h"
    };

    // Bubble chart data
    const bubbleData = {
        x: sampleData.otu_ids,
        y: sampleData.sample_values,
        text: sampleData.otu_labels,
        mode: "markers",
        marker: {
            size: sampleData.sample_values,
            color: sampleData.otu_ids,
            colorscale: "Earth"
        }
    };

    // Plot the bar chart
    Plotly.newPlot("bar", [barData], {
        title: "Top 10 OTUs",
        xaxis: { title: "Sample Values" },
        yaxis: { title: "OTU IDs" }
    });

    // Plot the bubble chart
    Plotly.newPlot("bubble", [bubbleData], {
        title: "OTU Samples",
        xaxis: { title: "OTU IDs" },
        yaxis: { title: "Sample Values" }
    });
}

function updateMetadata(sample, data) {
    // Get the metadata for the selected sample
    const metadata = data.metadata.filter(d => d.id.toString() === sample)[0];

    // Select the metadata panel and clear it
    const metadataPanel = d3.select("#sample-metadata");
    metadataPanel.html("");

    // Loop through the metadata and append it to the panel
    Object.entries(metadata).forEach(([key, value]) => {
        metadataPanel.append("p").text(`${key}: ${value}`);
    });
}
