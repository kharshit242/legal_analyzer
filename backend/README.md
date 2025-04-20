# Smart Legal Assistant for Renters - Backend

## Overview
The Smart Legal Assistant for Renters is a web application designed to assist renters with legal queries and document processing. This backend service provides APIs for handling various functionalities such as document parsing, OCR, and interaction with LangChain for legal lookups.

## Features
- **Document Parsing**: Upload and parse legal documents to extract relevant information.
- **OCR Integration**: Convert images of documents into text for further processing.
- **Legal Queries**: Use LangChain to answer legal questions and provide guidance.
- **Letter Generation**: Automatically generate legal letters based on user input.

## Tech Stack
- **Node.js**: JavaScript runtime for building the backend service.
- **Express**: Web framework for building APIs.
- **LangChain**: Framework for building applications with language models.
- **TypeScript**: Superset of JavaScript for type safety.
- **Multer**: Middleware for handling file uploads.
- **Jest**: Testing framework for unit and integration tests.

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/smart-legal-assistant.git
   cd smart-legal-assistant/backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm start
   ```

4. **Access the API**
   The backend will be running on `http://localhost:3000`. You can access the API endpoints defined in the routes.

## Usage Guidelines
- Use the `/upload` endpoint to upload documents for parsing.
- Use the `/query` endpoint to send legal questions to the LangChain service.
- Ensure that all requests are made with the appropriate headers and body formats as specified in the API documentation.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.