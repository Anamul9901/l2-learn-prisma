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


    const createMany = await prisma.post.createMany({
        data: [
            {
                title: "Title 1",
                content: "content 1",
                authorName: "author 1"
            },
            {
                title: "Title 2",
                content: "content 2",
                authorName: "author 2"
            },
            {
                title: "Title 3",
                content: "content 3",
                authorName: "author 3"
            }
        ]
    })

    console.log(createMany)
}
 
main();