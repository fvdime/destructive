# DESTRUCTIVE

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Destructive is an photo sharing social networking service.</h3>
   <p align="center">
    It allows users to upload media that can be organized by hashtags. Can follow other users, search users by username and edit profile. 
  </p>

  <p align="center">
    <a href="https://destructive-five.vercel.app/">Live Demo</a>
    ·
    <a href="https://github.com/fvdime/destructive/issues">Report Bug</a>
    ·
    <a href="https://github.com/fvdime/destructive/issues">Request Feature</a>
  </p>
</div>

### Built With

- Next JS
- Next Server Actions
- Amazon S3
- Prisma
- Mongo DB
- Tailwind CSS

<p align="right">(<a href="#readme-top">↑</a>)</p>

## Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/fvdime/destructive.git
    ```
   
2. Install NPM packages:
   ```bash
   npm install
    ``` 
   
3. Add .env file:
   ```bash
   DATABASE_URL="<DATABASE URL>"
   NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID="<AWS ACCESS KEY ID>"
   NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY="<AWS S3 SECRET ACCESS KEY>"
   NEXT_PUBLIC_AWS_S3_BUCKET_NAME="<AWS S3 BUCKET NAME>"
   NEXT_PUBLIC_AWS_S3_REGION="<AWS REGION>"
   NEXT_PUBLIC_AWS_BUCKET_URL="<AWS BUCKET URL>"
   NEXT_PUBLIC_JWT_SECRET_KEY="<JWT SECRET KEY>"
    ```
   
4. Prisma Commands:

  ```bash
  npx prisma db push
  npx prisma generate
  ``` 

5. Run the development server:

   ```bash
   npm run dev
   ```   

<p align="right">(<a href="#readme-top">↑</a>)</p>

### Contact

Contact: (https://faya-indol.vercel.app/de)

Mail: fadime.dogrulj@gmail.com

Project Link: [https://github.com/fvdime/destructive](https://github.com/fvdime/destructive)

<p align="right">(<a href="#readme-top">↑</a>)</p>

### License

MIT License

Copyright (c) 2024 faya

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<p align="right">(<a href="#readme-top">↑</a>)</p>



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
