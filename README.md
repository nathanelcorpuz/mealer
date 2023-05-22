# [Mealer](https://nmealer.vercel.app)

A simple progressive web app (PWA) that helps manage weekly meals and recipes.

## Demo user (if you don't want to create one)

Username: `testuser1`
Password: `Password1!`

## Main features

1. Username + password with JWT http-only cookie authentication and authorization
2. View today's meals, tomorrow's meals, and weekly meals from the dashboard
3. Add meals per view and day of week from the dashboard
4. Add, edit, or delete recipes from the recipe page
5. Add, edit, or delete meals from the meals page
6. Works and responsively designed for all devices

## Additional features

1. Client-side password validation with [password-validator](https://www.npmjs.com/package/password-validator)
2. Minimalist design
3. Utilizes Next.js' `loading.js` for Page loaders
4. Utilizes [route groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups) for route organization and separate layouts.

## Tools used

- [TypeScript](https://www.typescriptlang.org/) for code
- [Next.js _App Router_](https://nextjs.org/docs/getting-started/installation) for frontend + backend
- [TailwindCSS](https://tailwindcss.com/) for styling framework
- [TanStack React Query](https://tanstack.com/query/latest/docs/react/overview) for server state management
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) for serverless data storage
- [Mongoose ODM](https://mongoosejs.com/docs/index.html) for MongoDB data interaction
- [Vercel](https://vercel.com/home) for hosting

## Install locally

1. Install latest versions of NodeJS and MongoDBCompass
2. Create a `.env.local` file that includes the the following:

```
ACCESS_TOKEN_SECRET="someSampleSecretHere"
MONGODB_URI=""
```

3. Run `npm i`
4. Run `npm run dev`

## Future features

- Display username and logo
- Filter recipes by ingredient
- Search for recipe
- Filter meals by day of week / time / recipe
- Submit forms on enter
- Paginated recipe / meals
- Filter home view by day of week
- Share a recipe to social media
- Log in via Google
- View recipes by other users
- Like / comment on recipes by other users
- Recipe images

## Developer notes

- I published this application after only 1 week to quickly showcase my skills as a full stack developer for prospective clients, as I'm looking for a job at the time of writing.
- This is the first web app I created using TypeScript
- I made this app because I seriously needed to plan my weekly meals to avoid frequent fast foods
- If you can't think of any recipes at the time, you can add a store-bought / fast-food food as a replacement for the recipe inputs instead
- I plan to develop more features as time goes by, as listed above.
- Please feel free to fork and submit pull requests for any fixes you may find.
- Thank you to [Panlasang Pinoy](https://panlasangpinoy.com/) for sample recipes used in the test user.

## Contact

- [Twitter](https://twitter.com/nathanelcorpuz)
- [LinkedIn](https://www.linkedin.com/in/nathanelcorpuz/)
