// pages/api/hello.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set a custom header
  res.setHeader('X-Custom-Header', 'HelloWorld');

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

  res.status(200).json({ message: 'Hello, world!' });
}