import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
    // const singleUpdate = await prisma.post.update({
    //     where: {
    //         id: 13
    //     },
    //     data: {
    //         title: "Title 5",
    //         // content: "content 4",
    //         // authorName: "author 4"
    //     }
    // })
    // console.log(singleUpdate)

    // const updateMany = await prisma.post.updateMany({
    //     where: {
    //         // id: 1
    //         title: "Title 2"
    //     },
    //     data: {
    //         // title: "updated title"
    //         published: true
    //     }
    // })
    // console.log(updateMany)


    // if data exist then update, if data not exist then create. It's means upsert.
    const upsertData = await prisma.post.upsert({
        where: {
            id: 18
        },
        update: {
            title: "Updated title",
            authorName: "Anamul"
        },
        create: {
            title: "Title 1",
            content: "content 1"
        }
    })
    console.log(upsertData)
}

updates();