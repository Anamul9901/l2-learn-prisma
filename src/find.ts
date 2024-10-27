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


    // give only 1st data where query is match
    const findFirst = await prisma.post.findFirst({
        where: {
            // id: 7
            published: false
        }
    })


    // if data not find then give me a error.
    // const findFristOrThrowError = await prisma.post.findFirstOrThrow({
    //     where:{
    //         id: 111100000000111
    //     }
    // })
    // console.log({ findFristOrThrowError })




    // find one with only uniqe key. like Id
    // const findUnique = await prisma.post.findUnique({
    //     where: {
    //         id: 18
    //     }
    // })
    // console.log({ findUnique })

    // if data not find then give me a error.
    // const findUniqueOrThrowError = await prisma.post.findFirstOrThrow({
    //     where: {
    //         id: 7
    //     }
    // })
    // console.log({findUniqueOrThrowError})


    const findWithLimitadeData = await prisma.post.findMany({
        // where: {
        //     id: 18
        // },
        select: {
            title: true, content: true
        }
    })
    console.log({ findWithLimitadeData })
}

main();