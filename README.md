# Number Properties API - HNG Backend Stage 2 Task

A RESTful API that provides various mathematical properties and interesting facts about numbers. This API analyzes numbers for properties such as being prime, perfect, Armstrong numbers, and more.

## 📑 Table of Contents

- [Features](#features)
- [API Endpoints](#api-endpoints)
  - [Query Parameters](#query-parameters)
  - [Response Format](#response-format)
  - [Properties Explained](#properties-explained)
  - [Error Responses](#error-responses)
- [Usage Example](#usage-example)
- [Technical Details](#technical-details)
- [Installation](#installation)
- [Contributing](#contributing)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## <span id="features"> 📋 Features </span>

- **Check if a number is prime**
- **Check if a number is perfect**
- **Get number properties (even/odd, Armstrong)**
- **Calculate sum of digits**
- **Fetch interesting mathematical facts about numbers**
- **CORS enabled for cross-origin requests**

## <span id="api-endpoints"> 🚀 API Endpoints </span>

### GET `/api?number=371`

### GET `/api/classify-number?number=371`

#### Returns mathematical properties and facts about a given number. In this case '371'

### Query Parameters

| Parameter |  Type   | Required |    Description    |
| :-------: | :-----: | :------: | :---------------: |
|  number   | integer |   Yes    | Number to analyze |

### Response Format

json

```bash
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["odd", "armstrong"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Properties Explained

- `is_prime` : True if the number is only divisible by 1 and itself
- `is_perfect` : True if the number equals the sum of its proper divisors
- `properties` : Array of properties (odd/even, armstrong)
- `digit_sum` : Sum of all digits in the number
- `fun_fact` : Interesting mathematical fact about the number

### Error Responses

json

```bash
{
 "number": "not provided",
  "error": true
}
```

#### Status: 400 - When number parameter is missing

json

```bash
{
  "number": "alphabet",
  "error": true
}
```

#### Status: 400 - When number parameter is missing

### Usage Example

```bash
// Fetch properties for number 371
fetch('http://your-api-url/api/numbers?number=371')
  .then(response => response.json())
  .then(data => console.log(data));
```

## <span id="technical-details">🛠️ Technical Details </span>

- Built with Next.js API Routes
- Written in TypeScript
- Implements CORS for cross-origin requests
- Integrates with Numbers API for mathematical facts

## <span id="installation">💻 Installation </span>

#### 1. Clone the repository

```bash
git clone [repository-url]
```

#### 2. Navigate to the project directory:

```bash
cd [project-directory]
```

#### 3. Install dependencies

```bash
npm install
```

#### 4. Run the development server

```bash
npm run dev
```

## <span id="contributing"> 🤝 Contributing </span>

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## <span id="author"> 👤 Author </span>

- **Tosin Samuel**
- Email: samdevtechnology@gmail.com
- Twitter: [@samdevtech](https://x.com/samdevtech)
- Instagram: [@samdevtech](https://www.instagram.com/samdevtech)
- LinkedIn: [@samdevtech](https://www.linkedin.com/in/sam-dev-bb1654267)

## <span id="acknowledgments"> 🙏 Acknowledgments </span>

- HNG Internship program for the project requirements
