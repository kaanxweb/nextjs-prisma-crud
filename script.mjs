import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const company = await prisma.company.create({
    data: {
      name: "Isco Software",
      email: "info@iscosoftware.cmmom",
      website: "https://www.iscosoftware.com",
    },
  });
  console.log(company);
  console.log("-------------------");
  const user = await prisma.user.create({
    data: {
      name: "Kaan",
      surname: "XWeb",
      age: 25,
      companyId: company.id,
    },
  });
  console.log(user);
  console.log("-------------------");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
