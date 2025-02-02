import { NextResponse, NextRequest } from "next/server";

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPerfect(num: number): boolean {
  if (num <= 1) return false;

  let sum = 1;
  const sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== sqrt) {
        sum += num / i;
      }
    }
  }

  return sum === num;
}

function getNumberProperties(num: number): string[] {
  const properties: string[] = [];

  // Check if Armstrong number
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  if (sum === num) {
    properties.push("armstrong");
  }

  // Check if even/odd
  properties.push(num % 2 === 0 ? "even" : "odd");

  return properties;
}

function getDigitSum(num: number): number {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

async function getNumberFact(num: number): Promise<string> {
  try {
    const response = await fetch(`http://numbersapi.com/${num}/math`);
    if (!response.ok) {
      return `${num} is an interesting number.`;
    }
    const fact = await response.text();
    return fact;
  } catch (error) {
    console.error("Error fetching number fact:", error);
    return `${num} is an interesting number.`;
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const params = searchParams.get("number");
  if (!params) {
    return NextResponse.json(
      {
        number: "not provided",
        error: true,
      },
      { status: 400 }
    );
  }
  const isNumber = /^\d+$/.test(params);

  if (!isNumber) {
    return NextResponse.json(
      {
        number: "alphabet",
        error: true,
      },
      { status: 400 }
    );
  }

  const number = parseInt(params);

  return NextResponse.json(
    {
      number: number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(number),
      properties: getNumberProperties(number),
      digit_sum: getDigitSum(number),
      fun_fact: await getNumberFact(number),
    },
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}

// Handle OPTIONS preflight request
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
