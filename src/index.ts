import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // create a data
    // const result = await prisma.post.create({
    //     data: {
    //         title: "This is title 2!",
    //         content: "This is content...2",
    //         authorName: "Anamul Haque"
    //     }
    // })

    // console.log(result);

    // get all data
    const getAllFromDB = await prisma.post.findMany();
    // console.log(getAllFromDB);
}
 
main();