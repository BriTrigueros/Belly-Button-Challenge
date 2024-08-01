# OTU Dashboard

This project is an interactive dashboard that visualizes the top 10 OTUs (Operational Taxonomic Units) found in samples. The dashboard includes a bar chart, a bubble chart, and a metadata panel that updates based on the selected sample.

## Features

- **Bar Chart**: Displays the top 10 OTUs found in the selected sample.
- **Bubble Chart**: Displays all OTUs found in the selected sample.
- **Metadata Panel**: Shows the demographic information for the selected sample.

## How to Use

1. **Select a Sample**: Use the dropdown menu to select a sample ID.
2. **View the Charts**: The bar chart, bubble chart, and metadata panel will update automatically based on the selected sample.

## Project Structure


- `index.html`: The main HTML file that includes the structure of the dashboard and links to the JavaScript file.
- `app.js`: The JavaScript file containing the code to fetch data, create visualizations, and handle updates.
- `README.md`: The project documentation.

## Data Source

The data used in this project is fetched from the following URL:
[Sample Data JSON](https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json)

## Deployment

The dashboard is deployed on GitHub Pages and can be accessed via the following link:
[OTU Dashboard](https://BriTrigueros.github.io/otu_dashboard)

## Installation

To run this project locally:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/BriTrigueros/otu_dashboard.git
    cd otu_dashboard
    ```

2. **Open `index.html`**:
    - You can simply open `index.html` in your web browser by double-clicking the file or dragging it into the browser window.
    - Alternatively, you can start a local server using Python (if you have it installed):
      ```bash
      python -m http.server 8000
      ```
      Then open a web browser and go to `http://localhost:8000`.

## Contributions

Contributions to the project are welcome. If you find a bug or have a feature request, please create an issue. You can also fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to:
- **GitHub**: [yourusername](https://github.com/BriTrigueros)
- **Email**: youremail@example.com
