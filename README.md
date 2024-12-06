# Belly Button Challenge

This project creates an interactive dashboard that visualizes sample data from a biodiversity dataset. Users may examine sample metadata and evaluate data distributions using dynamic visualizations. The code loads and visualizes the data using D3.js and Plotly.js (Module 14challenge).

## Project Overview

The Biodiversity Dashboard visualizes information about Operational Taxonomic Units (OTUs) in a sample dataset. It allows users to:
- Select a sample using a dropdown menu.
- View detailed metadata associated with the selected sample.
- Analyze data distribution through:
  - A **Bar Chart** of the top 10 Operational Taxonomic Units (OTUs).
  - A **Bubble Chart** showing OTU abundance and diversity.

## Features

- **Dropdown Menu**: Enables users to select samples dynamically.
- **Dynamic Metadata Panel**: Displays key information for the selected sample.
- **Interactive Charts**:
  - **Bar Chart**: Highlights the top 10 OTUs based on sample values.
  - **Bubble Chart**: Visualizes the full distribution of OTUs with interactive markers.

## Technologies Used

- **JavaScript**: Core language for interactivity and data processing.
- **D3.js**: For data binding and DOM manipulation.
- **Plotly.js**: For rendering dynamic and interactive charts.
- **HTML**: Structure of the dashboard.

## How It Works
1. **Load Data**:  
   The `samples.json` file is loaded using `d3.json()`.

2. **Filter Data**:  
   Metadata and samples are filtered dynamically based on the selected sample ID.

3. **Update Dashboard**:  
   The metadata panel and charts are updated dynamically whenever a new sample is selected.

## Installation and Setup

### 1. Clone the Repository  
Clone the repository to your local machine:

```
git clone https://github.com/janakhamis/belly-button-challenge.git
```

### 2. Navigate to the Project Folder
```
cd belly-button-challenge
```

### 3. Launch the Application
Open `index.html` in your browser to view the dashboard.
