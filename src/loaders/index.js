import expressLoader from "./expressLoader";
// import mongoDBLoader from "./mongodb";

export default async ({ config }) => {
  await mongoDBLoader({ config });
  console.log("MongoDB loaded and connected...");
  const app = expressLoader({ config });
  console.log("Express successfully configured and connected...");
  return await app;
};
